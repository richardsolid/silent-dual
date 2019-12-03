import React from "react";
import styled from "styled-components";
//import fonts from "../../fonts";
//import colors from "../../colors";
import Wrapper from "../grid/wrapper";
import Row from "../grid/row";
import Column from "../grid/column";

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
export default SpecSensores = () => {
  return (
    <section id="specs">
      <Row>
        <Column xs={12} md={6}>
          <Title>2 sensores</Title>
          <Subtitle>Presencia y humedad</Subtitle>
          <Description>
            Sensores de presencia y humedad, se activa automáticamente cuando
            detecta <bold>movimiento</bold> o un cambio en los niveles de
            <bold>saturación</bold>.
          </Description>
        </Column>
        <Column>
          <SpecSensorComp />
        </Column>
      </Row>
    </section>
  );
};
