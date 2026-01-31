import "./style.css";
import Contact_img from "../assets/ContactImg.png";

function Contact() {
  return (
    <div className="Contact_container">
      <h2 className="Contact_name">Get In Touch</h2>
      <div className="Contact_card">
        <div className="Contact_navbar">
          <img className="Contact_navbar_img" src={Contact_img} alt="" />
          <h2 className="Contact_navbar_text">
            {" "}
            You can contact me Directly via the details below.
          </h2>
        </div>
        <div className="Contact_section">
          <h2 className="Contact_section_name"> Contact Information</h2>
          <ul className="Contact_section_card">
            <li>
              <img className="Contact_section_icon" src="" alt="" />
              <h1 className="Contact_section_title">Phone</h1>
              <p className="Contact_section_text"> +998 (94) 933 43 63</p>
            </li>
            <li>
              <img className="Contact_section_icon" src="" alt="" />
              <h1 className="Contact_section_title">Email</h1>
              <p className="Contact_section_text"> atoshboev331@gmail.com</p>
            </li>
            <li>
              <img className="Contact_section_icon" src="" alt="" />
              <h1 className="Contact_section_title">Telegram</h1>
              <p className="Contact_section_text"> @muxriddin_09</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Contact;
