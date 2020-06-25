import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from "materialize-css/dist/js/materialize.min.js";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from './Pages/Home'
import './App.css';
import About from './Pages/About';
import Team from './Pages/Team';
import Solutions from './Pages/Solutions';
import ContactUs from './Pages/ContactUs';
import Services from './Pages/Services';
import Blogs from './Pages/Blogs';
import SingleBlog from './Pages/SingleBlog';
import WhitePaper from './Pages/WhitePaper';
import CaseStudies from './Pages/CaseStudies';
import Works from './Pages/Works';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Error404 from './Pages/Error404';
import StartUp from './Pages/StartUp';
// import ManagementSystems from './Pages/ManagementSystems';
import ScrollToTop from './Components/ScrollToTop';
import Career from './Pages/Career';
import Program from './Pages/Program';
// import AffliateForm from './Pages/AffliateForm';


function App() {

  useEffect(()=>{
    M.AutoInit()
    AOS.init();
  },[])



  return (
    
 
    <Router>
      <ScrollToTop>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus"  component={About} />
          <Route path="/ourteam"  component={Team} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/services" component={Services} />
          <Route path="/blog" exact component={Blogs} />
          <Route path="/blog/:blogId" component={SingleBlog} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/whitepaper" component={WhitePaper} />
          <Route path="/casestudies" component={CaseStudies} />
          <Route path="/works" component={Works} />
          <Route path="/startup" component={StartUp} />
          <Route path="/career" component={Career} />
          <Route path="/affiliateprogram" component={Program} />
          {/* <Route path="/affiliateprogramform" component={AffliateForm} /> */}


          {/* <Route path="/managementsystems" component={ManagementSystems} /> */}


          <Route  component={Error404} />

        </Switch>
      <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
