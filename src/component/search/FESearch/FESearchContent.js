import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import FESearchForm from './FESearchForm';
import SearchResult from '../SearchResult';

const FESearchContent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState('');

    const handleSearchSubmit = (searchTerm) => {
        console.log('Searching values:', searchTerm);
        setSearchTerm(searchTerm.searchTerm);
        setSearchResult('Search result values below');
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
            <SearchResult searchTerm={searchTerm} searchResult={searchResult} />
        </div>
    );
}

export default FESearchContent;
