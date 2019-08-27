import React, {Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {
  editSpecError,
  fetchSpecError, updateSpec
} from "../../actions/specActions";

class EditSpec extends Component {
  state = {
    specName: "",
    specValue: "",
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/specs/" + this.props.match.params.id)
      .then(res => {
        this.setState({
          specName: res.data.specName,
          specValue: res.data.specValue,
        });
      })
      .catch(err => this.props.dispatch(fetchSpecError(err)));
  }

  onChangeSpecName = e => this.setState({specName: e.target.value});

  onChangeSpecValue = e => this.setState({specValue: e.target.value});

  onSubmit = e => {
    e.preventDefault();

    const editedSpec = {
      specName: this.state.specName,
      specValue: this.state.specValue,
    };

    axios
      .put("http://localhost:4000/api/specs/" + this.props.match.params.id, editedSpec)
      .then(res => {
        this.props.dispatch(updateSpec(res.data));
        this.props.history.push("/spec/index")
      })
      .catch(err => this.props.dispatch(editSpecError(err)));
  };

  submitValidation = () =>
    Boolean(this.state.specName) && Boolean(this.state.specValue);

  discardChanges = () => this.props.history.push("/spec/index");

  render() {
    return (
      <div style={{marginTop: 10}}>
        <h3 align="center">Update Spec</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Spec Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.specName}
              onChange={this.onChangeSpecName}
            />
          </div>
          <div className="form-group">
            <label>Spec Value: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.specValue}
              onChange={this.onChangeSpecValue}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!this.submitValidation()}
            >
              Save Spec
            </button>
            <button
              style={{marginLeft: 20}}
              type="reset"
              className="btn btn-secondary"
              onClick={this.discardChanges}
            >
              Discard Changes
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {specs: state.specReducer.specs};
};

export default connect(mapStateToProps)(EditSpec);
