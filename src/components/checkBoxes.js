
  
  
import React from "react"



function CheckBoxes() {
  return (
    <React.Fragment>
    <fieldset className="fancyCheckBox"> <legend>Areas of Interest (Select all that apply): </legend>

     <input type="checkbox" name="erewards" id="erewards" defaultvalue="erewards" /> <label for="erewards"> Employee Rewards</label>
      <input type="checkbox" name="cloyalty" id="cloyalty" defaultvalue="cloyalty" /> <label for="cloyalty">Consumer Loyalty</label>
     <input type="checkbox" name="b2bsales" id="b2bsales" defaultvalue="b2bsales" /> <label for="b2bsales">B2B Sales Incentives</label>
     <input type="checkbox" name="gtravel" id="gtravel" defaultvalue="Boat" /><label for="gtravel"> Group Travel</label>
    
    </fieldset>
  </React.Fragment>
  );
}


export default CheckBoxes;

