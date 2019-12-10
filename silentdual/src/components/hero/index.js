import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useSpring, animated } from "react-spring";
import useIntersect from "../../utils/useIntersect";

//utils:
import useWindowSize from "../../utils/useWindowSize";
import { breakpoints } from "../../assets/styles/breakpoints";
//images:
import instantFriendly from "../../images/instant-friendly.svg";
import playButton from "../../images/play-button.svg";
import videoPoster from "../../images/video_poster.jpg";
import arrowDown from "../../images/arrow_down.svg";

//video:
import Demovideo from "../../videos/hero-silent-dual.mp4";

//components:
import VideoPlayer from "../videoPlayer";

const HomeContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
	height: 100vh;
	width: 100%;
	position: relative;
	color: white;
`;

const HomeBackground = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
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
		height: 100vh;
		width: 100vw;

		background-color: #000;
		opacity: 0.6;
	}

	img,
	video {
		object-fit: cover;
		min-width: 100%;
		min-height: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
		z-index: 0;
		height: 100vh;
		width: 100vw;
	}

	@media screen and (min-width: ${breakpoints.large}px) {
		position: absolute;
		height: 100vh;
		top: 0;
		left: 0;

		&:before {
			opacity: 0.5;
		}
	}
`;

const HeroContent = styled.div`
	position: absolute;
	width: calc(100% - 60px);
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	@media screen and (min-width: ${breakpoints.large}px) {
		max-width: 50%;
	}
`;

const InstantFriendly = styled.img`
	z-index: 2;
	top: 75px;
	height: 80px;
	width: 70px;
	margin-top: 40px;

	@media screen and (min-width: ${breakpoints.large}px) {
		height: 115px;
		width: 100px;
		margin-top: 0;
	}
`;

const HomeHeader = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	z-index: 2;
	max-width: calc(100% - 60px);
	margin: 0 auto;

	@media screen and (min-width: ${breakpoints.large}px) {
		height: initial;
	}
`;

const HomeTitle = styled.h1`
	font-size: 57px;
	text-align: center;
	letter-spacing: -1.02px;
	line-height: 64px;
	margin: 0 auto 20px;

	span {
		font-weight: normal;
	}

	@media screen and (min-width: ${breakpoints.large}px) {
		font-size: 69px;
		text-align: center;
		letter-spacing: -0.58px;
		line-height: 78px;
		font-weight: bold;
	}
`;

const HomeSubtitle = styled.h2`
	font-size: 23px;
	text-align: center;
	letter-spacing: 0px;
	line-height: 29px;
	margin: 0 auto;
	@media screen and (min-width: ${breakpoints.large}px) {
		font-size: 33px;
		text-align: center;
		letter-spacing: 0px;
		line-height: 39px;
	}
`;

const PlayButton = styled.img`
	z-index: 2;
	height: 50px;
	width: 50px;
	cursor: pointer;
	top: 75vh;

	&:hover {
		opacity: 0.8;
	}

	@media screen and (min-width: ${breakpoints.large}px) {
		height: 60px;
		width: 60px;
	}
`;

const HeroLinkDown = styled(Link)`
	color: white;
	text-decoration: none;
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

const ScrollContainer = styled(animated.div)`
	position: relative;
	height: 100%;
	@media screen and (min-width: ${breakpoints.large}px) {
		height: 100vh;
		margin-bottom: 1px;
	}
`;
const Fixed = styled(animated.div)`
	position: static;
	@media screen and (min-width: ${breakpoints.large}px) {
		top: 0;
		width: 100%;
		position: fixed;
	}
`;

const Hero = () => {
	const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);
	//useIntersect devulve ref y entry. ref es la referencia del elemento del cual queremos controlar su visualización en el viewport
	//entry es el objeto con la información de la posición del elemento
	const [ref, entry] = useIntersect({
		//threshold es la cantidad de elemento visible para que se dispare el evento
		threshold: buildThresholdArray()
	});

	const { o } = useSpring({
		from: { o: 0 },
		o: entry.intersectionRatio > 0.95 ? 0 : 1
	});

	const widthWindow = useWindowSize();

	const [width, setWidth] = useState(null);
	const [showVideo, setShowVideo] = useState(false);

	const handlePlayButton = () => {
		setShowVideo(true);
	};

	useEffect(() => {
		setWidth(widthWindow);
	}, [widthWindow]);

	return (
		<ScrollContainer
			ref={ref}
			id={"hero"}
			style={{
				visibility: o.interpolate(o => (o === 1 ? "hidden" : "visible"))
			}}
		>
			<Fixed>
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
					<HeroContent>
						<InstantFriendly src={instantFriendly} alt="instant friendly" />
						<HomeHeader>
							<HomeTitle>
								SILENT <span>DUAL</span>
							</HomeTitle>
							<HomeSubtitle>
								Los extractores de baño más inteligentes diseñados para una
								fácil instalación.
							</HomeSubtitle>
						</HomeHeader>
						<PlayButton
							onClick={handlePlayButton}
							src={playButton}
							alt="play button"
						/>
					</HeroContent>

					<HeroLinkDown to={"/#descubrelo"}>Descúbrelas</HeroLinkDown>
					<VideoPlayer
						id="videoPlayer"
						width={width}
						showVideo={showVideo}
						video={Demovideo}
						setShowVideo={setShowVideo}
					/>
				</HomeContainer>
			</Fixed>
		</ScrollContainer>
	);
};

export default Hero;
