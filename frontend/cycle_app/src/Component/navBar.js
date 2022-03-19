import React from 'react';

class navBar extends React.Component{

    render(){
        return(
            <div className="wrap">
            <header id="header">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <button id="primary-nav-button" type="button">Menu</button>
                    <a href="index.html"><div className="logo">
                        <img src="logo link" alt="IITK-cycling app" />
                      </div></a>
                    <nav id="primary-nav" className="dropdown cf">
                      <ul className="dropdown menu">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="fleet.html">Store</a></li>
                        <li><a href="about-us.html">My Profile</a></li>
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

export default navBar;