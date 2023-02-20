import React, { useState } from "react";


const DiverSearch = (props) => {
  const [category, setCategory] = useState("All");
  const [filterData, setFilterData] = useState();

  function handleSubmit(event) {
    event.preventDefault()
    props.filterDivers(category, filterData)
    console.log(category)
}

  function chooseCategory(event) {
    event.preventDefault();
    const selectedCategory = document.querySelector('#category-list').value    
    setCategory(selectedCategory)
      }

  return (
    <div className="search-bar">
      <div className="search-container">
        <h2>Search Divers</h2>
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
          <select className="form-select" id = 'category-list'   onChange={(e) => setFilterData(e.target.value)} >
            {props.diversList.map((diver, index) => {
              return (
                <option key={index} value={diver[category]}>{diver[category]}</option>
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

export default DiverSearch;
