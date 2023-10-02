Compiled with problems:
×
ERROR
[eslint] 
src\components\Footer.tsx
  Line 20:64:  'SubmitApplication' is not defined  react/jsx-no-undef

Search for the keywords to learn more about each error.
ERROR in src/components/Footer.tsx:20:64
TS2304: Cannot find name 'SubmitApplication'.
    18 |   	 			<h4>About</h4>
    19 |   	 			<ul>
  > 20 |   	 				<li><Routes><Route path="/submitapplication" element={<SubmitApplication />} /></Routes></li>
       |   	 				                                                       ^^^^^^^^^^^^^^^^^
    21 |   	 				<li><a href="#">Check Application</a></li>
    22 | 		
    23 |   	 			</ul>
ERROR in src/components/Header.tsx:7:27
TS2306: File 'C:/xampp/htdocs/application-master/ats-app-master/ats-app/src/components/Pages/LoanRequest.tsx' is not a module.
     5 | import { SubmitApplication } from "./Pages/SubmitApplication";
     6 | import { Account } from "./Pages/Account";
  >  7 | import  LoanRequest  from "./Pages/LoanRequest";
       |                           ^^^^^^^^^^^^^^^^^^^^^
     8 |
     9 |
    10 | function Header() {
ERROR in src/components/include/NavBar.tsx:15:20
TS2322: Type 'string' is not assignable to type 'boolean | undefined'.
    13 |       <nav className="navbar">
    14 |         <div className="nav-container">
  > 15 |           <NavLink end="/"  className="nav-logo">
       |                    ^^^
    16 |           Racker
    17 |             <i className="fas fa-code"></i>
    18 |           </NavLink>
ERROR in src/components/include/NavBar.tsx:24:17
TS2322: Type '{ children: string; to: string; activeClassName: string; className: string; onClick: () => void; }' is not assignable to type 'IntrinsicAttributes & NavLinkProps & RefAttributes<HTMLAnchorElement>'.
  Property 'activeClassName' does not exist on type 'IntrinsicAttributes & NavLinkProps & RefAttributes<HTMLAnchorElement>'.
    22 |               <NavLink
    23 |                 to="/" 
  > 24 |                 activeClassName="active"
       |                 ^^^^^^^^^^^^^^^
    25 |                 className="nav-links"
    26 |                 onClick={handleClick}
    27 |               >
ERROR in src/components/include/NavBar.tsx:34:17
TS2322: Type '{ children: string; to: string; activeClassName: string; className: string; onClick: () => void; }' is not assignable to type 'IntrinsicAttributes & NavLinkProps & RefAttributes<HTMLAnchorElement>'.
  Property 'activeClassName' does not exist on type 'IntrinsicAttributes & NavLinkProps & RefAttributes<HTMLAnchorElement>'.
    32 |               <NavLink
    33 |                 to="/submitapplication"
  > 34 |                 activeClassName="active"
       |                 ^^^^^^^^^^^^^^^
    35 |                 className="nav-links"
    36 |                 onClick={handleClick}
    37 |               >
ERROR in src/components/include/NavBar.tsx:43:17
TS2322: Type '{ children: string; exact: true; to: string; activeClassName: string; className: string; onClick: () => void; }' is not assignable to type 'IntrinsicAttributes & NavLinkProps & RefAttributes<HTMLAnchorElement>'.
  Property 'exact' does not exist on type 'IntrinsicAttributes & NavLinkProps & RefAttributes<HTMLAnchorElement>'.
    41 |             <li className="nav-item">
    42 |               <NavLink
  > 43 |                 exact
       |                 ^^^^^
    44 |                 to="/account"
    45 |                 activeClassName="active"
    46 |                 className="nav-links"
ERROR in src/components/include/NavBar.tsx:54:76
TS2322: Type '"fa-solid fa-bars"' is not assignable to type 'IconProp'.
    52 |
    53 |           </ul>
  > 54 |           <div className="nav-icon" onClick={handleClick}><FontAwesomeIcon icon="fa-solid fa-bars" />
       |                                                                            ^^^^
    55 |             <i className="fas fa-bars"></i>
    56 |           </div>
    57 |         </div>
ERROR in src/components/Pages/LoanRequest.tsx
TS1208: 'LoanRequest.tsx' cannot be compiled under '--isolatedModules' because it is considered a global script file. Add an import, export, or an empty 'export {}' statement to make it a module.
ERROR in src/components/Pages/Pages/LoanRequest/DetailsTable.tsx:6:19
TS2307: Cannot find module 'axios' or its corresponding type declarations.
    4 | import { connect } from 'react-redux'
    5 | import Error from '../../../Error'
  > 6 | import Axios from 'axios';
      |                   ^^^^^^^
    7 |
    8 | function DetailsTable(props) {
    9 |   const { data, saveInput } = props
ERROR in src/components/Pages/Pages/LoanRequest/DetailsTable.tsx:91:11
TS17001: JSX elements cannot have multiple attributes with the same name.
    89 |           className="ml-5 d-block float-left"
    90 |           onClick={() => goBack()}
  > 91 |           className="btn defaultBtn"
       |           ^^^^^^^^^
    92 |           type="button"
    93 |         >
    94 |           🢀 Go Back
ERROR in src/components/Pages/Pages/LoanRequest/DetailsTable.tsx:99:11
TS17001: JSX elements cannot have multiple attributes with the same name.
     97 |           className="ml-5 d-block"
     98 |           onClick={e => confirmLoan(e)}
  >  99 |           className="btn defaultBtn"
        |           ^^^^^^^^^
    100 |           type="button"
    101 |         >
    102 |           Submit 🢂
ERROR in src/components/Pages/Pages/LoanRequest/InputQuestion.tsx:51:15
TS17001: JSX elements cannot have multiple attributes with the same name.
    49 |               className="ml-5 d-block float-left"
    50 |               onClick={() => goBack()}
  > 51 |               className="btn defaultBtn"
       |               ^^^^^^^^^
    52 |               type="button"
    53 |             >
    54 |               🢀 Previous
ERROR in src/components/Pages/Pages/LoanRequest/InputQuestion.tsx:60:13
TS17001: JSX elements cannot have multiple attributes with the same name.
    58 |             className="ml-5 d-block"
    59 |             // onClick={e => submitAnswer(e)}
  > 60 |             className="btn defaultBtn"
       |             ^^^^^^^^^
    61 |             type="submit"
    62 |             value={step === 0 ? 'Next' : 'Next 🢂'}
    63 |           ></input>
ERROR in src/components/Pages/Pages/LoanRequest/LoanDenied.tsx:39:11
TS17001: JSX elements cannot have multiple attributes with the same name.
    37 |           className="ml-5 d-block float-left"
    38 |           onClick={() => saveInput(1, 'step')}
  > 39 |           className="btn defaultBtn"
       |           ^^^^^^^^^
    40 |           type="button"
    41 |         >
    42 |           🢀 Go Back
ERROR in src/components/Pages/Pages/LoanRequest/SliderQuestion.tsx:73:11
TS17001: JSX elements cannot have multiple attributes with the same name.
    71 |           className="ml-5 d-block float-left"
    72 |           onClick={() => goBack()}
  > 73 |           className="btn defaultBtn"
       |           ^^^^^^^^^
    74 |           type="button"
    75 |         >
    76 |           🢀 Previous
ERROR in src/components/Pages/Pages/LoanRequest/SliderQuestion.tsx:80:38
TS2554: Expected 0 arguments, but got 1.
    78 |         <button
    79 |           className="ml-5 d-block"
  > 80 |           onClick={e => submitAnswer(e)}
       |                                      ^
    81 |           className="btn defaultBtn"
    82 |           type="button"
    83 |         >
ERROR in src/components/Pages/Pages/LoanRequest/SliderQuestion.tsx:81:11
TS17001: JSX elements cannot have multiple attributes with the same name.
    79 |           className="ml-5 d-block"
    80 |           onClick={e => submitAnswer(e)}
  > 81 |           className="btn defaultBtn"
       |           ^^^^^^^^^
    82 |           type="button"
    83 |         >
    84 |           Next 🢂