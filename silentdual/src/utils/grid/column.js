import React from "react";
import styled from "styled-components";

import { breakpoints } from "../../assets/styles/breakpoints";
import { gutter } from "../../assets/styles/gutter";

const ColumnLayout = styled.div`
  display: flex;
  align-self: stretch;
  ${({ align }) => align === "center" && "margin: 0 auto;"}
  ${({ align }) => align === "left" && "margin-right: auto;"}
  ${({ align }) => align === "right" && "margin-left: auto;"}
	
	${({ direction }) => direction === "column" && "flex-direction: column;"}
  
  padding-left: ${gutter}px;
  padding-right: ${gutter}px;
  box-sizing: border-box;

  width: 100%;

  @media only screen and (min-width: ${breakpoints.phone}px ){
    ${({ xs }) => xs && "width: " + (xs / 12) * 100 + "%"}
    ${({ xsOffset }) =>
			xsOffset && "margin-left: " + (xsOffset / 12) * 100 + "%"}
  }
  
  @media only screen and (min-width: ${breakpoints.tablet}px ){
    ${({ sm }) => sm && "width: " + (sm / 12) * 100 + "%"}
  }

  @media only screen and (min-width: ${breakpoints.desktop}px ){
    ${({ md }) => md && "width: " + (md / 12) * 100 + "%"}
  }

  @media only screen and (min-width: ${breakpoints.large}px ){
    ${({ lg }) => lg && "width: " + (lg / 12) * 100 + "%"}
  }
`;

const Column = ({
	children,
	xs,
	sm,
	md,
	lg,
	xsOffset,
	smOffset,
	mdOffset,
	lgOffset,
	align,
	direction,
	className
}) => {
	return (
		<ColumnLayout
			xs={xs}
			sm={sm}
			md={md}
			lg={lg}
			xsOffset={xsOffset}
			smOffset={smOffset}
			mdOffset={mdOffset}
			lgOffset={lgOffset}
			align={align}
			direction={direction}
			className={className}
		>
			{children}
		</ColumnLayout>
	);
};

export default Column;
