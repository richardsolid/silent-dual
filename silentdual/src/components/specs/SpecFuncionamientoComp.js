import React from "react";
import styled from "styled-components";
import { animated as a } from "react-spring";
import Column from "../../utils/grid/column";
import { breakpoints } from "../../assets/styles/breakpoints";

//images:
import SpecImg from "../../images/spec-funcionamiento.png";
import IconsPNG from "../../images/spec-funcionamiento-icons.png";

const CompContainer = styled.div`
	position: relative;
	height: calc(100vh - 280px);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Img = styled(a.img)`
	max-width: 100%;
	max-height: 100%;
	object-fit: cover;
`;

const Icons = styled(a.img)`
	position: absolute;
	max-width: 100%;
	max-height: 100%;
`;

//RESPONSIVE style:

const ResponsiveImageContainer = styled.div`
	position: relative;
	margin: 45px auto 140px;

	@media screen and (min-width: ${breakpoints.large}px) {
		margin: 45px 60px 70px;
	}
`;

const ResponsiveImg = styled.img`
	width: 100%;
`;

const ResponsiveIcons = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
`;

const SpecSensoresComp = ({ imageProps, iconsProps, isResponsive }) => {
	return isResponsive ? (
		<Column xs={12} md={6}>
			<ResponsiveImageContainer>
				<ResponsiveImg style={imageProps} src={SpecImg} alt="" />
				<ResponsiveIcons style={iconsProps} src={IconsPNG} alt="" />
			</ResponsiveImageContainer>
		</Column>
	) : (
		<CompContainer>
			<Img src={SpecImg} alt="image" style={imageProps} />
			<Icons src={IconsPNG} alt="icons" style={iconsProps} />
		</CompContainer>
	);
};

export default SpecSensoresComp;
