import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Careers from './Components/Careers';
import Contact from './Components/Contact';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsConditions from './Components/TermsConditions';
import Service1 from './Components/Service1';
import Service2 from './Components/Service2';
import Service3 from './Components/Service3';
import Service4 from './Components/Service4';
import CareerDetails from './Components/CareerDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/careers' element={<Careers/>} />
        <Route path='/careerdetails' element={<CareerDetails/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/ppc' element={<Service1/>} />
        <Route path='/social-media-marketing' element={<Service2/>} />
        <Route path='/digital-marketing-services' element={<Service3/>} />
        <Route path='/website-template' element={<Service4/>} />
        <Route path='/privacypolicy' element={<PrivacyPolicy/>} />
        <Route path='/termsconditions' element={<TermsConditions/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



