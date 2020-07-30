import React, { useState } from 'react';
import { Link } from "gatsby"

function Header(props) {

  
  // Declare a new state variable, which we'll call "count"
  const [isOpen, setIsOpen] = useState(false);
  if (props.location === undefined) {return null};
  const ListLink = props => (
    <li >
      <Link className={props.active} to={props.to}>{props.children}</Link>
    </li>
  )
 
  const employeeRewardsLinkClassName = props.location.pathname === "/rewardsandRecognition/" || props.location.pathname === "/rewardsandRecognition" ? "active" : "";
  const loyaltyLinkClassName = props.location.pathname === "/loyalty/" || props.location.pathname === "/loyalty" ? "active" : "";
  const groupTravelLinkClassName = props.location.pathname === "/groupTravel/" || props.location.pathname === "/groupTravel" ? "active" : "";
  const aboutLinkClassName = props.location.pathname === "/about/" || props.location.pathname === "/about" ? "active" : "";
  const contactLinkClassName = props.location.pathname === "/contact/" || props.location.pathname === "/contact" ? "active" : "";

  var menuClassName = `menu ${isOpen ? "open" : "closed"} `;
  return (

    <header >
      <img src="/images/iis-logo.png" className="mobileLogo" alt="Incomm Incentives Logo"  />
      <nav className={menuClassName}>
      
        <ul >
        
          
          
          <ListLink to="/rewardsandRecognition" active={employeeRewardsLinkClassName}>Listen</ListLink>
          
          <ListLink to="/loyalty" active={loyaltyLinkClassName}>Follow</ListLink>
          <li className="menuContent">
          {/* <div className="menuFlex">
              
              <div>
              <Link to="/loyalty#consumer-loyalty">
              <p>
              <strong>Follow</strong>
              </p>
              <p>
                Engage your customers & improve retention rates.
              </p>
              </Link>
              </div>
              

              <div>
              <Link to="/loyalty#loyalty-sales">
              <p>
              <strong>Loyalty & Sales Incentives</strong>
              </p>
              <p>
                Incentivize select brand sales for dealers & distributors.
              </p>
              </Link>
              </div>

              <div>
              <Link to="/loyalty#health-wellness">
              <p>
              <strong>Health & Wellness</strong>
              </p>
              <p>
               Encourage a healthy lifestyle with unique incentives.
              </p>
              </Link>
              </div>

            </div> */}
          </li>
          <ListLink to="/groupTravel" active={groupTravelLinkClassName}>Archives</ListLink>
          
          <ListLink to="/about" active={aboutLinkClassName}>About</ListLink>
          <li className="menuContent">
          {/* <div className="menuFlex">

              <div>
              <a href="/about">
              <p>
              <strong>Overview</strong>
              </p>
              <p>
                Learn how our superior platforms & portfolio can fulfill
                 your program's needs.
              </p>
              </a>
              </div>

              <div>
              <a href="/contact">
              <p to="/contact">
              <strong>Contact</strong>
              </p>
              <p>
                Get in touch to learn more about our programs or for order assistance.
              </p>
              </a>
              </div>

              <div>
              <a href="https://www.incomm.com/about/newsroom/">
              <p>
              <strong>Newsroom</strong>
              </p>
              <p>
               Your source for InComm InCentives news. 
              </p>
              </a>
              </div>

            </div> */}
          </li>
          <ListLink to="/contact" active={contactLinkClassName}>Cast</ListLink>

        </ul>
      </nav>
      <img src="/images/newHamburger.JPG" className="menuIcon" onClick={() => setIsOpen(!isOpen)}  alt="hamburger menu"/>
    </header>

  );
}

export default Header;