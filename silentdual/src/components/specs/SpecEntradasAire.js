import React from "react";
import styled from "styled-components";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";
import SpecEntradasAireComp from "./SpecEntradasAireComp";

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
            <Title>2 entradas de aire</Title>
            <Subtitle>Frontal y perimetral</Subtitle>
            <Description>
              Prestaciones aerodinámicas que le proporcionan la entrada{" "}
              <strong>frontal</strong>y <strong>perimetral</strong> de aire.
            </Description>
          </Info>
        </Column>
        <Column xs={12} md={6}>
          <SpecEntradasAireComp />
        </Column>
      </Row>
    </section>
  );
};

export default SpecSensor;
