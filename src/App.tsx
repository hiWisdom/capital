// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Visit your application.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Apply here
//         </a>
//       </header>
//     </div>
//   );

// }

// export default App;




import React from 'react'
import './styles/App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {



  return (
    <div className="App py-1">



      <>
        <Header />
      </>


      <>
        <Footer />
      </>

    </div>
  )
}

export default App;

