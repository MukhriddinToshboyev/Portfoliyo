import "./style.css";
import Vector from "../assets/Vector.png";
import Rasm2 from "../assets/rasm2.png";

function Home() {
  return (
    <div className="Home_container">
      <nav className="Home_navbar">
        <h2 className="Home_navbar_title">MT</h2>
        <div className="Home_navbar_btn">
          <button>About</button>
          <button>Projects</button>
          <button>Contact</button>
        </div>
      </nav>
      <main className="Home_card">
        <section className="Home_left">
          <h1>Toshboyev Muxriddin </h1>
          <h2>Frontend Developer</h2>
          <p>
            I am a passionate frontend developer with experience in creating
            responsive and user-friendly web applications. My expertise includes
            React, JavaScript, and modern CSS frameworks.
          </p>
          <div className="Home_left_btn">
            <button>Get in Touch</button>
            <p> 🟢 Available now</p>
          </div>
        </section>
        <section className="Home_right">
          <img src={Rasm2} alt="#" />
        </section>
      </main>
      <h2 className="Home_line"></h2>
    </div>
  );
}

export default Home;
