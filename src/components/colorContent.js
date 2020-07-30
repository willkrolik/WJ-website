import React from "react"

export default ColorContent;


function ColorContent(props) {
    return (
        <section className={props.classy}>
        {props.content}
        </section>
    );
}
;

