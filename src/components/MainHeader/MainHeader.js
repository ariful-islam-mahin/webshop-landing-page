import React from 'react';
import './MainHeader.css'

const MainHeader = () => {
    return (
        <div className="main-header text-center mb-5">
            <div className="main-header-text text-white">
                <h1>The gift of happiness</h1>
                <p>Show your gratitude with one of our gift sets. large and small, specially designed to spread joy to someone you love.</p>
                <button className="btn mx-2 gradient-btn rounded-pill text-white px-4">SHOP NOW</button>
            </div>
        </div>
    );
};

export default MainHeader;