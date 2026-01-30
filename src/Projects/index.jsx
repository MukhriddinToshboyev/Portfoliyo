import "./style.css";

function Projects() {
  return (
    <div className="Projects_container">
      <h1 className="Projects_title">Projects</h1>
      <div className="Projects_btn">
        <button> All Projects</button>
        <button> Frontend</button>
        <button> Geo Informatics</button>
      </div>
      <div>
        <img src="" alt="" />
        <h2>Project A - A web application for managing tasks.</h2>
        <p> praect </p>
        <h1> Technologies Used </h1>
        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>css</li>
        </ul>
        <ul>
          <li>
            <button>View Live Demo</button>
            <button> Visit Site </button>
          </li>
        </ul>
      </div>
      <button> View All Projects </button>
    </div>
  );
}
export default Projects;
