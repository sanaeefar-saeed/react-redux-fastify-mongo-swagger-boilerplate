import React from "react";
import {Link} from "react-router-dom";

const TableRow = props => {
  const deleteItem = () => {
    props.onDelete(props.spec._id);
  };
  /** @namespace props.spec */
  return (
    <tr>
      <td>{props.spec._id}</td>
      <td>{props.spec.specName}</td>
      <td>{props.spec.specValue}</td>
      <td>
        <Link to={"/spec/edit/" + props.spec._id} className="btn btn-primary">
          Edit
        </Link>
      </td>
      <td>
        <button onClick={deleteItem} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow
