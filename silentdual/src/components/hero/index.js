import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
// import { TweenLite, Expo } from "gsap";
import { Link } from "gatsby";

//utils:
import ModalSmoothOpener from "../modalSmoothOpener";
import useWindowSize from "../../utils/useWindowSize";

//images:
import instantFriendly from "../../images/instant-friendly.svg";
import playButton from "../../images/play-button.svg";
import heroBackground from "../../images/hero-background.jpg";
import arrowDown from "../../images/arrow_down.svg";
//video:
import Demovideo from "../../videos/demovideo.mp4";

//styles:
import colors from "../../styles/colors";

// import Layout from "../layout";

const HomeContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
	height: 100vh;
	width: 100vw;
	padding: 0 20px;
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
	}

	@media screen and (min-width: 768px) {
		padding: 70px 8.3333% 0;
	}
`;

const HomeHeading = styled.div`
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
	height: 60vh;
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

const HomeHeadingTitle = styled.h1`
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

const HomeHeadingLink = styled.div`
	position: relative;
	top: calc(30vh + 20px);
	z-index: 100;
	color: white;
	font-size: 14px;
	line-height: 1.29;
	text-decoration: underline;

	@media screen and (min-width: 768px) {
		position: relative;
		top: initial;
		font-size: 20px;
		line-height: 30px;
		margin-bottom: auto;
		z-index: 1;
	}
`;

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

const HomeHeadingVideo = styled.video`
	margin: auto;
	max-width: 100%;
	width: 100%;
`;

const Hero = () => {
	const widthWindow = useWindowSize();

	const [width, setWidth] = useState(null);
	const [isTransparent, setIsTransparent] = useState(true);
	const [isAbsolute, setIsAbsolute] = useState(false);

	const linkVideo = useRef(null);

	const handleModalOpenened = () => {
		setIsTransparent(!isTransparent);
		setIsAbsolute(!isAbsolute);
	};

	useEffect(() => {
		setWidth(widthWindow);
	}, [widthWindow]);

	return (
		// <Layout
		// 	isTransparent={isTransparent}
		// 	isAbsolute={isAbsolute}
		// 	isHome={true}
		// 	isVisible={true}
		// >
		<HomeContainer>
			<HomeBackground>
				{width < 768 ? (
					<img src={heroBackground} alt="site title" />
				) : (
					<video
						controls={false}
						type="video/mp4"
						poster={heroBackground}
						autoPlay
						muted
						loop
					>
						<source src={Demovideo} type="video/mp4" />
					</video>
				)}
			</HomeBackground>
			<img id="instantFriendly" src={instantFriendly} alt="instant friendly" />
			<HomeHeading>
				<HomeHeadingTitle>
					SILENT <span>DUAL</span>
				</HomeHeadingTitle>
				<HomeSubtitle>
					Los extractores de baño más inteligentes diseñados para una fácil
					instalación.
				</HomeSubtitle>
			</HomeHeading>
			<HeroLinkDown to={"/#specs"}>Descúbrelas</HeroLinkDown>
			<HomeHeadingLink ref={linkVideo}>
				<img id="playButton" src={playButton} alt="play button" />
				<ModalSmoothOpener
					modalContainer={linkVideo}
					handleModalOpenened={handleModalOpenened}
					background="rgba(0, 0, 0, .8)"
				>
					{width < 768 ? (
						<HomeHeadingVideo
							src="video_home_extend.mp4"
							controls={true}
							type="video/mp4"
							crossOrigin="anonymous"
						></HomeHeadingVideo>
					) : (
						<HomeHeadingVideo
							playsinline
							controls={true}
							type="video/mp4"
							poster={heroBackground}
						>
							<source src="video_home_extend.mp4" type="video/mp4" />
						</HomeHeadingVideo>
					)}
				</ModalSmoothOpener>
			</HomeHeadingLink>
		</HomeContainer>
		// </Layout>
	);
};

export default Hero;
