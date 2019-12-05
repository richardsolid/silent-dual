import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import useIntersect from "../../utils/useIntersect";
import styled from "styled-components";

//Utils
import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";
import useWindowSize from "../../utils/useWindowSize";

//Assets
import { breakpoints } from "../../assets/styles/breakpoints";

//images:
import exploded from "../../images/explosionado.png";
import exploded1 from "../../images/explosionado_01.png";
import exploded2 from "../../images/explosionado_02.png";
import exploded3 from "../../images/explosionado_03.png";
import exploded4 from "../../images/explosionado_04.png";

//data
import data from "../../data";

//Components
import HotspotItem from "../hotpost";

const DiscoverSectionContainer = styled.section`
	padding: 100vh 0;
	background-color: black;
	color: white;
`;

const DiscoverSectionIntersect = styled.div`
	height: 200vh;
`;

const Fixed = styled.div`
	position: fixed;

	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
`;

const DiscoverSectionLayer = styled.div`
	height: 100vh;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;

	color: white;
`;

const HotspotLayer = styled.div`
	position: relative;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
`;

const ImgRef = styled(a.img)`
	width: 100%;
	height: auto;
	opacity: 0;
`;

const ImgExploded = styled.div`
	position absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	width: 100%;
	margin: 0 auto;

	display: flex;
	justify: content: center;
	align-items: center;

	img {
		position: absolute;
		height: 100%;
	}

	.exploded1 {
		z-index: 4
	}
	.exploded2 {
		z-index: 3
	}
	.exploded3 {
		z-index: 2
	}
	.exploded4 {
		z-index: 1
	}
`;

const DiscoverSection = () => {
	const size = useWindowSize();
	const [width, setWidth] = useState(null);
	const hotspots = data.descubrelo.hotspots;

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

	console.log(format(entry.intersectionRatio));

	const propsExploded1 = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: ratio * 2
		}
	});

	const propsExploded2 = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: ratio * 2
		}
	});

	const propsExploded3 = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: ratio * 2
		}
	});

	const propsExploded4 = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: ratio * 2
		}
	});

	useEffect(() => {
		setWidth(size.width);
	}, [size]);

	return (
		<DiscoverSectionContainer>
			<DiscoverSectionIntersect ref={ref}>
				<Fixed>
					<Wrapper>
						<Row>
							<Column xs={12}>
								<h2 className="headingMedium">Descubre sus componentes</h2>
							</Column>

							<Column xs={12} direction="column">
								<ImgExploded>
									<a.img
										style={propsExploded4}
										src={exploded1}
										className="exploded1"
										alt="Discover exploded"
									/>
									<a.img
										style={propsExploded3}
										src={exploded2}
										className="exploded2"
										alt="Discover exploded"
									/>
									<a.img
										style={propsExploded2}
										src={exploded3}
										className="exploded3"
										alt="Discover exploded"
									/>
									<a.img
										style={propsExploded1}
										src={exploded4}
										className="exploded4"
										alt="Discover exploded"
									/>
								</ImgExploded>

								<HotspotLayer>
									<ImgRef src={exploded} alt="Discover exploded" />

									{hotspots.map((hotspot, index) => (
										<HotspotItem
											key={`hotspot_${index}`}
											content={hotspot}
											number={index + 1}
										/>
									))}
								</HotspotLayer>
							</Column>

							<Column xs={12} direction="column">
								{width < breakpoints.large &&
									hotspots.map((hotspot, index) => (
										<>
											<h4 className="bodyNormal">
												{index + 1 + ". " + hotspot.title}
											</h4>
											<p>{hotspot.text}</p>
										</>
									))}
							</Column>
						</Row>
					</Wrapper>
				</Fixed>
			</DiscoverSectionIntersect>
		</DiscoverSectionContainer>
	);
};

export default DiscoverSection;
