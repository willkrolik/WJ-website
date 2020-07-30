
import React from "react"

export default Places;



function Places(props) {
    const elements = props.locations;
    return (
        <ul className="places">
         {elements.map((value, index) => {
        return <li key={index}>{value}</li>
      })}
       
        </ul>
    );
}
;
