import React from "react";
import PropTypes from "prop-types";
import Model from "../ModelsSilent/Model";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import DownloadButton from "../DownloadButton";
import downloadFile from "../../docs/silentdual/SilentDual_технические_характеристики.pdf";

export default function ModelsSilent({ data, images }) {
  const [ref, inView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });
  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(100px)",
  });

  return (
    <div id="models" className="relative w-full py-16 lg:px-0">
      <animated.div
        style={props}
        ref={ref}
        className="relative flex flex-col max-w-screen-lg items-center mb-20 mx-auto"
      >
        <h3 className="text-center text-3xl font-bold">{data.title}</h3>
      </animated.div>

      <div className="relative flex flex-col sm:flex-row max-w-screen-lg mx-auto">
        <Model
          className="flex flex-1 flex-col mx-4 sm:mx-0"
          data={data.items[0]}
          image={images[0]}
        />
        <Model
          className="flex flex-1 flex-col mx-4 sm:mx-8"
          data={data.items[1]}
          image={images[1]}
        />
        <Model
          className="flex flex-1 flex-col mx-4 sm:mx-0"
          data={data.items[2]}
          image={images[2]}
        />
      </div>
      <div className="flex flex-col max-w-screen-lg mx-auto items-center mt-8">
        <DownloadButton text={data.btn_text} file={downloadFile} />
      </div>
    </div>
  );
}

ModelsSilent.propTypes = {
  data: PropTypes.object,
  background: PropTypes.object,
  images: PropTypes.array,
};
