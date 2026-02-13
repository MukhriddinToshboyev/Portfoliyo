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

      <h2 className="Home_line"></h2>
    </div>
  );
}

export default Home;
