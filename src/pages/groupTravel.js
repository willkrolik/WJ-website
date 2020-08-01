import React from "react"
import Layout from "../components/layout"
import ColorContent from "../components/colorContent"
import PictureContent from "../components/pictureContent"
import MarkContent from "../components/markContent"
import Banner from "../components/banner"
import LowerBanner from "../components/lowerbanner"
import Places from "../components/places"
export default ({ location }) => ( 
  <Layout location={location}>

  {/* <Banner buttonText="contact us" 
  pageLink="/contact"
  classy="bannerContent lighttext" 
  image="/images/WJ-On-Air.jpg"  
  alt="plane flying over an island" 
  content={[<p>Why offer an incentive travel program?</p>]}/> */}
  
  
    
    {/* <section className="travelResearch">
      
      <div>
      <p className="fancyNumber"> 112<span>%</span> </p>
        <p>Travel programs can increase sales 
        productivity by 18% and produce   
        an ROI of up to 112%. 
        <em>Incentive Research Foundation</em></p>
      </div>
      
      <div>
        <p className="fancyNumber"> 3<span>x</span> </p>
        <p>Organizations that provide non cash
        rewards such as incentive travel have  
        three times higher revenue increases.<em>Aberdeen Research</em></p>
      </div>

    </section> */}

    <ColorContent classy="marketingContent fourConnection" 
    content={[<p className="formatter">Find every Fraiser episode we've done (so far). 
     <div>We update the site weekly, so if it's not here, we haven't done it yet.</div></p>]}/>
    
    <section className="pictureContent">

    <div className="bigBlurb" >
      <p>Episodes of Frasier Can be found () </p>  
      <p>Please support the official release</p> 
    </div>
    
    <div class="row">
    <div className="greyLine column">&nbsp;
    </div>
    <h2 className="service">Archive</h2>
    <div className="greyLine column">&nbsp;
    </div>
    </div>

 <article className="event">
 
  <PictureContent 
  //picture="/images/plane-window.jpg" 
  color="Blue"
  content={[
    <h3>Season 1</h3>,
    <p>Fraiser moves to Seattle for a change of pace</p>,
  <div className="row">


  <div className="column">
  <h3>The Good Son</h3>
  <a target="_blank" href="https://open.spotify.com/episode/68nKFAHHYWx6YtmM8Yarb0" className="audioLink" 
  >Listen on Spotify</a>

  <h3>Space Quest</h3>
  <a target="_blank" href="https://open.spotify.com/episode/0p9lamZ0JuMpzgEF4Pid4V" className="audioLink" 
  >Listen on Spotify</a>

  <h3>Dinner at Eight</h3>
  <a target="_blank" href="https://open.spotify.com/episode/2lcyf2EhQtn4CIhei4qjjF" className="audioLink" 
  >Listen on Spotify</a>

  <h3>I Hate Frasier Crane</h3>
  <a target="_blank" href="https://open.spotify.com/episode/7eEu0P5TIt5Dw8vm0ts8ll" className="audioLink" 
  >Listen on Spotify</a>
  
  <h3>Here's Looking At You</h3>
  <a target="_blank" href="https://open.spotify.com/episode/6VcBUVRvHM9qQuYdIZh3Tc" className="audioLink" 
  >Listen on Spotify</a>

  <h3>The Crucible</h3>
  <a target="_blank" href="https://open.spotify.com/episode/28ODmuqUMzRILmDr0pgiWq" className="audioLink" 
  >Listen on Spotify</a>

  <h3>Call Me Irresponsible</h3>
  <a target="_blank" href="https://open.spotify.com/episode/2P486Oni5RtNCvLdmlhY5I" className="audioLink" 
  >Listen on Spotify</a>

  <h3>Beloved Infidel</h3>
  <a target="_blank" href="https://open.spotify.com/episode/09i2sLRRlW6WFSfoltDiH3" className="audioLink" 
  >Listen on Spotify</a>
  </div>
  <div className="column">
  <h3>Selling Out</h3>
  <a target="_blank" href="https://open.spotify.com/episode/0tpdIYNIkRqqrn8eZISuEn" className="audioLink" 
  >Listen on Spotify</a>
  
  <h3>Oops</h3>
  <a target="_blank" href="https://open.spotify.com/episode/3FoIKdV6DSrQQYdRfpJEob" className="audioLink" 
  >Listen on Spotify</a>

  <h3>Death Becomes Him</h3>
  <a target="_blank" href="https://open.spotify.com/episode/7xN9Fm9tWVls1SaP9FmBlU" className="audioLink" 
  >Listen on Spotify</a>

  <h3>Miracle on Third or Fourth Street</h3>
  <a target="_blank" href="https://open.spotify.com/episode/16hkCRdvtLWPNCqLyGACVz" className="audioLink" 
  >Listen on Spotify</a>
  
  <h3>Guess Who's Coming To Breakfast</h3>
  <a target="_blank" href="https://open.spotify.com/episode/3DNj0xSBrmpjS0rvy1yDUZ" className="audioLink" 
  >Listen on Spotify</a>

 


  <h3>Can't Buy Me Love</h3>
  <a target="_blank" href="https://open.spotify.com/episode/2lDS5CdpS1AyIktf09Gtmn" className="audioLink" 
  >Listen on Spotify</a>
 
  <h3>You Can't Tell A Crook By His Cover</h3>
  <a target="_blank" href="https://open.spotify.com/episode/0CgtHxh9eSvJMPVtIXd4lX" className="audioLink" 
  >Listen on Spotify</a>

  <h3>The Show Where Lilith Comes Back</h3>
  <a target="_blank" href="https://open.spotify.com/episode/4gGqO1kJcMSA23EnRDOCkf" className="audioLink" 
  >Listen on Spotify</a>
  </div>
  <div className="column">

  <h3>A Midwinter Night's Dream</h3>
  <a target="_blank" href="https://open.spotify.com/episode/2MLgvjrvol4oc4KH2bzJz3" className="audioLink" 
  >Listen on Spotify</a>

  <h3>And the Whimper Is...</h3>
  <a target="_blank" href="https://open.spotify.com/episode/1RdWgxR05O52EEIPvz31wu" className="audioLink" 
  >Listen on Spotify</a>


  <h3>Give Him the Chair</h3>
  <a target="_blank" href="https://open.spotify.com/episode/2GWLkrYkeVsRuxfOI4asQS" className="audioLink" 
  >Listen on Spotify</a>

  <h3>Fortysomething</h3>
  <a target="_blank" href="https://open.spotify.com/episode/2tucvriN3YzAz2Qtx83Tpz" className="audioLink" 
  >Listen on Spotify</a>

  <h3>Travels With Martin</h3>
  <a target="_blank" href="https://open.spotify.com/episode/4B4pnMgk78yOyYqcKTNV6N" className="audioLink" 
  >Listen on Spotify</a>

  <h3>Author, Author</h3>
  <a target="_blank" href="https://open.spotify.com/episode/5lULkMmKJOQHzKPV80amSG" className="audioLink" 
  >Listen on Spotify</a>

  <h3>Frasier Crane's Day Off</h3>
  <a target="_blank" href="https://open.spotify.com/episode/5s7OE1iWxjQMVdVQTvSQbh" className="audioLink" 
  >Listen on Spotify</a>

  <h3>My Coffee With Niles</h3>
  <a target="_blank" href="https://open.spotify.com/episode/0yHs8yst5iHqqCErcUUrQb" className="audioLink" 
  >Listen on Spotify</a>
  </div>

  </div>
  
  

  ]} />
  
 

    
  </article>
  
</section>
  
  {/* <div className="Line"></div> */}

  
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