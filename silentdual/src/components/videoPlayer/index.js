import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

//images:
import videoPoster from "../../images/video_poster.jpg";
import crossIcon from "../../images/cross.svg";

const Background = styled.span`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.9);
	top: 0;
	z-index: 10000;
	display: flex;

	opacity: 0;
	visibility: hidden;

	video[poster] {
		object-fit: cover;
	}
`;

const VideoContainer = styled.div`
	position: relative;
	margin: auto;
	max-width: 800px;
	width: 100%;
	z-index: 2000;
	display: flex;
	align-items: center;
`;

const HomeVideo = styled.video`
	position: relative;
	width: inherit;
`;

const CloseButton = styled.span`
	position: absolute;
	right: 8px;
	top: 8px;
	width: 20px;
	height: 20px;
	z-index: 10000;
	background: url(${crossIcon}) no-repeat center center;
	background-size: 100%;
	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}
`;

const VideoPlayer = ({ showVideo, width, video, setShowVideo, id }) => {
	const scrollWorking = () => {
		document.getElementsByTagName("body")[0].classList.toggle("scrollDisabled");
	};

	const showingVideo = () => {
		gsap.to("#" + id, {
			duration: 1,
			opacity: 1,
			visibility: "visible"
		});
		scrollWorking();
	};

	const closingVideo = () => {
		gsap.to("#" + id, {
			duration: 1,
			opacity: 0,
			visibility: "hidden"
		});
		scrollWorking();
	};

	useEffect(() => {
		showVideo ? showingVideo() : closingVideo();
	});

	const closePlayer = () => {
		setShowVideo(false);
	};

	const isPhoneSize = width < 768;

	if (showVideo)
		return (
			<Background id={id}>
				<VideoContainer>
					<HomeVideo
						src={video}
						poster={videoPoster}
						playsinline={!isPhoneSize}
						controls={true}
						type="video/mp4"
						crossOrigin="anonymous"
						muted
					>
						{!isPhoneSize && <source src={video} type="video/mp4" />}
						Your browser can't play this video
					</HomeVideo>
					<CloseButton onClick={closePlayer} />
				</VideoContainer>
			</Background>
		);
	return null;
};

export default VideoPlayer;
