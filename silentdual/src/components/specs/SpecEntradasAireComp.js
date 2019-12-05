import React from "react";
import styled from "styled-components";
import { animated as a } from "react-spring";

//images:
import SpecImg from "../../images/spec-entradas-aire.png";
import IconsPNG from "../../images/spec-entradas-aire-icons.png";

const CompContainer = styled.div`
	position: relative;
`;

const Img = styled(a.img)`
	max-width: 100%;
`;

const Icons = styled(a.img)`
	position: absolute;
	right: 12%;
	top: -27%;
	width: 41%;
`;

const SpecEntradasAireComp = ({ imageProps, iconsProps }) => {
	return (
		<CompContainer>
			<Img src={SpecImg} alt="image" style={imageProps} />
			<Icons src={IconsPNG} alt="icons" style={iconsProps} />
		</CompContainer>
	);
};

export default SpecEntradasAireComp;
