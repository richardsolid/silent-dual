import React from "react";
import styled from "styled-components"

//Utils
import Wrapper from "../../utils/grid/wrapper"
import Row from "../../utils/grid/row"
import Column from "../../utils/grid/column"

//images:
import instantFriendly from "../../images/instant-friendly.svg"

const InstallSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #eceded;
`

const InstallSectionTitle = styled.h2`
  color: black
`

const InstallSectionSubTitle = styled.h2`
  color: black
`

const InstallSectionText = styled.div`
  h3 {
    margin-bottom: 40px;
  }

  p {
    margin: 0;
    font-weight: lighter;
  }
`

const installSection = () => {

  return (
    <InstallSectionContainer>

      <Wrapper>
        <Row>

          <Column xs={12}>
            <img id="instantFriendly" src={instantFriendly} alt="instant friendly" />
          </Column>

          <Column xs={12}>
            <InstallSectionTitle className="headingMedium">S&P diseña productos fáciles de instalar</InstallSectionTitle>
            <InstallSectionSubTitle className="headingTiny">S&P diseña productos fáciles de instalar</InstallSectionSubTitle>
          </Column>

          <Column xs={4}>
            <InstallSectionText>
              <h3 className="headingSmall">Conexionado a 2 hilos</h3>
              <p>En S&P apostamos por la innovación en usabilidad, por eso SILENT DUAL cuenta con el sello Install Friendly de garantía de calidad técnica y de facilidad a la hora de realizarse la instalación.
El extractor de baño se coloca con una práctica instalación que se realiza con una conexión directa de tan solo 2 hilos (L/N).</p>
            </InstallSectionText>
          </Column>

          <Column xs={8}>

          </Column>

        </Row>
      </Wrapper>

    </InstallSectionContainer>
  )
}