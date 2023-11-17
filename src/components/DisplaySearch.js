import React from "react";

const DisplaySearch = ({ searchData }) => {
  console.log(searchData);
  return (
    <div>
      {searchData &&
        searchData.map((photo, index) =>{
           return( // if u r returning more than one statement use braces()
            <div key={index}>
            <img src={photo.urls.thumb} alt={photo.description} />
            <p>{photo.description}</p>
          </div>
           ) 

        }
         
          
    )}
    </div>
  );
};

export default DisplaySearch;
