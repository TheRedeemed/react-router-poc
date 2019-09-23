import React from 'react';
import { NavLink } from 'react-router-dom';

const BESearchContent = () => {
    return (
        <div style={{ display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h1>BE Search Content</h1>
            <span style={{fontSize: '24px', background: '#fff', borderRadius: '5px', padding: '5px'}}>
                <NavLink to='/dashboard'>
                    Dashboard
                </NavLink>
            </span>
        </div>
    );
}

export default BESearchContent;
