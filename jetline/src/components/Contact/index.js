import React from "react";
import PropTypes from "prop-types";
import HubspotForm from "react-hubspot-form";
import Wrapper from "./assets/grid/wrapper";
import Row from "./assets/grid/row";
import Form from "./ContactStyle";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

export default function Contact({ data }){

  const [ref, inView] = useInView({
    triggerOnce: true
  })

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView? 'translateY(0px)' : 'translateY(100px)',
  })

  return (
    <div id="contact" className="relative w-full py-24 bg-gray-800 px-5 sm:px-0">
      <animated.div ref={ref} style={props}>
        <div className="relative flex flex-col max-w-screen-lg items-center mb-20 mx-auto">
          <h3 className="text-center text-3xl text-white mb-10">{data.title}</h3>
          <h4 className="text-center text-2xl text-white">{data.subtitle}</h4>
        </div>

        <Wrapper>
          <Row>
            <Form>
              <HubspotForm
                portalId="2009592"
                formId="c5d31a54-b870-4b37-94cc-7314215c4ad3"
                loading={<div>Sending</div>}
                />
            </Form>
          </Row>
        </Wrapper>
      </animated.div>
    </div>
  );
}

Contact.propTypes = {
  data: PropTypes.object
}
