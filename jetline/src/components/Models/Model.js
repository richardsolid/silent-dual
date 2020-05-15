import React from 'react';
import PropTypes from 'prop-types';
import DownloadButton from "../DownloadButton";
import Card from "../Card";

export default function Models({
    data,
    image
  }) {
  return(
    <div className="flex flex-1 flex-col mr-5">
      <Card text={ data.item } image={ image } />
      <DownloadButton text={ data.btn_text} file={ data.btn_file } />
    </div>
  )
}

Models.propTypes = {
  data: PropTypes.object,
  image: PropTypes.object
}