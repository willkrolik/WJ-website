import React from "react"
import Layout from "../components/layout"
import Infonub from "../components/infonub"
import MarkContent from "../components/markContent"
import ColorContent from "../components/colorContent"
import PictureContent from "../components/pictureContent"
import Banner from "../components/banner"
import LowerBanner from "../components/lowerbanner"
export default ({ location }) => ( 
  <Layout location={location}>

    <Banner buttonText="contact us" 
    
    pageLink="/contact"
    buttonText="Instagram" 
    classy="bannerContent lighttext" 
    color="color:red" image="/images/WJ-Frasier Banner1.jpg"  
    className="down"
    alt="woman looking at gift cards"
    content={[<p>Follow us on Instagram!</p>]}/>

    <div className="divider blue"> </div>
    <MarkContent classy="marketingContent" content="Through discovery, analysis, and project development,
    we'll build the perfect solution to meet your needs."/>


    <ColorContent classy="marketingContent threeConnection" 
    content={[<p>We design and deliver a personalized & relevant experience.</p>,

    <p>Build customer loyalty with personalized communications, 
    and the largest offering of rewards in the market.</p>]}
    />
    
    
    <div className="infonub inLine">

    
    <Infonub picture="/images/trophy-medium@2x.png" 

     classy="mediumIcon "
     alttext="A Red Trophy" 
     title="Robust Rewards"
    content="With the largest offering of 
    rewards options in the market,
    there's something got everyone:
    merchandise, physical and 
    digital gift cards, Gift Tokens&reg; , 
    travel, experiences, branded 
    Apple Store, and Premiere 
    Choice Awards."
     />

    
    <Infonub picture="/images/gear-cloud.png" 
    classy="mediumIcon"
     alttext="A cloud with 3 gears in it" 
     title="Points Engine"
    content="Our scalable points bank 
    platform and flexible rules engine
    are tailored to your strategic
    program goals and maximizing 
    spend and profits. "
     />

   
    
   
  <Infonub picture="/images/medium-paper-icon.png" 
  classy="mediumIcon"
     alttext="A white legal pad" 
     title="Reporting Dashboard"
     content="Provides an interactive, dynamic 
     way of looking at data. Generate
     user-friendly reports for valuable
    insights into how your program
    is performing. "
     />

    </div>
    
    
  <article className="event">
  
  <PictureContent picture="/images/welcome-max.png" 
  id="consumer-loyalty"
  alttext="A woman carrying a rug"
  color="red"
  content={[<p><strong>Build consumer loyalty</strong> with compelling 
    programs. Make it quick and easy 
    to turn points into rewards with our 
    intuitive, responsive platform. </p>]}/>
    
    
  <PictureContent picture="/images/construction.png" 
  id="loyalty-sales"
  alttext="construction worker shaking hands"
  color="red"
  content={[<p><strong>B2B: Drive sales and brand loyalty</strong> with 
    incentives for dealers and distributors</p>,
  <p>Reward dealers to sell your product over 
    any others with thousands of reward options.</p>]}
    />
  
  <PictureContent picture="/gifs/Nike_TokenSpin.gif" 
  id="health-wellness"
 alttext="Looking at nike image on a phone"
 color="red"
 content={[<p><strong>Encourage Health & Wellness</strong> activities 
    with incentives for participation, event 
    completion, and achievement milestones.</p> ]}
    
   />
   
   </article>
    
   
   <LowerBanner buttonText="Fras it up!" 
     classy="lowerbannerContent" 
     image="/images/tv-frasier.jpg" 
      textSize="lowerBanner" 
      alt="Two people looking at a computer" 
      content={[<p className="bannerTitle"><strong>Need to Catch up on your Frasier?</strong></p>,
      <p>You can listen to the show without watching, you can do whatever you want, we can't control you, but if you want to watch the show check out the platforms below:

      </p>,

      
     
      
      ]}/>
      
  </Layout>
)