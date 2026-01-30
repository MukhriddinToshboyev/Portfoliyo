import "./style.css";
import Rasm1 from "../assets/photo_2025-05-27_18-40-45.jpg";

function About() {
  return (
    <div className="About_container">
      <div className="About_navbar">
        <div className="About_navbar_img">
          <img src={Rasm1} alt="#" />
        </div>
      </div>
      <div className="About_section">
        <h2 className="About_title">About Me</h2>
        <span className="About_span"> Who Am I? </span>
        <p className="About_section_text">
          I am a passionate frontend developer with experience in creating
          responsive and user-friendly web applications. My expertise includes
          React, JavaScript, and modern CSS frameworks.
        </p>
        <div>
          <img src="" alt="" />
        </div>
        <button> Download Resume</button>
      </div>
    </div>
  );
}

export default About;
