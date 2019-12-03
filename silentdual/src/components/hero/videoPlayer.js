import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

//images:
import videoPoster from "../../images/video_poster.jpg";
import crossIcon from "../../images/cross.svg";

const Background = styled.span`
	position: relative;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.4);

	opacity: 0;
	visibility: hidden;

	video[poster] {
		object-fit: cover;
	}

	@media screen and (min-width: 768px) {
		position: relative;
		top: initial;
		margin-bottom: auto;
	}
`;

const VideoContainer = styled.div`
	position: relative;
	display: flex;
	margin: 50px auto;
	max-width: 800px;
	width: 100%;
	z-index: 2000;
`;

const HomeVideo = styled.video`
	position: absolute;
	width: inherit;
`;

const CloseButton = styled.span`
	position: absolute;
	right: 20px;
	top: 20px;
	width: 20px;
	height: 20px;
	z-index: 10000;
	background: yellow;
	background: url(${crossIcon}) no-repeat center center;
	background-size: 100%;
	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}
`;

const VideoPlayer = ({ showVideo, width, video, setShowVideo }) => {
	useEffect(() => {
		showVideo
			? gsap.to("#videoPlayer", 0, {
					duration: 1,
					// ease: "expo.out",
					autoAlpha: 1
			  })
			: gsap.to("#videoPlayer", 0, {
					duration: 0.6,
					// ease: "expo.out",
					autoAlpha: 0
			  });
	}, [showVideo]);

	const closePlayer = () => {
		setShowVideo(false);
	};

	const isPhoneSize = width < 768;

	if (showVideo)
		return (
			<Background id={"videoPlayer"}>
				<VideoContainer>
					<HomeVideo
						src={video}
						poster={videoPoster}
						playsinline={!isPhoneSize}
						controls={true}
						type="video/mp4"
						crossOrigin="anonymous"
						autoPlay
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
