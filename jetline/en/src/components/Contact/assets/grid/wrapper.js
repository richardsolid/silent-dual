import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
	breakpoints,
	maxWidthContainer
} from "../styles/breakpoints";
import { gutter } from "../styles/gutter";

const WrapperContainer = styled.div`
	width: 100%;
	max-width: calc(100% - ${gutter * 2}px);
	margin: 0 auto;

	@media only screen and (min-width: ${breakpoints.phone}px) {
		max-width: ${maxWidthContainer.phone}px;
	}

	@media only screen and (min-width: ${breakpoints.tablet}px) {
		max-width: ${maxWidthContainer.tablet}px;
	}

	@media only screen and (min-width: ${breakpoints.desktop}px) {
		max-width: ${maxWidthContainer.desktop}px;
	}

	@media only screen and (min-width: ${breakpoints.large}px) {
		max-width: ${maxWidthContainer.large}px;
	}
`;

const Wrapper = ({ children }) => {
	return <WrapperContainer>{children}</WrapperContainer>;
};

Wrapper.propTypes = {
	children: PropTypes.node
}

export default Wrapper;
