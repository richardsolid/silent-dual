import React from "react";
import styled from "styled-components";
import { animated as a } from "react-spring";

//images:
import SpecImg from "../../images/spec-sensores.png";
import Icon1PNG from "../../images/spec-sensores-icons1.png";
import Icon2PNG from "../../images/spec-sensores-icons2.png";

const CompContainer = styled.div`
  position: relative;
`;

const Img = styled(a.img)`
  width: 100%;
`;

const ImgIcons = styled(a.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const SpecFuncionesComp = ({ imageProps, iconsProps }) => {
  return (
    <CompContainer>
      <Img src={SpecImg} alt="image" style={imageProps} />
      <ImgIcons src={Icon1PNG} alt="icons" style={iconsProps} />
      <ImgIcons src={Icon2PNG} alt="icons" style={iconsProps} />
    </CompContainer>
  );
};

export default SpecFuncionesComp;
