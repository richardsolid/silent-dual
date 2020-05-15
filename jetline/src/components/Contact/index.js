import React from "react";
import PropTypes from "prop-types";
import HubspotForm from "react-hubspot-form";
import Wrapper from "./assets/grid/wrapper";
import Row from "./assets/grid/row";
import Form from "./ContactStyle";

export default function Contact({ data }){
  return (
    <div id="contact" className="relative w-full py-24 bg-gray-800">
      <div className="relative flex flex-col max-w-screen-lg items-center mb-20 mx-auto">
        <h3 className="text-center text-3xl text-white mb-10">{data.title}</h3>
        <h4 className="text-center text-2xl text-white">{data.subtitle}</h4>
      </div>

      <Wrapper>
        <Row>
          <Form>
            <HubspotForm
              portalId="2009592"
              formId="dedcb341-d7ef-4a5a-bd74-05693345fd3f"
              loading={<div>Sending</div>}
            />
          </Form>
        </Row>
      </Wrapper>
    </div>
  );
}

Contact.propTypes = {
  data: PropTypes.object
}
