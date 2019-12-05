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
	height: 150vh;
`;

const Fixed = styled.div`
	position: fixed;
	top: 30%;
`;
const Title = styled(a.h3)`
	width: 139px;
	height: 34px;
	color: rgb(0, 0, 0);
	font-size: 28px;
	font-family: DINBold;
	letter-spacing: 0px;
	line-height: 34px;
`;
const Subtitle = styled(a.h4)`
	width: 195px;
	height: 30px;
	color: rgb(0, 0, 0);
	font-size: 20px;
	font-family: DINBold;
	letter-spacing: 0px;
	line-height: 30px;
`;
const Description = styled(a.p)`
	width: 460px;
	height: 148px;
	color: rgb(0, 0, 0);
	font-size: 20px;
	font-family: DINLightAlternate;
	letter-spacing: 0px;
	line-height: 30px;
`;
const Info = styled.div`
	display: flex;
	flex-direction: column;
`;

const SpecSensor = () => {
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
			opacity: (ratio - 0.15) * 8 || 0
		}
	});

	const descriptionProps = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: (ratio - 0.2) * 8 || 0
		}
	});

	const imageProps = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: (ratio - 0.1) * 8 || 0
		}
	});

	const iconsProps = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: (ratio - 0.2) * 8 || 0
		}
	});
	return (
		<Container ref={ref}>
			<Fixed>
				<Wrapper>
					<Row>
						<Column xs={12} md={6}>
							<Info>
								<Title style={titleProps}>2 entradas de aire</Title>
								<Subtitle style={subtitleProps}>Frontal y perimetral</Subtitle>
								<Description style={descriptionProps}>
									Prestaciones aerodinámicas que le proporcionan la entrada{" "}
									<strong>frontal</strong>y <strong>perimetral</strong> de aire.
								</Description>
							</Info>
						</Column>
						<Column xs={12} md={6}>
							<SpecEntradasAireComp
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
