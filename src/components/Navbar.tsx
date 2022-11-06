import { FunctionComponent } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import '../styles/navbar.css';

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = () => {



  const navigate = useNavigate();
  const handleLogout = () => {


  sessionStorage.removeItem("token");
  sessionStorage.removeItem("email")
  navigate("/");
  };

  const businessLink = ()=>{

  if (sessionStorage.getItem("token") == undefined || sessionStorage.getItem("token") === "")
  {
  alert("Must be logged in first in order to create and watch your business cards")
  }

  else
  navigate("/cards")

  }



  let token : string = sessionStorage.getItem("token") || "";
  let firstEmailChar : string = sessionStorage.getItem("email") || "";

  if (firstEmailChar != "")
  firstEmailChar = firstEmailChar.charAt(0).toUpperCase();

  const confirmLogout = () => {

  confirmAlert({
  customUI: ({ onClose }) => {
  return (
  <div className='custom-ui'>
    <h1>Logout</h1>
    <p>Are you sure you want to logout from your account?</p>

    <button className="alert-btn me-3" onClick={()=> {
      handleLogout();
      onClose();
      }}
      >
      Yes
    </button>

    <button className="alert-btn" onClick={onClose}>No</button>

  </div>
  );
  }
  });
  };


  return (

  <nav className="navbar fixed-top navbar-expand-lg navbar-light" id="NavBar">
    <div className="container-fluid ">

      <Link to={"/"} className=" mb-1 mainLogoLink"> <img className="mainLogo" alt="Lightning"
        src="/media/images/logos/img_logo_3_175x75.png" />
      </Link>


      <div className="nav-item nav-button ms-5 navMainLinks">
        <NavLink to={"/about"} className="nav-link text-light me-1 ps-3 pe-3 navMainLinks">
          About
        </NavLink>
      </div>

      <div className="nav-item nav-button ms-2 navMainLinks">
        <NavLink to={"/contact"} className="nav-link text-light me-1 ps-3 pe-3 navMainLinks">
          Contact Us
        </NavLink>
      </div>

      <div className="nav-item nav-button ms-2 navMainLinks">
        <a style={{cursor:"pointer"}} onClick={businessLink} className="nav-link text-light me-1 ps-3 pe-3">
          Business
        </a>
      </div>

      <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="icon-bar top-bar"></span>
        <span className="icon-bar middle-bar"></span>
        <span className="icon-bar bottom-bar"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>


        <form className="d-flex ">
          {(token!= "") ?
          (
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 ">
            <li className=" dropdown dropdown-menu-right ">
              <a className="nav-link " style={{ fontSize: "1.2rem", color:"white" }} id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                <div id="profileImage">{firstEmailChar}</div>
              </a>
              <ul className=" dropdown-menu dropdown-menu-right p-2 mt-4">

                <li className="ml-auto pt-2 pb-2" style={{cursor:"pointer"}}><i style={{display:"inline"}}
                    className="btn-icon ms-3 fa-solid fa-right-to-bracket"></i><a style={{display:"inline"}}
                    className="dropdown-item" onClick={confirmLogout}>Logout</a></li>
              </ul>

            </li>
          </ul>

          ) : (
          <div className="navbar-nav ms-auto mb-2 mb-lg-0 text-center w-100">


            <div className="nav-item nav-button">
              <NavLink to={"/login"} className="nav-link text-light me-1 ps-3 pe-3">
                Login
              </NavLink>
            </div>

            <div className="nav-item nav-button">
              <NavLink to={"/register"} className="nav-link text-light ps-3 pe-3">
                Sign Up
              </NavLink>
            </div>
          </div>
          )}
        </form>
      </div>
    </div>

  </nav>



  );





  }

  export default Navbar;