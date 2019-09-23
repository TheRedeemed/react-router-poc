import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginHelpers from '../login/LoginHelpers';

const DashboardContent = () => {
    return (
        <div style={{ display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h1>Dashboard Content</h1>
            <span style={{fontSize: '24px', background: '#fff', borderRadius: '5px', padding: '5px'}}>
                <NavLink to={`/search/${LoginHelpers.getUserCurrentItem()}`}>
                    Search
                </NavLink>
            </span>
        </div>
    );
}

export default DashboardContent;
