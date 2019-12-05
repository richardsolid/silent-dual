import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import useIntersect from "../../utils/useIntersect";

//utils:
import useWindowSize from "../../utils/useWindowSize";

//styles:
import { breakpoints } from "../../assets/styles/breakpoints";

//data:
import data from "../../data";

//images:
import BackgroundImg from "../../images/background_imatge_promo.png";
import LegImg from "../../images/cama_imatge_promo.png";
import HeadImg from "../../images/cap_imatge_promo.png";
import BathImg from "../../images/banyera_imatge_promo.png";

const Parallax = styled.div``;
const Fixed = styled(animated.div)`
  top: 0;
  width: 100%;
  position: fixed;
  overflow: hidden;
`;
const LeadSection = styled.section`
  height: auto;
  position: relative;
  color: white;
  overflow: hidden;
  line-height: 0;
  @media screen and (min-width: ${breakpoints.tablet}px) {
    margin-bottom: 100vh;
    height: 200vh;
  }

  img {
    width: 100%;
    &.bg {
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
    }
    &.leg {
      z-index: 2;
      position: absolute;
      top: 0;
      left: 0;
    }

    &.head {
      z-index: 1;
      position: absolute;
      top: 1%;
      left: 0;
    }

    &.bath {
      z-index: 3;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
`;

const Description = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  @media screen and (min-width: ${breakpoints.tablet}px) {
    height: 100vh;
  }
  h2 {
    max-width: 70%;
    font-weight: bold;
    font-size: 28px;
    line-height: 34px;
    text-align: center;
    @media screen and (min-width: ${breakpoints.tablet}px) {
      max-width: 30%;
      font-size: 33px;
      line-height: 39px;
    }
  }
`;

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const bgtrans = (x, y) => `translate3d(${x / 60}px,${y / 40}px,0) scale(1.05)`;
const legtrans = (x, y) => `translate3d(${x / 40}px,${y / 10}px,0) scale(1.05)`;
const headtrans = (x, y) =>
  `translate3d(${x / 60}px,${y / 15}px,0) scale(1.05)`;
const bathtrans = (x, y) =>
  `translate3d(${x / 40}px,${y / 20}px,0) scale(1.05)`;

const Lead = () => {
  const { format } = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2
  });

  const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);
  //useIntersect devulve ref y entry. ref es la referencia del elemento del cual queremos controlar su visualización en el viewport
  //entry es el objeto con la información de la posición del elemento
  const [ref, entry] = useIntersect({
    //threshold es la cantidad de elemento visible para que se dispare el evento
    threshold: buildThresholdArray()
  });

  const ratio = format(entry.intersectionRatio);

  const parallaxProps = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: (ratio - 0.1) * 8 || 0
    }
  });

  const widthWindow = useWindowSize();

  const { lead } = data;

  const [width, setWidth] = useState(null);

  useEffect(() => {
    setWidth(widthWindow.width);
  }, [widthWindow]);

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 50, friction: 40 }
  }));

  if (width && typeof width === "number") {
    if (width > breakpoints.tablet) {
      return (
        <LeadSection
          ref={ref}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        >
          <Fixed style={parallaxProps}>
            <Parallax>
              <BackgroundImage src={BackgroundImg} alt="background" />
              <animated.img
                className="bg"
                src={BackgroundImg}
                alt="background"
                style={{ transform: props.xy.interpolate(bgtrans) }}
              />
              <animated.img
                className="leg"
                src={LegImg}
                alt="leg"
                style={{ transform: props.xy.interpolate(legtrans) }}
              />
              <animated.img
                className="head"
                src={HeadImg}
                alt="head"
                style={{ transform: props.xy.interpolate(headtrans) }}
              />
              <animated.img
                className="bath"
                src={BathImg}
                alt="bath"
                style={{ transform: props.xy.interpolate(bathtrans) }}
              />
            </Parallax>
            <Description>
              <h2>{lead.description}</h2>
            </Description>
          </Fixed>
        </LeadSection>
      );
    } else {
      return (
        <LeadSection>
          <BackgroundImage src={BackgroundImg} alt="background" />
          <Description>
            <h2>{lead.description}</h2>
          </Description>
        </LeadSection>
      );
    }
  }
  return <div>loading...</div>;
};

export default Lead;
