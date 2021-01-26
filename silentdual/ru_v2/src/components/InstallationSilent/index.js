import React from "react";
import PropTypes from "prop-types";
import InstallFriendly from "../../images/install-friendly-logo.inline.svg";
import DownloadButton from "../DownloadButton";
import MarkdownContent from "../MarkdownContent";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import video from "../../video/silentdual/installation_SilentDual_RU.mp4";
import videoPoster from "../../images/silentdual/installation_poster.jpg";
import downloadFile from "../../docs/silentdual/SilentDual_инструкцию.pdf";
export default function Installation({ data }) {
  const [ref, inView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(100px)",
  });

  return (
    <div id="installation" className="w-full py-24 bg-gray-300 px-5 lg:px-0">
      <animated.div
        style={props}
        ref={ref}
        className="flex flex-col max-w-screen-lg mx-auto items-center"
      >
        <InstallFriendly className="mb-8" />
        <h3 className="text-center text-3xl mb-2 font-bold md:w-9/12 xl:w-9/12">
          {data.title}
        </h3>
        <h5 className="text-center text-xl mb-20 font-bold">{data.subtitle}</h5>
      </animated.div>
      <div className="flex flex-col max-w-screen-lg mx-auto">
        <div>
          <div className={`flex w-full bg-gray-300 mb-10 flex-col sm:flex-row`}>
            <div className="flex flex-col flex-1 justify-center px-8 sm:px-12 py-8">
              <h4 className="text-2xl mb-5 font-bold text-center sm:text-left">
                {data.titleText}
              </h4>
              <MarkdownContent
                className="text-center sm:text-left"
                content={data.descriptionText}
              />
            </div>
            <div
              className={`flex-1 px-8 sm:px-12 py-8 border-t sm:border-t-0 border-gray-500`}
            >
              <video
                className="w-full h-full left-0 top-0 object-cover"
                preload="preload"
                controls="controls"
                poster={videoPoster}
              >
                <source src={video} type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-screen-lg mx-auto items-center mt-8">
        <DownloadButton text={data.btn_text} file={downloadFile} />
      </div>
    </div>
  );
}

Installation.propTypes = {
  data: PropTypes.object,
  images: PropTypes.array,
};
