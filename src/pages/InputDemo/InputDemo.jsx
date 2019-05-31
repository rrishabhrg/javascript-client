/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import * as style from '../../components/Button/style';
import {
  TextField, SelectField, RadioGroup, Button,
} from '../../components';
import {
  OPTIONS, CRIC, FOOT,
} from '../../configs';
import { btn } from '../../components/Button';
import schema from '../../components/Schema';

class InputDemo extends React.Component {
  state = {
    name: '',
    sport: '',
    cricket: '',
    football: '',
    Errors: {},
    isTouch: [],
    options: [],
    btnDisabled: true,
  };

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    }, this.validator);
  }

  handleSportChange = (event) => {
    this.setState({
      cricket: '',
      football: '',
      sport: event.target.value,
    }, this.validator);
  }

  handleRoleChange = (event) => {
    const { sport } = this.state;
    this.setState({
      [sport]: event.target.value,
      options: event.target.value,
      Errors: {},
    }, this.validator);
  }

  handleNameTouch = () => {
    const { isTouch } = this.state;
    if (!isTouch.includes('name')) {
      isTouch.push('name');
    }
    this.setState({
      isTouch,
    }, this.validator);
  }

  handleSportTouch = () => {
    const { isTouch } = this.state;
    if (!isTouch.includes('sport')) {
      isTouch.push('sport');
    }
    this.setState({
      isTouch,
    }, this.validator);
  }

  handleRoleTouch = () => {
    const { isTouch } = this.state;
    if (!isTouch.includes('role')) {
      isTouch.push('role');
    }
    this.setState({
      isTouch,
      Errors: {},
    }, this.validator);
  }

  hasErrors = (value) => {
    const { Errors } = this.state;
    return Errors[value] ? Errors[value] : '';
  }

  isTouch = (value) => {
    const { isTouch } = this.state;
    return isTouch.includes(value);
  }

  getErrors = (value) => {
    const { Errors } = this.state;
    if (this.isTouch(value) && this.hasErrors(value)) {
      return Errors[value];
    }
    return '';
  }

  validator = () => {
    const {
      name, sport, options,
    } = this.state;
    schema.validate({
      name, sport, options,
    }, { abortEarly: false }).then(() => {
      this.setState({
        Errors: {},
        btnDisabled: false,
      });
    }).catch((errors) => {
      const error = {};
      console.log('error', errors);
      errors.inner.map((err) => {
        error[err.path] = err.message;
      });
      this.setState({
        Errors: error,
        btnDisabled: true,
      });
    });
  }

  render() {
    const {
      sport, value, btnDisabled,
    } = this.state;
    const { color, button, myButton } = style;
    const colorStyle = {
      ...color,
      ...button,
      ...myButton,
    };
    return (
      <React.Fragment>
        <div>
          <p><b>Name</b></p>
          <TextField
            name="name"
            value={this.state.value}
            onChange={this.handleNameChange}
            onBlur={this.handleNameTouch}
            error={this.getErrors('name')}
          />
        </div>
        <div>
          <p><b>Select the game you play?</b></p>
          <SelectField
            options={OPTIONS}
            value={this.state.value}
            onChange={this.handleSportChange}
            onBlur={this.handleSportTouch}
            error={this.getErrors('sport')}
          />
        </div>
        {
          sport === 'cricket' && (
            <React.Fragment>
              <div>
                <p><b>What you do?</b></p>
                <RadioGroup
                  options={CRIC}
                  name="Cricket"
                  value={value}
                  onChange={this.handleRoleChange}
                  onBlur={this.handleRoleTouch}
                  error={this.getErrors('role')}
                />
              </div>
            </React.Fragment>
          )
        }
        {
          sport === 'football' && (
            <React.Fragment>
              <div>
                <p><b>What you do?</b></p>
                <RadioGroup
                  options={FOOT}
                  name="Football"
                  value={value}
                  onChange={this.handleRoleChange}
                />
              </div>
            </React.Fragment>
          )
        }
        <div style={btn}>
          <Button onClick={this.handleBtnClick} value="cancel" />
          <Button onClick={this.handleBtnClick} value="submit" style={colorStyle} disabled={btnDisabled} />
        </div>
      </React.Fragment>
    );
  }
}

export default InputDemo;
