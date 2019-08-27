import React, {Component} from 'react'
import {connect} from "react-redux";
import {CSVLink} from "react-csv";
import {itemsToShow} from '../../actions/filterActions'
import {
  toggleSelectProduct,
  showAllProducts,
  showAvailableProducts,
  showUnAvailableProducts
} from "../../actions/productActions";

class FilterAndSearchBar extends Component {
  state = {
    selectedAll: false
  };

  componentDidMount() {
    this.props.dispatch(itemsToShow(10000));
  }

  componentWillUnmount() {
    this.props.dispatch(itemsToShow(10000))
  }

  changeItemsValue = (e) => {
    this.props.dispatch(itemsToShow(e.target.value))
  };

  selectAll = () => {
    this.setState(prevState =>
        ({selectedAll: !prevState.selectedAll}), () => {
        this.props.renderedProductsID.map(id =>
          this.props.dispatch(toggleSelectProduct({
            id: id,
            bool: this.state.selectedAll
          })));
        this.props.dispatch(showAllProducts())
      }
    )
  };

  handleChangeCategory = (e) => {
    this.props.handleChangeCategory(e.target.value)
  };

  handleVisibilityToShow = (e) => {
    const {value} = e.target;
    if (value === 'visible') {
      return this.props.dispatch(showAvailableProducts())
    } else if (value === 'hidden') {
      return this.props.dispatch(showUnAvailableProducts())
    } else {
      return this.props.dispatch(showAllProducts())
    }
  };

  handleSearch = e => {
    this.props.handleSearch(e.target.value)
  };

  // for customize export to excel, change headers label
  // keys are from database object (product)
  headers = [
    {label: "ID", key: "_id"},
    {label: "Product Name", key: "productName"},
    {label: "Price", key: "price"},
    {label: "on Sale", key: "onSale"},
    {label: "Discount (%)", key: "discount"},
    {label: "Sale Price", key: "salePrice"},
    {label: "Descriptions", key: "description"},
    {label: "Descriptions", key: "description"},
    {label: "Weight (kg)", key: "weight"},
    {label: "Guarantee (year)", key: "guarantee"},
    {label: "Return (day)", key: "return"},
    {label: "Brand", key: "brand"},
    {label: "Visible", key: "visibility"},
  ];

  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        alignItem: 'center',
        padding: 15,
        backgroundColor: '#f7f2f2',
        border: '2px solid #fcd4d4',
        borderRadius: 15
      }}
      >
        <div style={{placeItems: 'start'}}>
          <input
            type="checkbox"
            className="form-check-input"
            checked={this.state.selectedAll}
            onChange={this.selectAll}
          />
          <label>Select All</label>
        </div>
        <div style={{marginLeft: 20}}>
          <label>Items</label>
          <select
            style={{marginLeft: 5}}
            onChange={this.changeItemsValue}
          >
            <option value="">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div style={{marginLeft: 20}}>
          <label>Categories</label>
          <select
            style={{marginLeft: 5}}
            onChange={this.handleChangeCategory}
          >
            <option value="">select</option>
            {this.props.categories
              .map(category => (
                <option
                  key={category._id}
                  value={category._id}
                >
                  {category.isRootCategory ? '--' : ''}
                  {category.categoryName}
                  {category.isRootCategory ? '--' : ''}
                </option>))
            }
          </select>
        </div>
        <CSVLink
          data={this.props.products.filter(product => product.selected)}
          headers={this.headers}
          className="btn btn-info btn-sm"
          style={{marginLeft: 20}}
        >
          Exp
        </CSVLink>
        <div style={{marginLeft: 20}}>
          <label>In Stock</label>
          <select
            style={{marginLeft: 5}}
            onChange={this.handleVisibilityToShow}
          >
            <option value="">All</option>
            <option value="visible">visible</option>
            <option value="hidden">hidden</option>
          </select>
        </div>
        <div style={{marginLeft: 20}}>
          <span role="img" aria-label="search">&#128270;</span>
          <input
            type="text"
            placeholder={'Product name ...'}
            value={this.props.searchText}
            onChange={this.handleSearch}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const renderedProductsID = state.filterReducer.renderedProductsID;
  const categories = state.categoryReducer.categories;
  const products = state.productReducer.products;

  return {renderedProductsID, categories, products}
};

export default connect(mapStateToProps)(FilterAndSearchBar)