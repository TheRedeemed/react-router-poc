import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import FESearchForm from './FESearchForm';
import SearchResult from '../SearchResult';

const FESearchContent = ({...props}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const { routeProps } = props

    //When loading this component, read the url
    //if it has a search param - get the param and perfom a search with the param and display the empty search form and the results 
    //else load the empty search form

    const handleSearchSubmit = (searchTerm) => {
        console.log('Searching values:', searchTerm);
        setSearchTerm(searchTerm.searchTerm);
        setSearchResult('Search result values below');
        routeProps.history.push(`?searchTerm=${searchTerm.searchTerm}`)
    };

    return (
        <div>
            <div style={{ display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>Front End Search Content Container</h1>
                <span style={{fontSize: '24px', background: '#fff', borderRadius: '5px', padding: '5px'}}>
                    <NavLink to='/dashboard'>
                        Dashboard
                    </NavLink>
                </span>
            </div>
            <FESearchForm onSearchSubmit={handleSearchSubmit} />
            {searchTerm && searchResult &&
            <SearchResult searchTerm={searchTerm} searchResult={searchResult} />}
        </div>
    );
}

export default FESearchContent;
