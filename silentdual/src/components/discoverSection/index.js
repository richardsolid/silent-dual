import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import styled from "styled-components";

//Utils
import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";
import useIntersect from "../../utils/useIntersect";
import useWindowSize from "../../utils/useWindowSize";

//Assets
import { breakpoints } from "../../assets/styles/breakpoints";

//images:
import exploded from "../../images/explosionado.png";
import exploded1 from "../../images/explosionado_01.png";
import exploded2 from "../../images/explosionado_02.png";
import exploded3 from "../../images/explosionado_03.png";
import exploded4 from "../../images/explosionado_04.png";
import exploded5 from "../../images/explosionado_05.png";

//data
import data from "../../data";

//Components
import HotspotItem from "../hotpost";

const DiscoverSectionContainer = styled(a.section)`
  background-color: black;
  color: white;
  padding: 100px 0;
  position: relative;

  h2 {
    width: 100%;
    text-align: center;
    margin: 0 0 40px;
  }

  @media screen and (min-width: ${breakpoints.large}px) {
    padding: 100vh 0 0;
  }
`;

const DiscoverSectionIntersect = styled.div`
  height: 100vh;
`;

const Fixed = styled.div`
  position: fixed;

  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const DiscoverSectionLayer = styled.div`
  height: calc(100vh - 280px);
  margin: 180px auto 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  color: white;
`;

const HotspotLayer = styled(a.div)`
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  @media screen and (min-width: ${breakpoints.large}px) {
    position: absolute;
  }
`;

const ImgRef = styled(a.img)`
  opacity: 1;
  max-width: 100%;

  @media screen and (min-width: ${breakpoints.large}px) {
    opacity: 0;
    max-height: calc(100vh - 400px);
  }
`;

const ImgExploded = styled(a.div)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    height: auto;
    max-width: 100%;
  }

  .exploded1 {
    z-index: 4;
  }
  .exploded2 {
    z-index: 3;
  }
  .exploded3 {
    z-index: 2;
  }
  .exploded4 {
    z-index: 1;
  }
  .exploded5 {
    z-index: 1;
  }
`;

const ImgExplodedLayer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  margin: 0 auto;
`;

const HotspotTitle = styled.h4`
  margin-bottom: 0;
`;
const HotspotText = styled.p`
  margin: 0;
`;

const DiscoverSection = () => {
  const size = useWindowSize();
  const [width, setWidth] = useState(null);
  const descubrelo = data.descubrelo;

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

  const propsExploded1 = useSpring({
    from: {
      transform: `translateX(100px)`
    },
    to: {
      transform: ratio > 0.25 ? `translateX(0px)` : `translateX(100px)`
    }
  });

  const propsExploded2 = useSpring({
    from: {
      transform: `translateX(50px)`
    },
    to: {
      transform: ratio > 0.25 ? `translateX(0px)` : `translateX(50px)`
    }
  });

  const propsExploded4 = useSpring({
    from: {
      transform: `translateX(-50px)`
    },
    to: {
      transform: ratio > 0.25 ? `translateX(0px)` : `translateX(-50px)`
    }
  });

  const propsExploded5 = useSpring({
    from: {
      transform: `translateX(-100px)`
    },
    to: {
      transform: ratio > 0.25 ? `translateX(0px)` : `translateX(-100px)`
    }
  });

  const hotspotsProps = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: ratio > 0.25 ? 1 : 0
    }
  });

  const explodedProps = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: ratio > 0 ? 1 : 0
    }
  });

  const sectionDiscover = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: ratio > 0 ? 1 : 0
    }
  });

  const titleProps = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: ratio > 0.1 ? 1 : 0
    }
  });

  const titlePropsDesktop = useSpring({
    from: {
      opacity: 0,
      transform: `translate(0px, 100px)`
    },
    to: {
      opacity: ratio > 0.1 ? 1 : 0,
      transform: ratio > 0.1 ? `translate(0px, 0px)` : `translate(0px, 100px)`
    }
  });

  const ImgProps = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: ratio > 0.35 ? 1 : 0
    }
  });

  const textProps = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: ratio > 0.5 ? 1 : 0
    }
  });

  const fixed = useSpring({
    from: {
      position: "fixed"
    },
    to: {
      position: ratio > 0 ? "fixed" : "inherit"
    }
  });

  useEffect(() => {
    setWidth(size.width);
  }, [size]);

  return width < breakpoints.large ? (
    <DiscoverSectionContainer id={descubrelo.id} ref={ref}>
      <Wrapper>
        <Row>
          <Column xs={8} align="center">
            <a.h2 style={titleProps} className="headingMedium">
              {descubrelo.title}
            </a.h2>
          </Column>

          <Column xs={12} direction="column">
            <HotspotLayer style={ImgProps}>
              {descubrelo.hotspots.map((hotspot, index) => (
                <HotspotItem
                  key={`hotspot_${index}`}
                  content={hotspot}
                  number={index + 1}
                />
              ))}
              <ImgRef src={exploded} alt="Discover exploded" />
            </HotspotLayer>
          </Column>

          <Column xs={8} align="center" direction="column">
            {descubrelo.hotspots.map((hotspot, index) => (
              <a.div key={`hotspot_${index}`} style={textProps}>
                <HotspotTitle
                  className="bodyNormal"
                  dangerouslySetInnerHTML={{
                    __html: index + 1 + ". " + hotspot.title
                  }}
                />
                <HotspotText
                  dangerouslySetInnerHTML={{ __html: hotspot.text }}
                />
              </a.div>
            ))}
          </Column>
        </Row>
      </Wrapper>
    </DiscoverSectionContainer>
  ) : (
    <DiscoverSectionContainer
      style={{
        ...sectionDiscover,
        visibility: sectionDiscover.opacity.interpolate(o =>
          o === 0 ? "hidden" : "visible"
        )
      }}
    >
      <DiscoverSectionIntersect ref={ref} id={descubrelo.id}>
        <Fixed style={fixed} className="changePosition">
          <Wrapper>
            <Row>
              <DiscoverSectionLayer>
                <Column xs={12} align="top">
                  <a.h2 style={titlePropsDesktop} className="headingMedium">
                    {descubrelo.title}
                  </a.h2>
                </Column>
                <Column xs={12} direction="column" align="top">
                  <ImgExplodedLayer>
                    <ImgExploded style={explodedProps}>
                      <a.img
                        style={propsExploded1}
                        src={exploded1}
                        className="exploded1"
                        alt="Discover exploded"
                      />
                      <a.img
                        style={propsExploded2}
                        src={exploded2}
                        className="exploded2"
                        alt="Discover exploded"
                      />

                      <a.img
                        src={exploded3}
                        className="exploded3"
                        alt="Discover exploded"
                      />

                      <a.img
                        style={propsExploded4}
                        src={exploded4}
                        className="exploded4"
                        alt="Discover exploded"
                      />
                      <a.img
                        style={propsExploded5}
                        src={exploded5}
                        className="exploded5"
                        alt="Discover exploded"
                      />
                    </ImgExploded>
                    <ImgRef src={exploded} alt="Discover exploded" />

                    <HotspotLayer style={hotspotsProps}>
                      {descubrelo.hotspots.map((hotspot, index) => (
                        <HotspotItem
                          key={`hotspot_${index}`}
                          content={hotspot}
                          number={index + 1}
                        />
                      ))}
                    </HotspotLayer>
                  </ImgExplodedLayer>
                </Column>
              </DiscoverSectionLayer>
            </Row>
          </Wrapper>
        </Fixed>
      </DiscoverSectionIntersect>
    </DiscoverSectionContainer>
  );
};

export default DiscoverSection;
