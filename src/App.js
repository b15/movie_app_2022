import React from "react";
//import axios from "axios";

import { HashRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import About from './routes/About'
import Home from './routes/Home'
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

//import Proptypes from "prop-types";
function App() {
  return (      
    <div>
    <HashRouter>          
      <Navigation />
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie-detail" element={<Detail />} />
      </Routes>
    </HashRouter>
    </div>      
  );
}
export default App;
