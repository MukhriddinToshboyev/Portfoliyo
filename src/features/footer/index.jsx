"use client";

import { useTranslation } from "react-i18next";
import "../../i18n/config";
import "./style.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="Footer">
      <h2 className="Footer_title">MT</h2>
      <ul className="Footer_items">
        <li>{t("nav_about")}</li>
        <li>{t("nav_projects")}</li>
        <li>{t("nav_contact")}</li>
      </ul>
      <ul className="Footer_icons">
        <li className="Footer_icon">
          <a
            href="https://github.com/MukhriddinToshboyev"
            target="_blank"
            rel="noopener noreferrer"
            className="logo-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
            >
              <g filter="url(#filter0_di_1_241)">
                <rect
                  x="25"
                  y="10"
                  width="50"
                  height="50"
                  rx="12"
                  fill="url(#paint0_linear_1_241)"
                  shapeRendering="crispEdges"
                />
                <path
                  d="M50 26.6665C48.9057 26.6665 47.822 26.8821 46.811 27.3008C45.7999 27.7196 44.8813 28.3335 44.1074 29.1073C42.5446 30.6701 41.6667 32.7897 41.6667 34.9998C41.6667 38.6832 44.0583 41.8082 47.3667 42.9165C47.7833 42.9832 47.9167 42.7248 47.9167 42.4998V41.0915C45.6083 41.5915 45.1167 39.9748 45.1167 39.9748C44.7333 39.0082 44.1917 38.7498 44.1917 38.7498C43.4333 38.2332 44.25 38.2498 44.25 38.2498C45.0833 38.3082 45.525 39.1082 45.525 39.1082C46.25 40.3748 47.475 39.9998 47.95 39.7998C48.025 39.2582 48.2417 38.8915 48.475 38.6832C46.625 38.4748 44.6833 37.7582 44.6833 34.5832C44.6833 33.6582 45 32.9165 45.5417 32.3248C45.4583 32.1165 45.1667 31.2498 45.625 30.1248C45.625 30.1248 46.325 29.8998 47.9167 30.9748C48.575 30.7915 49.2917 30.6998 50 30.6998C50.7083 30.6998 51.425 30.7915 52.0833 30.9748C53.675 29.8998 54.375 30.1248 54.375 30.1248C54.8333 31.2498 54.5417 32.1165 54.4583 32.3248C55 32.9165 55.3167 33.6582 55.3167 34.5832C55.3167 37.7665 53.3667 38.4665 51.5083 38.6748C51.8083 38.9332 52.0833 39.4415 52.0833 40.2165V42.4998C52.0833 42.7248 52.2167 42.9915 52.6417 42.9165C55.95 41.7998 58.3333 38.6832 58.3333 34.9998C58.3333 33.9055 58.1178 32.8219 57.699 31.8108C57.2802 30.7998 56.6664 29.8811 55.8926 29.1073C55.1187 28.3335 54.2001 27.7196 53.189 27.3008C52.178 26.8821 51.0944 26.6665 50 26.6665Z"
                  fill="#8C8C8C"
                />
              </g>
              <defs>
                <filter
                  id="filter0_di_1_241"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="15" />
                  <feGaussianBlur stdDeviation="12.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_241"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_241"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.333333 0 0 0 0 0.898039 0 0 0 0 0.643137 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_1_241"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1_241"
                  x1="50"
                  y1="10"
                  x2="50"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#343236" />
                  <stop offset="1" stopColor="#38343F" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </li>
        <li className="Footer_icon">
          <a
            href="https://www.linkedin.com/in/muxriddin-toshboyev-40065b368/"
            target="_blank"
            rel="noopener noreferrer"
            className="logo-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
            >
              <g filter="url(#filter0_di_1_244)">
                <rect
                  x="25"
                  y="10"
                  width="50"
                  height="50"
                  rx="12"
                  fill="url(#paint0_linear_1_244)"
                  shapeRendering="crispEdges"
                />
                <g clipPath="url(#clip0_1_244)">
                  <path
                    d="M57.0375 42.0444H54.0794V37.4025C54.0794 36.2956 54.0562 34.8731 52.5325 34.8731C50.99 34.8731 50.755 36.0737 50.755 37.3206V42.0438H47.7931V32.4994H50.6381V33.8012H50.6763C51.0738 33.0494 52.0406 32.2587 53.4831 32.2587C56.4837 32.2587 57.0406 34.2344 57.0406 36.8031V42.0438L57.0375 42.0444ZM44.4469 31.195C44.2208 31.1951 43.9969 31.1506 43.7881 31.064C43.5792 30.9774 43.3895 30.8505 43.2298 30.6905C43.0701 30.5305 42.9435 30.3405 42.8573 30.1315C42.7711 29.9225 42.727 29.6986 42.7275 29.4725C42.7279 29.1322 42.8291 28.7997 43.0185 28.517C43.2078 28.2342 43.4767 28.014 43.7913 27.8841C44.1058 27.7542 44.4517 27.7204 44.7854 27.7871C45.1191 27.8538 45.4255 28.018 45.6659 28.2588C45.9063 28.4996 46.0699 28.8064 46.136 29.1402C46.2021 29.474 46.1677 29.8199 46.0372 30.1341C45.9068 30.4484 45.686 30.7169 45.4029 30.9058C45.1199 31.0946 44.7872 31.1952 44.4469 31.195ZM45.9306 42.0444H42.9625V32.5H45.9306V42.0444ZM58.5225 25H41.475C40.6606 25 40 25.6444 40 26.4419V43.5588C40 44.3563 40.6606 45.0006 41.475 45.0006H58.5194C59.3325 45.0006 60 44.3563 60 43.5588V26.4419C60 25.6444 59.3325 25 58.5194 25H58.5225Z"
                    fill="#8C8C8C"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_di_1_244"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="15" />
                  <feGaussianBlur stdDeviation="12.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_244"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_244"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.333333 0 0 0 0 0.898039 0 0 0 0 0.643137 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_1_244"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1_244"
                  x1="50"
                  y1="10"
                  x2="50"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#343236" />
                  <stop offset="1" stopColor="#38343F" />
                </linearGradient>
                <clipPath id="clip0_1_244">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(40 25)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </li>
      </ul>
      <p className="Footer_line"></p>
      <p className="Footer_text"> {t("copyright")} </p>
    </div>
  );
}
