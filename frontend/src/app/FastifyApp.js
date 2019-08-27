import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateCategory from "../components/category/create.component";
import EditCategory from "../components/category/edit.component";
import categoryIndex from "../components/category/index.component";
import CreateProduct from "../components/product/create.component";
import EditProduct from "../components/product/edit.component";
import productIndex from "../components/product/index.component";
import CreateSpec from "../components/spec/create.component";
import EditSpec from "../components/spec/edit.component";
import specIndex from "../components/spec/index.component";

const FastifyApp = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/"} className="navbar-brand">
            Admin Panel
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/category/index"} className="nav-link">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/product/index"} className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/spec/index"} className="nav-link">
                  Specifications
                </Link>
              </li>
            </ul>
          </div>
        </nav>{" "}
        <br />
        <h2>Admin Panel</h2> <br />
        <Switch>
          <Route exact path="/category/create/:id?" component={CreateCategory}/>
          <Route path="/category/edit/:id" component={EditCategory} />
          <Route path="/category/index" component={categoryIndex} />
          <Route exact path="/product/create" component={CreateProduct} />
          <Route path="/product/edit/:id" component={EditProduct} />
          <Route path="/product/index" component={productIndex} />
          <Route exact path="/spec/create" component={CreateSpec} />
          <Route path="/spec/edit/:id" component={EditSpec} />
          <Route path="/spec/index" component={specIndex} />
        </Switch>
      </div>
    </Router>
  );
};

export default FastifyApp;
