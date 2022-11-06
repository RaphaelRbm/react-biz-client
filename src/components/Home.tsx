import { FunctionComponent } from "react";
import "../styles/home.css"

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {

  return ( <>

    <section id="bg-header">
      <div className="bg-header container">
        <div>
          <h1>Welcome to <span></span></h1>
          <h1><span></span></h1>
          <h1>Biz Cards <span></span></h1>
        </div>
      </div>
    </section>

    <section id="services">
      <div className="services container">
        <div className="service-top">
          <h1 style={{fontSize:"4rem", marginTop:"3rem"}} className="section-title">Our<span> Services</span></h1>
          <p></p>
        </div>
        <div className="service-bottom">

          <div className="service-item">

            <div className="icon w-100">
              <i className="fa-solid fa-briefcase fa-5x" style={{color:"rgb(135,206,250)"}}></i>
            </div>
            <h2>Business</h2>
            <p>Create and manage business cards that include all the information of the requested business</p>
          </div>
          <div className="service-item">
            <div className="icon w-100">

              <i className="fa-solid fa-user fa-5x" style={{color:"rgb(135,206,250)"}}></i>
            </div>
            <h2>Free Account</h2>
            <p>Use your own free user account with which you can connect to the site and view the cards you have created
            </p>
          </div>
          <div className="service-item">
            <div className="icon w-100">
              <i className="fa-solid fa-globe fa-5x" style={{color:"rgb(135,206,250)"}}></i>
            </div>
            <h2>Accessibility</h2>
            <p>Biz is a free website that is accessible and adapted to any device
              so you can use it from wherever you are</p>
          </div>

        </div>
      </div>
    </section>


    <hr style={{height:"0.1rem"}} className="solid w-100" />

    <section id="contact">
      <div className="contact container" style={{marginTop:"-3rem"}}>
        <div>
          <h1 style={{fontSize:"4rem", marginTop:"0rem"}} className="section-title">Contact <span>info</span></h1>
        </div>
        <div className="contact-items mt-5">
          <div className="contact-item">
            <div className="icon">
              <i className="fa-solid fa-phone fa-4x" style={{color:"rgb(135,206,250)"}}></i>
            </div>
            <div className="contact-info">
              <h1>Phone</h1>
              <h2>+972 50-1234567</h2>
              <h2>+972 04-1234567</h2>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <i className="fa-solid fa-envelope fa-4x" style={{color:"rgb(135,206,250)"}}></i>
            </div>
            <div className="contact-info">
              <h1>Email</h1>
              <h2>biz-cards@gmail.com</h2>
              <h2>info@gmail.com</h2>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon">
              <i className="fa-solid fa-location-dot fa-4x" style={{color:"rgb(135,206,250)"}}></i>
            </div>
            <div className="contact-info">
              <h1>Address</h1>
              <h2>Herzl 1 Tel-aviv, Israel</h2>
            </div>
          </div>
        </div>
      </div>
    </section>

  </> );


  }

  export default Home;