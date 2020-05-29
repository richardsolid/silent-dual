import React from 'react';
import PropTypes from 'prop-types';
import Card from "../Card";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

export default function Models({
    data,
    image,
    className
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
    <animated.div style={props} ref={ref} className={className}>
      <Card text={ data.item } image={ image } />
    </animated.div>
  )
}

Models.propTypes = {
  data: PropTypes.object,
  image: PropTypes.object,
  className: PropTypes.string
}