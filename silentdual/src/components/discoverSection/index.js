import React, { useState, useEffect } from "react";
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

//data
import data from "../../data";

//Components
import HotspotItem from "../hotpost";

const DiscoverSectionContainer = styled.div`
	background-color: black;
	padding: 120px 0;

	color: white;
	h2 {
		margin: 0 auto 40px;
	}

	h4 {
		margin: 0;
	}

	p + h4 {
		margin-top: 16px;
	}

	p {
		margin: 0;
	}
`;

const HotspotLayer = styled.div`
	position: relative;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;

	img {
		width: 100%;
		height: auto;
		margin-bottom: 40px;

		@media screen and (min-width: ${breakpoints.large}px) {
			margin: 0;
		}
	}
`;

const DiscoverSection = () => {
	const size = useWindowSize();

	const [width, setWidth] = useState(null);

	const hotspots = data.descubrelo.hotspots;

	useEffect(() => {
		setWidth(size.width);
	}, [size]);

	return (
		<DiscoverSectionContainer>
			<Wrapper>
				<Row>
					<Column xs={12}>
						<h2 className="headingMedium">Descubre sus componentes</h2>
					</Column>
					<Column xs={12} direction="column">
						<HotspotLayer>
							<img src={exploded} alt="Discover exploded" />

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
		</DiscoverSectionContainer>
	);
};

export default DiscoverSection;
