import React, {useState, useEffect} from "react";
import "./App.css";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";

export const SubmitApplication = () => {

  // const [data, setData] = useState([]);

  // const apiGet = ()=> {
  //   fetch("https://api.postman.com/collections/17034879-eedd174f-d366-4d21-a137-38b5bce9d1e0?access_key=PMAT-01H6XA4YB57HM3C1F2A9Y0HTSG")
  //   .then((response) => response.json())
  //   .then((json) => {
  //     console.log(json);
  //     setData(json);
  //     });
  // }

  // useEffect(()=> {


  // }, []);

  // return (
  //   <div>
  //     <h1>Fill application form</h1>


  //     <button onClick={apiGet}>Fetch Data</button>

  //     <pre>{JSON.stringify(data, null, 2)}</pre>
  //   </div>
  // );

  return (
    <div className="App">
      {/* <AppHeader /> */}
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter />
    </div>
  );



};
