import { 
  Router 
} from 'preact-router';

import Navbar from './navbar';

import Home from '../routes/home';
import About from '../routes/about';
import Statistics from '../routes/statistics';

const App = () => (
  <div
    class="page-wrapper with-navbar"
    data-sidebar-type="overlayed-sm-and-down"
  >
    <div class="sticky-alerts"></div>
    <Navbar/>
    <Router>
      <Home path="/"/>
      <About path="/about/"/>
      <Statistics path="/statistics/"/>
    </Router>
  </div>
);

export default App;
