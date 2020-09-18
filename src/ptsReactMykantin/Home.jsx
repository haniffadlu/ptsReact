import React, { Component, Fragment } from "react";
import Axios from "axios";
import ".././styles.css";
// import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faSync } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      per_page: "5",
      current_page: "",
      total_pages: "",
      formName: "",
      userId: "",
      status: "",
      search: "",
      index: ""
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/3`;
    Axios.get(url)
      .then((response, index) => {
        console.log("Data Berhasil didapatkan", response);
        this.setState({
          datas: response.data.data,
          per_page: response.data.meta.per_page,
          current_page: response.data.meta.current_page,
          total_pages: response.data.meta.total_pages
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-9 position-relative pr-4">
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
                        placeholder="cari makan bang?"
                      />
                    </div>
                  </div>
                </div>
              </nav>
              <div className="row">
                <div className="col">
                  <div className="card round border-0 bg-yoi">
                    <div className="card-body oren text-left p-4">
                      <div className="row">
                        <div className="col-4 text-center">
                          <img
                            id="big"
                            src="https://i.ibb.co/hVbvd4p/undraw-breakfast-psiw-2.png"
                            alt="none"
                          />
                        </div>
                        <div className="col-8 py-4">
                          <h3 className="fb font-weight-bold">Promo Hari Ini</h3>
                          <h5 className="f">Perut Kenyang, hati senang</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 m-4">
                  <div className="float-left">
                    <h4 className="font-weight-bold fb">Kategori</h4>
                  </div>
                  <div className="float-right mr-5">
                    <button className="btn float-right rounded-pill px-3 font-weight-light text-light f">
                      Lebih Lengkap
                    </button>
                  </div>
                </div>
              </div>
              <div className="row yey m-1 text-center">
                <div className="col-3 px-2 rounde">
                  <div
                    className="card py-5 rounde card-category bg-transparent text-light border-0 p-0"
                    id="semua"
                  >
                    <div className="card-body a f">Semua</div>
                  </div>
                </div>
                <div className="col-3 px-2 rounde">
                  <div
                    className="card py-5 rounde card-category bg-transparent text-light border-0"
                    id="masakan"
                  >
                    <div className="card-body a f">Masakan</div>
                  </div>
                </div>
                <div className="col-3 px-2 rounde">
                  <div
                    className="card py-5 rounde card-category bg-transparent text-light border-0"
                    id="pija"
                  >
                    <div className="card-body a f">Pizza</div>
                  </div>
                </div>
                <div className="col-3 px-2 rounde">
                  <div
                    className="card py-5 rounde card-category bg-transparent text-light border-0"
                    id="jus"
                  >
                    <div className="card-body a f">Jus</div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 m-4 mr-5">
                  <div className="float-left">
                    <h4 className="font-weight-bold fb">Populer</h4>
                  </div>
                </div>
              </div>
              <div className="row yey m-1 text-center">
                {this.state.datas.map((data, index) => (
                  <div className="col-3 px-2 rounde">
                    <div
                      className="card py-5 rounde card-category bg-transparent text-light border-0"
                      id="" style={{backgroundImage: 'url('+ data.image +')'}}
                    >
                      <div className="card-body a f">{data.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-3 bg-light fixed-right">
              <nav className="navbar bg-transparent">
                <div className="row py-2">
                  <div className="col-3"></div>
                  <div className="col-3">
                    <div className="rounded-cirle text-center p-2">
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="rounded-cirle bg-warning d3 text-center p-2">
                      <span className="">3</span>
                    </div>
                  </div>
                  <div className="col-3 float-right">
                    <div className="">
                      <img
                        className="rounded-circle profil"
                        src="https://www.pinclipart.com/picdir/middle/95-958614_man-icon-person-logo-png-clipart.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </nav>
              <div className="row">
                <div className="col">
                  <div className="card cardi rounde p-0 text-light font-weight-light">
                    <div className="card-body">
                      <p id="name">Costumer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
