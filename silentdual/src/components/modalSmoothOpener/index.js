import React, { Fragment, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Expo, TimelineMax } from "gsap";

import crossBlack from "../../images/arrow_drop_down.svg";
import cross from "../../images/cross.svg";

import useModalSmooth from "./useModalSmooth";

const ModalSmoothOpenerContainer = styled.div`
	position: absolute;
	opacity: 0;
	background: ${({ background }) => background};
	top: 50%;
	left: 50%;
`;

const ModalSmoothOpenerClose = styled.div`
	position: absolute;
	right: 20px;
	top: 20px;
	width: 20px;
	height: 20px;
	opacity: 0;
	z-index: 10;

	background: url(${cross}) no-repeat center center;
	background-size: 100%;
`;

const ModalSmoothOpenerCloseArrow = styled.div`
	position: absolute;
	right: 20px;
	top: 90px;
	width: 30px;
	height: 30px;
	opacity: 0;
	z-index: 10;
	background: url(${crossBlack}) no-repeat center center;
	background-size: 100%;
`;

const ModalSmoothOpenerContainerContent = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;

	box-sizing: border-box;
	height: 100%;
	opacity: 0;
	padding: ${({ background }) => (background === "white" ? "130px" : "20px")}
		20px 20px;

	@media screen and (min-width: 768px) {
		padding: ${({ background }) =>
			background === "white" ? "130px 8.3333% 40px" : "20px"};
		box-sizing: border-box;
	}

	@media screen and (orientation: landscape) and (max-width: 767px) {
		padding: ${({ background }) => (background === "white" ? "130px" : "20px")}
			40px 40px;
	}
`;

const ModalButton = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
`;

const ModalSmoothOpener = ({
	children,
	modalContainer,
	handleModalOpenened,
	background
}) => {
	let { isShowing, toggle, nodeData } = useModalSmooth(modalContainer);
	const modal = useRef(null);
	const modalClose = useRef(null);
	const modalContent = useRef(null);

	const openModal = el => {
		let tlOpen = new TimelineMax();

		document.body.style.overflow = "hidden";
		document.body.style.height = "100%";
		document.getElementsByTagName("html")[0].style.overflow = "hidden";
		document.getElementsByTagName("html")[0].style.height = "100%";

		tlOpen
			.set(el, {
				top: nodeData.top,
				left: nodeData.left,
				width: nodeData.width,
				height: nodeData.height,
				zIndex: background === "white" ? 10 : 1000
			})
			.to(el, 0.2, {
				opacity: 1,
				ease: Expo.easeInOut
			})
			.to(el, 0.4, {
				delay: 0.2,
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
				ease: Expo.easeInOut
			})
			.to([modalClose.current, modalContent.current], 0.4, {
				opacity: 1,
				overflow: "scroll",
				ease: Expo.easeInOut
			});

		setTimeout(() => {
			background === "white" && handleModalOpenened();
		}, 800);
	};

	const closeModal = el => {
		let tlClose = new TimelineMax();

		document.body.style.overflow = "visible";
		document.body.style.height = "inherit";
		document.getElementsByTagName("html")[0].style.overflow = "visible";
		document.getElementsByTagName("html")[0].style.height = "inherit";

		tlClose
			.to([modalClose.current, modalContent.current], 0.4, {
				opacity: 0,
				overflow: "hidden",
				ease: Expo.easeInOut
			})
			.to(el, 0.4, {
				delay: 0.2,
				top: nodeData.top,
				left: nodeData.left,
				width: nodeData.width,
				height: nodeData.height,
				ease: Expo.easeInOut
			})
			.to(el, 0.2, {
				opacity: 0,
				zIndex: 1,
				ease: Expo.easeInOut
			});

		setTimeout(() => {
			toggle(!isShowing);
		}, 1200);

		setTimeout(() => {
			background === "white" && handleModalOpenened();
		}, 400);
	};

	useEffect(() => {
		modal.current && openModal(modal.current);
		// eslint-disable-next-line
	}, [isShowing]);

	return (
		<Fragment>
			<ModalButton
				onClick={() => {
					!isShowing && toggle(!isShowing);
				}}
			/>

			{isShowing &&
				createPortal(
					<ModalSmoothOpenerContainer ref={modal} background={background}>
						{background === "white" ? (
							<ModalSmoothOpenerCloseArrow
								ref={modalClose}
								onClick={e => {
									closeModal(e.currentTarget.parentElement);
								}}
							/>
						) : (
							<ModalSmoothOpenerClose
								ref={modalClose}
								onClick={e => {
									closeModal(e.currentTarget.parentElement);
								}}
							/>
						)}

						<ModalSmoothOpenerContainerContent
							ref={modalContent}
							background={background}
						>
							{children}
						</ModalSmoothOpenerContainerContent>
					</ModalSmoothOpenerContainer>,
					document.body.querySelector(".layout")
				)}
		</Fragment>
	);
};

export default ModalSmoothOpener;
