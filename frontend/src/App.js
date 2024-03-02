import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from './components/HomePage';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import Contact from './components/Contact';
import GetQuote from './components/GetQuote';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

//service pages
import Tipsntricks from './components/Tipsntricks';
import Doorspage from './components/Doorspage';
import MotorsPage from './components/MotorsPage';
import SensorsPage from './components/SensorsPage';
import TracksPage from './components/TracksPage';
import SpringsPage from './components/SpringsPage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header />

        <Routes>

          <Route exact path='/' element={<HomePage />} />
          <Route exact path ='/gallery' element={<Gallery />}/>
          <Route exact path ='/reviews' element={<Reviews />}/>
          <Route exact path ='/faq' element={<Faq />}/>
          <Route exact path ='/contact' element={<Contact />}/>
          <Route exact path ='/getquote' element={<GetQuote />}/>
          <Route exact path = '/about' element={<About />}/>
          <Route exact path = '/services' element={<Services />}/>
          <Route exact path = '/services/tips' element={<Tipsntricks />}/>
          <Route exact path = '/services/doors' element={<Doorspage />}/>
          <Route exact path = '/services/motors' element={<MotorsPage />}/>
          <Route exact path = '/services/sensors' element={<SensorsPage />}/>
          <Route exact path = '/services/tracks' element={<TracksPage />}/>
          <Route exact path = '/services/springs' element={<SpringsPage />}/>

        </Routes>

        <Footer />

      </BrowserRouter>


    </div>
  );
}

export default App;
