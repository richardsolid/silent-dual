import React from "react";
import styled from "styled-components";
import { useSpring, animated as a } from "react-spring" 
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";
import SpecSensorComp from "./SpecSensoresComp";

const Title = styled(a.h3)`
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

const Container = styled.div`
  position: fixed;
  top: 40%;
`

const SpecSensores = ({ratio}) => {

  const titleProps = useSpring({
    from: {
      opacity: 0, 
    },
    to: {
      opacity: (ratio - 0.1) * 8 || 0,
    },
  })

  return (
    <Container>
      <Row>
        <Column xs={12} md={6}>
          <Info>
            <Title style={titleProps}>2 sensores</Title>
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
    </Container>
  );
};

export default SpecSensores;
