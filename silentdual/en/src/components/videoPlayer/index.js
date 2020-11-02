import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

import crossIcon from "../../images/cross.svg";

const Background = styled.span`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background: ${({ isPhone }) =>
		isPhone ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.8)"};
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
	outline: 0;
`;

const CloseButton = styled.span`
	position: absolute;
	right: 8px;
	top: -28px;
	width: 20px;
	height: 20px;
	z-index: 10000;
	background: url(${crossIcon}) no-repeat center center;
	background-size: 100%;
	cursor: pointer;
	transition: 0.2s;

	&:hover {
		opacity: 0.8;
	}
`;

const VideoPlayer = ({
	showVideo,
	width,
	video,
	setShowVideo,
	id,
	videoPoster
}) => {
	const showingVideo = () => {
		gsap.to("#" + id, {
			duration: 1,
			opacity: 1,
			visibility: "visible"
		});

		!document
			.getElementsByTagName("body")[0]
			.classList.contains("scrollDisabled") &&
			document.getElementsByTagName("body")[0].classList.add("scrollDisabled");
	};

	const closingVideo = () => {
		gsap.to("#" + id, {
			duration: 1,
			opacity: 0,
			visibility: "hidden"
		});

		document
			.getElementsByTagName("body")[0]
			.classList.contains("scrollDisabled") &&
			document
				.getElementsByTagName("body")[0]
				.classList.remove("scrollDisabled");
	};

	useEffect(() => {
		showVideo === true ? showingVideo() : closingVideo();
		// eslint-disable-next-line
	}, [showVideo]);

	const closePlayer = () => {
		setShowVideo(false);
	};

	const isPhoneSize = width < 768;

	return showVideo ? (
		<Background id={id} isPhone={isPhoneSize}>
			<VideoContainer>
				<HomeVideo
					src={video}
					poster={videoPoster}
					playsinline={!isPhoneSize}
					controls={true}
					type="video/mp4"
					crossOrigin="anonymous"
				>
					{!isPhoneSize && <source src={video} type="video/mp4" />}
					Your browser can't play this video
				</HomeVideo>
				<CloseButton onClick={closePlayer} />
			</VideoContainer>
		</Background>
	) : null;
};

export default VideoPlayer;
