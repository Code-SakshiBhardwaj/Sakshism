import React from 'react';
import Common from './Common';
import web from "../src/images/web5.jpg";


const About = () => {
  return (
    <>
    <Common name='Welcome to My World' imgsrc={web} visit='/contact' btname='Contact Now' />
    </>

  );
};

export default About;
