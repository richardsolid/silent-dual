import React from "react"
import PropTypes from "prop-types";
import styled from 'styled-components'

import { gutter } from '../styles/gutter'

const RowLayout = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-left: -${gutter}px;
  margin-right: -${gutter}px;
`

const Row = ({ children, align }) => {
    return (
        <RowLayout align={align}>
            {children}
        </RowLayout>
    )
}

Row.propTypes = {
    children: PropTypes.node,
    align: PropTypes.string
}

export default Row