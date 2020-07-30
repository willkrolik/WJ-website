import React from "react"
import { Link } from "gatsby"
export default LowerButton;

function LowerButton(props) {
    return ( 
        <button className={props.classy}>
  <a href="//www.incommincentives.com/Brands"> {props.buttonText} </a>
       </button>
    );
}