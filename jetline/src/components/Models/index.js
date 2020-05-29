import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Model from "../Models/Model";
import DownloadButton from "../DownloadButton";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

export default function Models({
    data,
    background,
    images
  }) {

  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
    triggerOnce: true
  })

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView? 'translateY(0px)' : 'translateY(100px)',
  })

  return(
    <div id="models" className="relative w-full py-24 bg-gray-800 px-5 lg:px-0">
      <Img
        fluid={ background.childImageSharp.fluid }
        style={{position:"absolute"}}
        className="left-0 top-0 w-full h-full"
      />
      <animated.div style={props} ref={ref} className="relative flex flex-col max-w-screen-lg items-center mb-20 mx-auto">
        <h3 className="text-center text-3xl text-white">{data.title}</h3>
      </animated.div>

      <div className="relative flex flex-col sm:flex-row max-w-screen-md mx-auto">
        <Model className="flex flex-1 flex-col mr-0 sm:mr-5 mb-20 sm:mb-0" data={ data.items[0] } image={ images[0] } />
        <Model className="flex flex-1 flex-col mr-0 mb-0" data={ data.items[1] } image={ images[1] } />
      </div>
      <div className="relative flex flex-col sm:flex-row max-w-screen-md mx-auto mt-16 sm:mt-0">
        <div className="w-full sm:w-6/12 mb-5 sm:mb-0 mx-0 sm:mx-8">
          <DownloadButton text={ data.items[0].btn_text} file={ data.items[0].btn_file } />
        </div>
        <div className="w-full sm:w-6/12 mx-0 sm:mx-8">
          <DownloadButton text={ data.items[1].btn_text} file={ data.items[1].btn_file } />
        </div>
      </div>
    </div>
  )
}

Models.propTypes = {
  data: PropTypes.object,
  background: PropTypes.object,
  images: PropTypes.array
}