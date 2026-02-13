import "./style.css";
import Vector from "../assets/Vector.png";
import Rasm2 from "../assets/rasm2.png";

function Home({ aboutRef, projectsRef, contactRef }) {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="Home_container">
      <nav className="Home_navbar">
        <h2 className="Home_navbar_title">MT</h2>
        <section className="Home_navbar_btn">
          <button onClick={() => scrollToSection(aboutRef)}>About</button>
          <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
          <button onClick={() => scrollToSection(contactRef)}>Contact</button>
        </section>
      </nav>

      <h2 className="Home_line"></h2>
    </div>
  );
}

export default Home;
