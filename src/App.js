import React from 'react';
// import axios from "axios";
import Movie from './components/Movies'
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

import './App.css';
import {HashRouter, Route} from 'react-router-dom';


// react에서는 route와 별도로 navigation 달아주면 계속 따라다님
function App(){
  return (
  <HashRouter>
    
    <Navigation/>
    <Route path="/"exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie_detail" component={Detail} />


  </HashRouter>
  );
}

export default App;