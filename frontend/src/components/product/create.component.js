import React, {Component} from "react";
import RenderSpecField from './renderSpecField'
import SpecField from './specField'
import axios from "axios"
import Switch from "react-switch"
import ImageUploader from "react-images-upload"
import {connect} from "react-redux"
import {addProduct, createProductError} from "../../actions/productActions"
import Dropzone from "react-dropzone"
import VideoThumbnail from 'react-video-thumbnail'


class CreateProduct extends Component {
  state = {
    categories: [],
    primeCategoryId: '',
    categoryId: '',
    productName: '',
    price: '',
    onSale: false,
    discount: '',
    salePrice: '',
    description: '',
    images: [],
    videos: [],
    weight: '',
    guarantee: '',
    return: '',
    brand: '',
    visibility: false,
    addSpecStatus: false,
    specifications: [],
    specs: [],
    selected: false
  };

  clearInputs = () => {
    this.setState({
      primeCategoryId: '',
      primeCategoryName: '',
      categoryId: '',
      categoryName: '',
      productName: '',
      price: '',
      onSale: false,
      discount: '',
      salePrice: '',
      description: '',
      images: [],
      videos: [],
      uploadVideo: false,
      weight: '',
      guarantee: '',
      return: '',
      brand: '',
      visibility: false,
      addSpecStatus: false,
      specifications: [],
      specs: [],
      selected: false
    });
  };

  componentDidMount() {
    this.setState({
      // categories: this.props.categories,
      // specs: this.props.specs
    });
  }

  changePrimeCategoryId = e => this.setState({primeCategoryId: e.target.value,});

  changeCategoryId = e => this.setState({categoryId: e.target.value});

  changeProductName = e => this.setState({productName: e.target.value});

  changePrice = e => this.setState({price: e.target.value});

  changeOnSale = checked => this.setState({onSale: checked});

  changeDiscount = (discount, price) => this.setState({
    discount: discount,
    salePrice: price - (price * discount / 100)
  });

  showOnSaleOptions = () => (this.state.onSale ? <div>
    <label>Discount</label>
    <input
      style={{margin: 10}}
      type="text"
      placeholder={'On Percentage'}
      value={this.state.discount}
      onChange={(e) => this.changeDiscount(e.target.value, this.state.price)}/>
    <label>Sale Price</label>
    <input
      readOnly
      style={{margin: 10}}
      type="text"
      placeholder={'on GEL'}
      defaultValue={this.state.salePrice}
    />
  </div> : <></>);

  changeDescription = e => this.setState({description: e.target.value});

