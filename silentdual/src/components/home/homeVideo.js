import React from "react"
import styled from "styled-components"

import VideoHome from "../../videos/video_home.mp4"

const HomeVideoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;

    height: 60vh;
    margin: 0 -20px;

    &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        z-index: 1;

        background-color: #000;
        opacity: .6;
    }

    video {
        object-fit: contains
    }
`

const HomeVideo = () => (
    <HomeVideoContainer>
        <video autoPlay muted loop>
            <source src={VideoHome} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </HomeVideoContainer>
)

export default HomeVideo