import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const SearchBar = (props) => {
  const [user, token] = useAuth();  
  const [category, setCategory] = useState("All");
  const [filterData, setFilterData] = useState();
  const uniqueList = [];
 


  function chooseCategory(event) {
    event.preventDefault();
    const selectedCategory = document.querySelector('#category-list').value    
    setCategory(selectedCategory)
    // const selectedFilterElement = document.getElementById('filterdata-list');   
    // selectedFilterElement.selectedIndex= 0
  }

  function chooseFilterData(event) {
    event.preventDefault();
    // const selectedFilter = document.querySelector('#filterdata-list').value;
    setFilterData(event.target.value) 
    
  }


  function handleSubmit(event) {
    event.preventDefault()
    filterDivers(category, filterData)
    console.log(category)
  }
  
  function filterDivers(category, filterData) {
    if (filterData == null) {return}
    let response = props.diversList.filter((diver) =>{
      if (diver[category].includes(filterData)) {
        return true;
      }
    });
    props.setDiversList(response)    
  }

  return (
    <div className="search-bar">
      <div className="search-container">
        <h2>Diver Directory</h2>
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
            {
            uniqueList.map((diver, user) => {
              return (
                <option key={user} value={diver[category]}>{diver[category]}</option>
              )
            })}
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



