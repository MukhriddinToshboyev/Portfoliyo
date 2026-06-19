"use client";

import { useTranslation } from "react-i18next";
import "../../i18n/config";
import Restoran from "../../assets/Restoran.png";
import Cuser from "../../assets/C-User.png";
import Circular from "../../assets/Circular.png";
import API from "../../assets/API dan malumot olish.png";
import To_do_list from "../../assets/To-do-list.png";
import Ecommerce from "../../assets/ecommerce-dashboard.png";
import { SiTailwindcss } from "react-icons/si";
import "./style.css";

function ViteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 30 30"
      fill="none"
    >
      <mask
        id="vite-mask"
        maskUnits="userSpaceOnUse"
        x="0"
        y="2.88574"
        width="30"
        height="27"
        fill="black"
      >
        <rect fill="white" y="2.88574" width="30" height="27" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.7897 16.031L22.4537 8.73304C22.5784 8.48484 22.3634 8.20193 22.0903 8.25452L19.4735 8.75865C19.2273 8.80596 19.0184 8.57734 19.0874 8.33735L19.681 6.28374L27.4762 4.89992C28.0343 4.79846 28.4586 5.39103 28.1817 5.88502L15.8421 27.9073C15.5874 28.3619 14.9325 28.3647 14.674 27.9122L2.08968 5.88714C1.80806 5.39409 2.23049 4.79686 2.78996 4.8968L10.0465 6.19118L10.874 6.33781L10.4453 13.5694C10.442 13.6214 10.4509 13.6733 10.4717 13.7211C10.4921 13.769 10.5238 13.8113 10.5635 13.8449C10.6032 13.8784 10.6504 13.9023 10.7009 13.9145C10.7514 13.9268 10.8044 13.9271 10.8554 13.9154L13.3977 13.3298C13.6358 13.275 13.8503 13.4841 13.8016 13.7229L13.0461 17.4145C12.9956 17.663 13.2289 17.8754 13.4723 17.8016L15.0425 17.3255C15.2858 17.2518 15.5198 17.4648 15.4683 17.7134L14.2681 23.5121C14.193 23.8748 14.6763 24.0726 14.8781 23.7617L15.0128 23.554L15.8421 21.9021V22.1734L18.7897 16.031Z"
        />
      </mask>
      <path
        d="M18.7897 16.031L17.896 15.5823L17.892 15.5903L17.8882 15.5983L18.7897 16.031ZM22.4537 8.73304L21.5602 8.28396L21.56 8.28436L22.4537 8.73304ZM22.0903 8.25452L21.9012 7.27256L21.9011 7.27258L22.0903 8.25452ZM19.4735 8.75865L19.6622 9.74069L19.6626 9.7406L19.4735 8.75865ZM19.0874 8.33735L18.1267 8.05968L18.1263 8.06107L19.0874 8.33735ZM19.681 6.28374L19.5062 5.29913L18.8932 5.40795L18.7203 6.00607L19.681 6.28374ZM27.4762 4.89992L27.651 5.88453L27.6551 5.88379L27.4762 4.89992ZM28.1817 5.88502L27.3094 5.39599L27.3093 5.3962L28.1817 5.88502ZM15.8421 27.9073L14.9697 27.4185L14.9697 27.4185L15.8421 27.9073ZM14.674 27.9122L15.5423 27.4162L15.5423 27.4161L14.674 27.9122ZM2.08968 5.88714L1.22135 6.38313L1.22141 6.38324L2.08968 5.88714ZM2.78996 4.8968L2.6141 5.88122L2.61436 5.88126L2.78996 4.8968ZM10.0465 6.19118L9.87086 7.17564L9.872 7.17585L10.0465 6.19118ZM10.874 6.33781L11.8723 6.39699L11.925 5.50844L11.0485 5.35315L10.874 6.33781ZM10.4453 13.5694L11.4433 13.633L11.4436 13.6286L10.4453 13.5694ZM10.4717 13.7211L11.3923 13.3304L11.3884 13.3213L10.4717 13.7211ZM10.5635 13.8449L9.91754 14.6083L9.91754 14.6083L10.5635 13.8449ZM10.7009 13.9145L10.9366 12.9427L10.9359 12.9425L10.7009 13.9145ZM10.8554 13.9154L11.0787 14.8902L11.0799 14.8899L10.8554 13.9154ZM13.3977 13.3298L13.1734 12.3553L13.1732 12.3553L13.3977 13.3298ZM13.8016 13.7229L14.7813 13.9234L14.7815 13.9226L13.8016 13.7229ZM13.0461 17.4145L12.0664 17.214L12.0661 17.2153L13.0461 17.4145ZM13.4723 17.8016L13.7624 18.7586L13.7625 18.7586L13.4723 17.8016ZM15.0425 17.3255L14.7525 16.3685L14.7523 16.3685L15.0425 17.3255ZM15.4683 17.7134L14.4891 17.5106L14.489 17.5107L15.4683 17.7134ZM14.2681 23.5121L15.2473 23.7149L15.2474 23.7148L14.2681 23.5121ZM14.8781 23.7617L15.717 24.306L15.7171 24.3057L14.8781 23.7617ZM15.0128 23.554L15.8518 24.098L15.8818 24.0519L15.9065 24.0027L15.0128 23.554ZM15.8421 21.9021H16.8421L14.9484 21.4534L15.8421 21.9021ZM15.8421 22.1734H14.8421L16.7437 22.6061L15.8421 22.1734ZM19.6834 16.4797L16.7358 22.6223L18.8436 16.4637L18.7897 16.031L19.6834 16.4797ZM21.56 8.28436L17.896 15.5823L19.6834 16.4797L23.3474 9.18172L21.56 8.28436ZM22.2794 9.23648C22.099 9.51755 21.8926 9.46643 21.9012 9.27256L22.2794 9.23648ZM21.9011 7.27258C22.6422 7.12282 23.4068 7.50056 23.5604 8.17057L21.9011 7.27258ZM19.2848 7.77662L21.9015 7.27247L22.2791 9.23658L19.6623 9.74069L19.2848 7.77662ZM19.6626 9.7406C19.1408 9.83645 18.6718 9.3625 18.7389 8.92939L19.6626 9.7406ZM18.1263 8.06107C17.9107 8.81743 18.5465 9.63428 19.2847 9.7407L18.1263 8.06107ZM18.7203 6.00607L18.1267 8.05968L20.048 8.61503L20.6417 6.56142L18.7203 6.00607ZM19.8557 5.26836L19.2621 7.32196L20.0999 7.54552L20.6935 5.49193L19.8557 5.26836ZM27.3014 3.91531L19.5062 5.29913L19.8558 5.26836L27.651 3.88454L27.3014 3.91531ZM27.6551 5.88379C27.6859 5.62579 27.5363 5.13614 27.3094 5.39599L28.1817 5.88502ZM16.7145 28.3961L29.0541 6.37385L27.3093 5.3962L14.9697 27.4185L16.7145 28.3961ZM14.9697 27.4185C14.7141 27.0939 14.4619 27.0891 14.5421 27.0902L14.9697 27.4185ZM13.8057 28.4082C14.3928 29.385 15.8276 29.4397 16.7145 28.3961L14.9697 27.4185C15.3472 27.2841 15.4722 27.3355 15.5423 27.4162L13.8057 28.4082ZM2.95802 5.39115L15.5423 27.4162L13.8057 28.4082L1.22135 6.38313L2.95802 5.39115ZM2.96582 3.91239C2.90719 3.91799 2.80978 3.90596 2.74562 3.84334C2.68187 3.7811 2.66312 3.70088 2.67497 3.64105L2.96582 3.91239ZM2.61436 5.88126C2.20881 5.80105 1.92497 5.41072 2.07888 5.03798L2.61436 5.88126ZM10.2221 5.20672L2.96556 3.91234L2.61436 5.88126L9.87086 7.17564L10.2221 5.20672ZM10.8743 6.33782L10.0469 6.19118L10.0461 6.19118L10.8743 6.33782ZM9.87572 6.27862L10.0493 5.29151L10.0437 5.29053L9.87572 6.27862ZM11.0485 5.35315L10.2221 5.20683L9.87086 7.17564L10.6995 7.32247L11.0485 5.35315ZM11.4436 13.6286L11.8723 6.39699L9.87572 6.27862L9.44705 13.5102L11.4436 13.6286ZM11.3923 13.3304C11.299 13.1328 11.3249 13.0174 11.4433 13.633L9.44732 13.5058C9.55916 14.2252 9.60278 14.4053 9.55107 14.1119L11.3923 13.3304ZM9.91754 14.6083C10.0705 14.7329 10.1768 14.9018 10.2111 14.872L9.91754 14.6083ZM10.9359 12.9425C10.7483 12.9017 10.5768 12.8186 10.461 12.7012L9.91754 14.6083C10.286 14.7388 10.6109 14.9509 10.6659 14.8865L10.9359 12.9425ZM11.0799 14.8899C11.2295 14.8526 11.3835 14.8557 11.5314 14.899L10.9359 12.9425C10.7679 12.9992 10.6011 12.9989 10.6309 12.9409L11.0799 14.8899ZM13.1732 12.3553L10.6309 12.9409L11.0799 14.8899L13.6222 14.3044L13.1732 12.3553ZM13.622 14.3043C13.5398 14.0919 13.4113 14.0605 13.3987 14.0587L13.1732 12.3553C13.4189 12.3127 13.6422 12.4342 13.7586 12.6318L13.622 14.3043ZM14.7815 13.9226C14.9756 13.2005 14.2754 12.4835 13.622 14.3043L13.9812 14.3553C14.9962 14.2267 15.725 14.7677 14.7815 13.9226ZM12.0661 17.2153L12.8216 13.5233L14.7815 13.9226L14.026 17.6146L12.0661 17.2153ZM14.0259 17.6147C13.9062 18.1251 14.4636 18.5896 14.9204 18.4781L12.0661 17.2153C12.57 17.6122 13.5516 18.3062 13.1821 17.9885L14.0259 17.6147ZM15.3327 18.2825L13.7625 18.7586L13.1821 17.9885L14.7523 16.3685L15.3327 18.2825ZM14.7523 16.3685C14.2471 14.1681 14.9758 14.3382 15.3328 18.2825L13.1821 17.9885C13.3409 18.8252 13.8177 19.3742 14.4891 17.5106L14.7523 16.3685ZM14.489 17.5107C14.4151 17.7428 14.6241 17.9305 14.8444 17.8622L14.489 17.5107ZM15.2474 23.7148L16.4476 17.916L14.489 17.5107L13.2888 23.3095L15.2474 23.7148ZM16.0392 23.2173C15.8374 23.5282 15.9075 22.7674 15.2473 23.7149L13.2888 23.3094C12.4785 24.9823 14.4627 26.6817 15.717 24.306L16.0392 23.2173ZM15.9065 24.0027L15.8518 24.098H15.8518L15.0128 23.554L15.0128 23.554L15.9065 24.0027ZM16.8421 21.9021L16.8421 22.1734L14.8421 22.1734L14.8421 21.9021L16.8421 21.9021ZM18.8436 16.4637L15.896 22.6062L17.6834 23.5036L20.631 17.361L18.8436 16.4637Z"
        fill="url(#vite-grad)"
        mask="url(#vite-mask)"
      />
      <defs>
        <linearGradient
          id="vite-grad"
          x1="9.15963"
          y1="1.88944"
          x2="22.8125"
          y2="18.2874"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#57CCFF" />
          <stop offset="1" stopColor="#AF48FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
      width="25"
      height="25"
    >
      <title>React Logo</title>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function CssIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      aria-label="CSS3"
      role="img"
      viewBox="0 0 512 512"
    >
      <path fill="#264de4" d="M72 460L30 0h451l-41 460-184 52" />
      <path fill="#2965f1" d="M256 37V472l149-41 35-394" />
      <path
        fill="#ebebeb"
        d="m114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59L139 382"
      />
      <path
        fill="#ffffff"
        d="m256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z"
      />
    </svg>
  );
}

