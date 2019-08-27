import React, {Component} from "react";
import axios from "axios";
import Switch from "react-switch";
import ImageUploader from "react-images-upload";
import {connect} from "react-redux";
import {addCategory, addCategoryError} from "../../actions/categoryActions";

class CreateCategory extends Component {
  state = {
    categoryName: "",
    isRootCategory: false,
    isVisible: false,
    images: []
  };

  clearInputs = () => {
    this.setState({
      categoryName: "",
      isRootCategory: false,
      isVisible: false,
      images: []
    });
  };

  onChangeCategoryName = e => this.setState({categoryName: e.target.value});

  onDropImage = files => {
    const length = files.length;
    // don't use map function instead of for lop here
    for (let i = 0; i < length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = e => this.setState(prevState => ({
        images: [...prevState.images, e.target.result]
      }));
    }
  };

  removeImage = (imageUrl) => {
    const newImages = this.state.images.filter(image => image !== imageUrl.image);
    this.setState({images: newImages})
  };

  rootCategoryChange = checked => this.setState({isRootCategory: checked});

  onVisibilityChange = checked => this.setState({isVisible: checked});

  onSubmit = e => {
    e.preventDefault();

    const newCategory = {
      categoryName: this.state.categoryName,
      parentId: this.props.match.params.id,
      isRootCategory: this.state.isRootCategory,
      isVisible: this.state.isVisible,
      images: this.state.images
    };

    axios
      .post("http://localhost:4000/api/categories", newCategory)
      .then(res => {
        this.props.dispatch(addCategory(res.data));
        this.clearInputs()
      })
      .catch(err => this.props.dispatch(addCategoryError(err)));
  };

  submitValidation = () => {
    return Boolean(this.state.categoryName);
  };

  render() {
    return (
      <div style={{marginTop: 10}}>
        <h3>Add New Category</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Category Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.categoryName}
              onChange={this.onChangeCategoryName}
            />
          </div>
          <div className="form-group">
            <label>
              <span style={{marginRight: 20}}>Root Cat</span>
              <Switch
                onChange={this.rootCategoryChange}
                checked={this.state.isRootCategory}
              />
            </label>
            <label style={{marginLeft: 20}}>
              <span style={{marginRight: 20}}>Visibility</span>
              <Switch
                onChange={this.onVisibilityChange}
                checked={this.state.isVisible}
              />
            </label>
          </div>
          <div id='imageSection'>
            <div className="form-group">
              <label>Category Images</label>
              <ImageUploader
                fileContainerStyle={{backgroundColor: '#e6ecf7'}}
                withIcon={true}
                buttonText="Choose image"
                label={'Max file size: 5mb, accepted: jpg - gif - png - jpeg'}
                onChange={this.onDropImage}
                imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
                maxFileSize={5242880}
              />
            </div>
            <div id='showImages'
                 style={{
                   flex: 1,
                   flexDirection: 'row',
                   marginTop: 20,
                   marginBottom: 20,
                 }}>
              {[...new Set(Object.values(this.state.images))].map(image => (
                <img
                  key={image}
                  src={image}
                  alt={'not found'}
                  width={100}
                  height={100}
                  style={{marginRight: 20}}
                  onClick={() => this.removeImage({image})}
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
              Save Category
            </button>
            <button
              style={{marginLeft: 20}}
              type="reset"
              className="btn btn-secondary"
              onClick={this.clearInputs}
            >
              Reset Form
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(CreateCategory);
