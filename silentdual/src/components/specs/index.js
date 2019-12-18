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

//assets
import { breakpoints } from "../../assets/styles/breakpoints";

//components:
import SpecSensores from "./SpecSensores";
import SpecFuncionamiento from "./SpecFuncionamiento";
import SpecEntradasAire from "./SpecEntradasAire";

const Section = styled(a.section)`
	padding: 120px 0;
	position: relative;

	@media screen and (min-width: ${breakpoints.large}px) {
		padding: 100vh 0 0;
	}
`;

const Background = styled(a.div)`
	display: none;
	background-color: white;
	@media screen and (min-width: ${breakpoints.large}px) {
		display: inline-block;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100vw;
		height: 100vh;
	}
`;

const Title = styled(a.h2)`
	position: fixed;
	top: 140px;
	left: 0;
	right: 0;
	bottom: inherit;
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
	overflow: hidden;

	@media screen and (min-width: ${breakpoints.large}px) {
		overflow: inherit;
	}
`;

const TitleResponsive = styled(a.h2)`
	margin: 0 auto 60px;
`;

const Specs = () => {
	const { caracteristicas } = data;
	const [width, setWidth] = useState(null);

	const widthWindow = useWindowSize();

	const { format } = new Intl.NumberFormat("en-US", {
		maximumFractionDigits: 2
	});

	useEffect(() => {
		setWidth(widthWindow.width);
	}, [widthWindow]);

	const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);
	//useIntersect devulve ref y entry. ref es la referencia del elemento del cual queremos controlar su visualización en el viewport
	//entry es el objeto con la información de la posición del elemento
	const [ref, entry] = useIntersect({
		//threshold es la cantidad de elemento visible para que se dispare el evento
		threshold: buildThresholdArray()
	});

	const backgroundProps = useSpring({
		from: {
			opacity: 1
		},
		to: {
			opacity: format(entry.intersectionRatio) > 0 ? 1 : 0
		}
	});

	const sectionProps = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: format(entry.intersectionRatio) > 0 ? 1 : 0
		}
	});

	const mobileTitleProps = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: format(entry.intersectionRatio) > 0.5 ? 1 : 0
		}
	});

	const titleProps = useSpring({
		from: {
			opacity: 0,
			transform: `translate(0px, 100px)`
		},
		to: {
			opacity: format(entry.intersectionRatio) > 0 ? 1 : 0,
			transform:
				format(entry.intersectionRatio) > 0
					? `translate(0px, 0px)`
					: `translate(0px, 100px)`
		}
	});

	const isResponsive = width < breakpoints.desktop;

	return isResponsive ? (
		<SectionResponsive id={caracteristicas.id}>
			<Wrapper>
				<Row>
					<Column xs={12} sm={8} align="center">
						<TitleResponsive
							ref={ref}
							style={mobileTitleProps}
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
			style={{
				...sectionProps,
				visibility: sectionProps.opacity.interpolate(o =>
					o === 0 ? "hidden" : "visible"
				)
			}}
		>
			<Wrapper>
				<a.div id={caracteristicas.id} ref={ref}>
					<Background id="background" style={backgroundProps} />
					<Row>
						<Column xs={12}>
							<Title
								style={titleProps}
								className={"headingMedium"}
								dangerouslySetInnerHTML={{
									__html: caracteristicas.sectionTitle
								}}
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
				</a.div>
			</Wrapper>
		</Section>
	);
};

export default Specs;
