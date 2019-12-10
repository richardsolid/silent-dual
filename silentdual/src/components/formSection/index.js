import React from "react";
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

//data:
import data from "../../data";

const FormContainer = styled.div`
  z-index: 0;
  padding: 80px 0;

  h2 {
    margin: 0 0 40px;
    text-align: center;
  }

  h3 {
    margin: 0 0 8px;
    text-align: center;
  }

  p {
    margin: 0 0 40px;
    text-align: center;
  }
`;

const Form = styled.div`
  width: 100%;

  color: black;

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
    color: black;
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
  }

  .hs-error-msgs {
    margin: 10px 0 20px !important;
    color: #f54b5e;
  }

  .hs-form-booleancheckbox-display {
    display: flex !important;

    a {
      color: black !important;
    }
  }

  .legal-consent-container .hs-form-booleancheckbox-display > span {
    margin-left: 0;
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

  return (
    <FormContainer id="contacta">
      <Wrapper>
        <Row>
          <Column xs="12" direction="column">
            <h2 className="headingMedium">{contacta.title}</h2>
            <h3 className="headingTiny">{contacta.subtitle}</h3>
            <p>{contacta.text}</p>
          </Column>

          <Form>
            <HubspotForm
              portalId="2009592"
              formId="dedcb341-d7ef-4a5a-bd74-05693345fd3f"
              onSubmit={() => console.log("Submit!")}
              onReady={form => console.log("Form ready!")}
              loading={<div>Loading...</div>}
            />
          </Form>
        </Row>
      </Wrapper>
    </FormContainer>
  );
};

export default FormSection;
