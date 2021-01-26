import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import VideoModal from "../VideoModal";
import HeroDesktop from "../Hero/HeroDesktop";
import HeroPortrait from "../Hero/HeroPortrait";
import { useMediaQuery } from "react-responsive";

export default function Hero({
    title,
    description,
    data,
    background,
    backgroundPortrait,
    video,
    videoBackground
  }) {

  useEffect(()=> ReactModal.setAppElement('body'),[])

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  const [ videoVisible, setVideoVisible ] = useState(false);

  return(
    <div id="hero" className="relative h-screen">
      { isPortrait ?
        <HeroPortrait
          title={title}
          description={description}
          background={backgroundPortrait}
          setVideoVisible={setVideoVisible}
          caretText={data.caret_text}
        /> :
        <HeroDesktop
          title={title}
          description={description}
          background={background}
          videoBackground={videoBackground}
          showVideoBackground={!videoVisible}
          setVideoVisible={setVideoVisible}
          caretText={data.caret_text}
        />
      }

      { videoVisible && <VideoModal video={ video } setVideoVisible={ setVideoVisible } /> }
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  data: PropTypes.object,
  background: PropTypes.object,
  backgroundPortrait: PropTypes.object,
  video: PropTypes.string,
  videoBackground: PropTypes.string
}