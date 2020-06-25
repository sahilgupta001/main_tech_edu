import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'
import M from  'materialize-css/dist/js/materialize.min.js';


export default function Navbar() {

    
    useEffect(()=>{
    let sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav, {
        isFixed:true  
      });
    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, 
        {inDuration: 300, outDuration: 225,hover:true,coverTrigger:false});
    
    },[])

    return (
        <div className="navbar">
            <nav className=" deep-purple">
            <div className="nav-wrapper deep-purple">
            <a href="/" className="brand-logo"><img className="responsive-img" src={logo} alt="logo" height="100%" width="60%"   /></a>
            <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons white-text ">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/solutions">Solution</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><a href="/startup">Start Up</a></li>
                <li><a className="dropdown-trigger" href="/" data-target="dropdown11">Company<i className="material-icons right">arrow_drop_down</i></a></li>
                <li><a className="dropdown-trigger" href="/" data-target="dropdown21">Resources<i className="material-icons right">arrow_drop_down</i></a></li>
                <li><Link to="/contact">Contact</Link></li>
             </ul>
            <ul id="dropdown1" className="dropdown-content deep-purple-text">
                <li><Link to="/aboutus" className="deep-purple-text">About Us</Link></li>
                <li><Link to="/ourteam" className="deep-purple-text">Team</Link></li>
                <li><Link to="/career" className="deep-purple-text">Career</Link></li>

            </ul>
            <ul id="dropdown11" className="dropdown-content deep-purple-text">
                <li><Link to="/aboutus" className="deep-purple-text">About Us</Link></li>
                <li><Link to="/ourteam" className="deep-purple-text">Team</Link></li>
                <li><Link to="/career" className="deep-purple-text">Career</Link></li>
            </ul>
            <ul id="dropdown2" className="dropdown-content deep-purple-text">
                <li><Link to="/blog" className="deep-purple-text">Blog</Link></li>
                <li><Link to="/whitepaper" className="deep-purple-text">White Paper</Link></li>
                <li><Link to="/casestudies" className="deep-purple-text">Case Studies</Link></li>
            </ul>
            <ul id="dropdown21" className="dropdown-content deep-purple-text">
                <li><Link to="/blog" className="deep-purple-text">Blog</Link></li>
                <li><Link to="/whitepaper" className="deep-purple-text">White Paper</Link></li>
                <li><Link to="/casestudies" className="deep-purple-text">Case Studies</Link></li>
            </ul>
            </div>
            
        </nav>

        <ul className="sidenav" id="mobile-demo">
         <li><Link to="/solutions">Solution</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><a href="/startup">Start Up</a></li>
                <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Company<i className="material-icons right">arrow_drop_down</i></a></li>
                <li><a className="dropdown-trigger" href="#!" data-target="dropdown2">Resources<i className="material-icons right">arrow_drop_down</i></a></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}
