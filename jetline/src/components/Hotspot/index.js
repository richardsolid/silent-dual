import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTransition, animated } from "react-spring";

function Hotspot({ data, position }) {
  const [isOpen, setIsOpen] = useState(false);
  const { id, title, body } = data;

  const transitions = useTransition(isOpen, null, {
    config: { duration: 250 },
    from: { opacity: 0, bottom: "100%", transform: "translateY(10px)" },
    enter: { opacity: 1, bottom: "100%", transform: "translateY(0px)" },
    leave: { opacity: 0, bottom: "100%", transform: "translateY(10px)" },
  });

  return (
    <div
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
      style={{ left: position.x, bottom: position.y }}
      className={`absolute flex flex-col items-center ${
        isOpen ? "z-10" : "z-0"
      }`}
    >
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              className="hidden sm:flex flex-col items-center mb-0 absolute w-64"
              style={props}
            >
              <div className="bg-white text-black p-4 relative">
                <h5 className="font-bold mb-2">{title}</h5>
                <p className="m-0 text-sm">{body}</p>
              </div>
              <svg
                className="text-white h-4"
                x="0px"
                y="0px"
                viewBox="0 0 255 255"
              >
                <polygon
                  className="fill-current"
                  points="0,0 127.5,127.5 255,0"
                />
              </svg>
            </animated.div>
          )
      )}
      <div className="cursor-pointer bg-red rounded-full text-white text-xs flex w-6 h-6 items-center justify-center">
        {id}
      </div>
    </div>
  );
}

Hotspot.propTypes = {
  data: PropTypes.object,
  isOpen: PropTypes.bool,
  position: PropTypes.object,
  setIsOpen: PropTypes.func,
};

export default Hotspot;
