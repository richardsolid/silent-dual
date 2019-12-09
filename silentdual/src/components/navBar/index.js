import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { TweenMax, Back } from "gsap";

//Utils
import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";
import useWindowSize from "../../utils/useWindowSize";

//Assets
import variables from "../../assets/styles/variables";
import { breakpoints } from "../../assets/styles/breakpoints";
import logo from "../../images/logo.svg";

//Components
import Burger from "./burgerIcon.js";

const Navigator = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	background: black;
`;

const NavBarContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	position: fixed;
	background: ${({ isOpen, isTop }) =>
		isOpen || isTop ? "transparent" : "black"};
	top: 0;
	width: 100vw;
	height: ${({ isTop }) => (isTop ? "80px" : "60px")};
	box-sizing: border-box;
	z-index: 1000;

	transition: 0.2s;

	@media screen and (min-width: ${breakpoints.large}px) {
		height: ${({ isTop }) => (isTop ? "80px" : "100px")};
	}
`;

const SPLogo = styled(Link)`
	display: flex;
	background: url(${logo}) no-repeat center center;
	background-size: contain;

	width: ${({ isTop }) => (isTop ? "60px" : "40px")};
	height: ${({ isTop }) => (isTop ? "60px" : "40px")};

	transition: 0.2s;

	opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
	visibility: ${({ isOpen }) => (isOpen ? "hidden" : "visible")};

	@media screen and (min-width: ${breakpoints.large}px) {
		width: ${({ isTop }) => (isTop ? "70px" : "50px")};
		height: ${({ isTop }) => (isTop ? "50px" : "40px")};
	}
`;

const SectionsLinksBar = styled.div`
	display: flex;
	margin: 0 0 0 auto;
	justify-content: center;
	align-items: center;

	a {
		text-decoration: none;
		color: white;
		opacity: 1;

		font-weight: bold;

		transition: all 0.4s ease;

		&:hover {
			opacity: 0.8;
		}

		& + a {
			margin-left: 40px;
		}
	}
`;

const CollapsedMenu = styled.div`
	display: flex;
	margin: auto 0;
	flex-direction: column;
	color: white;
	background-color: ${variables.secondaryDark};
	padding: 0;
	position: fixed;
	width: 100%;
	height: 100vh;
	box-sizing: border-box;
	z-index: 999;

	overflow: hidden;

	top: 0;

	@media screen and (min-width: ${breakpoints.large}px) {
		top: 110px;
	}

	opacity: 0;
	visibility: hidden;

	a {
		text-decoration: none;
		color: white;
		cursor: pointer;

		display: flex;
		justify-content: center;
		align-items: center;
		height: 60px;
		padding: 0;
		font-weight: bold;

		position: relative;

		opacity: 1;
		transition: all 0.4s ease;
	}
`;

const CollapsedItemsContainer = styled.div`
	width: 100%;
	max-width: calc(100% - 60px);
	margin: 80px auto;
`;

//component:
const NavBar = ({ data }) => {
	const size = useWindowSize();

	const [width, setWidth] = useState(null);
	const [viewNavItems, setViewNavItems] = useState(false);
	const [isTop, setIsTop] = useState(true);

	const handleBurgerClick = () => {
		!window.pageYOffset && setIsTop(true);
		setViewNavItems(!viewNavItems);
		document.getElementsByTagName("body")[0].classList.toggle("scrollDisabled");
	};

	const isTopOnScroll = () => setIsTop(!window.pageYOffset);

	useEffect(() => {
		if (viewNavItems) {
			TweenMax.to("#menu", 0.3, {
				autoAlpha: 1
			});

			TweenMax.to(".navItem", 0.5, {
				autoAlpha: 1,
				delay: 0.1,
				ease: Back.easeOut
			});
		} else {
			TweenMax.to("#menu, .navItem", 0.3, {
				autoAlpha: 0
			});
		}

		setWidth(size.width);
	}, [viewNavItems, size]);

	useEffect(() => {
		setIsTop(true);

		if (typeof window !== "undefined") {
			window.addEventListener("scroll", () => {
				isTopOnScroll();
			});
		}
		return () => window.removeEventListener("scroll", isTopOnScroll);
	}, []);

	//collapsed menu:
	if (width < breakpoints.large)
		return (
			<Navigator>
				<NavBarContainer isTop={isTop} isPhone isOpen={viewNavItems}>
					<Wrapper>
						<Row>
							<Column xs={12}>
								<SPLogo
									isTop={isTop}
									isOpen={viewNavItems}
									to={"/#hero"}
									onClick={() => setViewNavItems(false)}
								/>
								<Burger isOpen={viewNavItems} handleClick={handleBurgerClick} />
							</Column>
						</Row>
					</Wrapper>
				</NavBarContainer>

				<CollapsedMenu id="menu">
					<Wrapper>
						<Row>
							<Column xs={12}>
								<CollapsedItemsContainer>
									{data &&
										data.map((section, i) => (
											<Link
												key={i}
												to={`/${section.anchor}`}
												onClick={handleBurgerClick}
												className="navItem"
											>
												{section.name}
											</Link>
										))}
								</CollapsedItemsContainer>
							</Column>
						</Row>
					</Wrapper>
				</CollapsedMenu>
			</Navigator>
		);

	//items on navbar:
	return (
		<NavBarContainer isTop={isTop}>
			<Wrapper>
				<Row>
					<Column xs={12}>
						<SPLogo isTop={isTop} to={"#hero"} />
						<SectionsLinksBar>
							{data &&
								data.map((section, i) => (
									<Link key={i} to={`/${section.anchor}`} className="bodySmall">
										{section.name}
									</Link>
								))}
						</SectionsLinksBar>
					</Column>
				</Row>
			</Wrapper>
		</NavBarContainer>
	);
};

export default NavBar;