  // onDropImage = files => {
  //   const length = files.length;
  //   // don't use map function instead of for lop here
  //   for (let i = 0; i < length; i++) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(files[i]);
  //     reader.onload = e => this.setState(prevState => ({
  //       images: [...prevState.images, e.target.result]
  //     }));
  //   }
  // };
  // new onDropImage with forEach instead of for lop
  onDropImage = files => {
    files.forEach(image => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => this.setState(prevState => ({
        images: [...prevState.images, e.target.result]
      }));
    })
  };

  removeImage = (imageUrl) => {
    const newImages = this.state.images.filter(image => image !== imageUrl.image);
    this.setState({images: newImages})
  };

  onDropVideo = files => {
    this.setState({uploadVideo: true});
    files.forEach(videos => {
      const reader = new FileReader();
      reader.readAsDataURL(videos);
      reader.onload = e => this.setState(prevState => ({
        videos: [...prevState.videos, e.target.result],
        uploadVideo: false
      }));
    })
  };

  removeVideo = (videoUrl) => {
    const newVideos = this.state.videos.filter(video => video !== videoUrl.video);
    this.setState({videos: newVideos})
  };

  changeWeight = e => this.setState({weight: e.target.value});

  changeGuarantee = e => this.setState({guarantee: e.target.value});

  changeReturn = e => this.setState({return: e.target.value});

  changeBrand = e => this.setState({brand: e.target.value});

  changeVisibility = checked => this.setState({visibility: checked});

  changeSpecStatus = () => this.setState({addSpecStatus: !this.state.addSpecStatus});

  addSpecToProduct = (specId) => {
    const newSpec = this.props.specs.filter(spec => spec._id === specId);
    this.setState(prevState => ({
      specifications: [...prevState.specifications, newSpec[0]],
      addSpecStatus: false
    }))
  };

  deleteSpec = (specId) => {
    const newSpecifications = this.state.specifications.filter(spec => spec._id !== specId);
    this.setState({specifications: newSpecifications})
  };

  onSubmit = e => {
    e.preventDefault();

    const newProduct = {
      primeCategoryId: this.state.primeCategoryId,
      categoryId: this.state.categoryId,
      productName: this.state.productName,
      price: this.state.price,
      onSale: this.state.onSale,
      discount: this.state.discount,
      salePrice: this.state.salePrice,
      description: this.state.description,
      images: this.state.images,
      videos: this.state.videos,
      weight: this.state.weight,
      guarantee: this.state.guarantee,
      return: this.state.return,
      brand: this.state.brand,
      visibility: this.state.visibility,
      specifications: this.state.specifications,
      selected: false
    };

    axios
      .post("http://localhost:4000/api/products", newProduct)
      .then(res => {
        this.props.dispatch(addProduct(res.data));
        this.clearInputs()
      })
      .catch(err => this.props.dispatch(createProductError(err)));
  };

  submitValidation = () => {
    return Boolean(this.state.primeCategoryId) &&
      Boolean(this.state.categoryId) &&
      Boolean(this.state.productName);
  };

  render() {
    return (
      <div style={{marginTop: 10}}>
        <h3>Add New Product</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <select
              className="form-control"
              value={this.state.primeCategoryId}
              onChange={this.changePrimeCategoryId}
            >
              <option value="">--Choose main category--</option>
              {this.props.categories
                .filter(category => category.isRootCategory)
                .map(category => (
                  <option
                    key={category._id}
                    value={category._id}
                  >{category.categoryName}
                  </option>))
              }
            </select>
          </div>
          <div className="form-group">
            <select
              className="form-control"
              value={this.state.categoryId}
              onChange={this.changeCategoryId}
            >
              <option value="">--Choose category--</option>
              {this.props.categories
                .filter(category => category.parentId === this.state.primeCategoryId)
                .map(category => (
                  <option
                    key={category._id}
                    value={category._id}
                  >{category.categoryName}
                  </option>))
              }
            </select>
          </div>
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              className="form-control"
              placeholder={'Add product name'}
              value={this.state.productName}
              onChange={this.changeProductName}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="text"
              style={{margin: 10}}
              placeholder={'GEL'}
              value={this.state.price}
              onChange={this.changePrice}
            />
            <span style={{marginRight: 5}}>On Sale</span>
            <Switch
              checked={this.state.onSale}
              onChange={this.changeOnSale}
            />

          </div>
          <>{this.showOnSaleOptions()}</>
          <div className="form-group">
            <label>Short Description</label>
            <textarea
              className="form-control"
              value={this.state.description}
              onChange={this.changeDescription}
            />
          </div>
          <div id='imageSection'>
            <div className="form-group">
              <h5>
                <label>Category Images</label>
              </h5>
              <ImageUploader
                fileContainerStyle={{backgroundColor: '#e8eef9'}}
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
          <div id='videoSection'>
            <div className="form-group">
              <h5>
                <label>Product Videos</label>
              </h5>
              <Dropzone onDrop={this.onDropVideo}>
                {({getRootProps, getInputProps}) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()}/>
                      <button className="btn btn-primary btn-lg btn-block">Drop some videos here, or click to select
                        videos
                      </button>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>
            {this.state.uploadVideo ? <div className="spinner-grow" role="status"/> : null}
            <div style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 20
            }}>
              {[...new Set(Object.values(this.state.videos))].map(video => (
                <div
                  key={video}
                  onClick={() => this.removeVideo({video})}
                >
                  <VideoThumbnail
                    videoUrl={video}
                    width={240}
                    height={160}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>Weight</label>
            <input
              type="text"
              className="form-control"
              placeholder={'in kg'}
              value={this.state.weight}
              onChange={this.changeWeight}/>
          </div>
          <div className="form-group">
            <label>Guarantee</label>
            <select
              className="form-control"
              value={this.state.guarantee}
              onChange={this.changeGuarantee}>
              <option value='0'>none</option>
              <option value='1'>1 year</option>
              <option value='2'>2 year</option>
              <option value='3'>3 year</option>
            </select>
          </div>
          <div className="form-group">
            <label>Return:</label>
            <select
              className="form-control"
              value={this.state.return}
              onChange={this.changeReturn}
            >
              <option value='0'>none</option>
              <option value='1'>1 day</option>
              <option value='3'>3 day</option>
              <option value='5'>5 day</option>
            </select>
          </div>
          <div className="form-group">
            <label>Builder</label>
            <select
              className="form-control"
              value={this.state.brand}
              onChange={this.changeBrand}
            >
              <option value='0'>Brand</option>
              <option value='Apple'>Apple</option>
              <option value='Motorola'>Motorola</option>
              <option value='Samsung'>Samsung</option>
              <option value='LG'>LG</option>
            </select>
          </div>
          <div className="form-group">
            <label>
              <span style={{marginRight: 20}}>Visibility</span>
              <Switch
                checked={this.state.visibility}
                onChange={this.changeVisibility}
              />
            </label>
          </div>
          <div id={'specifications'}>
            <h4>Specifications</h4>
            <RenderSpecField
              specifications={this.state.specifications}
              deleteSpec={this.deleteSpec}
            />
            {this.state.addSpecStatus
              ? <SpecField
                changeSpecStatus={this.changeSpecStatus}
                addSpecToProduct={this.addSpecToProduct}
                specs={this.props.specs}/>
              : null
            }
            <button
              style={{marginTop: 10, marginBottom: 20}}
              type="button"
              className="btn btn-primary"
              onClick={this.changeSpecStatus}
            >
              Add Specification
            </button>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!this.submitValidation()}
              onClick={this.onSubmit}
            >
              Save Product
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

const
  mapStateToProps = state => {
    const categories = state.categoryReducer.categories;
    const specs = state.specReducer.specs;

    return {categories, specs}
  };

export default connect(mapStateToProps)(CreateProduct)
