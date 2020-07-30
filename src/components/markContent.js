import React from "react"

export default MarkContent;


function MarkContent(props) {
    return (
        <section className={props.classy}><p> {props.content}</p>
        </section>
    );
}
;