import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../assets/styles/breakpoints";
import data from "../../data";
import FullImg from "../../images/imagen_chica_background.jpg";

const Fixed = styled.div`
  top: 0;
  width: 100%;
  overflow: hidden;
`;
const LeadSection = styled.div`
  height: auto;
  position: relative;
  color: white;
  overflow: hidden;
  line-height: 0;
  height: 100vh;
  background-image: url(${FullImg});
  background-size: cover;
  background-position: 30% center;

  @media screen and (min-width: ${breakpoints.large}px) {
    background-image: none;
    height: 130vh;
  }

  img {
    width: 100%;
    &.bg {
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
`;

const Description = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  @media screen and (min-width: ${breakpoints.large}px) {
    background-image: none;
    height: 100vh;
  }
`;

const DescriptionH2 = styled.h2`
  max-width: 70%;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  @media screen and (min-width: ${breakpoints.large}px) {
    max-width: 30%;
    font-size: 33px;
    line-height: 39px;
  }
`;

const Lead = () => {
  const { lead } = data;

  return (
    <LeadSection id="descubrelo">
      <Fixed>
        <BackgroundImage src={FullImg} alt="background" />
        <Description>
          <DescriptionH2>{lead.description}</DescriptionH2>
        </Description>
      </Fixed>
    </LeadSection>
  );
};

export default Lead;
