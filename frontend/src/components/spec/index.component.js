import React, {Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import TableRow from "./TableRow";
import {
  getAllSpecs,
  isFetchingSpec,
  fetchSpecError,
  deleteSpecError, deleteSpec
} from "../../actions/specActions";

class SpecIndex extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/specs")
      .then(response => {
        this.props.dispatch(getAllSpecs(response.data));
        this.props.dispatch(isFetchingSpec(false));
      })
      .catch(err => this.props.dispatch(fetchSpecError(err)));
  }

  handleDelete = id => {
    axios
      .delete("http://localhost:4000/api/specs/" + id)
      .then(res => this.props.dispatch(deleteSpec(res.data._id)))
      .catch(err => this.props.dispatch(deleteSpecError(err)));
  };

  render() {
    return (
      <div>
        <h3 align="center">Spec List</h3>
        <div id='createNewSpec' style={{display: 'flex', flexDirection: 'row-reverse'}}>
          <Link to={"/spec/create"} className={"btn btn-primary"}>
            + Create New Spec
          </Link>
        </div>
        <table className="table table-striped" style={{marginTop: 20}}>
          <thead>
          <tr>
            <th>ID</th>
            <th>Spec Name</th>
            <th>Spec Value</th>
            <th>Edit Spec</th>
            <th>Remove Spec</th>
          </tr>
          </thead>
          <tbody>
          {this.props.specs.map(spec => {
            return (
              <TableRow
                spec={spec}
                key={spec._id}
                onDelete={this.handleDelete}
              />
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {specs: state.specReducer.specs};
};

export default connect(mapStateToProps)(SpecIndex);
