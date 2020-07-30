import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Infonub from "../components/infonub"
import MarkContent from "../components/markContent"
import ColorContent from "../components/colorContent"
import PictureContent from "../components/pictureContent"
import Banner from "../components/banner"
import LowerBanner from "../components/lowerbanner"
export default ({ location }) => ( 
  <Layout location={location}>
  <main>

{/* <Banner buttonText="contact us" pageLink="/contact" 
classy="bannerContent" 
image="/images/WJ-Frasier-red-screen.jpg" 
alt="A man looking at this phone" 
content={[<p>Connect with real time recognition...any time, any device, any location.</p>]}/> */}
  
    
    
   
    <article>
    
{/* <MarkContent classy="marketingContent"  content={[<span className="bold">Engage employees </span>,  
"with our patented, award-winning technology. Reward and recognize achievements with our robust portfolio of solutions."]}/> */}

    
    

    <ColorContent classy="marketingContent fiveConnection" 
    content={[<p className="modern">We (try to) update every Friday at 10 am</p>, 
    
    <p>Check Buzzsprout, Spotify, and Apple Podcasts below.</p>]}
    />


   <div class="infonub inLine">
     <Infonub picture="/images/buzzsprout.png" 
     alttext="buzzsprout" 
     title={[<a href="url">Buzzsprout</a>]}
    content="Free podcasting platform."
     />

    
    <Infonub picture="/images/spotify.jpg" 
     alttext="spotify" 
     title={[<a href="url">Spotify</a>]}
    content="Free or paid podcasts and music."
     />

    
    <Infonub picture="/images/apple.jpg" 
     alttext="Apple podcasts" 
     title={[<a href="url">Apple podcasts</a>]}
    content="Free on this too!"
     />
    </div>
    
    <article className="event">
    
    <PictureContent picture="/images/smallcast.jpg" 
    color="Blue"
  alttext="a congratulations letter"
  content={[<p>On this week's episode:
  Frasier and Nile's are snobs. Martin  is blue collar. Daphne is the maid. Eddie is a dog.
  </p>]}/>

{/* <PictureContent picture="/gifs/TrophyAnimation_Points.gif" 
color="Blue"
  alttext="a congratulations letter"
  content={[<div className="divider blue"> </div>,<p>Our communication and reward solution 
    solves for every level of engagement:  
    company to employee, employer to 
    employee, and peer to peer. </p>]}/> */}

    
</article>

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

  </main>
  
  </Layout>
)

