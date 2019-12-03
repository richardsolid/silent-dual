import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { TweenMax, Power3 } from 'gsap'

import colors from '../../styles/colors'
import fonts from "../../fonts"

import hotspotButton from "../../images/hotspot.svg"

const HotspotItemContainer = styled.div`
    position: absolute;
    top: ${({ content }) => content.top}%;
    left: ${({ content }) => content.left}%;
`

const HotspotItemButton = styled.img`
    box-shadow: 0px 2px 19px 0px rgba(0,0,0, 0);
    border-radius: 50%;
    cursor: pointer;
    transition: .4s;

    &:hover {
        box-shadow: 0px 2px 19px 0px rgba(0,0,0, .2);
    }
`

const HotspotItemContent = styled.div`
    position: absolute;
    
    width: 250px;
    padding: 20px;
    background-color: white;
    z-index: 100;
    ${({ content }) => content.top > 50 ? "bottom: calc(100% + 10px)" : "top: calc(100% + 10px)"};
    ${({ content }) => content.left > 50 ? "right: -25px" : "left: -25px"};

    &:before {
        content: "";
        position: absolute;
        ${({ content }) => content.top > 50 ? "top: 100%" : "bottom: 100%"};
        ${({ content }) => content.left > 50 ? "right: 37px" : "left: 37px"};

        ${({ content }) => content.top > 50 ?
        "width: 0; height: 0; border-style: solid; border-width: 10px 7.5px 0 7.5px; border-color: white transparent transparent transparent;"
        :
        "width: 0; height: 0; border-style: solid; border-width: 0 7.5px 10px 7.5px; border-color: transparent transparent white transparent;"
    }
    }

    p {
        color: ${colors.tertiaryDark};
        font-size: 12px;
        font-family: ${fonts.helvetica};
        line-height: 18px;
        margin: 0;
    }

    a {
        color: ${colors.tertiaryDark};
        font-size: 12px;
        font-family: ${fonts.helvetica};
        font-weight: bold;
        text-decoration: underline;
        line-height: 18px;

        margin-top: 20px;
        
    }
`

const HotspotItem = ({ content }) => {

    const hotstopEl = useRef(null)
    const hotstopButtonEl = useRef(null)

    const resetHotspot = () => {

        const hotspotContent = document.querySelectorAll(".HotspotItemContent")
        const hotspotButtons = document.querySelectorAll(".HotspotItemButton")

        for (var i = 0; i < hotspotContent.length; i++) {

            hotspotContent[i].classList.remove('open')

            TweenMax.to(hotspotContent[i], .6, {
                autoAlpha: 0,
                opacity: 0,
                x: 25,
                ease: Power3.easeInOut
            })
        }

        for (var j = 0; j < hotspotButtons.length; j++) {

            hotspotButtons[j].classList.remove('open')

            TweenMax.to(hotspotButtons[j], .2, {
                rotation: 0,
                transformOrigin: "50% 50%",
                ease: Power3.easeInOut
            })
        }

    }

    const handleClickHotspotButton = () => {

        if (hotstopEl.current.classList.contains('open') || hotstopButtonEl.current.classList.contains('open')) {

            resetHotspot()
            TweenMax.to(hotstopEl.current, .6, {
                autoAlpha: 0,
                opacity: 0,
                x: 25,
                ease: Power3.easeInOut
            })

            TweenMax.to(hotstopButtonEl.current, .2, {
                rotation: 0,
                transformOrigin: "50% 50%",
                ease: Power3.easeInOut
            })

        } else {

            resetHotspot()
            TweenMax.to(hotstopEl.current, .6, {
                autoAlpha: 1,
                opacity: 1,
                x: 0,
                ease: Power3.easeInOut
            })

            TweenMax.to(hotstopButtonEl.current, .2, {
                rotation: 45,
                transformOrigin: "50% 50%",
                ease: Power3.easeInOut
            })

            hotstopEl.current.classList.add('open')
            hotstopButtonEl.current.classList.add('open')
        }

    }

    useEffect(() => {

        resetHotspot()

    }, [])

    return (
        <HotspotItemContainer content={content}>

            <HotspotItemButton className="HotspotItemButton" alt="button" src={hotspotButton} ref={hotstopButtonEl} onClick={() => handleClickHotspotButton()} />

            <HotspotItemContent className="HotspotItemContent" ref={hotstopEl} content={content}>

                <p>{content.text}</p>

                <a href={content.link} target="_blank" rel="noopener noreferrer">Ver más</a>

            </HotspotItemContent>

        </HotspotItemContainer>
    )
}

export default HotspotItem