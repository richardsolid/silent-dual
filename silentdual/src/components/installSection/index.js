import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import styled from "styled-components";

//Assets
import { breakpoints } from "../../assets/styles/breakpoints";
import variables from "../../assets/styles/variables";

//Utils
import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";
import useWindowSize from "../../utils/useWindowSize";
import useIntersect from "../../utils/useIntersect";

//images:
import instantFriendly from "../../images/instant-friendly.svg";
import conexionado from "../../images/conexionado.jpg";
import downloadIcon from "../../images/download_icon.svg";

//video:
import Demovideo from "../../videos/hero-silent-dual.mp4";

//components:
import VideoPlayer from "../videoPlayer";

//data:
import data from "../../data";

const InstallSectionContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;
	z-index: 0;

	background-color: #eceded;
	color: black;

	padding: 100px 0;

	@media screen and (min-width: ${breakpoints.large}px) {
		padding: 120px 0;
	}

	h2 {
		margin-bottom: 20px;
		font-weight: bold;
		width: 100%;
		text-align: center;
	}

	p {
		margin: 0;
		font-weight: bold;
		width: 100%;
		text-align: center;
	}

	img {
		margin-top: 40px;
		margin: 0 auto;
	}
`;

const InstallSectionText = styled.div`
	h3 {
		width: 100%;
		text-align: center;

		margin-bottom: 20px;
		margin-top: 80px;

		@media screen and (min-width: ${breakpoints.large}px) {
			text-align: left;
			margin-top: 60px;
		}
	}

	p {
		margin: 0;
		font-weight: lighter;
		width: 100%;
		text-align: center;

		@media screen and (min-width: ${breakpoints.large}px) {
			text-align: left;
		}
	}
`;

const PlayButton = styled.img`
	cursor: pointer;
	width: 100%;
	height: auto;

	&:hover {
		opacity: 0.8;
	}
`;

const InstallSectionVideo = styled.div`
	margin-top: 80px;

	@media screen and (min-width: ${breakpoints.large}px) {
		margin-top: 60px;
	}
`;

const DownloadButtonContainer = styled.a`
	background: ${variables.primary};
	color: white;
	margin: 40px auto 0;
	border-radius: 3px;
	cursor: pointer;
	text-decoration: none;

	display: flex;
	flex-wrap: nowrap;

	transition: 0.2s;

	&:hover,
	&:focus {
		background: ${variables.primaryDark};
	}
	@media screen and (min-width: ${breakpoints.large}px) {
		margin: 40px auto 40px;
	}
`;

const LeftButton = styled.div`
	height: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-weight: bold;

	padding: 16px 20px;
`;

const DonwloadIconBox = styled.div`
	border-left: 1px solid white;
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 20px;
`;

const InstallSection = () => {
	const { instalacion } = data;

	const widthWindow = useWindowSize();

	const [width, setWidth] = useState(null);
	const [showVideo, setShowVideo] = useState(null);

	const handlePlayButton = () => {
		setShowVideo(true);
		const video = document.querySelector("#videoPlayerInstall");
		video && video.focus();
	};

	useEffect(() => {
		setWidth(widthWindow);
	}, [widthWindow]);

	const { format } = new Intl.NumberFormat("en-US", {
		maximumFractionDigits: 2
	});

	const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);
	//useIntersect devulve ref y entry. ref es la referencia del elemento del cual queremos controlar su visualización en el viewport
	//entry es el objeto con la información de la posición del elemento
	const [ref, entry] = useIntersect({
		//threshold es la cantidad de elemento visible para que se dispare el evento
		threshold: buildThresholdArray()
	});

	useEffect(() => {
		const element = document.querySelector(".changePosition");

		if (entry.intersectionRatio > 0) {
			element.style.position = "inherit";
		} else {
			element.style.position = "fixed";
		}
	}, [entry]);

	const [refTop, entryTop] = useIntersect({
		//threshold es la cantidad de elemento visible para que se dispare el evento
		threshold: buildThresholdArray()
	});

	const [refBottom, entryBottom] = useIntersect({
		//threshold es la cantidad de elemento visible para que se dispare el evento
		threshold: buildThresholdArray()
	});

	const ratioTop = format(entryTop.intersectionRatio);
	const ratioBottom = format(entryBottom.intersectionRatio);

	const topProps = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: ratioTop > 0.5 ? 1 : 0
		}
	});

	const bottomProps = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: ratioBottom > 0.5 ? 1 : 0
		}
	});

	return (
		<InstallSectionContainer id="instalación" ref={ref}>
			<Wrapper>
				<a.div ref={refTop} style={topProps}>
					<Row>
						<Column xs={12}>
							<img
								id="instantFriendly"
								src={instantFriendly}
								alt="instant friendly"
							/>
						</Column>

						<Column xs={12}>
							<h2 className="headingMedium">{instalacion.title}</h2>
						</Column>
						<Column xs={12}>
							<p className="headingTiny">{instalacion.subtitle}</p>
						</Column>
					</Row>
				</a.div>

				<a.div ref={refBottom} style={bottomProps}>
					<Row>
						<Column xs={12} lg={5} xsOrder={2} lgOrder={1}>
							<InstallSectionText>
								<h3 className="headingSmall">{instalacion.titleText}</h3>
								<p
									dangerouslySetInnerHTML={{
										__html: instalacion.descriptionText
									}}
								/>
							</InstallSectionText>
						</Column>

						<Column xs={12} lg={7} xsOrder={1} lgOrder={2}>
							<InstallSectionVideo>
								<PlayButton
									onClick={handlePlayButton}
									src={conexionado}
									alt={instalacion.imgAlt}
								/>
							</InstallSectionVideo>
						</Column>

						<Column xs={12} xsOrder={3}>
							<DownloadButtonContainer href="#" target="_blank">
								<LeftButton>{instalacion.button}</LeftButton>
								<DonwloadIconBox>
									<img src={downloadIcon} alt={instalacion.buttonAlt} />
								</DonwloadIconBox>
							</DownloadButtonContainer>
						</Column>
					</Row>
				</a.div>
			</Wrapper>

			<VideoPlayer
				id="videoPlayerInstall"
				width={width}
				showVideo={showVideo}
				video={Demovideo}
				setShowVideo={setShowVideo}
			/>
		</InstallSectionContainer>
	);
};

export default InstallSection;
