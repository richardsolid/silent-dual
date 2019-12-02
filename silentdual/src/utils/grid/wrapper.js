import React from "react"
import styled from 'styled-components'

import { breakpoints, maxWidthContainer } from '../../styles/breakpoints'
import { gutter } from '../../styles/gutter'

const WrapperContainer = styled.div`
    width: 100%;
    max-width: calc(100% - ${gutter * 4}px);

    @media only screen and (min-width: ${breakpoints.phone}px ){
        margin: 50px auto;
        max-width: ${maxWidthContainer.phone}px;
    }

    @media only screen and (min-width: ${breakpoints.tablet}px ){
        max-width: ${maxWidthContainer.tablet}px;
    }

    @media only screen and (min-width: ${breakpoints.desktop}px ){
        max-width: ${maxWidthContainer.desktop}px;
    }

    @media only screen and (min-width: ${breakpoints.large}px ){
        max-width: ${maxWidthContainer.large}px;
    }

`

const Wrapper = ({ children }) => {

    return (
        <WrapperContainer>
            {children}
        </WrapperContainer>
    )
}

export default Wrapper