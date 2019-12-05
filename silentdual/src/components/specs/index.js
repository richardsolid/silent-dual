import React from "react";
import { useSpring, animated as a } from "react-spring";
import useIntersect from "../../utils/useIntersect";
import styled from "styled-components";
import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";
import SpecSensores from "./SpecSensores";
import SpecFuncionamiento from "./SpecFuncionamiento";
import SpecEntradasAire from "./SpecEntradasAire";

const Section = styled.section`
	margin-top: 1000px;
	margin-bottom: 500px;
	height: fit-content;
	position: relative;
`;
const Title = styled(a.h2)`
	position: fixed;
	top: 10%;
	left: 0;
	right: 0;
	color: rgb(0, 0, 0);
	font-family: DINBold;
	font-size: 33px;
	line-height: 39px;
	text-align: center;
	width: 100%;
`;
const Specs = () => {
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

	return (
		<Section id="specs" ref={ref}>
			<Wrapper>
				<Row>
					<Column xs={12}>
						<Title style={props}>La única opción doblemente inteligente</Title>
					</Column>
				</Row>
				<SpecSensores />
				<SpecFuncionamiento />
				<SpecEntradasAire />
			</Wrapper>
		</Section>
	);
};

export default Specs;
