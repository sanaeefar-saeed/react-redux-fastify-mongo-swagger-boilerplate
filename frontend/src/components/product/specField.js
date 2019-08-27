import React, {Component} from 'react'
import {connect} from "react-redux";

class SpecField extends Component {
  state = {
    uniqueSpecNames: [],
    specValues: [],
    specName: '',
    specId: '',
  };

  componentDidMount() {
    const uniqueSpecNames = [...new Set(this.props.specs.map(spec => spec.specName))];
    this.setState({uniqueSpecNames})
  }

  changeSpecName = (e) => this.setState({specName: e.target.value});

  changeSpecValue = (e) => this.setState({specId: e.target.value});

  addSpec = () => this.props.addSpecToProduct(this.state.specId);

  cancelSpec = () => this.props.changeSpecStatus();

  addValidation = () => Boolean(this.state.specName) && Boolean(this.state.specId);

  render() {
    return (
      <div>
        <select
          value={this.state.specName}
          onChange={this.changeSpecName}
        >
          <option value="">--Choose spec name--</option>
          {this.state.uniqueSpecNames
            .map(name => (
              <option key={name} value={name}>
                {name}
              </option>))
          }
        </select>
        <select
          style={{marginLeft: 20}}
          value={this.state.specValue}
          onChange={this.changeSpecValue}
        >
          <option value="">--Choose spec value--</option>
          {this.props.specs
            .filter(spec => spec.specName === this.state.specName)
            .map(spec => (
              <option key={spec._id} value={spec._id}>
                {spec.specValue}
              </option>))
          }
        </select>
        <button
          style={{marginLeft: 20}}
          type="button"
          className="btn btn-primary"
          onClick={this.addSpec}
          disabled={!this.addValidation()}
        >
          Add
        </button>
        <button
          style={{marginLeft: 20}}
          type="button"
          className="btn btn-secondary"
          onClick={this.cancelSpec}
        >
          Cancel
        </button>
      </div>
    )
  }
}

export default connect()(SpecField)