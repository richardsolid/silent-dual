import React, { useState, useEffect } from "react";
import styled from "styled-components";

//Assets
import { breakpoints } from "../../assets/styles/breakpoints";

//Utils
import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";
import useWindowSize from "../../utils/useWindowSize";

//images:
import instantFriendly from "../../images/instant-friendly.svg";
import playButton from "../../images/play-button.svg";

//video:
import Demovideo from "../../videos/demovideo.mp4";

//components:
import VideoPlayer from "../videoPlayer";

const InstallSectionContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: #eceded;
	color: black;

	padding: 120px 0;

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
		margin: 0 auto;
	}

	.InstallSectionText {
		order: 2;
	}
	.InstallSectionVideo {
		order: 1;
	}

	@media screen and (min-width: ${breakpoints.large}px) {
		.InstallSectionText {
			order: 1;
		}
		.InstallSectionVideo {
			order: 2;
		}
	}
`;

const InstallSectionText = styled.div`
	h3 {
		margin-bottom: 40px;
		width: 100%;
		text-align: center;

		@media screen and (min-width: ${breakpoints.large}px) {
			text-align: left;
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
	z-index: 2;
	height: 50px;
	width: 50px;
	cursor: pointer;
	top: 75vh;

	&:hover {
		opacity: 0.8;
	}

	@media screen and (min-width: 768px) {
		height: 60px;
		width: 60px;
	}
`;

const InstallSectionVideo = styled.div``;

const InstallSection = () => {
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

	return (
		<InstallSectionContainer>
			<Wrapper>
				<Row>
					<Column xs={12}>
						<img
							id="instantFriendly"
							src={instantFriendly}
							alt="instant friendly"
						/>
					</Column>

					<Column xs={12}>
						<h2 className="headingMedium">
							S&P diseña productos fáciles de instalar
						</h2>
					</Column>
					<Column xs={12}>
						<p className="headingTiny">Plug & Play</p>
					</Column>
				</Row>

				<Row>
					<Column xs={12} lg={4} className="InstallSectionText">
						<InstallSectionText>
							<h3 className="headingSmall">Conexionado a 2 hilos</h3>
							<p>
								En S&P apostamos por la innovación en usabilidad, por eso SILENT
								DUAL cuenta con el sello Install Friendly de garantía de calidad
								técnica y de facilidad a la hora de realizarse la instalación.
								El extractor de baño se coloca con una práctica instalación que
								se realiza con una conexión directa de tan solo 2 hilos (L/N).
							</p>
						</InstallSectionText>
					</Column>

					<Column xs={12} lg={8} className="InstallSectionVideo">
						<InstallSectionVideo>
							<PlayButton
								onClick={handlePlayButton}
								src={playButton}
								alt="play button"
							/>
						</InstallSectionVideo>
					</Column>
				</Row>
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
