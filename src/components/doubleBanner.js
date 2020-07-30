import React from "react"
import Button from "../components/button"
export default DoubleBanner;

function DoubleBanner(props) {
    return (
        <div className="doubleBanner">

        <div className="childBanner">
            <img src={props.image} alt={props.alt} />
        </div>
            
        <div className="childBanner">
            <img src={props.imageTwo} alt={props.alt} />
        </div>


            
        </div>
    );
}

{/*

<Button
                    buttonText={props.buttonText}
                    classy="primary" pageLink={props.pageLink}
                    externalLink={props.externalLink} />
 {props.content}
                    <Button
                    buttonText={props.buttonText}
                    classy="primary" pageLink={props.pageLink}
                    externalLink={props.externalLink} />

*/}