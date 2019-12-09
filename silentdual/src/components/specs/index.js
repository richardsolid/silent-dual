import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated as a } from "react-spring";

//utils:
import useWindowSize from "../../utils/useWindowSize";
import useIntersect from "../../utils/useIntersect";
import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";
import { breakpoints } from "../../assets/styles/breakpoints";

//components:
import SpecSensores from "./SpecSensores";
import SpecFuncionamiento from "./SpecFuncionamiento";
import SpecEntradasAire from "./SpecEntradasAire";

const Section = styled(a.section)`
	position: relative;
`;
const Title = styled(a.h2)`
	position: fixed;
	top: 120px;
	left: 0;
	right: 0;
	color: black;
	text-align: center;
	width: 100%;
	margin: 0;
`;

const SectionResponsive = styled.section`
	display: flex;
	height: fit-content;
	padding: 100px 0;
	color: black;
	text-align: center;
`;

const TitleResponsive = styled.h2`
	margin: 0 auto 60px;
`;

const Specs = () => {
	const [width, setWidth] = useState(null);

	const widthWindow = useWindowSize();

	useEffect(() => {
		setWidth(widthWindow.width);
	}, [widthWindow]);

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

	const props = useSpring({
		from: {
			opacity: 0
			//transform: `translateY(200px)`
		},
		to: {
			opacity: format(entry.intersectionRatio) * 8 || 0
			//transform: `translateY(${show ? 0 : 200}px)`
		}
	});

	const sectionProps = useSpring({
		from: {
			zIndex: -1
		},
		to: {
			zIndex: entry.intersectionRatio > 0 ? 100 : -1
		}
	});

	const isResponsive = width < breakpoints.tablet;

	return isResponsive ? (
		<SectionResponsive id="caracteristicas">
			<Wrapper>
				<Row>
					<Column xs={12}>
						<TitleResponsive className={"headingMedium"}>
							La única opción doblemente inteligente
						</TitleResponsive>
					</Column>
				</Row>
				<SpecSensores isResponsive={isResponsive} />
				<SpecFuncionamiento isResponsive={isResponsive} />
				<SpecEntradasAire isResponsive={isResponsive} />
			</Wrapper>
		</SectionResponsive>
	) : (
		<Section id="caracteristicas" ref={ref} style={sectionProps}>
			<Wrapper>
				<Row>
					<Column xs={12}>
						<Title style={props} className={"headingMedium"}>
							La única opción doblemente inteligente
						</Title>
					</Column>
				</Row>
				<SpecSensores isResponsive={isResponsive} />
				<SpecFuncionamiento isResponsive={isResponsive} />
				<SpecEntradasAire isResponsive={isResponsive} />
			</Wrapper>
		</Section>
	);
};

export default Specs;
