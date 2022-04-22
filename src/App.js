import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Navigation from './pages/Navigation/Navigation';
import PhotoGallery from './pages/PhotoGallery/PhotoGallery';
import NotFound from './pages/NotFound/NotFound';
import AllParties from './pages/AllParties/AllParties';
import PartyDetails from './pages/PartyDetails/PartyDetails';
import RegisteredParties from './pages/RegisteredParties/RegisteredParties';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import Vote from './pages/Vote/Vote';
import CandidateDetails from './pages/CandidateDetails/CandidateDetails';
import Footer from './pages/Footer/Footer';
import News1 from './pages/News/OtherNews/News1';
import News2 from './pages/News/OtherNews/News2';
import News3 from './pages/News/OtherNews/News3';
import News4 from './pages/News/OtherNews/News4';
import News5 from './pages/News/OtherNews/News5';
import News6 from './pages/News/OtherNews/News6';
import Registration from './pages/Registration/Registration';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Result from './pages/Result/Result';

function App() {
  AOS.init();
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route exact path='/'>
            <Homepage></Homepage>
          </Route>
          <Route path='/home'>
            <Homepage></Homepage>
          </Route>
          <Route path='/parties'>
            <AllParties></AllParties>
          </Route>
          <Route path='/registered'>
            <RegisteredParties></RegisteredParties>
          </Route>
          <Route path='/party/:id'>
            <PartyDetails></PartyDetails>
          </Route>
          <Route path='/registration'>
            <Registration></Registration>
          </Route>
          <Route exact path='/news'>
            <News></News>
          </Route>
          <Route path='/news/624c8fdd763d163aa1840cf8'>
            <News1></News1>
          </Route>
          <Route path='/news/624c8ff64a395b0e6e75e212'>
            <News2></News2>
          </Route>
          <Route path='/news/624c8ffdda43b727966bf7ab'>
            <News3></News3>
          </Route>
          <Route path='/news/624c90036c74d4efb3cb6eb8'>
            <News4></News4>
          </Route>
          <Route path='/news/624c900919df021ca7857c16'>
            <News5></News5>
          </Route>
          <Route path='/news/624c900e0659aa731b2016a3'>
            <News6></News6>
          </Route>
          <Route path='/photos'>
            <PhotoGallery></PhotoGallery>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/vote'>
            <Vote></Vote>
          </Route>
          <Route path='/result'>
            <Result></Result>
          </Route>
          <Route path='/candidate/:id/'>
            <CandidateDetails></CandidateDetails>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
