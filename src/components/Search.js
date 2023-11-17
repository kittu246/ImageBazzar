import React,{useState,useEffect} from 'react';
import axios from 'axios';



const Search = ({SetSearchData}) => {

  const [search,SetSearch] = useState("");
  useEffect(() =>{
    implementSearch()
  },[])
  

  
  
  function implementSearch(e){
    if(e){
        e.preventDefault();
    }
    

    axios.get('https://api.unsplash.com/search/photos',{
    headers:{
        Authorization:`Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`
    },
    params:{
        query:search || 'random'
    }
  }
  ) // every things should be inside get parameter
  .then((result) => SetSearchData(result.data.results))
  .catch((err) =>console.log(err))

    


  }
  return (
    <div>
        <form onSubmit={implementSearch} >
            <input type="text" placeholder='Search' value={search} onChange={(e) => {SetSearch(e.target.value)}}></input>
            <button type="submit">Search</button>
        </form>

        
    </div>
  )
}

export default Search