import React from "react";
import styled from "styled-components";

//Utils
import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";

//Assets
import variables from "../../assets/styles/variables";

const FooterSection = styled.footer`
	background: ${variables.secondary};
	color: white;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Footer = ({ data }) => {
	return (
		<FooterSection>
			<Wrapper>
				<Row>
					<Column xs={12}>{data}</Column>
				</Row>
			</Wrapper>
		</FooterSection>
	);
};

export default Footer;
