import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import MarkdownContent from "../MarkdownContent";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring'

export default function Description({
  background,
  data
}) {

  const [ref, inView] = useInView({
    rootMargin: '-50% 0px',
    triggerOnce: true
  })

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView? 'translateY(0px)' : 'translateY(40px)',
  })

  return(
    <div id="description" className="relative h-screen">
      <Img
        fluid={ background.childImageSharp.fluid }
        style={{position:"absolute"}}
        className="left-0 top-0 w-full h-full"
      />
      <animated.div style={props} ref={ref} className="px-5 sm:px-0 relative w-full h-full flex justify-center items-center flex-col text-white text-center">
        <MarkdownContent className="text-3xl md:w-7/12 xl:w-6/12 leading-none font-light sm:font-bold" content={data.text} />
      </animated.div>
    </div>
  )
}

Description.propTypes = {
  data: PropTypes.object,
  background: PropTypes.object,
}