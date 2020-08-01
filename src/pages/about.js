import React from "react"
import Layout from "../components/layout"
import Infonub from "../components/infonub"
import MarkContent from "../components/markContent"
import ColorContent from "../components/colorContent"
import Banner from "../components/banner"
import LowerBanner from "../components/lowerbanner"
import DoubleBanner from "../components/doubleBanner"
import AboutBanner from "../components/aboutBanner"
export default ({ location }) => ( 
    
    <Layout location={location}>

    <AboutBanner
    buttonText="shop gift cards" 
    pageLink=""
    classy="" 
    imageTwo="/images/About_Banner_Incentives.png" 
    image="/images/About_Banner_Shop.2.png"
    alt="3 gift cards next to a desk" 
    content={[
    <p>Online Shop</p>, 
    <p>Your one stop shop for <br/>physical and digital gift cards.</p>
    ]}
    contentTwo={[
    <p>Incentives Programs</p>, 
    <p>Explore our innovative Employee Rewards, Loyalty, and Group Travel Solutions.</p>
    ]}
    
    /> 
    


    <MarkContent classy="marketingContent"  
    content={[<strong>InComm InCentives </strong>,
       "builds value into every interaction through innovative loyalty,rewards & recognition solutions. Consumers, employees, and businesses form meaningful relationships through our patented, award-winning technology." ]}/>
    
    <ColorContent 
    classy="marketingContent oneConnection" 
    content={[<p>One connection to our digital platforms & a world of redemption opportunities</p>, 
    <p>We offer solutions for employee rewards and recognition, consumer loyalty, sales incentives, and health and wellness.</p>]}/>
    
    <div class="infonub services">
    

    <Infonub 
    picture="/images/icon-gift-cards@3x.png" 
    classy="smallIcon"
    alttext="a credit card" 
    title="Digital & Physical Gift Cards"
    alignment="left"
    content="The most convenient, versatile way to reward our 
    expansive options take gift
    cards to the next level. 
    Physical or digital, branded 
    or customized, single-load 
    or reloadable, we've got 
    you covered."
     />


    <Infonub 
    picture="/images/icon-gift-tokens@3x.png" 
    classy="smallIcon"
     alttext="A Blue Present" 
     title={["Gift Tokens ", <sup>®</sup>]}
     alignment="left"
    content="Send a quick gift under 
    $20, like a cup of coffee,
    to recognize all of life's
    moments. Wow your 
    recipients with an 
    interactive delivery that's 
    enjoyable all on its own. "
     />



    <Infonub picture="/images/icon-merchandise@3x.png" 
    classy="smallIcon"
     alttext="An Open Box" 
     title="Merchandise"
     alignment="left"
    content="Apparel, equpment, and 
    accessories from the brands
    people love. Cash in on
    trendy swag, a new nine
    iron, or that perfect expresso 
    machine-all viewable 
    in your prgoram's 
    online marketplace. "
     />
  

    <Infonub picture="/images/icon-travel@3x.png" 
    classy="smallIcon"
     alttext="Globe" 
     title="Travel"
     alignment="left"
    content="With our travel options, 
    recipients can control their
    entire trip, from airfare and
    rental cars to five-star hotels
    and resorts. Our proprietary,
    full-service, white label
    booking engine makes
    planning the trip of
    a lifetime easy! "
     />
    </div>

    <div class="infonub services">

    <Infonub picture="/images/icon-apple-integration@3x.png" 
    classy="smallIcon"
     alttext="Small red gear in a large White gear" 
     title="Apple Rewards Store"
     alignment="left"
    content="Offer access to the trendiest 
    tech with our Apple Rewards
    Store integration. Whether
    it's iPhones or AirPods, the  
    newest devives and 
    accessories make the 
    best rewards. "
     />

    <Infonub picture="/images/icon-events-experiences@3x.png" 
    classy="smallIcon"
     alttext="A red rocket-ship" 
     title="Events & Experiences"
     alignment="left"
    content="For recipients who prefer the 
    live experience, we've got
    you covered, too. Event
    packages, from the Super 
    Bowl and Kentucky Cerby, to 
    Harley Davidson rentals and
    fighter pilot flights, there's an 
    experience for everyone  "
     />

   

    <Infonub 
     picture="/images/icon-points-engine@3x.png" 
     classy="smallIcon"
     alttext="gears in a cloud" 
     title="Points Engine"
     alignment="left"
     content="Versatile rewards made 
     simple with a points
     system, giving recipients
     the freedom to manage
     their balance and choose 
     their redemption pathway"
     />

     <Infonub 
      picture="/images/icon-full-service-event-planning@3x.png" 
      classy="smallIcon"
      alttext="A clipboard with three red checks" 
      title="Full-Service Event Planning"
      alignment="left"
      content="Whether it is a sales 
      meeting, product launch or
      incentive travel, we know
      what wow and what works
      Leave the details to us as we
      create a unique, memorable
      experience for your brand.  "
     />

    </div>
    
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