import React from "react"
import {Link} from "react-router-dom"

const TableRow = props => {
  const deleteItem = () => {
    props.onDelete(props.category._id)
  };
  /** @namespace props.category */
  return (
    <tr>
      <td>{props.category.parentId}</td>
      <td>{props.category.categoryName}</td>
      <td>
        <img src={props.category.images[0]} alt='not found' width={70} height={70}/>
      </td>
      <td>
        <Link
          to={"/category/create/" + props.category._id}
          className="btn btn-primary"
        >
          Add
        </Link>
      </td>
      <td>
        <Link
          to={"/category/edit/" + props.category._id}
          className="btn btn-primary"
        >
          Edit
        </Link>
      </td>
      <td>
        <button onClick={deleteItem} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  )
};

export default TableRow
