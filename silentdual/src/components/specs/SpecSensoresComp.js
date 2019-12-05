import React from "react";
import SpecImg from "../../images/spec-sensores.png";
import styled from "styled-components";
import IconsPNG from "../../images/spec-sensores-icons.svg";

const Img = styled.img`
	max-width: 100%;
`;
const CompContainer = styled.div`
	position: relative;
`;
const Icons = styled.img`
	position: absolute;
	right: 12%;
	top: -27%;
	width: 41%;
`;

//Animación con Lottie
const SpecIcons = () => {
	return <Icons src={IconsPNG} alt="" />;
};
const SpecFuncionesComp = () => {
	return (
		<CompContainer>
			<Img src={SpecImg} alt="" />
			<SpecIcons />
		</CompContainer>
	);
};

export default SpecFuncionesComp;
