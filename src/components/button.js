import React from "react"
import { Link } from "gatsby"
export default Button;

function Button(props) {
    return (
        
            <Link to={props.pageLink} className={props.classy}> 
            {props.buttonText} 
            </Link>
        
    );
}