import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { TweenMax, Power3 } from "gsap";

//Assets
import variables from "../../assets/styles/variables";
import { breakpoints } from "../../assets/styles/breakpoints";

//Utils
import useWindowSize from "../../utils/useWindowSize";

const HotspotItemContainer = styled.div`
	position: absolute;
	top: ${({ content }) => content.top}%;
	left: ${({ content }) => content.left}%;

	overflow: hidden;
	pointer-events: none;

	@media screen and (min-width: ${breakpoints.large}px) {
		overflow: visible;
		pointer-events: initial;
	}
`;

const HotspotItemButton = styled.div`
	box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0);
	border-radius: 50%;
	cursor: pointer;
	transition: 0.4s;

	background-color: ${variables.primary};

	line-height: 36px;
	width: 36px;

	display: flex;
	justify-content: center;
	align-items: center;

	font-weight: 700;

	&:hover {
		box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.2);
		background-color: ${variables.primaryDark};
	}
`;

const HotspotItemContent = styled.div`
	position: absolute;

	width: 250px;
	padding: 20px;
	background-color: white;
	z-index: 100;
	${({ content }) =>
		content.top > 50 ? "bottom: calc(100% + 10px)" : "top: calc(100% + 10px)"};
	${({ content }) => (content.left > 50 ? "right: -25px" : "left: -25px")};

	&:before {
		content: "";
		position: absolute;
		${({ content }) => (content.top > 50 ? "top: 100%" : "bottom: 100%")};
		${({ content }) => (content.left > 50 ? "right: 37px" : "left: 37px")};

		${({ content }) =>
			content.top > 50
				? "width: 0; height: 0; border-style: solid; border-width: 10px 7.5px 0 7.5px; border-color: white transparent transparent transparent;"
				: "width: 0; height: 0; border-style: solid; border-width: 0 7.5px 10px 7.5px; border-color: transparent transparent white transparent;"}
	}

	h4 {
		color: black;
		margin: 0;
	}

	p {
		color: black;
		margin: 8px 0 0 0;
	}
`;

const HotspotItem = ({ content, number }) => {
	const size = useWindowSize();

	const [width, setWidth] = useState(null);

	const hotstopEl = useRef(null);
	const hotstopButtonEl = useRef(null);

	const resetHotspot = () => {
		const hotspotContent = document.querySelectorAll(".HotspotItemContent");
		const hotspotButtons = document.querySelectorAll(".HotspotItemButton");

		for (var i = 0; i < hotspotContent.length; i++) {
			hotspotContent[i].classList.remove("open");

			TweenMax.to(hotspotContent[i], 0.6, {
				autoAlpha: 0,
				opacity: 0,
				x: 25,
				ease: Power3.easeInOut
			});
		}

		for (var j = 0; j < hotspotButtons.length; j++) {
			hotspotButtons[j].classList.remove("open");

			TweenMax.to(hotspotButtons[j], 0.2, {
				rotation: 0,
				transformOrigin: "50% 50%",
				ease: Power3.easeInOut
			});
		}
	};

	const handleClickHotspotButton = () => {
		if (
			hotstopEl.current.classList.contains("open") ||
			hotstopButtonEl.current.classList.contains("open")
		) {
			resetHotspot();
			TweenMax.to(hotstopEl.current, 0.6, {
				autoAlpha: 0,
				opacity: 0,
				x: 25,
				ease: Power3.easeInOut
			});
		} else {
			resetHotspot();
			TweenMax.to(hotstopEl.current, 0.6, {
				autoAlpha: 1,
				opacity: 1,
				x: 0,
				ease: Power3.easeInOut
			});

			hotstopEl.current.classList.add("open");
			hotstopButtonEl.current.classList.add("open");
		}
	};

	useEffect(() => {
		resetHotspot();
	}, []);

	useEffect(() => {
		setWidth(size.width);
	}, [size]);

	return (
		<HotspotItemContainer content={content}>
			<HotspotItemButton
				className="HotspotItemButton"
				alt="button"
				onMouseEnter={() => {
					width >= breakpoints.large && handleClickHotspotButton();
				}}
				onMouseLeave={() => {
					width >= breakpoints.large && handleClickHotspotButton();
				}}
				ref={hotstopButtonEl}
			>
				{number}
			</HotspotItemButton>

			<HotspotItemContent
				className="HotspotItemContent"
				ref={hotstopEl}
				content={content}
			>
				<h4 className="bodyNormal">{content.title}</h4>
				<p className="bodySmall">{content.text}</p>
			</HotspotItemContent>
		</HotspotItemContainer>
	);
};

export default HotspotItem;
