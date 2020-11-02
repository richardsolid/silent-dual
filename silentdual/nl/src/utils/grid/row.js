import React from "react"
import styled from 'styled-components'

import { gutter } from '../../assets/styles/gutter'

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

export default Row