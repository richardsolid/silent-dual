import React, { useState, useEffect, useRef } from "react";
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
`;

const NavBarContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	position: fixed;
	background-color: black;
	color: white;

	top: 0;
	width: 100vw;
	height: 60px;
	box-sizing: border-box;
	z-index: 1000;

	transition: 0.2s;

	&.onTop {
		background-color: transparent;
		height: 80px;
	}

	@media screen and (min-width: ${breakpoints.large}px) {
		height: 80px;

		&.onTop {
			height: 100px;
		}
	}
`;

const SPLogo = styled(Link)`
	display: flex;
	background: url(${logo}) no-repeat center center;
	background-size: contain;

	width: 40px;
	height: 40px;

	transition: 0.2s;

	&.onTop {
		width: 60px;
		height: 60px;
	}

	opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
	visibility: ${({ isOpen }) => (isOpen ? "hidden" : "visible")};

	@media screen and (min-width: ${breakpoints.large}px) {
		width: 50px;
		height: 50px;

		&.onTop {
			width: 70px;
			height: 40px;
		}
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
	top: 80px;
	height: 100vh;
	box-sizing: border-box;
	z-index: 100;

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
		line-height: 24px;
		font-size: 16px;
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
const NavBar = ({ data, modalIsOpen }) => {
	const size = useWindowSize();
	const navbar = data.navbar;

	const [width, setWidth] = useState(null);
	const [viewNavItems, setViewNavItems] = useState(false);

	const navBarContainer = useRef(null);
	const logoContainer = useRef(null);

	const handleBurgerClick = () => {
		setViewNavItems(!viewNavItems);
		modalIsOpen(!viewNavItems);
	};

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

	const windowIsOnTop = () => {
		if (window.pageYOffset !== 0) {
			return false;
		} else {
			return true;
		}
	};

	useEffect(() => {
		navBarContainer && navBarContainer.current.classList.add("onTop");
		logoContainer && logoContainer.current.classList.add("onTop");

		if (typeof window !== "undefined") {
			window.addEventListener("scroll", () => {
				if (windowIsOnTop() === true) {
					navBarContainer.current.classList.add("onTop");
					logoContainer.current.classList.add("onTop");
				} else {
					navBarContainer.current.classList.contains("onTop") &&
						navBarContainer.current.classList.remove("onTop");
					logoContainer.current.classList.contains("onTop") &&
						logoContainer.current.classList.remove("onTop");
				}
			});
		}
		return () => window.removeEventListener("scroll", windowIsOnTop);
	}, []);

	//collapsed menu:
	if (width < breakpoints.large)
		return (
			<Navigator>
				<NavBarContainer ref={navBarContainer} isPhone>
					<Wrapper>
						<Row>
							<Column xs={12}>
								<SPLogo
									ref={logoContainer}
									isOpen={viewNavItems}
									to={"#hero"}
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
									{navbar.map((section, i) => (
										<Link
											key={i}
											to={section.anchor}
											onClick={() => setViewNavItems(!viewNavItems)}
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
		<NavBarContainer ref={navBarContainer}>
			<Wrapper>
				<Row>
					<Column xs={12}>
						<SPLogo ref={logoContainer} to={"#hero"} />
						<SectionsLinksBar>
							{navbar.map((section, i) => (
								<Link key={i} to={section.anchor} className="bodySmall">
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
