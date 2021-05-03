import React,{useState,useReducer ,  useMemo , useRef, useCallback} from 'react'


import useCharacter from '../hooks/useCharacter'
import Search from '../components/Search'

const initialState ={
  favorites:[]
}
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
}
const API = 'https://rickandmortyapi.com/api/character'
const Characters = (props)=> {

    
    const [favorites, dispatch] = useReducer(favoriteReducer,initialState);
   
    const [search, setSearch] = useState('');
    
    const searchInput = useRef(null);
    
  
  const characters = useCharacter(API)
    const handleClick = favorite =>{
      dispatch({type: 'ADD_TO_FAVORITE',payload: favorite})
    }

    const handleSearch =  useCallback(() =>{
      setSearch(searchInput.current.value);
    }, [])


    const filteredUsers = useMemo(()=> 
      characters.filter((user) =>
      {
        console.log("holaa 2")

        return user.name.toLowerCase().includes(search.toLowerCase())
      }),[characters,search]
    )

    return (
      <>
        <div  className={`Characters ${props.dark}`}>
         {favorites.favorites.map(favorite =>(
            <div  className={`example-2 card `} key={favorite.id}>
                <h1>Favorites</h1>
                      <div className="wrapper">
                          <div className="header">
                            <div className="date">
                              <span className="year">{favorite.origin['name']}</span>
                            </div>
                          <ul className="menu-content">
                              <li>
                                <a href="#" className="fa fa-bookmark-o" />
                              </li>
                              <li>
                                <span>{favorite.id}</span>
                              </li>
                        </ul>
                      </div>
                      <div className="data">
                          <img src={favorite.image} className="imagen" alt=""/>
                        <div className="content">
                          <h1 className="title">{favorite.name}</h1>
                          <p className="text">{favorite.location['name']}</p>
                          <p className="text">{favorite.status}</p>

                          <button type="button" onClick={() => handleClick(favorite)} className="button">agregar more</button>
                        </div>
        </div>
          </div>
        </div>
      ))}
      
        <Search 
          search={search}
          searchInput= {searchInput}
          handleSearch={handleSearch}
        
        />

          {characters === [] && <h1>loading...</h1>}
            {filteredUsers.map( character =>(
              
                <div  className={`example-2 card `} key={character.id}>
                   <div className="wrapper">
                      <div className="header">
                        <div className="date">
                          <span className="year">{character.origin['name']}</span>
                        </div>
                      <ul className="menu-content">
                          <li>
                            <a href="#" className="fa fa-bookmark-o" />
                          </li>
                          <li>
                            <span>{character.id}</span>
                          </li>
                    </ul>
                  </div>
                  <div className="data">
                      <img src={character.image} className="imagen" alt=""/>
                    <div className="content">
                      <h1 className="title">{character.name}</h1>
                      <p className="text">{character.location['name']}</p>
                      <p className="text">{character.status}</p>

                      <button type="button" onClick={() => handleClick(character)} className="button">agregar more</button>
                    </div>
    </div>
  </div>
</div>))}

        </div>
        </>
    )
}

export default Characters
