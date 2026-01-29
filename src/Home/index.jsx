import "./style.css";
import Vector from "../assets/Vector.png";
import Rasm from "../assets/photo_3x4_format.png";

function Home() {
  return (
    <div className="Home_container">
      <div className="Home_navbar">
        <h2 className="Home_navbar_name">MT</h2>
        <div className="Home_navbar_btn">
          <button>About</button>
          <button>Projects</button>
          <button>Contact</button>
        </div>
        <img className="Home_navbar_img" src={Vector} alt="#" />
      </div>
      <div className="Home_content">
        <div className="Home_content_text">
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
          <img src={Rasm} alt="#" />
        </div>
      </div>
    </div>
  );
}

export default Home;