function TailwindIcon() {
  return <SiTailwindcss size={25} color="#06B6D4" />;
}

function NextIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 48 48"
    >
      <rect width="48" height="48" rx="9" fill="#000" />
      <text
        x="24"
        y="32"
        textAnchor="middle"
        fill="#fff"
        fontFamily="Arial, sans-serif"
        fontSize="26"
        fontWeight="bold"
      >
        N
      </text>
    </svg>
  );
}

function ProjectCard({ img, name, desc, link, t, icons }) {
  return (
    <article className="Projects_card">
      <img className="Projects_img" src={img} alt="#" />
      <div className="Projects_card_text">
        <h2 className="Projects_card_name">{name}</h2>
        <p className="Projects_card_title">{desc}</p>
        <h1 className="Projects_card_techno">{t("technologies")}</h1>
        <ul className="Projects_card_icons">
          {icons.map((Icon, i) => (
            <li key={i} className="Projects_card_icon"><Icon /></li>
          ))}
        </ul>
        <div className="Projects_card_btn">
          <button className="Projects_card_btn_view">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {t("view_demo")}
            </a>
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useTranslation();

  const defaultIcons = [ViteIcon, ReactIcon, CssIcon];

  const projects = [
    {
      img: Ecommerce.src,
      name: t("ecommerce_name"),
      desc: t("ecommerce_desc"),
      link: "https://frontend-test-task-hazel.vercel.app/",
      icons: [NextIcon, ReactIcon, TailwindIcon],
    },
    {
      img: Restoran.src,
      name: t("restaurant_name"),
      desc: t("restaurant_desc"),
      link: "https://pitsa-two.vercel.app/",
      icons: defaultIcons,
    },
    {
      img: Cuser.src,
      name: t("users_name"),
      desc: t("users_desc"),
      link: "https://cuser-two.vercel.app/",
      icons: defaultIcons,
    },
    {
      img: Circular.src,
      name: t("circular_name"),
      desc: t("circular_desc"),
      link: null,
      icons: defaultIcons,
    },
    {
      img: API.src,
      name: t("api_name"),
      desc: t("api_desc"),
      link: "https://getting-information-from-the-api.vercel.app/",
      icons: defaultIcons,
    },
    {
      img: To_do_list.src,
      name: t("todo_name"),
      desc: t("todo_desc"),
      link: null,
      icons: defaultIcons,
    },
  ];

  return (
    <div className="Projects">
      <div className="Projects_container">
        <h1 className="Projects_title">{t("projects_title")}</h1>
        <nav className="Projects_btn">
          <button className="Projects_btn_all">{t("projects_all")}</button>
          <button className="Projects_btn_geo">{t("projects_frontend")}</button>
          <button className="Projects_btn_geo">{t("projects_geo")}</button>
        </nav>
        <main className="Projects_cards">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} t={t} />
          ))}
        </main>
      </div>
      <h2 className="Projects_line"></h2>
    </div>
  );
}
