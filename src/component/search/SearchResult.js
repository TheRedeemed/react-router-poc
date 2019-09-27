import React from 'react';

const SearchResult = ({...props}) => {
    const {searchTerm, searchResult} = props;
    return(
        <div style={{ margin: '50px', border: '1px solid', borderRadius: '10px' }} >
            <h3>Search Result for {searchTerm}</h3>
            <p>{searchResult}</p>
        </div>
    );
}

export default SearchResult;