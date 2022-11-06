import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "../styles/about.css"


interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {


  return ( <>

    <div className="row d-flex justify-content-center align-items-center about">
      <section id="bg-header" style={{height:"22rem"}}>
        <div className="bg-header container">
          <div>
            <h1> <span></span></h1>
            <h1><span></span></h1>
            <h1> <span></span></h1>
            {/* <a href="#projects" type="button" className="cta">Portfolio</a> */}
          </div>
        </div>
      </section>

      <section id="about">
        <div className="about container">
          <div className="col-right">
            <h1 className="section-title">About <span>Us</span></h1>
            <h2>Business Cards</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, velit alias eius non illum beatae
              atque
              repellat ratione qui veritatis repudiandae adipisci maiores. At inventore necessitatibus deserunt
              exercitationem cumque earum omnis ipsum rem accusantium quis, quas quia, accusamus provident suscipit
              magni!
              Expedita sint ad dolore, commodi labore nihil velit earum ducimus nulla quae nostrum fugit aut, deserunt
              reprehenderit libero enim!</p>
            <Link className="cta" to={"/contact"}>Contact Us</Link>
          </div>
        </div>
      </section>


    </div>

    <ToastContainer progressClassName="toastProgress" bodyClassName="toastBody" />

  </> );
  }

  export default About;