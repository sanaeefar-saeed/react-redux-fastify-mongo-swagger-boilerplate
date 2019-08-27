import React, {Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {addSpec, addSpecError} from "../../actions/specActions";

class CreateSpec extends Component {
  state = {
    specName: "",
    specValue: "",
  };

  clearInputs = () => {
    this.setState({
      specName: "",
      specValue: "",
    });
  };

  onChangeSpecsName = e => this.setState({specName: e.target.value});

  onChangeSpecsValue = e => this.setState({specValue: e.target.value});

  onSubmit = e => {
    e.preventDefault();

    const newSpecs = {
      specName: this.state.specName,
      specValue: this.state.specValue,
    };

    axios
      .post("http://localhost:4000/api/specs", newSpecs)
      .then(res => {
        this.props.dispatch(addSpec(res.data));
        this.clearInputs();
      })
      .catch(err => this.props.dispatch(addSpecError(err)));
  };

  submitValidation = () => {
    return Boolean(this.state.specName) && Boolean(this.state.specValue);
  };

  render() {
    return (
      <div style={{marginTop: 10}}>
        <h3>Add New Specs</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Specs Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.specName}
              onChange={this.onChangeSpecsName}
            />
          </div>
          <div className="form-group">
            <label>Specs Value: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.specValue}
              onChange={this.onChangeSpecsValue}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!this.submitValidation()}
            >
              Save Specs
            </button>
            <button
              style={{marginLeft: 20}}
              type="reset"
              className="btn btn-secondary"
              onClick={this.clearInputs}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(CreateSpec);
