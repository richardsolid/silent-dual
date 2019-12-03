import React from "react";
import SpecImg from "../../images/spec-funcionamiento.png";
import styled from "styled-components";
import IconsPNG from "../../images/spec-funcionamiento-icons.png";

const Img = styled.img`
  max-width: 100%;
`;
const CompContainer = styled.div`
  position: relative;
`;
const ImgIcons = styled.img`
  position: absolute;
  right: -12%;
  top: -23%;
  width: 41%;
`;

//Animación con Lottie
const Icons = () => {
  return <ImgIcons src={IconsPNG} alt="" />;
};
const SpecSensoresComp = () => {
  return (
    <CompContainer>
      <Img src={SpecImg} alt="" />
      <Icons />
    </CompContainer>
  );
};

export default SpecSensoresComp;
