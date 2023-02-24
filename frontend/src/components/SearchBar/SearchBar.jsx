import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [user, token] = useAuth();  
  const [category, setCategory] = useState("All");
  const [filterData, setFilterData] = useState();
  const [uniqueList, setUniqueList] = useState();
 
  function chooseCategory(event) {
    
    event.preventDefault();
    const selectedCategory = document.querySelector('#category-list').value    
    setCategory(selectedCategory)
   
    if (selectedCategory == "user_city") {
        selectedData("user_city")
          } 

    else if (selectedCategory == "user_state") {
      selectedData("user_state");
    } 
    else if (selectedCategory == "user_country") {
      selectedData("user_country");
    } 
    else if (selectedCategory == "user_availibility") {
      selectedData("user_availibilty");
    } 
  }
  
  function selectedData(category){
    // Declare a new array
    let newArray = [];
  
    // Declare an empty object
    let uniqueObject = {};
  
    // Loop for the array elements
    for (let i in props.diversList) {
  
        // Extract the title
        var temp = props.diversList[i][category];
  
        // Use the title as the index
        uniqueObject[ temp ] = props.diversList[i];
    }
  
    // Loop to push unique object into array
    for (let i in uniqueObject) {
        newArray.push(uniqueObject[i]);
    }
    setUniqueList(newArray);
  
    // Display the unique objects
    console.log(newArray);
    
  }

  function chooseFilterData(event) {
    event.preventDefault();
    setFilterData(event.target.value) 
    
  }


  function handleSubmit(event) {
    event.preventDefault()
    filterDivers(category, filterData)
    console.log(category)
  }
  
  function filterDivers(category, filterData) {
    console.log(filterData)
    console.log()
    if (filterData == null) {return}
    let response = props.diversList.filter((diver) =>{
      if (diver[category].toString().includes(filterData)) {
        return true;
      }
    });
    props.setDiversList(response)    
  }

  return (
    <div className="search-bar">
    <h2>Diver Directory</h2>
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
            <select className="form-select" id = 'category-list' onChange={(e) => chooseCategory(e)}>
              <option>All</option>
              <option value='user_city'>City</option>
              <option value='user_state'>State</option>
              <option value='user_country'>Country</option>
              <option value='user_availibility'>Availibility</option>
            </select>
          </div>
          <div className="col">
          <select className="form-select" id = 'filterdata-list'  onChange={(e) => chooseFilterData(e)} >
            <option></option>
            {(uniqueList && category != "user_availibility")
            ? uniqueList.map((diver, user) => {
          return (
              <option key={user} value={diver[category]}>{diver[category]}</option>
          )
      })
          :
          <option value={"true"}>Available</option>
    
        
}
          </select>
        </div>
          <button className='filterbutton' onClick={handleSubmit}>Filter</button>
        </div>
          <br></br>
        </form>    
    </div>
  </div>
  );
};

export default SearchBar;



