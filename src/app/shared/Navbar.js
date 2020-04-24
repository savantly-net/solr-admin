import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  render () { 
    return (
      <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
        <a className="navbar-brand brand-logo-mini align-self-center d-lg-none" href="!#" onClick={evt =>evt.preventDefault()}><img src={require("../../assets/images/logo-mini.svg")} alt="logo" /></a>
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <i className="mdi mdi-menu"></i>
          </button>
          <ul className="navbar-nav navbar-nav-left header-links">
            <li className="nav-item d-none d-md-flex">
              <a href="!#" onClick={evt =>evt.preventDefault()} className="nav-link">Solr Documentation</a>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right ml-lg-auto">
            <li className="nav-item  nav-profile border-0">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                  <i className="mdi mdi-bell-outline"></i>
                  <span className="count bg-success">3</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="navbar-dropdown preview-list">
                  <Dropdown.Item className="dropdown-item  d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <p className="mb-0 font-weight-medium float-left">Example Notifications </p>
                    <span className="badge badge-pill badge-primary float-right">View all</span>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/favicon.png")} alt="profile" className="img-sm profile-pic" /> </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">Example</p>
                      <p className="font-weight-light small-text"> Some details </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/favicon.png")} alt="profile" className="img-sm profile-pic" /> </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">Example</p>
                      <p className="font-weight-light small-text"> Some details </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/favicon.png")} alt="profile" className="img-sm profile-pic" /> </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">Example</p>
                      <p className="font-weight-light small-text"> Some details </p>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
