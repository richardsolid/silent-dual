import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import useIntersect from "../../utils/useIntersect";
import useWindowSize from "../../utils/useWindowSize";
import { breakpoints } from "../../assets/styles/breakpoints";
import data from "../../data";
import FullImg from "../../images/imagen_chica_background.jpg";

const Parallax = styled.div``;
const Fixed = styled(animated.div)`
	top: 0;
	width: 100%;
	position: fixed;
	overflow: hidden;
`;
const LeadSection = styled(animated.section)`
	height: auto;
	position: relative;
	color: white;
	overflow: hidden;
	line-height: 0;
	height: 100vh;
	background-image: url(${FullImg});
	background-size: cover;
	background-position: 30% center;

	@media screen and (min-width: ${breakpoints.large}px) {
		background-image: none;
		height: 50vh;
	}

	img {
		width: 100%;
		&.bg {
			z-index: 1;
			position: absolute;
			top: 0;
			left: 0;
		}
	}
`;

const BackgroundImage = styled.img`
	width: 100%;
`;

const Description = styled(animated.div)`
	background-color: rgba(0, 0, 0, 0.5);
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
`;

const DescriptionH2 = styled(animated.h2)`
	max-width: 70%;
	font-weight: bold;
	font-size: 28px;
	line-height: 34px;
	text-align: center;
	@media screen and (min-width: ${breakpoints.large}px) {
		max-width: 30%;
		font-size: 33px;
		line-height: 39px;
	}
`;

const Lead = () => {
	const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);
	//useIntersect devulve ref y entry. ref es la referencia del elemento del cual queremos controlar su visualización en el viewport
	//entry es el objeto con la información de la posición del elemento
	const [ref, entry] = useIntersect({
		//threshold es la cantidad de elemento visible para que se dispare el evento
		threshold: buildThresholdArray()
	});

	//convertir intersectionRatio en valor con dos decimales
	const ratio = Math.round(entry.intersectionRatio * 100) / 100;

	const titleProps = useSpring({
		from: {
			opacity: 0,
			transform: `translate(0px,50px)`
		},
		to: {
			opacity: ratio > 0.75 ? 1 : 0,
			transform: ratio >= 0.75 ? `translate(0px, 0px)` : `translate(0px, 50px)`
		}
	});

	const parallaxProps = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: entry.intersectionRatio > 0 ? 1 : 0
		}
	});

	const sectionProps = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: entry.intersectionRatio > 0 ? 1 : 0
		}
	});

	const mobileProps = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: entry.intersectionRatio > 0.5 ? 1 : 0
		}
	});

	const widthWindow = useWindowSize();

	const { lead } = data;

	const [width, setWidth] = useState(null);

	useEffect(() => {
		setWidth(widthWindow.width);
	}, [widthWindow]);

	if (width && typeof width === "number") {
		if (width > breakpoints.large) {
			return (
				<LeadSection
					id="descubrelo"
					ref={ref}
					style={{
						...sectionProps,
						visibility: sectionProps.opacity.interpolate(o =>
							o === 0 ? "hidden" : "visible"
						)
					}}
				>
					<Fixed style={parallaxProps}>
						<Parallax>
							<BackgroundImage src={FullImg} alt="background" />
						</Parallax>
						<Description>
							<DescriptionH2 style={titleProps}>
								{lead.description}
							</DescriptionH2>
						</Description>
					</Fixed>
				</LeadSection>
			);
		} else {
			return (
				<LeadSection ref={ref} id="descubrelo">
					<Description>
						<DescriptionH2 style={mobileProps}>
							{lead.description}
						</DescriptionH2>
					</Description>
				</LeadSection>
			);
		}
	}
	return <div>loading...</div>;
};

export default Lead;
