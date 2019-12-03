import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

//images:
import videoPoster from "../../images/video_poster.jpg";
import crossIcon from "../../images/cross.svg";

const VideoContainer = styled.span`
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

const HomeVideo = styled.video`
	position: absolute;
	max-width: 800px;
	width: 100%;
	z-index: 2000;
`;

const CloseButton = styled.span`
	position: absolute;
	right: 20px;
	top: 20px;
	width: 20px;
	height: 20px;
	opacity: 0;
	z-index: 10000;
	background: yellow;

/* 
	background: url(${crossIcon}) no-repeat center center;
	background-size: 100%; */
`;

const VideoPlayer = ({ showVideo, width, video, setShowVideo }) => {
	useEffect(() => {
		showVideo
			? gsap.to("#videoPlayer", 0, {
					duration: 0.4,
					ease: "expo.out",
					autoAlpha: 1
			  })
			: gsap.to("#videoPlayer", 0, {
					duration: 0.4,
					ease: "expo.out",
					autoAlpha: 0
			  });
	}, [showVideo]);

	const closePlayer = () => {
		setShowVideo(false);
	};

	if (showVideo)
		return (
			<VideoContainer id={"videoPlayer"}>
				{width < 768 ? (
					<HomeVideo
						src={video}
						controls={true}
						type="video/mp4"
						crossOrigin="anonymous"
					>
						Your browser can't play this video
					</HomeVideo>
				) : (
					<HomeVideo
						playsinline
						controls={true}
						type="video/mp4"
						poster={videoPoster}
					>
						<source src={video} type="video/mp4" />
						Your browser can't play this video
					</HomeVideo>
				)}
				<CloseButton onClick={closePlayer} />
			</VideoContainer>
		);
	else return null;
};

export default VideoPlayer;
