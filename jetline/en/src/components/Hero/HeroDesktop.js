import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import InstallFriendly from "../../images/install-friendly-logo.inline.svg";
import Play from "../../images/play-btn.inline.svg";
import Caret from "../../images/caret-down-ico.inline.svg";
import ReactModal from 'react-modal';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

export default function HeroDesktop({
    title,
    description,
    background,
    videoBackground,
    showVideoBackground,
    setVideoVisible,
    caretText
  }) {

  useEffect(()=> ReactModal.setAppElement('body'),[])

  const [ref, inView] = useInView({
    triggerOnce: true
  })

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView? 'translateY(0px)' : 'translateY(100px)',
  })

  return(
    <>
      <Img
        fluid={ background.childImageSharp.fluid }
        style={{position:"absolute"}}
        className="left-0 top-0 w-full h-full"
      />
      {
        showVideoBackground &&
        <div className="absolute left-0 top-0 w-full h-full overflow-hidden">
          <video
            className="w-full h-full left-0 top-0 object-cover"
            preload="preload" id="video" autoPlay="autoplay" muted="muted" loop="loop"
          >
            <source src={ videoBackground } type="video/mp4"></source>
          </video>
        </div>
      }
      <div className="relative w-full h-full flex justify-center items-center flex-col text-white text-center">
        <animated.div style={props} ref={ref} className="flex flex-col items-center justify-center md:w-7/12 xl:w-4/12">
          <InstallFriendly className="mb-8" />
          <h1 className="text-7xl font-bold mb-3">{title}</h1>
          <h2 className="text-3xl uppercase mb-10">{description}</h2>
          <Play
            className="transition duration-500 cursor-pointer ease-in-out transform hover:scale-110"
            onClick={()=>setVideoVisible(true)} />
        </animated.div>
        <div
          onClick={() => scrollTo("#description")}
          className="absolute bottom-0 mb-8 flex flex-col items-center cursor-pointer"
        >
          {caretText}
          <Caret/>
        </div>
      </div>
    </>
  )
}

HeroDesktop.propTypes = {
  title: PropTypes.string,
  showVideoBackground: PropTypes.bool,
  setVideoVisible: PropTypes.func,
  description: PropTypes.string,
  background: PropTypes.object,
  videoBackground: PropTypes.string,
  caretText: PropTypes.string
}