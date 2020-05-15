import React from 'react';
import PropTypes from 'prop-types';
import DownloadIco from "../../images/download-ico.inline.svg";

export default function DownloadButton({
  text,
  file
}){
  return(
    <a href={ file } download={true} className="flex items-stretch bg-red hover:bg-red-dark text-white font-bold mx-8 rounded inline-flex items-center">
      <span className="py-4 px-5">{ text }</span>
      <span className="flex items-center px-4 ml-auto border-l border-red-lighter">
        <DownloadIco className="fill-current w-4 h-4"/>
      </span>
    </a>
  )
}

DownloadButton.propTypes = {
  text: PropTypes.string,
  file: PropTypes.string
}