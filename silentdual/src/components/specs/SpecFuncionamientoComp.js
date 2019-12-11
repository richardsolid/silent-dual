import React from "react";
import styled from "styled-components";
import { animated as a } from "react-spring";
import Column from "../../utils/grid/column";
import { breakpoints } from "../../assets/styles/breakpoints";

//images:
import SpecImg from "../../images/spec-funcionamiento.png";
import Icon1PNG from "../../images/spec-funcionamiento-icons1.png";
import Icon2PNG from "../../images/spec-funcionamiento-icons2.png";

const CompContainer = styled.div`
	position: relative;
	height: calc(100vh - 400px);
	margin: 0 auto;
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
	margin: 45px auto 80px;

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

const SpecSensoresComp = ({
	imageProps,
	icon1Props,
	icon2Props,
	isResponsive
}) => {
	return isResponsive ? (
		<Column xs={12} md={6}>
			<ResponsiveImageContainer>
				<ResponsiveImg style={imageProps} src={SpecImg} alt="" />
				<ResponsiveIcons style={icon1Props} src={Icon1PNG} alt="" />
				<ResponsiveIcons style={icon2Props} src={Icon2PNG} alt="" />
			</ResponsiveImageContainer>
		</Column>
	) : (
		<CompContainer>
			<Img src={SpecImg} alt="image" style={imageProps} />
			<Icons src={Icon1PNG} alt="icons" style={icon1Props} />
			<Icons src={Icon2PNG} alt="icons" style={icon2Props} />
		</CompContainer>
	);
};

export default SpecSensoresComp;
