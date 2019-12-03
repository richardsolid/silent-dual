import React from "react";
import styled from "styled-components";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";
import SpecFuncionesComp from "./SpecFuncionamientoComp";

const Title = styled.h3`
  width: 139px;
  height: 34px;
  color: rgb(0, 0, 0);
  font-size: 28px;
  font-family: DINBold;
  letter-spacing: 0px;
  line-height: 34px;
`;
const Subtitle = styled.h4`
  width: 195px;
  height: 30px;
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-family: DINBold;
  letter-spacing: 0px;
  line-height: 30px;
`;
const Description = styled.p`
  width: 460px;
  height: 148px;
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-family: DINLightAlternate;
  letter-spacing: 0px;
  line-height: 30px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
const SpecFuncionamiento = () => {
  return (
    <section id="specs">
      <Row>
        <Column xs={12} md={6}>
          <SpecFuncionesComp />
        </Column>
        <Column xs={12} md={6}>
          <Info>
            <Title>2 modos de funcionamiento</Title>
            <Subtitle>Contínuo e intermitente</Subtitle>
            <Description>
              <strong>Funcionamiento contínuo</strong>
              cuando los sensores no detectan presencia ni cambios de humedad,{" "}
              <strong>funcionamiento intermitente</strong> cuando uno de los
              sensores se activa.
            </Description>
          </Info>
        </Column>
      </Row>
    </section>
  );
};

export default SpecFuncionamiento;
