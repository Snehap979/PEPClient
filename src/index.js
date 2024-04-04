import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from 'react-dom/client';
import {  Route,BrowserRouter,Routes} from "react-router-dom";


import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(

     <App />


);