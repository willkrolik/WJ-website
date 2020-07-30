import React from "react"

export default Textbox;

function Textbox(props) {
  return (
    <div>
        
        <textarea name="comment" form="usrform" defaultValue={"Enter text here..."} />

        <button Submit/>
      </div>
  );
}