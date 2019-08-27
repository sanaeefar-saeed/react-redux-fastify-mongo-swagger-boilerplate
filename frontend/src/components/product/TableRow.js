import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {toggleSelectProduct, showAllProducts} from '../../actions/productActions'
import {addProductToRendered, removeProductFromRendered} from "../../actions/filterActions";

class TableRow extends Component {
  state = {
    checked: false,
  };

  componentDidMount() {
    this.props.dispatch(addProductToRendered(this.props.product._id))
  }

  componentWillUnmount() {
    this.props.dispatch(removeProductFromRendered(this.props.product._id))
  }

  handleToggle = (id) => {
    this.setState(prevState => ({
      checked: !prevState.checked
    }), () => {
      this.props.dispatch(toggleSelectProduct({id: id, bool: this.state.checked}));
      this.props.dispatch(showAllProducts())
    });
  };

  deleteItem = () => {
    this.props.onDelete(this.props.product._id)
  };

  render() {
    const {product} = this.props;
    return (
      <tr>
        <td style={{paddingLeft: 50}}>
          <input
            type="checkbox"
            className="form-check-input"
            checked={product.selected}
            onChange={() => this.handleToggle(product._id)}/>
        </td>
        <td>
          <img src={product.images[0]} alt='not found' width={40} height={40}/>
        </td>
        <td>{product.productName}</td>
        <td>{product.price}</td>
        <td>
          {product.visibility ? <p>&#10004;</p> : <p>&#10006;</p>}
        </td>
        <td>
          <Link to={"/product/edit/" + product._id} className="btn btn-primary">
            Edit
          </Link>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.deleteItem(product._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    )
  }
}

export default connect()(TableRow)