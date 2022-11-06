import { useFormik } from "formik";
import { FunctionComponent, useState } from "react";
import * as yup from "yup"
import { useNavigate } from "react-router-dom";
import { postUser } from "../services/userServices";
import { User } from "../interfaces/User";
import { errorMsg, successMsg, toastDuration } from "../services/feedBackService";
import { ToastContainer } from "react-toastify";

import "../styles/register.css"


interface RegisterProps {

}


const Register: FunctionComponent<RegisterProps> = () => {

  const [isBiz, setIsBiz] = useState(false);

  const navigate = useNavigate();
  const formik = useFormik ({initialValues:{name:"",email:"",password:"", isBiz:false},
  validationSchema:yup.object(
  {
  name: yup.string().required().min(2,"must be at least 2 characters"),
  email: yup.string().required().email("Invalid Email"),
  password: yup.string().required().min(8,"must be at least 8 characters")
  }
  ),onSubmit: (values)=>
  {
  let user: User = { ...values, isBiz: isBiz };
  postUser(user)
  .then(async (result) =>
  {
  console.log(result.data)

  successMsg("Registered successfully")
  setTimeout(() => {
  navigate("/login")
  }, toastDuration);

  }
  )
  .catch((error) => {
  console.log(error)
  errorMsg("oops..! something went wrong")

  });

  }
  })

  return ( <>

    {/*Register Form*/}

    <div className="row d-flex justify-content-center align-items-center mainContent">
      <div className="col col-xl-10">
        <div className="card border border-0">
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block mt-2">
              <img src="/media/images/registration/img_registration_4_425x475.jpg" alt="login form"
                className="imgRegister mt-5" style={{ borderRadius: "1rem 0 0 1rem"}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form onSubmit={formik.handleSubmit}>

                  {/*Login Title */}
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <span className="h1 fw-bold mb-0">Register</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px"}}>Create new account</h5>

                  {/*Name Input Field */}
                  <div className="form-floating mb-4">
                    <input type="text" className="form-control form-control-lg form-label mb-0" id="floatingInput"
                      placeholder="Name" onChange={formik.handleChange} onBlur={formik.handleBlur}
                      value={formik.values.name} name='name' />
                    {formik.errors.name && formik.touched.name ?
                    <p className="text-danger ms-1 mt-1"><i
                        className="fa-solid fa-circle-exclamation text-danger me-2"></i>{formik.errors.name}</p>:null}
                    <label htmlFor="floatingInput">Name</label>
                  </div>

                  {/*Email Input Field */}
                  <div className="form-floating mb-4">
                    <input type="email" className="form-control form-control-lg form-label mb-0" id="floatingInput"
                      placeholder="name@example.com" onChange={formik.handleChange} onBlur={formik.handleBlur}
                      value={formik.values.email} name='email' />
                    {formik.errors.email && formik.touched.email ?

                    <p className="text-danger ms-1 mt-1"><i
                        className="fa-solid fa-circle-exclamation text-danger me-2"></i>{formik.errors.email}</p>
                    :null}
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

                  {/*Account Type */}
                  <div className="w-100 mt-3 mb-2">
                    <div className="radio-item">
                      <input onClick={()=> setIsBiz(false)} className="form-check-input" type="radio"
                      name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                      <label className="form-check-label" htmlFor="inlineRadio1"> Private</label>
                    </div>
                    <div className="radio-item ms-3">
                      <input onClick={()=> setIsBiz(true)} className="form-check-input" type="radio"
                      name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                      <label className="form-check-label" htmlFor="inlineRadio2">Business</label>
                    </div>
                  </div>

                  {/*Register Button */}
                  <div className="mb-4 w-100 ">
                    <button disabled={!(formik.isValid && formik.dirty)} className={!(formik.isValid && formik.dirty)
                      ? 'register-btn w-100 mt-4 bg-light-purple' : 'register-btn w-100 mt-4 bg-purple' } type="submit">
                      <i className={!(formik.isValid && formik.dirty) ? 'btn-icon fa-solid fa-plus d-none'
                        : 'btn-icon fa-solid fa-plus' }></i> <span className="me-2 ms-1">Create Now</span></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ToastContainer progressClassName="toastProgress" bodyClassName="toastBody" />


  </> );
  }

  export default Register;