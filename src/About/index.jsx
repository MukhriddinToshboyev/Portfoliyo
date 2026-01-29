import "./style.css";
import Vector from "../assets/Vector.png";

function About() {
  return (
    <div className="About_container">
      <h2>MT</h2>
      <button>About</button>
      <button>Projects</button>
      <button>Contact</button>
      <img src={Vector} alt="#" />
    </div>
  );
}

export default About;
