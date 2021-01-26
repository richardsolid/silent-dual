import React from 'react';
import PropTypes from 'prop-types';
import Feature from "./Feature";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

export default function Features({
  data,
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
    <div id="features" className="w-full py-24 bg-white px-5 lg:px-0">
      <animated.div style={props} ref={ref} className="flex flex-col max-w-screen-lg mx-auto">
        <h3 className="text-center text-3xl mb-20">{data.title}</h3>
      </animated.div>
      <div className="flex flex-col max-w-screen-lg mx-auto">
        <Feature data={data.items[0]} image={images[0]}/>
        <Feature data={data.items[1]} image={images[1]} reverse={true}/>
        <Feature data={data.items[2]} image={images[2]}/>
      </div>
    </div>
  )
}

Features.propTypes = {
  data: PropTypes.object,
  images: PropTypes.array
}