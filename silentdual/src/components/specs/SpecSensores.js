import React from "react";
import styled from "styled-components";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";
import SpecSensorComp from "./SpecSensoresComp";

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
const SpecSensor = () => {
  return (
    <section id="specs">
      <Row>
        <Column xs={12} md={6}>
          <Info>
            <Title>2 sensores</Title>
            <Subtitle>Presencia y humedad</Subtitle>
            <Description>
              Sensores de presencia y humedad, se activa automáticamente cuando
              detecta <strong>movimiento</strong> o un cambio en los niveles de
              <strong>saturación</strong>.
            </Description>
          </Info>
        </Column>
        <Column xs={12} md={6}>
          <SpecSensorComp />
        </Column>
      </Row>
    </section>
  );
};

export default SpecSensor;
