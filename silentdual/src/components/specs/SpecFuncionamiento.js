import React from "react";
import styled from "styled-components";
import { useSpring, animated as a } from "react-spring";

//utils:
import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";
import useIntersect from "../../utils/useIntersect";

//components:
import SpecFuncionesComp from "./SpecFuncionamientoComp";

const Container = styled.div`
	margin: 80vh auto;
	position: relative;
	height: 100vh;
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
	margin: 0 auto 20px;
`;

const ResponsiveSubtitle = styled.h4`
	margin: 0 auto 10px;
`;

const ResponsiveDescription = styled.p`
	font-weight: lighter;
	margin: 0 auto 5px;
`;

const SpecFuncionamiento = ({ isResponsive }) => {
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
						2 modos de funcionamiento
					</ResponsiveTitle>
					<ResponsiveSubtitle className={"lead"}>
						Contínuo e intermitente
					</ResponsiveSubtitle>
					<ResponsiveDescription className={"lead"}>
						<strong>Funcionamiento contínuo </strong>
						cuando los sensores no detectan presencia ni cambios de humedad,{" "}
						<strong>funcionamiento intermitente</strong> cuando uno de los
						sensores se activa.
					</ResponsiveDescription>
				</ResponsiveInfo>
			</Column>
			<SpecFuncionesComp
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
							<SpecFuncionesComp
								isResponsive={isResponsive}
								imageProps={imageProps}
								iconsProps={iconsProps}
							/>
						</Column>
						<Column xs={12} md={6}>
							<Info>
								<Title style={titleProps} className={"headingSmall"}>
									2 modos de funcionamiento
								</Title>
								<Subtitle style={subtitleProps} className={"lead"}>
									Contínuo e intermitente
								</Subtitle>
								<Description style={descriptionProps} className={"lead"}>
									<strong>Funcionamiento contínuo </strong>
									cuando los sensores no detectan presencia ni cambios de
									humedad, <strong>funcionamiento intermitente</strong> cuando
									uno de los sensores se activa.
								</Description>
							</Info>
						</Column>
					</Row>
				</Wrapper>
			</Fixed>
		</Container>
	);
};

export default SpecFuncionamiento;
