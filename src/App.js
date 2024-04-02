import React,{Component } from 'react';
import {  Route,BrowserRouter,Routes} from "react-router-dom";
import LoginComponent from './Login/LoginComponent';
import AppBarComponent from './higherOrderComponent/AppBarComponent'
import DashboardComponent from './dashboard/DashboardComponent';
import SignUpComponent from './SignUp/SignUpComponent';
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
// import { Route, HashRouter as Router, Routes } from "react-router-dom";

 
const App = () => {
   return(
 <div>
       {/* <BrowserRouter>  */}
           <Routes>
           <Route path="/" index element={<LoginComponent/>}/>
           <Route path="/dashboard" element={<DashboardComponent/>} />
           <Route path="/signup" element={<SignUpComponent/>}/>    
           </Routes>
       {/* </BrowserRouter> */}
     </div>
  )


   }




export default App;



