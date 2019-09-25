import React from 'react';
import { Route } from 'react-router-dom';
import LoginHelpers from '../login/LoginHelpers';
import SplitPane from '../layout/SplitPane';
import FESearchContent from './FESearch/FESearchContent';
import FESearchSidebar from './FESearch/FESearchSidebar';
import BESearchContent from './BESearch/BESearchContent';
import BESearchSidebar from './BESearch/BESearchSidebar';

const SearchContainer = () => {

    let currentItem;

    const displayBasedOnItem = () => {
        currentItem = LoginHelpers.getUserCurrentItem();
        switch(currentItem) {
            case 'FE':
                return <SplitPane 
                            left = {<FESearchContent />}
                            right = {<FESearchSidebar />} />
            case 'BE':
                return <SplitPane 
                            left = {<BESearchContent />}
                            right = {<BESearchSidebar />} />
            default:
                return <div>Error Page</div>
        }
    }

    return(
        displayBasedOnItem()
    );
}

export default SearchContainer