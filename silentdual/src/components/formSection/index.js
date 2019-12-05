import React from "react";
import styled from "styled-components";
import HubspotForm from "react-hubspot-form";

//Assets
import variables from "../../assets/styles/variables";
import { gutter } from "../../assets/styles/gutter";
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

		@media screen and (min-width: ${breakpoints.large}px) {
			max-width: 75% !important;
		}
	}

	.field {
		box-sizing: border-box;
		padding: 0 15px !important;
	}

	.field label {
		color: black;
		font-size: 16px;
		line-height: 24px;
		margin: 0 0 8px 0;
	}

	.input {
		margin: 0 !important;
	}

	.input > .hs-input {
		box-sizing: border-box !important;
		max-width: 100% !important;
		width: 100% !important;

		border-radius: 3px;
		border: 1px solid rgb(204, 204, 204);

		padding: 20px;

		color: black !important;
	}

	.hs-error-msgs {
		margin-top: 8px !important;
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

	.hs_submit {
		margin: 0 auto !important;
		max-width: 100% !important;

		padding: 0 15px;
		box-sizing: border-box;

		@media screen and (min-width: ${breakpoints.large}px) {
			max-width: 75% !important;
		}
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
`;

const FormSection = () => {
	const { contacta } = data;

	return (
		<FormContainer>
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
							formId="f6e5dab3-a22c-47c6-bac3-b51a284f25f9"
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
