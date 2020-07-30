import React from "react"

export default Infonub;

function Infonub(props) {
  return (
    <div><img src={props.picture} alt={props.alttext} className={props.classy} />
    <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );

  
}