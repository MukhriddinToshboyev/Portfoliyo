import "./style.css";
import Contact_img from "../assets/ContactImg.png";

function Contact() {
  return (
    <div className="Contact">
      <h2 className="Contact_title">Get In Touch</h2>

      <div className="Contact_card">
        <div className="Contact_left">
          <img src={Contact_img} alt="#" />
          <h2 className="Contact_text">
            {" "}
            You can contact me Directly <br /> via the details below.
          </h2>
        </div>

        <div className="Contact_right">
          <div className="Contact_right_content">
            <h3 className="Contact_info-title"> Contact Information</h3>

            <div className="Contact_item">
              <div className="Contact_icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 16.92V21a2 2 0 0 1-2.18 2
                      19.79 19.79 0 0 1-8.63-3.07
                      19.5 19.5 0 0 1-6-6
                      19.79 19.79 0 0 1-3.07-8.67
                      A2 2 0 0 1 3 2h4.09
                      a2 2 0 0 1 2 1.72
                      c.12.81.3 1.6.54 2.36
                      a2 2 0 0 1-.45 2L7.91 8.91
                      a16 16 0 0 0 6 6l1.83-1.83
                      a2 2 0 0 1 2-.45
                      c.76.24 1.55.42 2.36.54
                      a2 2 0 0 1 1.72 2z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3>Phone</h3>
                <p> +998 (94) 933 43 63</p>
              </div>
            </div>

            <div className="Contact_item">
              <div className="Contact_icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4h16a2 2 0 0 1 2 2v12
                        a2 2 0 0 1-2 2H4
                        a2 2 0 0 1-2-2V6
                        a2 2 0 0 1 2-2z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 6l-10 7L2 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div>
                <h3>Email</h3>
                <p> atoshboev331@gmail.com</p>
              </div>
            </div>

            <div className="Contact_item">
              <div className="Contact_icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 2L11 13"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 2L15 22L11 13L2 9L22 2Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3>Telegram</h3>
                <p> @muxriddin_09</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
