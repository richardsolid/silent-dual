import React from "react";
import PropTypes from "prop-types";
import InstallFriendly from "../../images/install-friendly-logo.inline.svg";
import InstallationItem from "./InstallationItem";
import DownloadButton from "../DownloadButton";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import video from "../../video/Video_Jetline_Installation.mp4";

export default function Installation({ data, images }) {
  const [ref, inView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(100px)",
  });

  return (
    <div id="installation" className="w-full py-24 bg-white px-5 lg:px-0">
      <animated.div
        style={props}
        ref={ref}
        className="flex flex-col max-w-screen-lg mx-auto items-center"
      >
        <InstallFriendly className="mb-8" />
        <h3 className="text-center text-3xl mb-20 md:w-7/12 xl:w-6/12">
          {data.title}
        </h3>
      </animated.div>
      <animated.div
        style={props}
        ref={ref}
        className="flex flex-col max-w-screen-lg mx-auto items-center"
      >
        <video
          // poster=""
          className="w-full h-full left-0 top-0 object-cover mb-20"
          preload="preload"
          controls={true}
          id="videoInstallation"
        >
          <source src={video} type="video/mp4" />
        </video>
      </animated.div>
      <div className="flex flex-col max-w-screen-lg mx-auto">
        <div>
          <InstallationItem data={data.items[0]} image={images[0]} />
          <InstallationItem
            data={data.items[1]}
            image={images[1]}
            reverse={true}
          />
          <InstallationItem data={data.items[2]} image={images[2]} />
        </div>
      </div>
      <div className="flex flex-col max-w-screen-lg mx-auto items-center mt-8">
        <DownloadButton text={data.btn_text} file={data.btn_file} />
      </div>
    </div>
  );
}

Installation.propTypes = {
  data: PropTypes.object,
  images: PropTypes.array,
};
