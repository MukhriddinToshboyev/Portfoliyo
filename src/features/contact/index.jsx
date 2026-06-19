"use client";

import { useTranslation } from "react-i18next";
import "../../i18n/config";
import Contact_img from "../../assets/ContactImg.png";
import "./style.css";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="Contact">
      <h2 className="Contact_title">{t("contact_title")}</h2>

      <div className="Contact_card">
        <div className="Contact_left">
          <img src={Contact_img.src} alt="#" />
          <h2 className="Contact_text">{t("contact_text")}</h2>
        </div>

        <div className="Contact_right">
          <div className="Contact_right_content">
            <h3 className="Contact_info-title">{t("contact_info")}</h3>

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
                    d="M22 16.92V21a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2h4.09a2 2 0 0 1 2 1.72c.12.81.3 1.6.54 2.36a2 2 0 0 1-.45 2L7.91 8.91a16 16 0 0 0 6 6l1.83-1.83a2 2 0 0 1 2-.45c.76.24 1.55.42 2.36.54a2 2 0 0 1 1.72 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3>{t("phone")}</h3>
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
                    d="M4 4h16a2 2 0 0 1 2 2v12 a2 2 0 0 1-2 2H4 a2 2 0 0 1-2-2V6 a2 2 0 0 1 2-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6l-10 7L2 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3>{t("email")}</h3>
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 2L15 22L11 13L2 9L22 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3>{t("telegram")}</h3>
                <p> @muxriddin_0409</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
