import React from "react"
import Layout from "../components/layout"
import ColorContent from "../components/colorContent"
import Form  from "../components/form"
import CheckBoxes from "../components/checkBoxes"
import Textbox from "../components/textBox"
export default ({ location }) => ( 
    <Layout location={location}>
    
    <ColorContent 
    classy="marketingContent twoConnection" 
    content={[<p>Contact Us</p>,
    <p>To learn more about how our portfolio can be tailored to fit your program's needs, please send an inquiry email to <a href="mailto:digitalmarketing@incomm.com"><u>digitalmarketing@incomm.com.</u></a></p>,
    ]}/>
    
    
    

    {/* <Form classy="contactForm"/> */}

    
    
    
    
    </Layout>

)




