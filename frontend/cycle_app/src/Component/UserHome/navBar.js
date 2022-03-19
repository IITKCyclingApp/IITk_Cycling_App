import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component{

    render(){
        return(
            <div className="wrap">
            <header id="header">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <button id="primary-nav-button" type="button">Menu</button>
                    <Link to="/"><div className="logo">
                        <img src="" alt="IITK-cycling app" />
                      </div></Link>
                    <nav id="primary-nav" className="dropdown cf">
                      <ul className="dropdown menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/store">Store</Link></li>
                        <li><Link to="/user/profile">My Profile</Link></li>
                      </ul>
                    </nav>{/* / #primary-nav */}
                  </div>
                </div>
              </div>
            </header>
          </div>
        );
    }
}

export default NavBar;