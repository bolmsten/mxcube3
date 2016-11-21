import React from 'react';
import './motor.css';

export default class PhaseInput extends React.Component {

  constructor(props) {
    super(props);
    this.sendPhase = this.sendPhase.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.refs.phaseValue.value = nextProps.props.phase;
      this.refs.phaseValue.defaultValue = nextProps.props.phase;
    }
  }

  sendPhase(event) {
    this.props.sendPhase(event.target.value);
  }

  render() {
    return (
      <select
        ref="phaseValue"
        defaultValue={this.props.phase}
        className="form-control input-sm"
        onChange={this.sendPhase}
      >
        {this.props.phaseList.map((option) => <option value={option}>{option}</option>)}
      </select>
      );
  }
}
