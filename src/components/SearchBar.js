import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({search, onSearch}) {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Ketikkan judul disini" value={search} onChange={onSearch}/>
        </div>
    );
}

SearchBar.propTypes = {
    search: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar;