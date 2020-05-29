import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import MarkdownContent from "../MarkdownContent";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

function InstallationItem({data, image, reverse}){
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
    triggerOnce: true
  })

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView? 'translateY(0px)' : 'translateY(40px)',
  })

  return(
    <animated.div
      style={props}
      ref={ref}
      className={`flex w-full bg-gray-300 mb-10 flex-col sm:flex-row ${reverse && `sm:flex-row-reverse`}`}
    >
      <div className="flex flex-col flex-1 justify-center px-8 sm:px-12 py-8">
        <h4 className="text-2xl mb-5 font-bold text-center sm:text-left">{ data.item }</h4>
        <MarkdownContent className="text-center sm:text-left" content={ data.body }/>
      </div>
      <div className={`flex-1 px-8 sm:px-12 py-8 border-t sm:border-t-0 ${reverse ? `border-r-0 sm:border-r` : `border-l-0 sm:border-l`} border-gray-500`}>
        <Img fluid={ image.childImageSharp.fluid } />
      </div>
    </animated.div>
  )

}

InstallationItem.propTypes = {
  reverse: PropTypes.bool,
  data: PropTypes.object,
  image: PropTypes.object
}

export default InstallationItem;