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

function App() {
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
          <Route path='/news'>
            <News></News>
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
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
