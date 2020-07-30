import React from "react"
import Button from "../components/button"
import LowerButton from "../components/lowerButton"
export default AboutBanner;

function AboutBanner(props) {
    return (
        <div className="doubleBanner">
            <div className="bannerContainer">
                <div className="bannerInner">
                    <img src={props.image} alt="text"/>
                    <div className="aboutBannerContent">
                        {props.content}
                        <LowerButton buttonText="Shop Gift Cards" classy="primary" />
                    </div>
                </div>
            </div>
            <div className="bannerContainer">
                <div className="bannerInner">
                    <img src={props.imageTwo} alt="text"/>
                    <div className="aboutBannerContent">
                        {props.contentTwo}
                        
                        <Button
                        buttonText="Learn More"
                        classy="primary" pageLink="/loyalty"
                        externalLink={props.externalLink} />
                    </div>
                </div>
            </div>
        </div>
                );
}