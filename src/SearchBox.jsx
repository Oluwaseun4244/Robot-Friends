import React from 'react';



const SearchBox = ({searching}) => {

    return (
        <div className="tc pa2">
            <input className="pa3 ba b--green bg-light-green"
                type="search"
                placeholder="Search a friend" onChange={(event)=>searching(event.target.value)}
            />
        </div>
    );


}

export default SearchBox;