import React, { useState } from 'react';
/**
 * A generic search component.
 */
function Search({ onSearchClick }){
    const [searchTerm, setSearchTerm] = useState("");

    function search(e){
        e.preventDefault();
        onSearchClick(searchTerm)
    }
    return(
        <form onSubmit={(e) => search(e)}>
        <div className="field has-addons">
            <div className="control is-expanded">
                <input className="input" 
                       type="text" 
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                       placeholder="Find a repository" />
            </div>
            <div className="control">
                <a className="button is-primary"
                    onClick={(e) => search(e)}>
                    Search
                </a>
            </div>
        </div>
    </form>
    );
}

export default Search;