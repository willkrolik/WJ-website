import React from "react"
import LowerButton from "../components/lowerButton"
export default LowerBanner;

function LowerBanner(props) {
    return (
        <div className={props.classy}>
            <img src={props.image} alt={props.alt} />
            <div>
                
                {props.content}

                <LowerButton buttonText={props.buttonText} classy="primary" />
                
            </div>
        </div>
    );
}