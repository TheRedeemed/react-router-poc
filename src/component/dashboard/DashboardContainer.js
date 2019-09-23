import React from 'react';
import SplitPane from '../layout/SplitPane';
import DashboardContent from './DashboardContent';
import DashboardSidebar from './DashboardSidebar';

const DashboardContainer = () => {
    return (
        <SplitPane
            left={<DashboardContent />}
            right={<DashboardSidebar />}
        />
    );
}

export default DashboardContainer;
