import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated as a } from "react-spring";
import data from "../../data";

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
	padding: 120vh 0 150vh;
	position: relative;
	background: white;

	@media screen and (min-width: ${breakpoints.large}px) {
		padding: 100vh 0 80vh;
	}
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
	const { caracteristicas } = data;
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
		},
		to: {
			opacity: format(entry.intersectionRatio) === 0.13 ? 1 : 0
		}
	});

	const sectionProps = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: entry.intersectionRatio >= 0.13 ? 1 : 0
		}
	});

	console.log(format(entry.intersectionRatio));

	const isResponsive = width < breakpoints.desktop;

	return isResponsive ? (
		<SectionResponsive id="caracteristicas">
			<Wrapper>
				<Row>
					<Column xs={12}>
						<TitleResponsive
							className={"headingMedium"}
							dangerouslySetInnerHTML={{ __html: caracteristicas.sectionTitle }}
						/>
					</Column>
				</Row>
				<SpecSensores
					isResponsive={isResponsive}
					data={caracteristicas.specs[0]}
				/>
				<SpecFuncionamiento
					isResponsive={isResponsive}
					data={caracteristicas.specs[1]}
				/>
				<SpecEntradasAire
					isResponsive={isResponsive}
					data={caracteristicas.specs[2]}
				/>
			</Wrapper>
		</SectionResponsive>
	) : (
		<Section
			id="caracteristicas"
			ref={ref}
			style={{
				...sectionProps,
				visibility: sectionProps.opacity.interpolate(o =>
					o === 0 ? "hidden" : "visible"
				)
			}}
		>
			<Wrapper>
				<Row>
					<Column xs={12}>
						<Title
							className={"headingMedium"}
							dangerouslySetInnerHTML={{ __html: caracteristicas.sectionTitle }}
						/>
					</Column>
				</Row>
				<SpecSensores
					isResponsive={isResponsive}
					data={caracteristicas.specs[0]}
				/>
				<SpecFuncionamiento
					isResponsive={isResponsive}
					data={caracteristicas.specs[1]}
				/>
				<SpecEntradasAire
					isResponsive={isResponsive}
					data={caracteristicas.specs[2]}
				/>
			</Wrapper>
		</Section>
	);
};

export default Specs;
