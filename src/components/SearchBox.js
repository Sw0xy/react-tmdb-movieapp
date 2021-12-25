import React from "react";
const SearchForm = (props) => {

  
  return (
      <div className="navbar">
          <div>
             <h3 style={{color:'white' , paddingRight:"15px"}}> Current Page: {props.pageNumber}</h3>
          </div>
            <form>
                <input
                    className="navbar-search"
                    name="search"
                    placeholder="Search..."
                    value={props.search}
                    onChange={props.onSearchChange}
                />
                </form>
      </div>
   
  );
};
export default SearchForm;
