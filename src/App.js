import React,{useState} from "react";
import Search from "./components/Search";
import DisplaySearch from "./components/DisplaySearch";


function App() {

  const [searchData,SetSearchData] =useState([]);
  return (
    <div>
    <Search SetSearchData={SetSearchData}/>
    <DisplaySearch searchData ={searchData}></DisplaySearch>

    </div>
  );
}

export default App;
