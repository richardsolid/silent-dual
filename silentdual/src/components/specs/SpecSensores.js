import React from "react";
import styled from "styled-components";
import { useSpring, animated as a } from "react-spring";

//utils:
import useIntersect from "../../utils/useIntersect";
import Column from "../../utils/grid/column";
import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";

//images:
import SpecImg from "../../images/spec-sensores.png";
import IconsPNG from "../../images/spec-sensores-icons.png";

const Container = styled.div`
	position: relative;
	height: 100vh;
	top: 10vh;
`;

const Fixed = styled.div`
	position: fixed;
	top: 30vh;
`;

const Title = styled(a.h3)``;

const Subtitle = styled(a.h4)``;

const Description = styled(a.p)`
	font-weight: lighter;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
`;

const Img = styled(a.img)`
	width: 100%;
	object-fit: contain;
`;

const Icons = styled(a.img)`
	position: absolute;
	right: 16%;
	top: -31%;
	width: 10rem;
`;

const SpecSensores = () => {
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
			opacity: (ratio - 0.6) * 8 || 0
		}
	});

	return (
		<Container ref={ref}>
			<Fixed>
				<Wrapper>
					<Row>
						<Column xs={12} md={6}>
							<Info>
								<Title style={titleProps} className={"headingSmall"}>
									2 sensores
								</Title>
								<Subtitle style={subtitleProps} className={"lead"}>
									Presencia y humedad
								</Subtitle>
								<Description style={descriptionProps} className={"lead"}>
									Sensores de presencia y humedad, se activa automáticamente
									cuando detecta <strong>movimiento</strong> o un cambio en los
									niveles de <strong>saturación</strong>.
								</Description>
							</Info>
						</Column>
						<Column xs={12} md={6}>
							<Img style={imageProps} src={SpecImg} alt="" />
							<Icons style={iconsProps} src={IconsPNG} alt="" />
						</Column>
					</Row>
				</Wrapper>
			</Fixed>
		</Container>
	);
};

export default SpecSensores;
