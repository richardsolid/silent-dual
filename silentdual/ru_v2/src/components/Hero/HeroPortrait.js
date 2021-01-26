import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import InstallFriendly from "../../images/install-friendly-logo.inline.svg";
import Play from "../../images/play-btn.inline.svg";
import Caret from "../../images/caret-down-ico.inline.svg";
import ReactModal from "react-modal";
import scrollTo from "gatsby-plugin-smoothscroll";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

export default function HeroPortrait({
  title,
  description,
  background,
  caretText,
  setVideoVisible,
}) {
  useEffect(() => ReactModal.setAppElement("body"), []);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(100px)",
  });

  return (
    <div id="hero" className="relative h-screen">
      <Img
        fluid={background.childImageSharp.fluid}
        style={{ position: "absolute" }}
        className="left-0 top-0 w-full h-full"
      />
      <div className="absolute top-0 w-full h-full flex justify-center items-center flex-col text-white text-center">
        <animated.div
          style={props}
          ref={ref}
          className="flex flex-col items-center justify-center md:w-7/12 xl:w-4/12"
        >
          <InstallFriendly className="mb-8" />
          <h1 className="text-4xl font-bold mb-3">{title}</h1>
          <h2 className="text-xl mb-10">{description}</h2>
          <Play
            className="transition duration-500 cursor-pointer ease-in-out transform hover:scale-110"
            onClick={() => setVideoVisible(true)}
          />
        </animated.div>
        <div
          onClick={() => scrollTo("#description")}
          className="absolute bottom-0 mb-8 flex flex-col items-center cursor-pointer"
        >
          {caretText}
          <Caret />
        </div>
      </div>
    </div>
  );
}

HeroPortrait.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  data: PropTypes.object,
  background: PropTypes.object,
  caretText: PropTypes.string,
  setVideoVisible: PropTypes.func,
};
