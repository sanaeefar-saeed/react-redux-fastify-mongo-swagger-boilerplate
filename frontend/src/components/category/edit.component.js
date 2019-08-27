import React, { Component } from "react";
import axios from "axios";
import Switch from "react-switch";
import ImageUploader from "react-images-upload";
import { connect } from "react-redux";
import {
  updateCategory,
  editCategoryError,
  fetchCategoryError
} from "../../actions/categoryActions";

class EditCategory extends Component {
  state = {
    categoryName: "",
    isRootCategory: false,
    isVisible: false,
    images: [],
    parentId: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/categories/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          parentId: response.data.parentId,
          categoryName: response.data.categoryName,
          isRootCategory: response.data.isRootCategory,
          isVisible: response.data.isVisible,
          images: response.data.images
        });
      })
      .catch(err => this.props.dispatch(fetchCategoryError(err)));
  }

  changeparentId = e => this.setState({ parentId: e.target.value });

  onChangeCategoryName = e => this.setState({ categoryName: e.target.value });

  isRootCategoryChange = checked => {
    this.setState({ isRootCategory: checked });
    this.setState({ parentId: "" });
  };

  onVisibilityChange = checked => this.setState({ isVisible: checked });

  showParentCategory = () =>
    this.state.isRootCategory ? (
      <></>
    ) : (
      <div className="form-group">
        <select
          className="form-control"
          value={this.state.parentId}
          onChange={this.changeparentId}
        >
          <option value="">--Parent Category--</option>
          {this.props.categories
            .filter(category => category.isRootCategory)
            .map(category => (
              <option key={category._id} value={category._id}>
                {category.categoryName}
              </option>
            ))}
        </select>
      </div>
    );

  onDropImage = files => {
    const length = files.length;
    // don't use map function instead of for lop here
    for (let i = 0; i < length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = e =>
        this.setState(prevState => ({
          images: [...prevState.images, e.target.result]
        }));
    }
  };

  removeImage = imageUrl => {
    const newImages = this.state.images.filter(
      image => image !== imageUrl.image
    );
    this.setState({ images: newImages });
  };

  onSubmit = e => {
    e.preventDefault();

    const editedCategory = {
      categoryName: this.state.categoryName,
      isRootCategory: this.state.isRootCategory,
      isVisible: this.state.isVisible,
      images: this.state.images,
      parentId: this.state.parentId
    };

    axios
      .put(
        "http://localhost:4000/api/categories/" + this.props.match.params.id,
        editedCategory
      )
      .then(res => {
        this.props.dispatch(updateCategory(res.data));
        this.props.history.push("/category/index");
      })
      .catch(err => this.props.dispatch(editCategoryError(err)));
  };

  submitValidation = () =>
    Boolean(this.state.categoryName) &&
    Boolean(this.state.parentId || this.state.isRootCategory);

  discardChanges = () => this.props.history.push("/category/index");

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update Category</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Category Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.categoryName}
              onChange={this.onChangeCategoryName}
            />
          </div>
          <div className="form-group">
            <label>
              <span style={{ marginRight: 20 }}>Root Cat</span>
              <Switch
                onChange={this.isRootCategoryChange}
                checked={this.state.isRootCategory}
              />
            </label>
            <label style={{ marginLeft: 20 }}>
              <span style={{ marginRight: 20 }}>Visibility</span>
              <Switch
                onChange={this.onVisibilityChange}
                checked={this.state.isVisible}
              />
            </label>
          </div>
          <>{this.showParentCategory()}</>
          <div id="imageSection">
            <div className="form-group">
              <label>Category Images</label>
              <ImageUploader
                fileContainerStyle={{ backgroundColor: "#e6ecf7" }}
                withIcon={true}
                buttonText="Choose image"
                onChange={this.onDropImage}
                imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
                maxFileSize={5242880}
              />
            </div>
            <div
              id="showImages"
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: 20,
                marginBottom: 20
              }}
            >
              {[...new Set(Object.values(this.state.images))].map(image => (
                <img
                  key={image}
                  src={image}
                  alt={"not found"}
                  width={100}
                  height={100}
                  style={{ marginRight: 20 }}
                  onClick={() => this.removeImage({ image })}
                />
              ))}
            </div>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!this.submitValidation()}
            >
              Update Category
            </button>
            <button
              style={{ marginLeft: 20 }}
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
  return { categories: state.categoryReducer.categories };
};

export default connect(mapStateToProps)(EditCategory);
