import React from "react";
import styled from "styled-components";
import { animated as a } from "react-spring";

//images:
import SpecImg from "../../images/spec-funcionamiento.png";
import IconsPNG from "../../images/spec-funcionamiento-icons.svg";

const CompContainer = styled.div`
	position: relative;
`;

const Img = styled(a.img)`
	max-width: 100%;
`;

const ImgIcons = styled(a.img)`
	/* position: absolute; */
	right: -12%;
	top: -23%;
	width: 41%;
`;

const SpecSensoresComp = ({ imageProps, iconsProps }) => {
	return (
		<CompContainer>
			<Img src={SpecImg} alt="image" style={imageProps} />
			<ImgIcons src={IconsPNG} alt="icon" styled={iconsProps} />
		</CompContainer>
	);
};

export default SpecSensoresComp;
