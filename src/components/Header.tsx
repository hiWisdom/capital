import React from 'react'
import NavBar from "./include/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { SubmitApplication } from "./Pages/SubmitApplication";
import { Account } from "./Pages/Account";


function Header() {


  return (

      <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/submitapplication" element={<SubmitApplication />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </Router>
      </>
      
  )
}

export default Header;