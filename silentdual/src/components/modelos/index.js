import React from "react";
import styled from "styled-components";
import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";

const Title = styled.h2`
	color: rgb(0, 0, 0);
	font-weight: bold;
	font-size: 33px;
	line-height: 39px;
	text-align: center;
	width: 100%;
`;

const Specs = () => {
	return (
		<section id="specs">
			<Wrapper>
				<Row>
					<Column xs={12}>
						<Title>La única opción doblemente inteligente</Title>
					</Column>
				</Row>
			</Wrapper>
		</section>
	);
};

export default Specs;
