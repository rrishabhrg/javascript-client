/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { TextField, SelectField, RadioGroup } from '../../components';
import { OPTIONS, CRIC, FOOT } from '../../configs';

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
    this.setState({
      name: event.target.value,
    });
  }

  handleSportChange = (event) => {
    this.setState({
      cricket: '',
      football: '',
      sport: event.target.value,
    });
  }

  handleRoleChange = (event) => {
    const { sport } = this.state;
    this.setState({
      [sport]: event.target.value,
    });
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
      </React.Fragment>
    );
  }
}

export default InputDemo;
