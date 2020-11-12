import React from "react";
import { useSpring, animated as a } from "react-spring";
import styled from "styled-components";
import HubspotForm from "react-hubspot-form";
import selectCaret from "../../images/caret.svg";

//Assets
import variables from "../../assets/styles/variables";
import { breakpoints } from "../../assets/styles/breakpoints";

//Utils
import Wrapper from "../../utils/grid/wrapper";
import Row from "../../utils/grid/row";
import Column from "../../utils/grid/column";
import useIntersect from "../../utils/useIntersect";

//data:
import data from "../../data";

const FormContainer = styled.section`
  position: relative;
  z-index: 0;
  padding: 0 0 80px 0;
  background: #333333;

  h2 {
    margin: 100px 0 40px;
    text-align: center;
    color: #ffffff;

    @media screen and (min-width: ${breakpoints.tablet}px) {
      margin: 140px 0 40px;
    }
  }

  h3 {
    margin: 0 0 8px;
    text-align: center;
    color: #ffffff;
  }

  p {
    margin: 0 0 40px;
    text-align: center;
    color: #ffffff;
  }
`;

const Form = styled.div`
  width: 100%;
  margin: 0 auto;
  color: #ffffff;

  @media screen and (min-width: ${breakpoints.tablet}px) {
    width: 66.66%;
  }

  option:disabled {
    color: black;
  }

  fieldset {
    margin: 0 auto !important;
    max-width: 100% !important;

    + fieldset {
      padding-top: 20px !important;
    }

    &:nth-child(10),
    &:nth-child(11) {
      padding-top: 0 !important;
    }
  }

  .form-columns-1 .field + .field {
    margin-top: 20px;
  }

  .field {
    box-sizing: border-box;
    padding: 0 15px !important;

    & + .field {
      @media screen and (max-width: ${breakpoints.tablet + 1}px) {
        margin-top: 20px;
      }
    }
  }

  .field > label {
    color: #ffffff;
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 8px 0;
    font-weight: bold;
    margin-bottom: 5px;
    display: flex;
  }

  .input {
    margin: 0 !important;
  }

  .inputs-list,
  .inputs-list .hs-error-msgs {
    list-style: none;
    padding: 0;
  }

  .inputs-list {
    margin: 0;
  }

  .inputs-list .hs-error-msgs {
    margin: 10px 0 20px;
  }

  .input > .hs-input {
    box-sizing: border-box !important;
    max-width: 100% !important;
    width: 100% !important;

    border-radius: 3px;
    border: 1px solid rgb(204, 204, 204);

    padding: 17px;
    font-size: 16px;
    line-height: 24px;

    color: #545454 !important;
  }

  select.hs-input {
    -webkit-appearance: none;
    background-repeat: no-repeat;
    background-position: 94% center;
    background-image: url(${selectCaret});
    @media screen and (min-width: ${breakpoints.large}px) {
      background-position: 98% center;
    }
  }

  textarea.hs-input {
    height: 152px;
    font-family: ${variables.din} !important;
    color: #545454 !important;
  }

  .hs-error-msgs {
    margin: 10px 0 20px !important;
    color: #f54b5e;
  }

  .hs-form-booleancheckbox-display {
    display: flex !important;

    a {
      color: #ffffff !important;
    }
  }

  .legal-consent-container .hs-form-booleancheckbox-display > span {
    margin-left: 0;
    color: #ffffff !important;
  }

  .hs_suscribirse_al_blog {
    margin: 0 !important;
  }

  .hs_submit,
  .hs_error_rollup {
    margin: 0 auto !important;
    max-width: 100% !important;

    padding: 0 15px;
    box-sizing: border-box;
  }

  .hs_submit {
    margin-top: 20px !important;
  }

  .hs-button {
    border: none !important;
    background-color: ${variables.primary} !important;
    color: white !important;
    outline: 0 !important;
    box-shadow: none !important;
    text-shadow: none !important;
    font-family: ${variables.din} !important;
    font-size: 16px !important;
    line-height: 24px !important;
    font-weight: bold !important;
    padding: 15px 35px !important;
    border-radius: 3px !important;

    transition: 0.4s !important;

    &:hover,
    &:focus {
      background-color: ${variables.primaryDark} !important;
      outline: 0 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }
  }

  .hs-form-field {
    @media screen and (max-width: ${breakpoints.tablet + 1}px) {
      width: 100% !important;
    }
  }

  .hs-form-checkbox-display {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .hs-form-checkbox {
    margin-top: 10px;
    span {
      color: #ffffff;
    }
  }

  input[type="checkbox"] {
    margin-right: 10px;
    border: 1px solid ${variables.divider};
    height: 20px !important;
    width: 20px !important;
    display: inline-flex;
    border-radius: 3px;
  }

  .legal-consent-container .hs-richtext {
    display: none;
  }
`;

const FormSection = () => {
  const { contacta } = data;

  const { format } = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2
  });

  const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);
  //useIntersect devulve ref y entry. ref es la referencia del elemento del cual queremos controlar su visualización en el viewport
  //entry es el objeto con la información de la posición del elemento
  const [refTop, entryTop] = useIntersect({
    //threshold es la cantidad de elemento visible para que se dispare el evento
    threshold: buildThresholdArray()
  });

  const [refBottom, entryBottom] = useIntersect({
    //threshold es la cantidad de elemento visible para que se dispare el evento
    threshold: buildThresholdArray()
  });

  const ratioTop = format(entryTop.intersectionRatio);
  const ratioBottom = format(entryBottom.intersectionRatio);

  const topProps = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: ratioTop > 0.5 ? 1 : 0
    }
  });

  const bottomProps = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: ratioBottom > 0.15 ? 1 : 0
    }
  });

  return (
    <FormContainer id={contacta.id}>
      <Wrapper>
        <Row>
          <Column xs="12" sm={8} align="center" direction="column">
            <a.div style={topProps} ref={refTop}>
              <h2 className="headingMedium">{contacta.title}</h2>
              <h3 className="headingTiny">{contacta.subtitle}</h3>
              <p>{contacta.text}</p>
            </a.div>
          </Column>
          <Form>
            <a.div style={bottomProps} ref={refBottom}>
              <HubspotForm
                portalId={contacta.portalId}
                formId={contacta.formId}
                loading={<div>{contacta.loading}</div>}
              />
            </a.div>
          </Form>
        </Row>
      </Wrapper>
    </FormContainer>
  );
};

export default FormSection;
