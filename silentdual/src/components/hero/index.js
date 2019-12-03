import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

//utils:
import useWindowSize from "../../utils/useWindowSize";

//images:
import instantFriendly from "../../images/instant-friendly.svg";
import playButton from "../../images/play-button.svg";
import videoPoster from "../../images/video_poster.jpg";
import arrowDown from "../../images/arrow_down.svg";

//video:
import Demovideo from "../../videos/demovideo.mp4";

//styles:
import colors from "../../styles/colors";

import VideoPlayer from "./videoPlayer";

const HomeContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
	height: 90vh;
	width: 100vw;
	position: relative;
	color: ${colors.tertiary};

	#instantFriendly,
	#playButton {
		position: absolute;
		z-index: 15;
		top: 25vh;
	}

	#playButton {
		top: 70vh;
		cursor: pointer;
		&:hover {
			opacity: 0.9;
		}
	}

	@media screen and (min-width: 768px) {
		padding: 70px 8.3333% 0;
	}
`;

const HomeHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	position: absolute;
	z-index: 1;
	text-align: center;

	@media screen and (min-width: 768px) {
		height: initial;
		position: absolute;
	}
`;

const HomeBackground = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	position: relative;
	height: 100vh;
	width: 100vw;

	&:before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
		z-index: 1;

		background-color: #000;
		opacity: 0.6;
	}

	img,
	video {
		object-fit: cover;
		min-width: 100%;
		min-height: 100%;
	}

	@media screen and (min-width: 768px) {
		position: absolute;
		height: 100vh;
		top: 0;
		left: 0;

		&:before {
			opacity: 0.5;
		}
	}
`;

const HomeTitle = styled.h1`
	color: white;
	font-size: 48px;
	font-weight: 700;
	letter-spacing: -0.7px;
	line-height: 1.13;
	margin: -40px 0 0;

	@media screen and (min-width: 768px) {
		font-size: 100px;
		letter-spacing: -0.62px;
		line-height: 80px;
	}
`;

const HomeSubtitle = styled.h2``;

const HeroLinkDown = styled(Link)`
	color: ${colors.tertiary};
	text-decoration: none;
	font-size: 14px;
	font-weight: bold;
	line-height: 21px;
	position: absolute;
	bottom: 0;
	display: block;
	padding-bottom: 40px;
	z-index: 100;
	background: black;

	::after {
		content: "";
		position: absolute;
		width: 15px;
		height: 10px;
		left: 36px;
		bottom: 20px;
		background-repeat: no-repeat;
		background-image: url(${arrowDown});
		animation: flip-flop 0.8s infinite;
	}

	@keyframes flip-flop {
		0% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(0, 10px);
		}
	}

	transition: all 0.4s ease;
	opacity: 1;

	:hover {
		opacity: 0.6;
	}
`;

const Hero = () => {
	const widthWindow = useWindowSize();

	const [width, setWidth] = useState(null);
	const [showVideo, setShowVideo] = useState(null);

	const handlePlayButton = () => {
		setShowVideo(true);
		const video = document.querySelector("#videoPlayer");
		video && video.focus();
	};

	useEffect(() => {
		setWidth(widthWindow);
	}, [widthWindow]);

	return (
		<HomeContainer>
			<HomeBackground>
				{width < 768 ? (
					<img src={videoPoster} alt="site title" />
				) : (
					<video
						controls={false}
						type="video/mp4"
						poster={videoPoster}
						autoPlay
						muted
						loop
					>
						<source src={Demovideo} type="video/mp4" />
					</video>
				)}
			</HomeBackground>
			<img id="instantFriendly" src={instantFriendly} alt="instant friendly" />
			<HomeHeader>
				<HomeTitle>
					SILENT <span>DUAL</span>
				</HomeTitle>
				<HomeSubtitle>
					Los extractores de baño más inteligentes diseñados para una fácil
					instalación.
				</HomeSubtitle>
			</HomeHeader>
			<HeroLinkDown to={"/#specs"}>Descúbrelas</HeroLinkDown>
			<img
				id="playButton"
				onClick={handlePlayButton}
				src={playButton}
				alt="play button"
			/>
			<VideoPlayer
				width={width}
				showVideo={showVideo}
				video={Demovideo}
				setShowVideo={setShowVideo}
			/>
		</HomeContainer>
	);
};

export default Hero;
