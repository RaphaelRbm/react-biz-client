import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import * as yup from "yup"
import { User } from "../interfaces/User";
import { errorMsg, successMsg, toastDuration } from "../services/feedBackService";
import { getUserByEmail } from "../services/userServices";
import '../styles/login.css';



interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = () => {

  const navigate = useNavigate();
  const formik = useFormik({
  initialValues: { email: "", password: "" },
  validationSchema: yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  }),
  onSubmit: (values: User) => {



  getUserByEmail(values)
  .then((result) => {


  sessionStorage.setItem("token",result.data.token);
  sessionStorage.setItem("email",values.email);
  sessionStorage.setItem("name",values.name || "");

  successMsg("Logged in successfully")


  setTimeout(() => {

  navigate("/home")

  }, toastDuration);

  }).catch((error)=>{
  console.log(error);

  if(error.message == "Network Error")
  errorMsg("Server Error")

  else
  errorMsg("Invalid username or password")
  });

  },
  });


  return ( <>

    {/*Login Form*/}
    <div className="row d-flex justify-content-center align-items-center mainContent">
      <div className="col col-xl-10">
        <div className="card border border-0">
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block mt-2 ">
              <img src="/media/images/registration/img_registration_3_425x425.jpg" alt="login form"
                className="imgLogin mt-5" style={{ borderRadius: "1rem 0 0 1rem"}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form onSubmit={formik.handleSubmit}>
                  {/*Login Title */}
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <span className="h1 fw-bold mb-0">Login</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px"}}>Sign into your account</h5>

                  {/*Email Input Field */}
                  <div className="form-floating mb-4">
                    <input type="email" className="form-control form-control-lg form-label mb-0" id="floatingInput"
                      placeholder="name@example.com" onChange={formik.handleChange} onBlur={formik.handleBlur}
                      value={formik.values.email} name='email' />
                    {formik.errors.email && formik.touched.email ?
                    <p className="text-danger ms-1 mt-1"><i
                        className="fa-solid fa-circle-exclamation text-danger me-2"></i>{formik.errors.email}</p>:null}
                    <label htmlFor="floatingInput">Email address</label>
                  </div>

                  {/*Password Input Field */}
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control form-control-lg mb-0" id="floatingInput"
                      placeholder="name@example.com" onChange={formik.handleChange} value={formik.values.password}
                      onBlur={formik.handleBlur} name='password' />
                    {formik.errors.password && formik.touched.password ?

                    <p className="text-danger ms-1 mt-1"><i
                        className="fa-solid fa-circle-exclamation text-danger me-2"></i>{formik.errors.password}</p>
                    :null}

                    <label htmlFor="floatingInput">Password</label>
                  </div>

                  {/*Login Button */}
                  <div className="mb-4 w-100">

                    <button disabled={!(formik.isValid && formik.dirty)} className={!(formik.isValid && formik.dirty)
                      ? 'login-btn w-100 mt-3 bg-light-orange' : 'login-btn w-100 mt-3 bg-orange' } type="submit"> <i
                        className={!(formik.isValid && formik.dirty) ? 'fa-solid fa-right-to-bracket d-none'
                        : 'fa-solid fa-right-to-bracket' }></i> <span className="me-2 ms-1">Login</span></button>
                  </div>


                  {/*Forgot Password*/}
                  <a className="small text-muted" href="#!">Forgot password?</a>

                  {/*Register*/}
                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81"}}>Don't have an account? &nbsp;
                    <Link style={{ color: "#393f81", display:"inline-block"}} to={"/register"}> Register here </Link>
                      </p> </form> </div> </div> </div> </div> </div> </div> <ToastContainer
                      progressClassName="toastProgress" bodyClassName="toastBody" />

  </> );
  }

  export default Login;