import React from "react"
import Layout from "../components/layout"
import ColorContent from "../components/colorContent"
export default ({ location }) => ( 
    <Layout location={location}>
    
    <ColorContent 
    classy="marketingContent twoConnection" 
    content={[<p>Contact Us</p>,
    <p>To learn more about how our portfolio can be tailored to fit your program's needs, please fill out the form below.</p>,
    <p>*Fields are required.</p>]}/>
    
    <div className="thankYou">
    <img src="/images/checkmark.png"  />

     <div className="thankYou">
     
      <p><strong>
          Thank you! Your request has been submitted.
      </strong></p>

        <p>Please allow 2 business days for our team to respond. If you have any further questions,
        you can email us at digitalmarketing@incomm.com.</p>

      </div>
    </div>
    
   
    
    
    </Layout>

)