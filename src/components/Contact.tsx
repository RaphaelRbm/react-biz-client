import { FunctionComponent } from "react";
import "../styles/contact.css"
interface ContactProps {

}

const Contact: FunctionComponent<ContactProps> = () => {
  return ( <>

    <div>

      <section id="bg-header" style={{height:"22rem"}}>
        <div className="bg-header">
          <div>
            <h1> <span></span></h1>
            <h1><span></span></h1>
            <h1> <span></span></h1>
            {/* <a href="#projects" type="button" className="cta">Portfolio</a> */}
          </div>
        </div>
      </section>

      <div className=" w-100 contactUs">

        <div className="container-fluid d-inline-block">

          <div className="container w-100 ">
            <div className="content w-100 ">
              <div className="left-side ">
                <div className="address details">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="topic">Address</div>
                  <div className="text-one">Herzl 1, Tel-Aviv</div>
                  <div className="text-two">Ben-Gurion 5, Herzeliya</div>
                </div>
                <div className="phone details mt-5">
                  <i className="fas fa-phone-alt"></i>
                  <div className="topic">Phone</div>
                  <div className="text-one">+972 50-1234567</div>
                  <div className="text-two">+972 50-9876543</div>
                </div>
                <div className="email details mt-5">
                  <i className="fas fa-envelope"></i>
                  <div className="topic">Email</div>
                  <div className="text-one">ther@gmail.com</div>
                  <div className="text-two">info.ther@gmail.com</div>
                </div>
              </div>
              <div className="right-side">
                <div className="topic-text mb-3 ">Send us a message</div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, velit alias eius non illum
                  beatae atque
                  repellat ratione qui veritatis repudiandae adipisci maiores.</p>
                <form action="#">
                  <div className="input-box w-75 ">
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div className="input-box w-75">
                    <input type="text" placeholder="Enter your email" />
                  </div>

                  <div className="button mt-4 ">
                    <input type="button" value="Send Now" />
                  </div>

                </form>


              </div>

            </div>

          </div>
        </div>

      </div>
    </div>





  </> );
  }

  export default Contact;