import React from "react"

import Button from "../components/button"
export default Banner;



function Banner(props) {
    return (
        <div className={props.classy}>
            <img src={props.image} alt={props.alt} className={props.className} />
            <div>

                {props.content}

                <Button
                    buttonText={props.buttonText}
                    classy="primary" pageLink={props.pageLink}
                    externalLink={props.externalLink} />

            </div>
        </div>
    );
}