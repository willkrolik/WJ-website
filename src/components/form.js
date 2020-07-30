
import React from "react"
import CheckBoxes from "../components/checkBoxes"
import Button from "../components/button"
export default Form;

function Form(props) {
  return (
    <form className={props.classy} action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
    <input type="hidden" name="oid" value="00D0x00000090gI" />
    <input type="hidden" name="retURL" value="https://master.d8oenit8n0fry.amplifyapp.com/thankYou" />
    <label for="first_name">First Name</label><input  id="first_name" maxlength="40" name="first_name" size="20" type="text" />
    <label for="last_name">Last Name</label><input  id="last_name" maxlength="80" name="last_name" size="20" type="text" />
    <label for="company">Company</label><input  id="company" maxlength="40" name="company" size="20" type="text" />
    <label for="email">Email</label><input  id="email" maxlength="80" name="email" size="20" type="text" />
    <label for="phone">Phone</label><input  id="phone" maxlength="40" name="phone" size="20" type="text" />


         <CheckBoxes /> 
        
         <label>Notes:</label>
        <textarea  id="00N80000005Yh5F" name="00N80000005Yh5F" type="text" wrap="soft"></textarea>
        <input type="submit" name="submit" className="primary"/>
      
      </form>
  );
}

/* /*
<!--  ----------------------------------------------------------------------  -->
<!--  NOTE: Please add the following <META> element to your page <HEAD>.      -->
<!--  If necessary, please modify the charset parameter to specify the        -->
<!--  character set of your HTML page.                                        -->
<!--  ----------------------------------------------------------------------  -->
<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8">
<!--  ----------------------------------------------------------------------  -->
<!--  NOTE: Please add the following <FORM> element to your page.             -->
<!--  ----------------------------------------------------------------------  -->
<form action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
<input type=hidden name="oid" value="00D0x00000090gI">
<input type=hidden name="retURL" value="https://master.d8oenit8n0fry.amplifyapp.com/thankYou">
<!--  ----------------------------------------------------------------------  -->
<!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
<!--  these lines if you wish to test in debug mode.                          -->
<!--  <input type="hidden" name="debug" value=1>                              -->
<!--  <input type="hidden" name="debugEmail" value="vgraves@incomm.com">      -->
<!--  ----------------------------------------------------------------------  -->
<label for="first_name">First Name</label><input  id="first_name" maxlength="40" name="first_name" size="20" type="text" /><br>
<label for="last_name">Last Name</label><input  id="last_name" maxlength="80" name="last_name" size="20" type="text" /><br>
<label for="company">Company</label><input  id="company" maxlength="40" name="company" size="20" type="text" /><br>
<label for="email">Email</label><input  id="email" maxlength="80" name="email" size="20" type="text" /><br>
<label for="phone">Phone</label><input  id="phone" maxlength="40" name="phone" size="20" type="text" /><br>
InComm InCentives Services:<select  id="00N0x000002V6BW" multiple="multiple" name="00N0x000002V6BW" title="InComm InCentives Services"><option value="B2B Sales Incentives">B2B Sales Incentives</option>
<option value="Consumer Loyalty">Consumer Loyalty</option>
<option value="Employee Rewards">Employee Rewards</option>
<option value="Group Travel">Group Travel</option>
</select><br>
Notes:<textarea  id="00N80000005Yh5F" name="00N80000005Yh5F" type="text" wrap="soft"></textarea><br>
<input type="submit" name="submit">
</form>
*/
