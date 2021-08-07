import React from 'react';
import './MainHeader.css'

const MainHeader = () => {
    return (
        <div id="main-header" className="text-center mb-5" style={{background: 'url("https://i.ibb.co/pzJbZPr/image-32image.png") no-repeat center', backgroundSize: "cover", height: "411px", position: "relative"}}>
            <div className="main-header-text text-white" style={{maxWidth: "620px !important", padding: "65px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "#011b7b59"}}>
                <h1>The gift of happiness</h1>
                <p>Show your gratitude with one of our gift sets. large and small, specially designed to spread joy to someone you love.</p>
                <button className="btn mx-2 gradient-btn rounded-pill text-white px-4">SHOP NOW</button>
            </div>
        </div>
    );
};

export default MainHeader;