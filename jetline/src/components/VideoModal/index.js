import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Close from "../../images/close-ico.inline.svg";
import ReactModal from 'react-modal';
import { useMediaQuery } from "react-responsive";

export default function Hero({
    setVideoVisible,
    video
  }) {

  useEffect(()=> ReactModal.setAppElement('body'),[])

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return(
    <>
      <ReactModal
        isOpen={ true }
        shouldCloseOnOverlayClick={ true }
        shouldCloseOnEsc={ true }
        style={{
          overlay: {
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: 0,
            backgroundColor: 'rgba(30, 30, 30, 0.75)',
            zIndex:20
          },
          content: {
            position: 'static',
            width: isPortrait ? '100%' : '70%',
            height: 'auto',
            border: 0,
            background: '#000',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: 0
          }
        }}
      >
        <video
          className="w-full h-full"
          preload="preload" id="video" controls={ true }
        >
          <source src={ video } type="video/mp4"></source>
        </video>
      </ReactModal>
      <button className="absolute top-0 right-0 pt-10 pr-10 z-30 cursor-pointer" onClick={()=>setVideoVisible(false)}>
        <Close/>
      </button>
    </>
  )
}

Hero.propTypes = {
  setVideoVisible: PropTypes.func,
  video: PropTypes.string
}