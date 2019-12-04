import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

//utils:
import useWindowSize from "../../utils/useWindowSize";

//grid:
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

const LeadSection = styled.section`
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	background-color: gray;
	position: relative;
	color: white;
	overflow: hidden;

	img {
		object-fit: cover;
		min-width: 100%;
		min-height: 100%;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100vh;
		width: 100vw;

		position: absolute;
		border-radius: 5px;
		background-size: cover;
		background-position: center center;
		background-repeat: no-repeat;
		will-change: transform;

		&.leg {
			z-index: 2;
			left: -3%;
			bottom: 6%;
		}

		&.head {
			z-index: 1;
			bottom: 7%;
			left: 9%;
		}

		&.bath {
			z-index: 3;
			bottom: 20%;
			left: 14%;
		}
	}

	&:before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
		z-index: 1;
		height: 100vh;
		width: 100vw;

		background-color: #000;
		opacity: 0.6;
	}
`;

const BackgroundImage = styled.img`
	z-index: 0;
	top: 0 !important;
`;

const Description = styled.h2`
	font-family: DINBold;
	font-size: 28px;
	line-height: 34px;
	text-align: center;
	position: absolute;
	z-index: 1000;
	width: 80%;
	@media screen and (min-width: ${breakpoints.tablet}px) {
		font-size: 33px;
		line-height: 39px;
	}
`;

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const legtrans = (x, y) => `translate3d(${x / 20}px,${y / 10}px,0) scale(1.1)`;
const headtrans = (x, y) => `translate3d(${x / 25}px,${y / 50}px,0) scale(1.4)`;
const bathtrans = (x, y) => `translate3d(${x / 20}px,${y / 80}px,0) scale(1.5)`;

const Lead = () => {
	const widthWindow = useWindowSize();

	const { lead } = data;

	const [width, setWidth] = useState(null);

	useEffect(() => {
		setWidth(widthWindow.width);
	}, [widthWindow]);

	const [props, set] = useSpring(() => ({
		xy: [0, 0],
		config: { mass: 10, tension: 550, friction: 140 }
	}));

	if (width && typeof width === "number") {
		if (width > breakpoints.large) {
			return (
				<LeadSection
					onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
				>
					<BackgroundImage src={BackgroundImg} alt="background" />

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

					<Wrapper>
						<Row>
							<Column xs={12}>
								<Description>{lead.description}</Description>
							</Column>
						</Row>
					</Wrapper>
				</LeadSection>
			);
		} else {
			return (
				<LeadSection>
					<BackgroundImage src={BackgroundImg} alt="background" />
					<Wrapper>
						<Row>
							<Column xs={12}>
								<Description>{lead.description}</Description>
							</Column>
						</Row>
					</Wrapper>
				</LeadSection>
			);
		}
	}
	return <div>loading...</div>;
};

export default Lead;
