import React from "react";
import { useSpring, animated as a } from "react-spring";
import styled from "styled-components";

//utils:
import useIntersect from "../../utils/useIntersect";
import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";

//Assets
import { breakpoints } from "../../assets/styles/breakpoints";

//images:
import SpecImg from "../../images/spec-entradas-aire.png";
import Icon1PNG from "../../images/spec-entradas-aire-icons1.png";
import Icon2PNG from "../../images/spec-entradas-aire-icons2.png";

//components:
import SpecEntradasAireComp from "./SpecEntradasAireComp";

const Container = styled.div`
	position: relative;

	@media screen and (min-width: ${breakpoints.large}px) {
		height: 200vh;
		margin-top: 100vh;
		margin-bottom: 20vh;
	}
`;

const Fixed = styled.div`
	position: fixed;
	top: 300px;
`;
const Title = styled(a.h3)`
	margin: 0 0 32px 0;
`;

const Subtitle = styled(a.h4)`
	margin: 0 0 14px 0;
`;

const Description = styled(a.p)`
	font-weight: lighter;
	margin: 0;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

//RESPONSIVE:

const ResponsiveInfo = styled.div``;

const ResponsiveTitle = styled(a.h3)`
	margin: 0 auto 20px;
`;

const ResponsiveSubtitle = styled(a.h4)`
	margin: 0 auto 10px;
`;

const ResponsiveDescription = styled(a.p)`
	font-weight: lighter;
	margin: 0 auto 5px;
`;

const ResponsiveImageContainer = styled.div`
	position: relative;
	margin: 45px auto 0;

	@media screen and (min-width: ${breakpoints.large}px) {
		margin: 45px 60px;
	}
`;

const ResponsiveImg = styled(a.img)`
	width: 100%;
`;

const ResponsiveIcons = styled(a.img)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
`;

const SpecSensor = ({ isResponsive, data }) => {
	const { format } = new Intl.NumberFormat("en-US", {
		maximumFractionDigits: 2
	});

	const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);
	//useIntersect devulve ref y entry. ref es la referencia del elemento del cual queremos controlar su visualización en el viewport
	//entry es el objeto con la información de la posición del elemento
	const [ref, entry] = useIntersect({
		//threshold es la cantidad de elemento visible para que se dispare el evento
		threshold: buildThresholdArray()
	});

	const ratio = parseFloat(format(entry.intersectionRatio)) * 2;

	const titleProps = useSpring({
		from: {
			opacity: 0,
			transform: `translate(0px, 100px)`
		},
		to: {
			opacity: ratio >= 0.1 ? 1 : 0,
			transform: ratio >= 0.1 ? `translate(0px, 0px)` : `translate(0px, 100px)`
		}
	});

	const subtitleProps = useSpring({
		from: {
			opacity: 0,
			transform: `translate(0px, 100px)`
		},
		to: {
			opacity: ratio >= 0.2 ? 1 : 0,
			transform: ratio >= 0.2 ? `translate(0px, 0px)` : `translate(0px, 100px)`
		}
	});

	const descriptionProps = useSpring({
		from: {
			opacity: 0,
			transform: `translate(0px, 100px)`
		},
		to: {
			opacity: ratio >= 0.3 ? 1 : 0,
			transform: ratio >= 0.3 ? `translate(0px, 0px)` : `translate(0px, 100px)`
		}
	});

	const imageProps = useSpring({
		from: {
			opacity: 0,
			transform: `translate(0px, 100px)`
		},
		to: {
			opacity: ratio >= 0.4 ? 1 : 0,
			transform: ratio >= 0.4 ? `translate(0px, 0px)` : `translate(0px, 100px)`
		}
	});

	const icon1Props = useSpring({
		from: {
			opacity: 0,
			transform: `translate(0px, 100px)`
		},
		to: {
			opacity: ratio >= 0.5 ? 1 : 0,
			transform: ratio >= 0.5 ? `translate(0px, 0px)` : `translate(0px, 100px)`
		}
	});

	const icon2Props = useSpring({
		from: {
			opacity: 0,
			transform: `translate(0px, 100px)`
		},
		to: {
			opacity: ratio >= 0.6 ? 1 : 0,
			transform: ratio >= 0.6 ? `translate(0px, 0px)` : `translate(0px, 100px)`
		}
	});

	return isResponsive ? (
		<Container ref={ref}>
			<Row>
				<Column xs={12} sm={8} align="center">
					<ResponsiveInfo>
						<ResponsiveTitle
							style={titleProps}
							className={"headingSmall"}
							dangerouslySetInnerHTML={{ __html: data.title }}
						/>
						<ResponsiveSubtitle
							style={subtitleProps}
							className={"lead"}
							dangerouslySetInnerHTML={{ __html: data.subtitle }}
						/>
						<ResponsiveDescription
							style={descriptionProps}
							className={"lead"}
							dangerouslySetInnerHTML={{ __html: data.description }}
						/>
					</ResponsiveInfo>
				</Column>

				<Column xs={12} sm={8} align="center">
					<ResponsiveImageContainer>
						<ResponsiveImg style={imageProps} src={SpecImg} alt="" />
						<ResponsiveIcons style={icon1Props} src={Icon1PNG} alt="" />
						<ResponsiveIcons style={icon2Props} src={Icon2PNG} alt="" />
					</ResponsiveImageContainer>
				</Column>
			</Row>
		</Container>
	) : (
		<Container ref={ref}>
			<Fixed>
				<Wrapper>
					<Row>
						<Column xs={12} md={5}>
							<Info>
								<Title
									style={titleProps}
									className={"headingSmall"}
									dangerouslySetInnerHTML={{ __html: data.title }}
								/>
								<Subtitle
									style={subtitleProps}
									className={"lead"}
									dangerouslySetInnerHTML={{ __html: data.subtitle }}
								/>
								<Description
									style={descriptionProps}
									className={"lead"}
									dangerouslySetInnerHTML={{ __html: data.description }}
								/>
							</Info>
						</Column>
						<Column xs={12} md={6} align="right">
							<SpecEntradasAireComp
								isResponsive={isResponsive}
								imageProps={imageProps}
								icon1Props={icon1Props}
								icon2Props={icon2Props}
							/>
						</Column>
					</Row>
				</Wrapper>
			</Fixed>
		</Container>
	);
};

export default SpecSensor;
