import React from 'react';
import PropTypes from "prop-types";

export default function DiscoverComponents({
  data
}) {
  return(
    <div className="w-full py-24 bg-black">
      <div className="flex flex-col max-w-screen-lg mx-auto">
        <h3 className="text-center text-white text-3xl mb-20">{data.title}</h3>
      </div>
    </div>
  )
}

DiscoverComponents.propTypes = {
  data: PropTypes.object,
}