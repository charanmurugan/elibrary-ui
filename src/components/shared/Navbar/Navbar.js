import React from "react";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex  justify-content-between align-items-center fixed-top ">
            <section className="m-2">
              <a className="navbar-brand" href="#">
                <img
                  src="/assets/logo.png"
                  width="30"
                  height="30"
                  class="d-inline-block align-top"
                  alt=""
                />
                Logo
              </a>
            </section>
            <button
              className="navbar-toggler m-2 md-none"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse p-3" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Materials
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Recently Added
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Log in
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
