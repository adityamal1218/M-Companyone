import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topbar from './Components/Topbar';
import Header from './Components/Header';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Courses from './Components/Pages/Courses';
import Activities from './Components/Pages/Activities';
import Admission from './Components/Pages/Admission';
import ArtGalkery from "./Components/Pages/ArtGalkery";
import Franchise from "./Components/Pages/Franchise";
import OnlineClasses from "./Components/Pages/OnlineClasses";
import Video from "./Components/Pages/Video";
import PayFree from "./Components/Pages/PayFree";
import Contact from "./Components/Pages/Contact";
import Slider from "./Components/Slider";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Content from "./Components/Content";
import Data from './Components/Data';
import Five from './Components/Five';
import Student from './Components/Student';

function App() {
  return (
    <>
    <BrowserRouter>
        <Topbar/>
        <Header/>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/Courses' element={<Courses/>} />
          <Route path='/Activities' element={<Activities/>} />
          <Route path='/Admission' element={<Admission/>} />
          <Route path='/ArtGalkery' element={<ArtGalkery/>}/>
          <Route path='/Franchise' element={<Franchise/>}/>
          <Route path='/OnlineClasses' element={<OnlineClasses/>}/>
          <Route path='/Video' element={<Video/>}/>
          <Route path='/PayFree' element={<PayFree/>}/>
          <Route path='/Contact' element={<Contact/>}/>

        </Routes>
    </BrowserRouter>
    <Slider/>
    <Content/>
     <Data/>
     <Five/>
     <Student/>
     </>
  );
}

export default App;
