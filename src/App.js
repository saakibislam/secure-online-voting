import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Navigation from './pages/Navigation/Navigation';
import Homepage from './pages/Homepage/Homepage';
import Footer from './pages/Footer/Footer';
import AllParties from './pages/AllParties/AllParties';
import RegisteredParties from './pages/RegisteredParties/RegisteredParties';
import PartyDetails from './pages/PartyDetails/PartyDetails';
import Registration from './pages/Registration/Registration';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import News1 from './pages/News/OtherNews/News1';
import News2 from './pages/News/OtherNews/News2';
import News3 from './pages/News/OtherNews/News3';
import News4 from './pages/News/OtherNews/News4';
import News5 from './pages/News/OtherNews/News5';
import News6 from './pages/News/OtherNews/News6';
import PhotoGallery from './pages/PhotoGallery/PhotoGallery';
import Vote from './pages/Vote/Vote';
import Result from './pages/Result/Result';
import CandidateDetails from './pages/CandidateDetails/CandidateDetails';
import NotFound from './pages/NotFound/NotFound';


function App() {
  AOS.init();
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/home'>
            <Homepage />
          </Route>
          <Route path='/parties'>
            <AllParties />
          </Route>
          <Route path='/registered'>
            <RegisteredParties />
          </Route>
          <Route path='/party/:id'>
            <PartyDetails />
          </Route>
          <Route path='/registration'>
            <Registration />
          </Route>
          <Route exact path='/news'>
            <News />
          </Route>
          <Route path='/news/624c8fdd763d163aa1840cf8'>
            <News1 />
          </Route>
          <Route path='/news/624c8ff64a395b0e6e75e212'>
            <News2 />
          </Route>
          <Route path='/news/624c8ffdda43b727966bf7ab'>
            <News3 />
          </Route>
          <Route path='/news/624c90036c74d4efb3cb6eb8'>
            <News4 />
          </Route>
          <Route path='/news/624c900919df021ca7857c16'>
            <News5 />
          </Route>
          <Route path='/news/624c900e0659aa731b2016a3'>
            <News6 />
          </Route>
          <Route path='/photos'>
            <PhotoGallery />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/vote'>
            <Vote />
          </Route>
          <Route path='/result'>
            <Result />
          </Route>
          <Route path='/candidate/:id/'>
            <CandidateDetails />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
