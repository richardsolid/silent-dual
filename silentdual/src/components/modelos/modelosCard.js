import React from "react";
import { useSpring, animated as a } from "react-spring";
import styled from "styled-components";

//Utils
import Column from "../../utils/grid/column";
import useIntersect from "../../utils/useIntersect";

//Images
import Model1 from "../../images/model1.png";
import Model2 from "../../images/model2.png";
import Model3 from "../../images/model3.png";

const ModeloCardContainer = styled(a.div)`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-basis: 100%;
  width: 100%;
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.1);
  margin: 0 auto 20px;
`;

const ModeloImageBox = styled.div`
  background: #eceded;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModeloImage = styled.img``;

const ModeloTitle = styled.h3`
  margin: 30px auto 8px;
`;

const ModeloDescription = styled.div`
  font-weight: light;
  padding: 20px auto;
  margin: 0 auto 30px;
  p {
    margin: 0;
  }
`;

const ModeloCard = ({ modelo, index }) => {
  const chooseImage = i => {
    if (i === 0) return Model1;
    else if (i === 1) return Model2;
    else if (i === 2) return Model3;
  };

  const { format } = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2
  });

  const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);
  //useIntersect devulve ref y entry. ref es la referencia del elemento del cual queremos controlar su visualización en el viewport
  //entry es el objeto con la información de la posición del elemento
  const [ref, entry] = useIntersect({
    //threshold es la cantidad de elemento visible para que se dispare el evento
    threshold: buildThresholdArray()
  });

  const ratio = format(entry.intersectionRatio);

  const cardsProps = useSpring({
    from: {
      opacity: 0,
      transform: `translate(0px, 100px)`
    },
    to: {
      opacity: ratio > 0.5 ? 1 : 0,
      transform: ratio >= 0.3 ? `translate(0px, 0px)` : `translate(0px, 100px)`
    }
  });

  return (
    <Column xs={12} md={4}>
      <ModeloCardContainer ref={ref} style={cardsProps}>
        <ModeloImageBox>
          <ModeloImage src={chooseImage(index)} alt="modelo image" />
        </ModeloImageBox>
        <ModeloTitle className={"bodyNormal"}>{modelo.title}</ModeloTitle>
        <ModeloDescription>
          <p>{modelo.description.sizes}</p>
          <p>{modelo.description.power}</p>
        </ModeloDescription>
      </ModeloCardContainer>
    </Column>
  );
};

export default ModeloCard;
