import React from "react"
import { Link } from "gatsby"
import Header from "./header";
// import picture from '/public/picture.jpg'
const ListLink = props => (
  <li >
    <Link className={props.active} to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children, location }) => (
  <React.Fragment>
  <Header location={location}/>
    
    {children}
    <footer >
     <nav>
      <ul>
        <li><a href="https://www.buzzsprout.com/639685">BUZZSPROUT</a></li>
        <li><a href="https://www.instagram.com/will_and_jace_frasierpodcast/">INSTAGRAM</a></li>
        <li><a href="https://open.spotify.com/show/0nOZ1YDc3VnZKQSCM2vDF4">SPOTIFY</a></li>
        <li><a href="https://podcasts.apple.com/us/podcast/will-jace-a-frasier-podcast/id1477388748">ITUNES</a></li>
        
      </ul>
      
      </nav>
      
      <p>Copyright  {(new Date().getFullYear())} Will&Jace</p>
        <p>This is a non-profit fanbased-parody. Frasier is the property of CBS and NBC. Please support the official release </p>
    </footer>
  </React.Fragment>
) 

    