import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import MarkdownContent from "../MarkdownContent";

export default function Description({
  data,
  images
}) {
  return(
    <div className="w-full py-24 bg-white">
      <div className="flex flex-col max-w-screen-lg mx-auto">
        <h3 className="text-center text-3xl mb-20">{data.title}</h3>
        <div>
          {/* Item 01 */}
          <div className="flex w-full">
            <div className="flex flex-col flex-1 justify-center">
              <h4 className="text-2xl mb-5">{ data.items[0].item }</h4>
              <MarkdownContent content={ data.items[0].body }/>
            </div>
            <div className="flex-1 ml-24">
              <Img fluid={ images[0].childImageSharp.fluid } />
            </div>
          </div>
          {/* Item 02 */}
          <div className="flex w-full flex-row-reverse">
            <div className="flex flex-col flex-1 justify-center">
              <h4 className="text-2xl mb-5">{ data.items[1].item }</h4>
              <MarkdownContent content={ data.items[1].body }/>
            </div>
            <div className="flex-1 mr-24">
              <Img fluid={ images[1].childImageSharp.fluid } />
            </div>
          </div>
          {/* Item 03 */}
          <div className="flex w-full">
            <div className="flex flex-col flex-1 justify-center">
              <h4 className="text-2xl mb-5">{ data.items[2].item }</h4>
              <MarkdownContent content={ data.items[2].body }/>
            </div>
            <div className="flex-1 ml-24">
              <Img fluid={ images[2].childImageSharp.fluid } />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Description.propTypes = {
  data: PropTypes.object,
  images: PropTypes.object
}