
import React from "react"

export default PictureContent;

function PictureContent(props) {
    return (
        <section id={props.id}>
        <img src={props.picture} alt={props.alttext}/> 
        <div className="textContainer">
        <div className={'divider' +' '+ props.color}></div>

        {props.content}
         
        </div>
      </section>
    );
}
;

