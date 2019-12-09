import React from "react";
import { useSpring, animated as a } from "react-spring";
import styled from "styled-components";

//utils:
import useIntersect from "../../utils/useIntersect";
import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";

//components:
import SpecEntradasAireComp from "./SpecEntradasAireComp";

const Container = styled.div`
	position: relative;
	height: 100vh;
	margin-bottom: 90vh;
`;

const Fixed = styled.div`
	position: fixed;
	top: 220px;
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

const ResponsiveTitle = styled.h3`
	margin-bottom: 20px;
`;

const ResponsiveSubtitle = styled.h4`
	margin-bottom: 10px;
`;

const ResponsiveDescription = styled.p`
	font-weight: lighter;
	margin: 0 auto;
`;

const SpecSensor = ({ isResponsive }) => {
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

	const ratio = format(entry.intersectionRatio);

	const titleProps = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: (ratio - 0.1) * 8 || 0
		}
	});

	const subtitleProps = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: (ratio - 0.2) * 8 || 0
		}
	});

	const descriptionProps = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: (ratio - 0.4) * 8 || 0
		}
	});

	const imageProps = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: (ratio - 0.5) * 8 || 0
		}
	});

	const iconsProps = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: (ratio - 0.65) * 8 || 0
		}
	});

	return isResponsive ? (
		<Row>
			<Column xs={12} md={6}>
				<ResponsiveInfo>
					<ResponsiveTitle className={"headingSmall"}>
						2 entradas de aire
					</ResponsiveTitle>
					<ResponsiveSubtitle className={"lead"}>
						Frontal y perimetral
					</ResponsiveSubtitle>
					<ResponsiveDescription className={"lead"}>
						Prestaciones aerodinámicas que le proporcionan la entrada{" "}
						<strong>frontal</strong> y <strong>perimetral</strong> de aire.
					</ResponsiveDescription>
				</ResponsiveInfo>
			</Column>
			<SpecEntradasAireComp
				isResponsive={isResponsive}
				imageProps={imageProps}
				iconsProps={iconsProps}
			/>
		</Row>
	) : (
		<Container ref={ref}>
			<Fixed>
				<Wrapper>
					<Row>
						<Column xs={12} md={6}>
							<Info>
								<Title style={titleProps} className={"headingSmall"}>
									2 entradas de aire
								</Title>
								<Subtitle style={subtitleProps} className={"lead"}>
									Frontal y perimetral
								</Subtitle>
								<Description style={descriptionProps} className={"lead"}>
									Prestaciones aerodinámicas que le proporcionan la entrada{" "}
									<strong>frontal</strong> y <strong>perimetral</strong> de
									aire.
								</Description>
							</Info>
						</Column>
						<Column xs={12} md={6}>
							<SpecEntradasAireComp
								isResponsive={isResponsive}
								imageProps={imageProps}
								iconsProps={iconsProps}
							/>
						</Column>
					</Row>
				</Wrapper>
			</Fixed>
		</Container>
	);
};

export default SpecSensor;
