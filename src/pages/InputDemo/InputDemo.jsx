/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  TextField, SelectField, RadioGroup, Button,
} from '../../components';
import {
  OPTIONS, CRIC, FOOT, BTN_TYPE,
} from '../../configs';
import { btn } from '../../components/Button';

class InputDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sport: '',
      cricket: '',
      football: '',
    };
  }

  handleNameChange = (event) => {
    // const nameValid = event.target.value ? true : false;
    // const submitValid = this.state.sportValid && nameValid;
    this.setState({
      name: event.target.value,
      // nameValid: nameValid,
      // submitDisabled: !submitValid,
    });
  }

  handleSportChange = (event) => {
    // const sportValid = event.target.value ? true : false;
    // const submitValid = this.state.nameValid && sportValid;
    this.setState({
      cricket: '',
      football: '',
      sport: event.target.value,
      // sportValid: sportValid,
      // submitDisabled: !submitValid,
    });
  }

  handleRoleChange = (event) => {
    const { sport } = this.state;
    this.setState({
      [sport]: event.target.value,
    });
  }

  // handleBtnClick = (event) => {
  //   this.setState({
  //     cancel: event.target.value,
  //     submit: event.target.value,
  //   });
  // }

  // validate = ({ TextField, SelectField, RadioGroup }) => {
  //   return {
  //     TextField: !TextField || TextField.trim().length === 0
  //       ? 'Name is required field'
  //       : false,
  //     SelectField: !SelectField || SelectField.trim().length === 0
  //       ? 'Sport is required field'
  //       : false,
  //     RadioGroup: !RadioGroup || RadioGroup.trim().length === 0
  //       ? 'Role is required field'
  //       : false,
  //   };
  // };

  hasErrors = () => {

  }

  isTouched = () => {

  }

  getError = () => {

  }

  handleBtnClick() {
    this.alert('I am an alert');
  }

  render() {
    console.log('state', this.state);
    const { sport, value } = this.state;
    return (
      <React.Fragment>
        <div>
          <p><b>Name</b></p>
          <TextField name="name" value={this.state.value} onChange={this.handleNameChange} />
        </div>
        <div>
          <p><b>Select the game you play?</b></p>
          <SelectField options={OPTIONS} onChange={this.handleSportChange} />
        </div>
        {
          sport === 'cricket' && (
            <div>
              <p><b>What you do?</b></p>
              <RadioGroup options={CRIC} name="Cricket" value={value} onChange={this.handleRoleChange} />
            </div>
          )
        }
        {
          sport === 'football' && (
            <div>
              <p><b>What you do?</b></p>
              <RadioGroup options={FOOT} name="Football" value={value} onChange={this.handleRoleChange} />
            </div>
          )
        }
        <div style={btn}>
          <Button value={BTN_TYPE} disabled onClick={this.handleBtnClick} />
        </div>
      </React.Fragment>
    );
  }
}

export default InputDemo;
