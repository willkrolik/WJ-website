import React from "react"


export default Audio;



function Audio(props) {
    return (
        <div className={props.classy}>
            <img src={props.image} alt={props.alt} />
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