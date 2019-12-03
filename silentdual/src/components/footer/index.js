import React from "react"
import styled from "styled-components";

//Utils
import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";

//Assets
import variables from "../../assets/styles/variables"

const FooterSection = styled.footer`
  background: ${variables.secondary};
`

const Footer = ({ data }) => {

  return (
    <FooterSection>

      <Wrapper>
        <Row>

          <Column xs={12}>
            {data.footer}
          </Column>

        </Row>
      </Wrapper>

    </FooterSection>
  )
}

export default Footer