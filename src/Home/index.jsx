import "./style.css";
import Vector from "../assets/Vector.png";
import Rasm2 from "../assets/rasm2.png";

function Home() {
  return (
    <div className="Home_container">
      <div className="Home_navbar">
        <h2 className="Home_navbar_title">MT</h2>
        <div className="Home_navbar_btn">
          <button>About</button>
          <button>Projects</button>
          <button>Contact</button>
        </div>
        <div className="Home_navbar_icon">
          <img src={Vector} alt="#" />
        </div>
      </div>
      <div className="Home_card">
        <div className="Home_left">
          <h1 className="content_name">Toshboyev Muxriddin </h1>
          <h2 className="content_title">Frontend Developer</h2>
          <p className="content_paragraf">
            I am a passionate frontend developer with experience in creating
            responsive and user-friendly web applications. My expertise includes
            React, JavaScript, and modern CSS frameworks.
          </p>
          <div className="content_btn">
            <button>Get in Touch</button>
            <p> 🟢 Available now</p>
          </div>
        </div>
        <div className="Home_content_img">
          <img src={Rasm2} alt="#" />
        </div>
      </div>
      <h2 className="Home_line"></h2>
    </div>
  );
}

export default Home;
