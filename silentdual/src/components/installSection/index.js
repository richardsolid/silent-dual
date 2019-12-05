import React, { useState, useEffect } from "react";
import styled from "styled-components";

//Assets
import { breakpoints } from "../../assets/styles/breakpoints";
import variables from "../../assets/styles/variables";

//Utils
import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";
import useWindowSize from "../../utils/useWindowSize";

//images:
import instantFriendly from "../../images/instant-friendly.svg";
import conexionado from "../../images/conexionado.jpg";
import downloadIcon from "../../images/download_icon.svg";

//video:
import Demovideo from "../../videos/demovideo.mp4";

//components:
import VideoPlayer from "../videoPlayer";

//data:
import data from "../../data";

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

const DownloadButtonContainer = styled.div`
	background: ${variables.primary};
	color: white;
	margin: 40px auto 40px;
	border-radius: 3px;
	font-size: 15px;
  line-height: 21px;
  
	display: flex;
  flex-wrap: nowrap;

	@media screen and (min-width: ${breakpoints.tablet}px) {
		font-size: 16px;
		line-height: 24px;
	}
`;

const LeftButton = styled.div`
	height: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
  text-align: center;

  padding: 16px 20px;

  font-weight: bold;
`;

const DonwloadIconBox = styled.div`
	border-left: 1px solid white;
	display: flex;
	align-items: center;
  justify-content: center;

  padding: 20px;

	img {
		height: 15px;
	}
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
          <Column xs={12} lg={4} xsOrder={2} lgOrder={1}>
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

          <Column xs={12} lg={8} xsOrder={1} lgOrder={2}>
            <InstallSectionVideo>
              <PlayButton
                onClick={handlePlayButton}
                src={conexionado}
                alt="conexionado"
              />
            </InstallSectionVideo>
          </Column>

          <Column xs={12} xsOrder={3}>
            <DownloadButtonContainer>
              <LeftButton>{instalacion.button}</LeftButton>
              <DonwloadIconBox>
                <img src={downloadIcon} alt="download icon" />
              </DonwloadIconBox>
            </DownloadButtonContainer>
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
