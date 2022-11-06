import { FunctionComponent } from "react";

import "../styles/footer.css"
interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
  return ( <>


    {/*
    <!-- Footer --> */}
    <section id="footer">
      <div className="footer container">
        <div className="brand">
          <h1>The <span>R</span></h1>
        </div>
        <h2 className="text-center">Web & Software Solutions</h2>
        <div className="social-icon mt-3">
          <div className="social-item text-center">
            <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" /></a>
          </div>
          <div className="social-item">
            <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" /></a>
          </div>
          <div className="social-item">
            <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/twitter.png" /></a>
          </div>
          <div className="social-item">
            <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/behance.png" /></a>
          </div>
        </div>
        <p className="mt-5 text-center">Copyright © 2020 Raphael Ben-Menashe. All rights reserved</p>
      </div>
    </section>
    {/*
    <!-- End Footer --> */}

    {/* <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
      <footer>
        <div className="row justify-content-center mb-0 pt-5 pb-0 row-2 px-3">
          <div className="col-12">
            <div className="row row-2">
              <div className="col-sm-3 text-md-center">
                <h5><span> <i className="fa fa-firefox text-light" aria-hidden="true"></i></span><b className="ms-2">The
                    R</b></h5>
              </div>
              <div className="col-sm-3  my-sm-0 mt-5">
                <ul className="list-unstyled">
                  <li className="mt-0">Platform</li>
                  <li>Help Center</li>
                  <li>Security</li>
                </ul>
              </div>
              <div className="col-sm-3  my-sm-0 mt-5">
                <ul className="list-unstyled">
                  <li className="mt-0">Customers</li>
                  <li>Use Cases</li>
                  <li>Customers Services</li>
                </ul>
              </div>
              <div className="col-sm-3  my-sm-0 mt-5">
                <ul className="list-unstyled">
                  <li className="mt-0">Company</li>
                  <li>About</li>
                  <li>Careers- <span className="Careers">We're-hiring</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-0 pt-0 row-1 mb-0  px-sm-3 px-2">
          <div className="col-12">
            <div className="row my-4 row-1 no-gutters">
              <div className="col-sm-3 col-auto text-center"><small>&#9400; The R - Softwere</small></div>
              <div className="col-md-3 col-auto "></div>
              <div className="col-md-3 col-auto"></div>
              <div className="col  my-auto text-md-left  text-right "> <small> email@the-r.com <span><img
                      src="https://i.imgur.com/TtB6MDc.png" className="img-fluid ms-1" width="25" /></span> <span><img
                      src="https://i.imgur.com/N90KDYM.png" className="img-fluid " width="25" /></span></small> </div>
            </div>
          </div>
        </div>
      </footer>
    </div> */}



    {/* <div className="text-center text-lg-start text-white" style={{backgroundColor: "#3e4551"}}>

      <div className="container p-4 pb-0 text-center pb-3">

        <section>
          <div className="row">


            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-4">
              <h6 className=" titleSize text-uppercase mb-4 font-weight-bold">
                The R - Web Design
              </h6>
              <p>
                Design and construction of private and business websites.
              </p>
            </div>


            <hr className="w-100 clearfix d-md-none mt-3" />

            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-4">
              <h6 className="titleSize text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p> Jerusalem, Herzel 1, Israel</p>
              <p> ther@gmail.com</p>
              <p> 050-1234567</p>
            </div>


            <hr className="w-100 clearfix d-md-none mt-3" />

            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-4">
              <h6 className="titleSize text-uppercase mb-4 font-weight-bold">Follow me</h6>

              <a className="icon btn btn-primary btn-floating m-1" style={{backgroundColor: "#3b5998"}} role="button">
              </a>

              <a className="icon btn btn-primary btn-floating m-1" style={{backgroundColor: "#55acee"}} role="button">
              </a>
              <a className="icon btn btn-primary btn-floating m-1" style={{backgroundColor: "#dd4b39"}} role="button">
              </a>

              <a className="icon btn btn-primary btn-floating m-1" style={{backgroundColor: "#ac2bac"}} role="button">
              </a>

              <a className="icon btn btn-primary btn-floating m-1" style={{backgroundColor: "#0082ca"}} role="button">
              </a>

              <a className="icon btn btn-primary btn-floating m-1" style={{backgroundColor: "#333333"}} role="button">
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        © All Rights Reserved To Raphael Ben-Menashe
      </div>
    </div> */}


  </> );
  }

  export default Footer;