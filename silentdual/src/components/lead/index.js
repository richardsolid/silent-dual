import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import useIntersect from "../../utils/useIntersect";

//utils:
import useWindowSize from "../../utils/useWindowSize";
import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";

//styles:
import { breakpoints } from "../../assets/styles/breakpoints";

//data:
import data from "../../data";

//images:
import BackgroundImg from "../../images/background_imatge_promo.png";
import LegImg from "../../images/cama_imatge_promo.png";
import HeadImg from "../../images/cap_imatge_promo.png";
import BathImg from "../../images/banyera_imatge_promo.png";

const Parallax = styled.div``;
const Fixed = styled(animated.div)`
	top: 0;
	width: 100%;
	position: fixed;
	overflow: hidden;
`;
const LeadSection = styled.section`
	height: auto;
	position: relative;
	color: white;
	overflow: hidden;

	.bg {
		object-fit: scale-down;
	}

	@media screen and (min-width: ${breakpoints.tablet}px) {
		margin-bottom: 100%;
		height: 2000px;

		img {
			width: 100%;
			&.bg {
				z-index: 1;
				position: absolute;
				top: 0;
				left: 0;
			}
			&.leg {
				z-index: 2;
				position: absolute;
				top: 0;
				left: 0;
			}

			&.head {
				z-index: 1;
				position: absolute;
				top: 0;
				left: 0;
			}

			&.bath {
				z-index: 3;
				position: absolute;
				top: 0;
				left: 0;
			}
		}
	}
`;

const BackgroundImage = styled.img`
	width: 100%;
`;

const Description = styled.h2`
	font-weight: bold;
	text-align: center;

	width: 80%;
	z-index: 1000;
	margin: 0 auto;

	@media screen and (min-width: ${breakpoints.large}) {
		position: absolute;
	}
`;

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const bgtrans = (x, y) => `translate3d(${x / 60}px,${y / 40}px,0) scale(1.05)`;
const legtrans = (x, y) => `translate3d(${x / 40}px,${y / 10}px,0) scale(1.05)`;
const headtrans = (x, y) =>
	`translate3d(${x / 60}px,${y / 15}px,0) scale(1.05)`;
const bathtrans = (x, y) =>
	`translate3d(${x / 40}px,${y / 20}px,0) scale(1.05)`;

const Lead = () => {
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

	const parallaxProps = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: (ratio - 0.1) * 8 || 0
		}
	});

	const widthWindow = useWindowSize();

	const { lead } = data;

	const [width, setWidth] = useState(null);

	useEffect(() => {
		setWidth(widthWindow.width);
	}, [widthWindow]);

	const [props, set] = useSpring(() => ({
		xy: [0, 0],
		config: { mass: 10, tension: 50, friction: 40 }
	}));

	if (width && typeof width === "number") {
		if (width > breakpoints.tablet) {
			return (
				<LeadSection
					ref={ref}
					onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
				>
					<Fixed style={parallaxProps}>
						<Parallax>
							<BackgroundImage src={BackgroundImg} alt="background" />
							<animated.img
								className="bg"
								src={BackgroundImg}
								alt="background"
								style={{ transform: props.xy.interpolate(bgtrans) }}
							/>
							<animated.img
								className="leg"
								src={LegImg}
								alt="leg"
								style={{ transform: props.xy.interpolate(legtrans) }}
							/>
							<animated.img
								className="head"
								src={HeadImg}
								alt="head"
								style={{ transform: props.xy.interpolate(headtrans) }}
							/>
							<animated.img
								className="bath"
								src={BathImg}
								alt="bath"
								style={{ transform: props.xy.interpolate(bathtrans) }}
							/>
						</Parallax>

						<Description
							className={
								width > breakpoints.tablet ? "headingMedium" : "headingSmall"
							}
						>
							{lead.description}
						</Description>
					</Fixed>
				</LeadSection>
			);
		} else {
			return (
				<LeadSection>
					<BackgroundImage
						src={BackgroundImg}
						alt="background"
						className={"bg"}
					/>

					<Description
						className={
							width > breakpoints.tablet ? "headingMedium" : "headingSmall"
						}
					>
						{lead.description}
					</Description>
				</LeadSection>
			);
		}
	}
	return <div>loading...</div>;
};

export default Lead;
