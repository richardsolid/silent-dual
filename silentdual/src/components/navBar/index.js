import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { TweenMax, Back } from "gsap";

import colors from "../../styles/colors";
import { breakpoints } from "../../styles/breakpoints";

//component:
import Burger from "./burgerIcon.js";

import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";

//images:
import logo from "../../images/logo.svg";

//data:
import data from "../../data/index.js";

//utils:
import useWindowSize from "../../utils/useWindowSize";

const NavBarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	position: fixed;
	background-color: ${colors.primaryDark};
	color: ${colors.tertiary};

	top: 0;
	width: 100vw;
	height: ${({ isPhone }) => (isPhone ? "80px" : "100px")};
	box-sizing: border-box;
	z-index: 100;

	a {
		text-decoration: none;
		color: ${colors.tertiary};
		font-size: 14px;
		height: 21px;
		line-height: 21px;
		font-weight: bold;
	}

	@media screen and (min-width: ${breakpoints.large}px) {
		justify-content: space-evenly;
	}
`;

const Bar = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Navigator = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const SPLogo = styled(Link)`
	display: flex;
	color: ${colors.tertiary};
	width: 50px;
	height: 50px !important;

	::after {
		content: "";
		width: 50px;
		height: 50px;
		background-repeat: no-repeat;
		background-image: url(${logo});
		color: ${colors.tertiary};
	}
`;

const SectionsLinksBar = styled.div`
	display: flex;
	margin: auto 2%;
	width: 100%;
	justify-content: space-between;

	@media screen and (min-width: ${breakpoints.large}px) {
		justify-content: space-evenly;
		width: 75%;
	}

	a {
		text-decoration: none;
		color: ${colors.tertiary};

		transition: all 0.4s ease;

		&:hover {
			color: ${colors.tertiaryLight};
		}
	}
`;

const CollapsedMenu = styled.div`
	display: flex;
	margin: auto 0;
	flex-direction: column;
	color: ${colors.tertiary};
	background-color: ${colors.primaryDark};
	padding: 0;
	position: fixed;
	width: 100%;
	top: 80px;
	height: calc(100vh - 60px);
	box-sizing: border-box;
	z-index: 100;

	opacity: 0;
	visibility: hidden;

	a {
		text-decoration: none;
		color: ${colors.tertiary};
		cursor: pointer;

		display: flex;
		justify-content: flex-center;
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
const NavBar = () => {
	const size = useWindowSize();
	const { navbar } = data[0];

	const [width, setWidth] = useState(null);
	const [viewNavItems, setViewNavItems] = useState(false);

	useEffect(() => {
		if (viewNavItems) {
			TweenMax.to("#menu", 0.3, {
				autoAlpha: 1
			});
			// TweenMax.staggerTo(
			// 	".navItem",
			// 	0.5,
			// 	{ autoAlpha: 1, delay: 0.1, ease: Back.easeOut },
			// 	0.1
			// );
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

	//collapsed menu:
	if (width < breakpoints.large)
		return (
			<Navigator>
				<NavBarContainer isPhone>
					<Wrapper>
						<Row>
							<Column xs={12}>
								<Bar>
									<SPLogo to={"#hero"} onClick={() => setViewNavItems(false)} />
									<Burger isOpen={viewNavItems} handleClick={setViewNavItems} />
								</Bar>
							</Column>
						</Row>
					</Wrapper>
				</NavBarContainer>
				<CollapsedMenu id="menu">
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
				</CollapsedMenu>
			</Navigator>
		);

	//items on navbar:
	return (
		<NavBarContainer>
			<Wrapper>
				<Row>
					<Column xs={12}>
						<SPLogo to={"#hero"} />
						<SectionsLinksBar>
							{navbar.map((section, i) => (
								<Link key={i} to={section.anchor}>
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
