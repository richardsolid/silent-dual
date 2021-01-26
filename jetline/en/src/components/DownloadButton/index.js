import React from 'react';
import PropTypes from 'prop-types';
import DownloadIco from "../../images/download-ico.inline.svg";

export default function DownloadButton({
  text,
  file
}){
  return(
    <a href={ file } download={true} className="flex items-stretch bg-red transition duration-200 hover:bg-red-dark text-white font-bold rounded items-center">
      <span className="py-4 px-5 text-center w-full">{ text }</span>
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