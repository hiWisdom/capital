import React from "react";
import './../include/Header.css'

export const Home = () => {
  return (
    <div
    style={{
        backgroundImage: `url("https://marketing-assets.wheniwork-production.com/2023/04/27141632/ProjectManagementSkills_PostHeader_2x.png")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '65vh', color: 'blue'
    }}>
       <div className="home-title-container">
        <h1 className="home-title">
          Welcome, We have over 1,000 + Talented candidate across different sector here in one platform.
        </h1>
       </div>
  </div>
  );
};
