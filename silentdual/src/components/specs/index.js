import React from "react";
import styled from "styled-components";
import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";
import SpecSensores from "./SpecSensores";
import SpecFuncionamiento from "./SpecFuncionamiento";
import SpecEntradasAire from "./SpecEntradasAire";

const Title = styled.h2`
  color: rgb(0, 0, 0);
  font-family: DINBold;
  font-size: 33px;
  height: 51px;
  letter-spacing: 0px;
  line-height: 39px;
  text-align: center;
  width: 792px;
`;
export default Specs = () => {
  return (
    <section id="specs">
      <Wrapper>
        <Row>
          <Column xs={12}>
            <Title>La única opción doblemente inteligente</Title>
          </Column>
        </Row>
        <SpecSensores />
        <SpecFuncionamiento />
        <SpecEntradasAire />
      </Wrapper>
    </section>
  );
};
