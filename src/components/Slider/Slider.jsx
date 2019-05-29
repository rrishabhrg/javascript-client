/* eslint-disable react/prop-types */
import React from 'react';
import { DEFAULT_BANNER_IMAGE, PUBLIC_IMAGE_FOLDER } from '../../configs';
import { getRandomNumber, getNextRoundRobin } from '../../lib';
import style from './style';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      banners: props.banners,
      defaultBanner: props.defaultBanner,
    };
  }

  componentDidMount() {
    const { banners, duration } = this.props;
    if (banners.length > 1) {
      this.timerID = setInterval(() => this.rotateImg(), duration);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getImage() {
    const { banners, index, defaultBanner } = this.state;
    if (!banners.length) {
      return `${PUBLIC_IMAGE_FOLDER}${defaultBanner}`;
    }
    return `${PUBLIC_IMAGE_FOLDER}${banners[index]}`;
  }

  rotateImg() {
    const { random, banners } = this.props;
    const { index } = this.state;
    if (random) {
      this.setState({
        index: getRandomNumber(banners.length),
      });
    } else {
      this.setState({
        index: getNextRoundRobin(banners.length, index),
      });
    }
  }

  render() {
    const { altText, height } = this.props;
    const { index } = this.state;
    const { img } = style;
    return (
      <img src={this.getImage()} alt={altText.length ? altText[index] : ''} height={height} style={{ ...img }} />
    );
  }
}

Slider.defaultProps = {
  banners: [],
  defaultBanner: DEFAULT_BANNER_IMAGE,
  altText: [],
  defaultAltText: 'Default Image',
  duration: 2000,
  height: 200,
  random: false,
};

export default Slider;
