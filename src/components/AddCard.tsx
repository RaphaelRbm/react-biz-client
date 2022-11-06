import { useFormik } from "formik";
import { FunctionComponent } from "react";
import * as yup from "yup"
import { useNavigate } from "react-router-dom";

import { errorMsg, successMsg, toastDuration } from "../services/feedBackService";
import { ToastContainer } from "react-toastify";

import "../styles/addCard.css"
import { addCard } from "../services/cardsServices";


interface AddCardProps {

}


const AddCard: FunctionComponent<AddCardProps> = () => {


  const navigate = useNavigate();
  const formik = useFormik ({initialValues:{name:"",description:"",address:"", phone:"",image:""},
  validationSchema:yup.object(
  {
  name: yup.string().required().min(2,"must be at least 2 characters"),
  description: yup.string().required().min(2,"must be at least 2 characters"),
  address: yup.string().required().min(2,"must be at least 2 characters"),
  phone: yup.string().required().min(9,"must be at least 9 characters").max(10,"max characters - 10"),
  image: yup.string().required().min(2,"must be at least 2 characters")

  }
  ),onSubmit: (values)=>
  {

  addCard(values)
  .then(async (result) =>
  {
  console.log(result.data)

  successMsg("Card added successfully")
  setTimeout(() => {
  navigate("/cards")
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

    {/*New Biz Card Form*/}

    <div className="row d-flex justify-content-center align-items-center mainContent">
      <div className="col col-xl-10">
        <div className="card border border-0">
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block mt-2">
              <img src="/media/images/business/img_business_12_425x475.jpg" alt="biz card form"
                className="imgRegister mt-5" style={{ borderRadius: "1rem 0 0 1rem"}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form onSubmit={formik.handleSubmit}>

                  {/*Title */}
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <span className="h1 fw-bold mb-0">Biz Card</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px"}}>Create new Biz card</h5>

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

                  {/*Description Input Field */}
                  <div className="form-floating mb-4">
                    <input type="text" className="form-control form-control-lg form-label mb-0" id="floatingInput"
                      placeholder="description" onChange={formik.handleChange} onBlur={formik.handleBlur}
                      value={formik.values.description} name='description' />
                    {formik.errors.description && formik.touched.description ?

                    <p className="text-danger ms-1 mt-1"><i
                        className="fa-solid fa-circle-exclamation text-danger me-2"></i>{formik.errors.description}</p>
                    :null}
                    <label htmlFor="floatingInput">Description</label>
                  </div>

                  {/*Address Input Field */}
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control form-control-lg mb-0" id="floatingInput"
                      placeholder="Address" onChange={formik.handleChange} value={formik.values.address}
                      onBlur={formik.handleBlur} name='address' />
                    {formik.errors.address && formik.touched.address ?
                    <p className="text-danger ms-1 mt-1"><i
                        className="fa-solid fa-circle-exclamation text-danger me-2"></i>{formik.errors.address}</p>
                    :null}
                    <label htmlFor="floatingInput">Address</label>
                  </div>

                  {/*Phone Input Field */}
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control form-control-lg mb-0" id="floatingInput"
                      placeholder="Phone" onChange={formik.handleChange} value={formik.values.phone}
                      onBlur={formik.handleBlur} name='phone' />
                    {formik.errors.phone && formik.touched.phone ?
                    <p className="text-danger ms-1 mt-1"><i
                        className="fa-solid fa-circle-exclamation text-danger me-2"></i>{formik.errors.phone}</p>:null}
                    <label htmlFor="floatingInput">Phone</label>
                  </div>

                  {/*Image Input Field */}
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control form-control-lg mb-0" id="floatingInput"
                      placeholder="Image" onChange={formik.handleChange} value={formik.values.image}
                      onBlur={formik.handleBlur} name='image' />
                    {formik.errors.image && formik.touched.image ?
                    <p className="text-danger ms-1 mt-1"><i
                        className="fa-solid fa-circle-exclamation text-danger me-2"></i>{formik.errors.image}</p>:null}
                    <label htmlFor="floatingInput">Image</label>
                  </div>

                  {/*Create Button */}
                  <div className="mb-4 w-100">
                    <button disabled={!(formik.isValid && formik.dirty)} className={!(formik.isValid && formik.dirty)
                      ? 'register-btn w-100 mt-3 bg-light-blue' : 'register-btn w-100 mt-3 bg-blue' } type="submit"> <i
                        className={!(formik.isValid && formik.dirty) ? 'btn-icon fa-solid fa-plus d-none'
                        : 'btn-icon fa-solid fa-plus' }></i> <span className="me-2 ms-1">Add Now</span></button>
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

  export default AddCard;