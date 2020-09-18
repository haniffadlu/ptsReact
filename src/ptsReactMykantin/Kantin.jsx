import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Kantin extends Component {
  render(){
    return(
<Fragment>
<div className="container">
  <div className="row">
    <div className="col-9">
      
    <nav className="navbar py-3 px-4">
        <div className="row">
          <div className="col-3 text-left">
            <div className="navbar-brand text-dark">
              <span className="font-weight-light">
                <FontAwesomeIcon icon={faBars} />
              </span>
              &nbsp;
              <span className="s5">MyKantin</span>
            </div>
          </div>
          <div className="col-8 float-right">
            <div className="input-group p-1 rounde bg-light">
              <span className="p-2">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input
                type="text"
                name="in"
                id="in"
                className="form-control bg-transparent m-0 rounded border-0 text-capitalize"
                placeholder="Ingin Makan Apa?"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div className="col-2 fixed-right"></div>
  </div>
</div>
      </Fragment>
    )
  }
}

export default Kantin;