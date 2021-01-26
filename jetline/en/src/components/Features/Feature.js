import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import MarkdownContent from "../MarkdownContent";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

function Feature({
  reverse,
  data,
  image
}){

  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
    triggerOnce: true
  })

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView? 'translateY(0px)' : 'translateY(40px)',
  })

  return(
    <animated.div style={props} ref={ref} className={`flex w-full flex-col sm:flex-row mb-10 sm:mb-0 ${reverse && `sm:flex-row-reverse`}`}>
      <div className="flex flex-col flex-1 justify-center">
        <h4 className="text-2xl mb-5 font-bold text-center sm:text-left">{ data.item }</h4>
        <MarkdownContent className="text-center sm:text-left" content={ data.body }/>
      </div>
      <div className={`flex-1 ml-0 ${reverse ? `sm:mr-24` : `sm:ml-24`}`}>
        <Img fluid={ image.childImageSharp.fluid } />
      </div>
    </animated.div>
  )
}

export default Feature;

Feature.propTypes = {
  reverse: PropTypes.bool,
  data: PropTypes.object,
  image: PropTypes.object
}