import React from 'react';
import { NavLink } from 'react-router-dom';

const FESearchContent = () => {
    return (
        <div style={{ display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h1>FE Search Content</h1>
            <span style={{fontSize: '24px', background: '#fff', borderRadius: '5px', padding: '5px'}}>
                <NavLink to='/dashboard'>
                    Dashboard
                </NavLink>
            </span>
        </div>
    );
}

export default FESearchContent;
