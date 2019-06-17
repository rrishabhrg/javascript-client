import React from 'react';
import { Slider } from '../../components';
import { TextFieldDemo } from '../TextFieldDemo';

const banners = [
  'cloud.jpg',
  'dns-server.png',
  'full-stack-web-development.jpg',
  'js.jpg',
  'load-balancer.png',
];

const altText = [
  'Cloud Computing',
  'DNS Server',
  'Full Stack Web Development',
  'Full Stack JS Developer',
  'Load Balancer',
];

const SliderDemo = () => (
  <React.Fragment>
    <div>
      <Slider random altText={altText} banners={banners} />
      <TextFieldDemo />
    </div>
  </React.Fragment>
);

export default SliderDemo;
