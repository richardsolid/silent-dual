import React from 'react';
import PropTypes from "prop-types";
import Img from 'gatsby-image';
import ImgRef from "../../images/element_ref.jpg";
import Hotspot from "../Hotspot";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated, config } from 'react-spring'

export default function Components({
  data,
  images
}) {

  const { title, hotspots } = data;

  const ImgStyle = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%"
  };

  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
    triggerOnce: true
  })

  const propsTitle = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView? 'translateY(0px)' : 'translateY(100px)',
  })

  const propsEl0 = useSpring({
    config: config.molasses,
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate(0px, 0px)' : 'translate(-100px, 40px)',
  })

  const propsEl1 = useSpring({
    config: config.molasses,
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate(0px, 0px)' : 'translate(-50px, 20px)',
  })

  const propsEl2 = useSpring({
    config: config.molasses,
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate(0px, 0px)' : 'translate(50px, -20px)',
  })

  const propsEl3 = useSpring({
    config: config.molasses,
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate(0px, 0px)' : 'translate(100px, -40px)',
  })

  const propsHotspots = useSpring({
    config: config.molasses,
    opacity: inView ? 1 : 0,
    delay: 400
  })

  return(
    <div id="components" ref={ref} className="w-full py-24 bg-black px-5 sm:px-0 overflow-hidden">
      <animated.div style={propsTitle} className="flex flex-col max-w-screen-lg mx-auto">
        <h3 className="text-center text-white text-3xl mb-20">{title}</h3>
      </animated.div>
      <div className="relative max-w-screen-lg mx-auto" >
        <img src={ImgRef} alt="ref-image" />
        <div className="w-full h-full absolute inset-0">
          <animated.div className="absolute inset-0" style={propsEl3}>
            <Img alt="item 3" style={ImgStyle} fluid={ images[3].childImageSharp.fluid } />
          </animated.div>
          <animated.div className="absolute inset-0" style={propsEl2}>
            <Img alt="item 2" style={ImgStyle} fluid={ images[2].childImageSharp.fluid } />
          </animated.div>
          <animated.div className="absolute inset-0" style={propsEl1}>
            <Img alt="item 1" style={ImgStyle} fluid={ images[1].childImageSharp.fluid } />
          </animated.div>
          <animated.div className="absolute inset-0" style={propsEl0}>
            <Img style={ImgStyle} fluid={ images[0].childImageSharp.fluid } />
          </animated.div>
        </div>
        <animated.div style={propsHotspots} className="w-full h-full absolute inset-0">
          <Hotspot data={hotspots[0]} position={{ x: "22%", y: "43%" }} />
          <Hotspot data={hotspots[1]} position={{ x: "52%", y: "38%" }} />
          <Hotspot data={hotspots[2]} position={{ x: "55%", y: "63%" }} />
          <Hotspot data={hotspots[3]} position={{ x: "72%", y: "49%" }} />
        </animated.div>
      </div>
      <div className="w-full text-white mt-10 block sm:hidden">
        {
          hotspots.map((hotspot, index) =>
            <div key={`component-info-${index}`}>
              <h6 className="font-bold">{index}.{hotspot.title}</h6>
              <p className="text-sm">{hotspot.body}</p>
            </div>)
        }
      </div>
    </div>
  )
}

Components.propTypes = {
  data: PropTypes.object,
  images: PropTypes.array
}