import { useEffect, useState } from "react";
import "./App.css";

//For React Icons
import { VscVerifiedFilled } from "react-icons/vsc";
import { MdAttachEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
// import { FaTelegram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
// import { FaLinkedin } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiArrowDropUpLine, RiLiveLine } from "react-icons/ri";

//For images
import imgS1 from "./assets/my-photo.jpg";
import imgHTML from "./assets/Group 321.png";
import imgCSS from "./assets/Group 320.png";
import imgJS from "./assets/js 3.png";
import imgBootstrap from "./assets/bootstrap-4-logo-pngrepo-com 4.png";
import imgTailwind from "./assets/Tailwind.png";
import imgReact from "./assets/react 2.png";
import imgGit from "./assets/Git-Icon-1788C.png";
import imgGitHub from "./assets/github.png";

//For images of projects
import imgOfFirstProject from "./assets/images of projects/userlist-with-js-project.png";
import imgOfSecondProject from "./assets/images of projects/hospital-tj-image.png";
import imgOfThirdProject from "./assets/images of projects/post-office-project.png";
import imgOfFourthProject from "./assets/images of projects/kamil-nurmatov-project.png";
import imgOfFifthProject from "./assets/images of projects/memory-game-project.png";
import imgOfSixthProject from "./assets/images of projects/formula-volume-ice-image.png";
import imgOfSeventhProject from "./assets/images of projects/website_countries.png";

//Images of programming languages
// import imgOfHTML from "./assets/img_programming_languages/html.png";
// import imgOfCSS from "./assets/img_programming_languages/css.png";
// import imgOfJS from "./assets/img_programming_languages/javascript.png";
// import iconOfTS from "./assets/img_programming_languages/typescript.svg";
// import imgOfTS from "./assets/img_programming_languages/typescript.jpeg";
// import imgOfNextJS from "./assets/img_programming_languages/Next-JS.png";
// import iconOfNextJS from "./assets/img_programming_languages/next-js.svg";
// import imgOfReactJS from "./assets/img_programming_languages/React-JS.png";
// import imgOfReduxToolkit from "./assets/img_programming_languages/redux.png";
// import iconOfReduxToolkit from "./assets/img_programming_languages/redux.svg";
// import imgOFSASS from "./assets/img_programming_languages/sass.png";
// import imgOFTailwindCSS from "./assets/img_programming_languages/tailwindcss.png";

//For resume
import myResume from "./uploads/My-Resume-English.pdf";

import Switcher from "./components/Switch UI/Switcher";
import { useTranslation } from "react-i18next";
import TypewriterSkills from "./components/typewriterSkills/TypewriterSkills";
import LinksMobileSize from "./components/linksMobileSize/LinksMobileSize";
// import { Link } from "react-router-dom";

const App = () => {
  //for translation
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  // Navigation
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  //For mobile size menu
  const [burger_class, setBurgerClass] = useState<string>(
    "burger_bar unclicked"
  );
  const [menu_class, setMenuClass] = useState<string>("links_hidden");
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);

  //For back to top button
  const [backToTopBtn, setBackToTopBtn] = useState<boolean>(false);

  //States for programming languages
  const [CPlusPlus] = useState<number>(79);
  const [HTML] = useState<number>(80);
  const [CSS] = useState<number>(85);
  const [SCSS] = useState<number>(83);
  const [SASS] = useState<number>(86);
  const [JS] = useState<number>(75);
  const [TS] = useState<number>(85);
  const [reactJS] = useState<number>(77);
  const [reactTS] = useState<number>(85);
  const [redux] = useState<number>(81);
  const [git] = useState<number>(84);
  const [gitHub] = useState<number>(82);
  const [tailwind] = useState<number>(88);
  const [materialUI] = useState<number>(86);
  const [antDesign] = useState<number>(75);
  const [RESTAPI] = useState<number>(82);
  const [nextJS] = useState<number>(50);

  // document.body.classList.add("scroll_visible");

  function changeMenu() {
    if (!isMenuClicked) {
      setBurgerClass("clicked");
      setMenuClass("links_visible");
      document.body.classList.add("scroll_hidden");
      document.body.classList.remove("scroll_visible");
    } else {
      setBurgerClass("unclicked");
      setMenuClass("links_hidden");
      document.body.classList.add("scroll_visible");
      document.body.classList.remove("scroll_hidden");
    }

    setIsMenuClicked(!isMenuClicked);
  }

  // For closing the menu outside of the modal menu

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 300) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    };
  }, []);

  useEffect(() => {
    // Event listener for hash changes
    const onHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", onHashChange);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [currentHash]);

  //For Courses

  // const [CPlusPlus, setCPlusPlus] = useState<number>(79);
  // const [HTML, setHTML] = useState<number>(80);
  // const [CSS, setCSS] = useState<number>(85);
  // const [SCSS, setSCSS] = useState<number>(83);
  // const [SASS, setSASS] = useState<number>(86);
  // const [JS, setJS] = useState<number>(75);
  // const [TS, setTS] = useState<number>(85);
  // const [reactJS, setReactJS] = useState<number>(77);
  // const [reactTS, setReactTS] = useState<number>(85);
  // const [redux, setRedux] = useState<number>(81);
  // const [git, setGit] = useState<number>(84);
  // const [gitHub, setGitHub] = useState<number>(82);
  // const [tailwind, setTailwind] = useState<number>(88);
  // const [materialUI, setMaterialUI] = useState<number>(86);
  // const [antDesign, setAntDesign] = useState<number>(75);
  // const [RESTAPI, setRESTAPI] = useState<number>(82);
  // const [nextJS, setNextJS] = useState<number>(50);

  const projects = [
    {
      id: 1,
      imgOfProject: imgOfFirstProject,
      project: t("s5.t2"),
      description: t("s5.t3"),
      usedLang: [
        {
          imgProgLang: `https://skillicons.dev/icons?i=html`,
          ProgLang: `HTML`,
        },
        {
          imgProgLang: `https://skillicons.dev/icons?i=css`,
          ProgLang: `CSS`,
        },
        {
          imgProgLang: `https://skillicons.dev/icons?i=js`,
          ProgLang: `JS`,
        },
      ],
      demo: `https://userlist-with-js.vercel.app/`,
      code: `https://github.com/olimyuldoshev2003/Userlist-with-JS`,
    },
    {
      id: 2,
      imgOfProject: imgOfSecondProject,
      project: t("s5.t4"),
      description: t("s5.t5"),
      usedLang: [
        {
          imgProgLang: `https://skillicons.dev/icons?i=react`,
          ProgLang: `React JS`,
        },
        {
          imgProgLang: `https://skillicons.dev/icons?i=tailwind`,
          ProgLang: `TailwindCSS`,
        },
        {
          imgProgLang: `https://skillicons.dev/icons?i=css`,
          ProgLang: `CSS`,
        },
      ],
      demo: `https://hospital-tj.vercel.app/`,
      code: `https://github.com/olimyuldoshev2003/hospital-tj`,
    },
    {
      id: 3,
      imgOfProject: imgOfThirdProject,
      project: t("s5.t6"),
      description: t("s5.t7"),
      usedLang: [
        {
          imgProgLang: `https://skillicons.dev/icons?i=react`,
          ProgLang: `React JS`,
        },
        {
          imgProgLang: `https://skillicons.dev/icons?i=tailwind`,
          ProgLang: `TailwindCSS`,
        },
        {
          imgProgLang: `https://skillicons.dev/icons?i=css`,
          ProgLang: `CSS`,
        },
      ],
      demo: `https://post-office.vercel.app/`,
      code: `https://github.com/olimyuldoshev2003/Post_office`,
    },
    {
      id: 4,
      imgOfProject: imgOfFourthProject,
      project: t("s5.t8"),
      description: t("s5.t9"),
      usedLang: [
        {
          imgProgLang: `https://skillicons.dev/icons?i=react`,
          ProgLang: `React JS`,
        },
        {
          imgProgLang: `https://skillicons.dev/icons?i=tailwind`,
          ProgLang: `TailwindCSS`,
        },
        {
          imgProgLang: `https://skillicons.dev/icons?i=css`,
          ProgLang: `CSS`,
        },
      ],
      demo: `https://kamilnurmatov.vercel.app/`,
      code: `https://github.com/olimyuldoshev2003/my_first_project`,
    },
    {
      id: 5,
      imgOfProject: imgOfFifthProject,
      project: t("s5.t10"),
      description: t("s5.t11"),
      usedLang: [
        {
          imgProgLang: `https://skillicons.dev/icons?i=html`,
          ProgLang: `HTML`,
        },
        {
          imgProgLang: `https://skillicons.dev/icons?i=css`,
          ProgLang: `CSS`,
        },
        {
          imgProgLang: `https://skillicons.dev/icons?i=js`,
          ProgLang: `JS`,
        },
      ],
      demo: `https://memory-game-fruits.vercel.app/`,
      code: `https://github.com/olimyuldoshev2003/Memory-game`,
    },
    {
      id: 6,
      imgOfProject: imgOfSixthProject,
      project: t("s5.t12"),
      description: t("s5.t13"),
      usedLang: [
        {
          imgProgLang: `https://skillicons.dev/icons?i=react`,
          ProgLang: `React JS`,
        },
        {
          imgProgLang: `https://skillicons.dev/icons?i=tailwind`,
          ProgLang: `TailwindCSS`,
        },
        {
          imgProgLang: `https://skillicons.dev/icons?i=css`,
          ProgLang: `CSS`,
        },
      ],
      demo: `https://formula-ice.vercel.app/`,
      code: `https://github.com/olimyuldoshev2003/Formulas-for-University`,
    },
    {
      id: 7,
      imgOfProject: imgOfSeventhProject,
      project: t("s5.t14"),
      description: t("s5.t15"),
      usedLang: [
        {
          imgProgLang: `https://skillicons.dev/icons?i=react`,
          ProgLang: `React JS`,
        },
        {
          imgProgLang: `https://skillicons.dev/icons?i=react`,
          ProgLang: `React TS`,
        },
        {
          imgProgLang: `https://skillicons.dev/icons?i=tailwind`,
          ProgLang: `TailwindCSS`,
        },
        {
          imgProgLang: `https://skillicons.dev/icons?i=css`,
          ProgLang: `CSS`,
        },
        {
          imgProgLang: `https://skillicons.dev/icons?i=redux`,
          ProgLang: `Redux Toolkit`,
        },
      ],
      demo: `https://website-countries.vercel.app/`,
      code: `https://github.com/olimyuldoshev2003/website-countries`,
    },
  ];

  return (
    <>
      <div className="bg-[#1f1f1f] dark:bg-[#fff] pb-[30px] duration-[0.5s]">
        <header className="header shadow-[0px_0px_10px_0.1px] shadow-black/10 fixed top-0 z-50 w-[100%] backdrop-saturate-[180%] backdrop-blur-[5px] bg-[#0000006c] dark:bg-[#f0eeeec0] duration-[0.5s]">
          <div className="block_header md:p-[20px_60px] sm:p-[20px_8px] flex justify-between max-w-[1440px] m-[0_auto]">
            <a
              href="#"
              onClick={() => {
                setBurgerClass("unclicked");
                setMenuClass("links_hidden");
                setIsMenuClicked(false);
                document.body.classList.add("scroll_hidden");
                document.body.classList.remove("scroll_visible");
              }}
            >
              <h1 className="alex_brush text-[#fff] md:text-[28px] sm:text-[19px] font-[400] dark:text-[#1f1f1f] duration-[0.5s]">
                Olim Karomatov
              </h1>
            </a>
            <nav className="flex items-center gap-[10px]">
              <ul className="lg:flex lg:items-center flex-wrap lg:gap-[10px] sm:hidden poppins">
                <li
                  className={`text-center py-1 duration-[0.5s] cursor-pointer hover:underline rounded-[5px] px-2
          ${
            currentHash === "#home"
              ? `bg-sky-500 text-[#fff] dark:text-[#fff] underline`
              : `hover:bg-sky-500 text-[#989898] hover:text-[#fff] dark:text-[gray] dark:hover:text-[#fff] active:text-[#fff] active:dark:text-[#fff]`
          }`}
                >
                  <a className={`text-[20px] font-[400]`} href="#home">
                    {t("h.t1")}
                  </a>
                </li>
                <li
                  className={`text-center py-1 duration-[0.5s] cursor-pointer hover:underline rounded-[5px] px-2
          ${
            currentHash === "#about"
              ? `bg-sky-500 text-[#fff] dark:text-[#fff] underline`
              : `hover:bg-sky-500 text-[#989898] hover:text-[#fff] dark:text-[gray] dark:hover:text-[#fff] active:text-[#fff] active:dark:text-[#fff]`
          }`}
                >
                  <a className={`text-[20px] font-[400]`} href="#about">
                    {t("h.t2")}
                  </a>
                </li>
                <li
                  className={`text-center py-1 duration-[0.5s] cursor-pointer hover:underline rounded-[5px] px-2
          ${
            currentHash === "#skills"
              ? `bg-sky-500 text-[#fff] dark:text-[#fff] underline`
              : `hover:bg-sky-500 text-[#989898] hover:text-[#fff] dark:text-[gray] dark:hover:text-[#fff] active:text-[#fff] active:dark:text-[#fff]`
          }`}
                >
                  <a className={`text-[20px] font-[400]`} href="#skills">
                    {t("h.t3")}
                  </a>
                </li>
                <li
                  className={`text-center py-1 duration-[0.5s] cursor-pointer hover:underline rounded-[5px] px-2
          ${
            currentHash === "#language"
              ? `bg-sky-500 text-[#fff] dark:text-[#fff] underline`
              : `hover:bg-sky-500 text-[#989898] hover:text-[#fff] dark:text-[gray] dark:hover:text-[#fff] active:text-[#fff] active:dark:text-[#fff]`
          }`}
                >
                  <a className={`text-[20px] font-[400]`} href="#language">
                    {t("h.t4")}
                  </a>
                </li>
                <li
                  className={`text-center py-1 duration-[0.5s] cursor-pointer hover:underline rounded-[5px] px-2
          ${
            currentHash === "#studies"
              ? `bg-sky-500 text-[#fff] dark:text-[#fff] underline`
              : `hover:bg-sky-500 text-[#989898] hover:text-[#fff] dark:text-[gray] dark:hover:text-[#fff] active:text-[#fff] active:dark:text-[#fff]`
          }`}
                >
                  <a className={`text-[20px] font-[400]`} href="#studies">
                    {t("h.t5")}
                  </a>
                </li>
                <li
                  className={`text-center py-1 duration-[0.5s] cursor-pointer hover:underline rounded-[5px] px-2
          ${
            currentHash === "#courses"
              ? `bg-sky-500 text-[#fff] dark:text-[#fff] underline`
              : `hover:bg-sky-500 text-[#989898] hover:text-[#fff] dark:text-[gray] dark:hover:text-[#fff] active:text-[#fff] active:dark:text-[#fff]`
          }`}
                >
                  <a className={`text-[20px] font-[400]`} href="#courses">
                    {t("h.t6")}
                  </a>
                </li>
                <li
                  className={`text-center py-1 duration-[0.5s] cursor-pointer hover:underline rounded-[5px] px-2
          ${
            currentHash === "#projects"
              ? `bg-sky-500 text-[#fff] dark:text-[#fff] underline`
              : `hover:bg-sky-500 text-[#989898] hover:text-[#fff] dark:text-[gray] dark:hover:text-[#fff] active:text-[#fff] active:dark:text-[#fff]`
          }`}
                >
                  <a className={`text-[20px] font-[400]`} href="#projects">
                    {t("h.t7")}
                  </a>
                </li>
                <li
                  className={`text-center py-1 duration-[0.5s] cursor-pointer hover:underline rounded-[5px] px-2
          ${
            currentHash === "#contacts"
              ? `bg-sky-500 text-[#fff] dark:text-[#fff] underline`
              : `hover:bg-sky-500 text-[#989898] hover:text-[#fff] dark:text-[gray] dark:hover:text-[#fff] active:text-[#fff] active:dark:text-[#fff]`
          }`}
                >
                  <a className={`text-[20px] font-[400]`} href="#contacts">
                    {t("h.t8")}
                  </a>
                </li>
              </ul>
              <div className="block_3_header flex items-center gap-4">
                <div>
                  <Switcher />
                </div>
                <div className="for_translation">
                  <select
                    name=""
                    id=""
                    className="outline-none border-[2px] border-[solid] border-[#fff] bg-[#1f1f1f] text-[#fff] dark:bg-[#fff] dark:text-[#000] dark:border-[#000] duration-[0.5s] cursor-pointer"
                    onChange={(event) => changeLanguage(event.target.value)}
                  >
                    <option
                      value=""
                      className="dark:text-[#000] dark:bg-[#fff] cursor-pointer"
                      disabled
                    >
                      {t("language.t1")}
                    </option>
                    <option
                      value="en"
                      className="dark:text-[#000] dark:bg-[#fff] cursor-pointer"
                    >
                      {t("language.t2")}
                    </option>
                    <option
                      value="ru"
                      className="dark:text-[#000] dark:bg-[#fff] cursor-pointer"
                    >
                      {t("language.t3")}
                    </option>
                    <option
                      value="tj"
                      className="dark:text-[#000] dark:bg-[#fff] cursor-pointer"
                    >
                      {t("language.t4")}
                    </option>
                  </select>
                </div>
                <div className="mobile_menu sm:block lg:hidden cursor-pointer">
                  <div className="burger_menu" onClick={changeMenu}>
                    <div
                      className={`${burger_class} cols dark:bg-[#333333] bg-[#fff]`}
                    ></div>
                    <div
                      className={`${burger_class} cols dark:bg-[#333333] bg-[#fff]`}
                    ></div>
                    <div
                      className={`${burger_class} cols dark:bg-[#333333] bg-[#fff]`}
                    ></div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <div className="for_mobile_size">
          <nav
            className={`${menu_class} shadow-[0px_0px_10px_0.1px] shadow-black/10 fixed md:top-[80px] sm:top-[71px] min-h-full z-50 w-[100%] backdrop-saturate-[180%] backdrop-blur-[5px] bg-[#0000006c] dark:bg-[#f0eeeec0] py-[20px] lg:hidden`}
          >
            <ul className="sm:flex sm:flex-col sm:gap-[10px] lg:hidden poppins h-[80vh] overflow-y-auto px-4">
              <LinksMobileSize
                pageLink={`#home`}
                page={t("h.t1")}
                closeMenuMobileSize={() => {
                  setBurgerClass("unclicked");
                  setMenuClass("links_hidden");
                  setIsMenuClicked(false);
                  document.body.classList.add("scroll_visible");
                  document.body.classList.remove("scroll_hidden");
                }}
              />
              <LinksMobileSize
                pageLink={`#about`}
                page={t("h.t2")}
                closeMenuMobileSize={() => {
                  setBurgerClass("unclicked");
                  setMenuClass("links_hidden");
                  setIsMenuClicked(false);
                  document.body.classList.add("scroll_visible");
                  document.body.classList.remove("scroll_hidden");
                }}
              />
              <LinksMobileSize
                pageLink={`#skills`}
                page={t("h.t3")}
                closeMenuMobileSize={() => {
                  setBurgerClass("unclicked");
                  setMenuClass("links_hidden");
                  setIsMenuClicked(false);
                  document.body.classList.add("scroll_visible");
                  document.body.classList.remove("scroll_hidden");
                }}
              />
              <LinksMobileSize
                pageLink={`#language`}
                page={t("h.t4")}
                closeMenuMobileSize={() => {
                  setBurgerClass("unclicked");
                  setMenuClass("links_hidden");
                  setIsMenuClicked(false);
                  document.body.classList.add("scroll_visible");
                  document.body.classList.remove("scroll_hidden");
                }}
              />
              <LinksMobileSize
                pageLink={`#studies`}
                page={t("h.t5")}
                closeMenuMobileSize={() => {
                  setBurgerClass("unclicked");
                  setMenuClass("links_hidden");
                  setIsMenuClicked(false);
                  document.body.classList.add("scroll_visible");
                  document.body.classList.remove("scroll_hidden");
                }}
              />
              <LinksMobileSize
                pageLink={`#courses`}
                page={t("h.t6")}
                closeMenuMobileSize={() => {
                  setBurgerClass("unclicked");
                  setMenuClass("links_hidden");
                  setIsMenuClicked(false);
                  document.body.classList.add("scroll_visible");
                  document.body.classList.remove("scroll_hidden");
                }}
              />
              <LinksMobileSize
                pageLink={`#projects`}
                page={t("h.t7")}
                closeMenuMobileSize={() => {
                  setBurgerClass("unclicked");
                  setMenuClass("links_hidden");
                  setIsMenuClicked(false);
                  document.body.classList.add("scroll_visible");
                  document.body.classList.remove("scroll_hidden");
                }}
              />
              <LinksMobileSize
                pageLink={`#contacts`}
                page={t("h.t8")}
                closeMenuMobileSize={() => {
                  setBurgerClass("unclicked");
                  setMenuClass("links_hidden");
                  setIsMenuClicked(false);
                  document.body.classList.add("scroll_visible");
                  document.body.classList.remove("scroll_hidden");
                }}
              />
            </ul>
          </nav>
        </div>
        <main
          className="main md:px-[60px] sm:px-[5px] pt-[110px] pb-[20px]"
          id="home"
        >
          <button
            className={`${
              backToTopBtn ? `block` : `hidden`
            } p-[5px] bg-[#fff] text-[#1f1f1f] text-[32px] rounded-[5px] fixed bottom-[20px] right-[20px] dark:bg-[#1f1f1f] dark:text-[#fff] duration-[0.5s] z-40`}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <RiArrowDropUpLine />
          </button>
          <h1 className="text-center text-[#fff] dark:text-[#1f1f1f] md:text-[70px] sm:text-[35px] uppercase duration-[0.5s]">
            {t("main.t")}
          </h1>
          <section className="section_1 flex md:justify-between items-center sm:flex-wrap-reverse md:flex-nowrap gap-[50px] sm:justify-center mt-[30px] max-w-[1440px] m-[0_auto]">
            <div className="flex flex-col gap-[15px] items-start" id="contact">
              <h4 className="poppins text-[#fff] text-[25px] font-[300] dark:text-[#1f1f1f] duration-[0.5s]">
                {t("s1.t1")}
              </h4>
              <h1 className="poppins text-[#FFFFFF] md:text-[60px] sm:text-[34px] font-[600] dark:text-[#1f1f1f] duration-[0.5s]">
                {t("s1.t2")}
              </h1>
              {/* <h5 className="poppins text-[#FFFFFF] text-[20px] font-[300] duration-[0.5s] dark:text-[#1f1f1f]">
              {t("s1.t3")}
            </h5> */}
              <TypewriterSkills />
              {/* <object
              data={myResume}
              type="application/pdf"
              className="max-w-[270px]"
            ></object> */}
              <a href={myResume} download={myResume}>
                <button className="p-[16px_13px] for_btn text-[23px] font-[400] text-[#fff] duration-[0.5s]">
                  {t("s1.t4")}
                </button>
              </a>
              <div className="social_links flex items-center gap-2">
                <a href="https://www.linkedin.com/in/olim-yuldoshev-36793b264/">
                  <FaLinkedinIn className="text-[30px] text-[#c2c0c0] dark:text-[#464545] font-[700] duration-[0.5s] hover:text-[#fff] dark:hover:text-[#000] hover:scale-110" />
                </a>
                <a href="https://github.com/olimyuldoshev2003">
                  <FiGithub className="text-[30px] text-[#c2c0c0] dark:text-[#464545] font-[700] duration-[0.5s] hover:text-[#fff] dark:hover:text-[#000] hover:scale-110" />
                </a>
                <a
                  href="https://t.me/olim_yuldoshev_ooo3"
                  className="flex items-center gap-3 text-[16px] text-[#000] dark:text-[#fff] font-[700] duration-[0.5s] p-[10px] bg-[#c2c0c0] dark:bg-[#464545] rounded-[15px] hover:bg-[#fff] dark:hover:bg-[#000] hover:scale-105"
                >
                  {t("s1.t5")}
                  <FaTelegramPlane className="text-[19px] text-[#000] dark:text-[#fff] font-[700] duration-[0.5s]" />
                </a>
              </div>
            </div>
            <div className="img_s_1 md:w-[50%] sm:w-[92%]">
              <img src={imgS1} alt="" />
            </div>
          </section>
          <section
            className="section_2 mt-[50px] flex flex-col gap-7 max-w-[1440px] m-[0_auto]"
            id="about"
          >
            <div className="for_text_about_me_s_2 flex justify-center">
              <h1 className="border-t-[3px] border-t-[#fff] dark:border-[#000] text-center text-[#fff] dark:text-[#1f1f1f] md:text-[50px] sm:text-[35px] uppercase duration-[0.5s] md:max-w-[340px] sm:max-w-[246px]">
                {t("s2.t1")}
              </h1>
            </div>
            <div className="block_s_2 flex md:justify-between sm:justify-center items-center sm:flex-wrap md:flex-nowrap gap-[20px]">
              <div className="img_s_2 md:w-[40%] sm:w-[92%]">
                <img src={imgS1} alt="" />
              </div>
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-[#FFFFFF] lg:text-[100px] md:text-[60px] sm:text-[40px] font-[400] dark:text-[#1f1f1f] duration-[0.5s]">
                  {t("s2.t2")}
                </h1>
                <h1 className="text-[#040ca1] lg:text-[100px] md:text-[60px] sm:text-[40px] font-[400] duration-[0.5s]">
                  {t("s2.t3")}
                </h1>
                <p className="text-[#fff] dark:text-[#1f1f1f] text-[14px] font-[400] max-w-[521px] duration-[0.5s]">
                  {t("s2.t4")}
                </p>
              </div>
            </div>
          </section>
          <section
            className="section_3 mt-[50px] max-w-[1440px] m-[0_auto]"
            id="skills"
          >
            <div className="block_centering_s_3_skills flex justify-center">
              <h1 className="poppins border-t-[3px] border-t-[#fff] md:max-w-[300px] sm:max-w-[146px] dark:text-[#1f1f1f] dark:border-[#1f1f1f] pt-[20px] duration-[0.5s] text-[#FFFFFF] md:text-[50px] sm:text-[35px] font-[600] text-center">
                {t("s3.t1")}
              </h1>
            </div>
            <div className="icons_of_my_skills flex justify-center gap-[50px] flex-wrap mt-[50px] duration-[0.5s]">
              <img src={imgCSS} alt="" />
              <img src={imgHTML} alt="" />
              <img src={imgJS} alt="" />
              <img src={imgBootstrap} alt="" />
              <img src={imgTailwind} className="w-[113px] h-[125px]" alt="" />
              <img src={imgReact} alt="" />
              <img src={imgGit} className="w-[125px] h-[125px]" alt="" />
              <img src={imgGitHub} className="w-[125px] h-[125px]" alt="" />
            </div>
            <div className="my_skills_with_percent mt-[40px]">
              <div className="icons_of_my_skills_with_percent flex justify-center">
                <h1 className="poppins border-t-[3px] border-t-[#fff] md:max-w-[300px] sm:max-w-[220px] dark:text-[#1f1f1f] dark:border-[#1f1f1f] pt-[20px] duration-[0.5s] text-[#FFFFFF] md:text-[50px] sm:text-[35px] font-[600] text-center">
                  {t("s3.t2")}
                </h1>
              </div>
              <div className="blocks_my_skills mt-[40px] flex md:justify-between items-center flex-wrap sm:justify-center gap-10">
                <div className="block_1_my_skills">
                  <div className="C++ flex items-center md:gap-5 sm:gap-2">
                    <div className="block_1">
                      <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                    </div>
                    <div className="block_2 flex flex-col gap-2">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        {t("s3.t3")}
                      </h1>
                      <meter
                        value={CPlusPlus}
                        max={100}
                        className="sm:w-[180px] md:w-[280px] h-[30px]"
                      ></meter>
                    </div>
                    <div className="block_3">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        {CPlusPlus}%
                      </h1>
                    </div>
                  </div>
                  <div className="html flex items-center md:gap-5 sm:gap-2">
                    <div className="block_1">
                      <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                    </div>
                    <div className="block_2 flex flex-col gap-2">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        HTML
                      </h1>
                      <meter
                        value={HTML}
                        max={100}
                        className="sm:w-[180px] md:w-[280px] h-[30px]"
                      ></meter>
                    </div>
                    <div className="block_3">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        {HTML}%
                      </h1>
                    </div>
                  </div>
                  <div className="css flex items-center md:gap-5 sm:gap-2">
                    <div className="block_1">
                      <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                    </div>
                    <div className="block_2 flex flex-col gap-2">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        CSS
                      </h1>
                      <meter
                        value={CSS}
                        max={100}
                        className="sm:w-[180px] md:w-[280px] h-[30px]"
                      ></meter>
                    </div>
                    <div className="block_3">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        {CSS}%
                      </h1>
                    </div>
                  </div>
                  <div className="scss flex items-center md:gap-5 sm:gap-2">
                    <div className="block_1">
                      <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                    </div>
                    <div className="block_2 flex flex-col gap-2">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        SCSS
                      </h1>
                      <meter
                        value={SCSS}
                        max={100}
                        className="sm:w-[180px] md:w-[280px] h-[30px]"
                      ></meter>
                    </div>
                    <div className="block_3">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        {SCSS}%
                      </h1>
                    </div>
                  </div>
                  <div className="sass flex items-center md:gap-5 sm:gap-2">
                    <div className="block_1">
                      <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                    </div>
                    <div className="block_2 flex flex-col gap-2">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        SASS
                      </h1>
                      <meter
                        value={SASS}
                        max={100}
                        className="sm:w-[180px] md:w-[280px] h-[30px]"
                      ></meter>
                    </div>
                    <div className="block_3">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        {SASS}%
                      </h1>
                    </div>
                  </div>
                  <div className="js flex items-center md:gap-5 sm:gap-2">
                    <div className="block_1">
                      <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                    </div>
                    <div className="block_2 flex flex-col gap-2">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        JavaScript
                      </h1>
                      <meter
                        value={JS}
                        max={100}
                        className="sm:w-[180px] md:w-[280px] h-[30px]"
                      ></meter>
                    </div>
                    <div className="block_3">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        {JS}%
                      </h1>
                    </div>
                  </div>
                  <div className="ts flex items-center md:gap-5 sm:gap-2">
                    <div className="block_1">
                      <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                    </div>
                    <div className="block_2 flex flex-col gap-2">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        TypeScript
                      </h1>
                      <meter
                        value={TS}
                        max={100}
                        className="sm:w-[180px] md:w-[280px] h-[30px]"
                      ></meter>
                    </div>
                    <div className="block_3">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        {TS}%
                      </h1>
                    </div>
                  </div>
                  <div className="reactJS flex items-center md:gap-5 sm:gap-2">
                    <div className="block_1">
                      <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                    </div>
                    <div className="block_2 flex flex-col gap-2">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        ReactJS
                      </h1>
                      <meter
                        value={reactJS}
                        max={100}
                        className="sm:w-[180px] md:w-[280px] h-[30px]"
                      ></meter>
                    </div>
                    <div className="block_3">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        {reactJS}%
                      </h1>
                    </div>
                  </div>
                  <div className="reactTS flex items-center md:gap-5 sm:gap-2">
                    <div className="block_1">
                      <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                    </div>
                    <div className="block_2 flex flex-col gap-2">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        ReactTS
                      </h1>
                      <meter
                        value={reactTS}
                        max={100}
                        className="sm:w-[180px] md:w-[280px] h-[30px]"
                      ></meter>
                    </div>
                    <div className="block_3">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        {reactTS}%
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="block_2_my_skills">
                  <div className="redux flex items-center md:gap-5 sm:gap-2">
                    <div className="block_1">
                      <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                    </div>
                    <div className="block_2 flex flex-col gap-2">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        Redux Toolkit
                      </h1>
                      <meter
                        value={redux}
                        max={100}
                        className="sm:w-[180px] md:w-[280px] h-[30px]"
                      ></meter>
                    </div>
                    <div className="block_3">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        {redux}%
                      </h1>
                    </div>
                  </div>
                  <div className="git flex items-center md:gap-5 sm:gap-2">
                    <div className="block_1">
                      <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                    </div>
                    <div className="block_2 flex flex-col gap-2">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        Git
                      </h1>
                      <meter
                        value={git}
                        max={100}
                        className="sm:w-[180px] md:w-[280px] h-[30px]"
                      ></meter>
                    </div>
                    <div className="block_3">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        {git}%
                      </h1>
                    </div>
                  </div>
                  <div className="github flex items-center md:gap-5 sm:gap-2">
                    <div className="block_1">
                      <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                    </div>
                    <div className="block_2 flex flex-col gap-2">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        GitHub
                      </h1>
                      <meter
                        value={gitHub}
                        max={100}
                        className="sm:w-[180px] md:w-[280px] h-[30px]"
                      ></meter>
                    </div>
                    <div className="block_3">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        {gitHub}%
                      </h1>
                    </div>
                  </div>
                  <div className="tailwind flex items-center md:gap-5 sm:gap-2">
                    <div className="block_1">
                      <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                    </div>
                    <div className="block_2 flex flex-col gap-2">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        TailwindCSS
                      </h1>
                      <meter
                        value={tailwind}
                        max={100}
                        className="sm:w-[180px] md:w-[280px] h-[30px]"
                      ></meter>
                    </div>
                    <div className="block_3">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        {tailwind}%
                      </h1>
                    </div>
                  </div>
                  <div className="materialUI flex items-center md:gap-5 sm:gap-2">
                    <div className="block_1">
                      <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                    </div>
                    <div className="block_2 flex flex-col gap-2">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        Material UI
                      </h1>
                      <meter
                        value={materialUI}
                        max={100}
                        className="sm:w-[180px] md:w-[280px] h-[30px]"
                      ></meter>
                    </div>
                    <div className="block_3">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        {materialUI}%
                      </h1>
                    </div>
                  </div>
                  <div className="antDesign flex items-center md:gap-5 sm:gap-2">
                    <div className="block_1">
                      <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                    </div>
                    <div className="block_2 flex flex-col gap-2">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        Ant Design
                      </h1>
                      <meter
                        value={antDesign}
                        max={100}
                        className="sm:w-[180px] md:w-[280px] h-[30px]"
                      ></meter>
                    </div>
                    <div className="block_3">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        {antDesign}%
                      </h1>
                    </div>
                  </div>
                  <div className="RestAPI flex items-center md:gap-5 sm:gap-2">
                    <div className="block_1">
                      <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                    </div>
                    <div className="block_2 flex flex-col gap-2">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        Rest API
                      </h1>
                      <meter
                        value={RESTAPI}
                        max={100}
                        className="sm:w-[180px] md:w-[280px] h-[30px]"
                      ></meter>
                    </div>
                    <div className="block_3">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        {RESTAPI}%
                      </h1>
                    </div>
                  </div>
                  <div className="NextJS flex items-center md:gap-5 sm:gap-2">
                    <div className="block_1">
                      <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                    </div>
                    <div className="block_2 flex flex-col gap-2">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        Next JS
                      </h1>
                      <meter
                        value={nextJS}
                        max={100}
                        className="sm:w-[180px] md:w-[280px] h-[30px]"
                      ></meter>
                    </div>
                    <div className="block_3">
                      <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.5s]">
                        {nextJS}%
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section_4 mt-[50px] flex md:justify-between items-start sm:flex-wrap sm:justify-center gap-[30px] max-w-[1440px] m-[0_auto]">
            <div className="item_1_s_4" id="language">
              <h2 className="text-[#FFFFFF] md:text-[56px] sm:text-[37px] font-[600] border-b-[2px] border-b-[#fff] max-w-[280px] pb-[10px] poppins dark:text-[#1f1f1f] dark:border-[#1f1f1f] duration-[0.5s]">
                {t("s4.t1")}
              </h2>
              <div className="mt-[24px]">
                <div>
                  <div>
                    <h2 className="text-[#FFFFFF] text-[29px] font-[600] poppins dark:text-[#1f1f1f] poppins duration-[0.5s]">
                      {t("s4.t2")}
                    </h2>
                  </div>
                  <div className="flex flex-col w-[218px] ">
                    <p className="text-[#FFFFFF] text-[14px] font-[600] text-end dark:text-[#1f1f1f] poppins duration-[0.5s]">
                      {t("s4.t3")}
                    </p>
                    <hr className="btn_grad w-[220px] py-[10px] mt-[5px]" />
                  </div>
                </div>

                <div className="mt-[30px]">
                  <div>
                    <h2 className="text-[#FFFFFF] text-[29px] font-[600] poppins dark:text-[#1f1f1f] poppins duration-[0.5s]">
                      {t("s4.t4")}
                    </h2>
                  </div>
                  <div className="flex flex-col w-[86px] ">
                    <p className="text-[#FFFFFF] text-[14px] font-[600] text-end dark:text-[#1f1f1f] poppins duration-[0.5s]">
                      {t("s4.t5")}
                    </p>
                    <hr className="btn_grad w-[90px] py-[10px] mt-[5px]" />
                  </div>
                </div>
                <div className="mt-[30px]">
                  <div>
                    <h2 className="text-[#FFFFFF] text-[29px] font-[600] poppins dark:text-[#1f1f1f] poppins duration-[0.5s]">
                      {t("s4.t6")}
                    </h2>
                  </div>
                  <div className="flex flex-col w-[280px] ">
                    <p className="text-[#FFFFFF] text-[14px] font-[600] text-end dark:text-[#1f1f1f] poppins duration-[0.5s]">
                      {t("s4.t7")}
                    </p>
                    <hr className="btn_grad w-[280px] py-[10px] mt-[5px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="item_2_s_4" id="studies">
              <h2 className="text-[#FFFFFF] md:text-[56px] sm:text-[37px] font-[600] border-b-[2px] border-b-[#fff] dark:border-[#1f1f1f] max-w-[280px] pb-[10px] poppins dark:text-[#1f1f1f] duration-[0.5s]">
                {t("s4.t8")}
              </h2>
              <div className="flex items-center gap-5 mt-[40px]">
                <div className="icon_bg">
                  <svg
                    className="w-[40%] h-[40%]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2_131)">
                      <path
                        d="M5.12971 26.7293V7.83158C5.12971 6.7178 5.57216 5.64964 6.35972 4.86209C7.14728 4.07453 8.21544 3.63208 9.32922 3.63208H28.9269C29.2981 3.63208 29.6542 3.77956 29.9167 4.04208C30.1792 4.3046 30.3267 4.66065 30.3267 5.03191V30.2289C30.3267 30.6002 30.1792 30.9562 29.9167 31.2187C29.6542 31.4813 29.2981 31.6287 28.9269 31.6287H10.0291C8.72973 31.6287 7.48354 31.1126 6.56472 30.1937C5.6459 29.2749 5.12971 28.0287 5.12971 26.7293ZM27.5271 28.8291V24.6296H10.0291C9.47224 24.6296 8.93816 24.8508 8.54438 25.2446C8.1506 25.6384 7.92938 26.1724 7.92938 26.7293C7.92938 27.2862 8.1506 27.8203 8.54438 28.2141C8.93816 28.6079 9.47224 28.8291 10.0291 28.8291H27.5271ZM7.92938 22.3017C8.58547 21.9901 9.30283 21.8289 10.0291 21.8299H27.5271V6.43175H9.32922C8.95796 6.43175 8.6019 6.57923 8.33938 6.84175C8.07686 7.10427 7.92938 7.46032 7.92938 7.83158V22.3017Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_131">
                        <rect
                          width="33.596"
                          height="33.596"
                          fill="white"
                          transform="translate(0.930237 0.83252)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="second_block_texts">
                  <h2 className="text-[#FFFFFF] dark:text-[#1f1f1f] md:text-[29px] sm:text-[21px] font-[600] poppins duration-[0.5s] max-w-[300px]">
                    {t("s4.t9")}
                  </h2>
                  <p className="text-[#E3E1E1] dark:text-[#1f1f1f] text-[16px] font-[300] poppins duration-[0.5s]">
                    {t("s4.t11")}
                  </p>
                  <p className="text-[#E3E1E1] dark:text-[#1f1f1f] text-[16px] font-[300] poppins duration-[0.5s]">
                    {t("s4.t10")}
                  </p>
                </div>
              </div>
            </div>
            <div className="courses" id="courses">
              <h2 className="text-[#FFFFFF] md:text-[56px] sm:text-[37px] font-[600] border-b-[2px] border-b-[#fff] dark:border-[#1f1f1f] max-w-[280px] pb-[10px] poppins dark:text-[#1f1f1f] poppins duration-[0.5s]">
                {t("s4.t12")}
              </h2>
              <div className="flex items-center gap-5 mt-[40px]">
                <div className="icon_bg">
                  <svg
                    className="w-[40%] h-[40%]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2_131)">
                      <path
                        d="M5.12971 26.7293V7.83158C5.12971 6.7178 5.57216 5.64964 6.35972 4.86209C7.14728 4.07453 8.21544 3.63208 9.32922 3.63208H28.9269C29.2981 3.63208 29.6542 3.77956 29.9167 4.04208C30.1792 4.3046 30.3267 4.66065 30.3267 5.03191V30.2289C30.3267 30.6002 30.1792 30.9562 29.9167 31.2187C29.6542 31.4813 29.2981 31.6287 28.9269 31.6287H10.0291C8.72973 31.6287 7.48354 31.1126 6.56472 30.1937C5.6459 29.2749 5.12971 28.0287 5.12971 26.7293ZM27.5271 28.8291V24.6296H10.0291C9.47224 24.6296 8.93816 24.8508 8.54438 25.2446C8.1506 25.6384 7.92938 26.1724 7.92938 26.7293C7.92938 27.2862 8.1506 27.8203 8.54438 28.2141C8.93816 28.6079 9.47224 28.8291 10.0291 28.8291H27.5271ZM7.92938 22.3017C8.58547 21.9901 9.30283 21.8289 10.0291 21.8299H27.5271V6.43175H9.32922C8.95796 6.43175 8.6019 6.57923 8.33938 6.84175C8.07686 7.10427 7.92938 7.46032 7.92938 7.83158V22.3017Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_131">
                        <rect
                          width="33.596"
                          height="33.596"
                          fill="white"
                          transform="translate(0.930237 0.83252)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="second_block_texts ">
                  <h2 className="text-[#FFFFFF] dark:text-[#1f1f1f] text-[29px] font-[600] poppins duration-[0.5s] max-w-[300px]">
                    {t("s4.t13")}
                  </h2>
                  <p className="text-[#E3E1E1] dark:text-[#1f1f1f] text-[18px] font-[300] poppins duration-[0.5s] max-w-[300px]">
                    {t("s4.t14")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8 mt-[40px]">
                <div className="icon_bg">
                  <svg
                    className="w-[40%] h-[40%]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2_131)">
                      <path
                        d="M5.12971 26.7293V7.83158C5.12971 6.7178 5.57216 5.64964 6.35972 4.86209C7.14728 4.07453 8.21544 3.63208 9.32922 3.63208H28.9269C29.2981 3.63208 29.6542 3.77956 29.9167 4.04208C30.1792 4.3046 30.3267 4.66065 30.3267 5.03191V30.2289C30.3267 30.6002 30.1792 30.9562 29.9167 31.2187C29.6542 31.4813 29.2981 31.6287 28.9269 31.6287H10.0291C8.72973 31.6287 7.48354 31.1126 6.56472 30.1937C5.6459 29.2749 5.12971 28.0287 5.12971 26.7293ZM27.5271 28.8291V24.6296H10.0291C9.47224 24.6296 8.93816 24.8508 8.54438 25.2446C8.1506 25.6384 7.92938 26.1724 7.92938 26.7293C7.92938 27.2862 8.1506 27.8203 8.54438 28.2141C8.93816 28.6079 9.47224 28.8291 10.0291 28.8291H27.5271ZM7.92938 22.3017C8.58547 21.9901 9.30283 21.8289 10.0291 21.8299H27.5271V6.43175H9.32922C8.95796 6.43175 8.6019 6.57923 8.33938 6.84175C8.07686 7.10427 7.92938 7.46032 7.92938 7.83158V22.3017Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_131">
                        <rect
                          width="33.596"
                          height="33.596"
                          fill="white"
                          transform="translate(0.930237 0.83252)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="second_block_texts">
                  <h2 className="text-[#FFFFFF] dark:text-[#1f1f1f] md:text-[29px] sm:text-[21px] poppins font-[600] duration-[0.5s] max-w-[300px]">
                    {t("s4.t15")}
                  </h2>
                  <p className="text-[#E3E1E1] dark:text-[#1f1f1f]  text-[16px] font-[300] poppins duration-[0.5s]">
                    {t("s4.t16")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8 mt-[40px]">
                <div className="icon_bg">
                  <svg
                    className="w-[40%] h-[40%]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2_131)">
                      <path
                        d="M5.12971 26.7293V7.83158C5.12971 6.7178 5.57216 5.64964 6.35972 4.86209C7.14728 4.07453 8.21544 3.63208 9.32922 3.63208H28.9269C29.2981 3.63208 29.6542 3.77956 29.9167 4.04208C30.1792 4.3046 30.3267 4.66065 30.3267 5.03191V30.2289C30.3267 30.6002 30.1792 30.9562 29.9167 31.2187C29.6542 31.4813 29.2981 31.6287 28.9269 31.6287H10.0291C8.72973 31.6287 7.48354 31.1126 6.56472 30.1937C5.6459 29.2749 5.12971 28.0287 5.12971 26.7293ZM27.5271 28.8291V24.6296H10.0291C9.47224 24.6296 8.93816 24.8508 8.54438 25.2446C8.1506 25.6384 7.92938 26.1724 7.92938 26.7293C7.92938 27.2862 8.1506 27.8203 8.54438 28.2141C8.93816 28.6079 9.47224 28.8291 10.0291 28.8291H27.5271ZM7.92938 22.3017C8.58547 21.9901 9.30283 21.8289 10.0291 21.8299H27.5271V6.43175H9.32922C8.95796 6.43175 8.6019 6.57923 8.33938 6.84175C8.07686 7.10427 7.92938 7.46032 7.92938 7.83158V22.3017Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_131">
                        <rect
                          width="33.596"
                          height="33.596"
                          fill="white"
                          transform="translate(0.930237 0.83252)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="second_block_texts">
                  <h2 className="text-[#FFFFFF] dark:text-[#1f1f1f] poppins md:text-[29px] sm:text-[21px] font-[600] duration-[0.5s] max-w-[300px]">
                    {t("s4.t17")}
                  </h2>
                  <p className="text-[#E3E1E1] dark:text-[#1f1f1f] duration-[0.5s] text-[16px] font-[300] poppins">
                    {t("s4.t18")}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            className="section_5 mt-[60px] max-w-[1440px] m-[0_auto]"
            id="projects"
          >
            <h1 className="poppins border-t-[3px] border-t-[#fff] max-w-[500px] dark:text-[#1f1f1f] dark:border-[#1f1f1f] pt-[20px] duration-[0.5s] text-[#FFFFFF] md:text-[50px] sm:text-[35px] font-[600] text-center m-[0_auto]">
              {t("s5.t1")}
            </h1>
            <div className="projects mt-[50px] flex flex-wrap items-center justify-center gap-2">
              {projects.map((item, index: number) => {
                return (
                  <div
                    className={`each_project rounded-[20px] flex ${
                      index % 2 !== 0 && `md:flex-row-reverse`
                    } sm:flex-wrap md:flex-nowrap border-[2px] border-[#e7e5e5] p-[20px] gap-3`}
                  >
                    <div className="block_image w-auto sm:h-[160px] md:h-[220px] box-amazon overflow-hidden rounded-[20px]">
                      <img
                        src={item.imgOfProject}
                        className="rounded-[20px] max-w-[100%] h-auto translate-y-0 md:hover:translate-y-[-40%] duration-[5s] cursor-pointer"
                        alt=""
                      />
                    </div>
                    <div className="block_texts flex flex-col gap-1">
                      <h1 className="text-[22px] font-[600] text-center text-[#fff] dark:text-[#000] duration-[0.7s]">
                        {item.project}
                      </h1>
                      <p className="text-[16px] font-[400] text-center text-[#fff] dark:text-[#000] max-w-[90rem] duration-[0.7s]">
                        {item.description}
                      </p>
                      <div className="block_programming_languages flex justify-center mt-3 gap-5 flex-wrap">
                        {item.usedLang.map((e, index: number) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center gap-3"
                            >
                              <img
                                className="w-[30px] object-contain"
                                src={e.imgProgLang}
                                alt=""
                              />
                              <h1 className="text-[#fff] dark:text-[#000] duration-[0.7s]">
                                {e.ProgLang}
                              </h1>
                            </div>
                          );
                        })}
                      </div>
                      <div className="block_code_and_demo flex justify-center gap-3 mt-3">
                        <a
                          href={item.code}
                          className="code_link flex items-center gap-1 text-[#fff] dark:text-[#000] duration-[0.7s]"
                        >
                          <FiGithub
                            style={{
                              fontSize: 30,
                            }}
                          />
                          Code
                        </a>
                        <a
                          href={item.demo}
                          className="demo_link flex items-center gap-1 text-[#fff] dark:text-[#000] duration-[0.7s]"
                        >
                          <RiLiveLine
                            style={{
                              fontSize: 30,
                            }}
                          />
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="section_6 mt-[60px]" id="contacts">
            <div className="centering_the_text_s_6 flex justify-center">
              <h1 className="poppins border-t-[3px] border-t-[#fff] md:max-w-[500px] sm:max-w-[100%] dark:text-[#1f1f1f] dark:border-[#1f1f1f] pt-[20px] duration-[0.5s] text-[#FFFFFF] md:text-[50px] sm:text-[35px] font-[600] text-center">
                {t("s6.t1")}
              </h1>
            </div>
            <div className="block_of_contacts max-w-[1440px] m-[0_auto] mt-[40px] gap-[20px]">
              <a
                href="mailto: oyuldoshev39@gmail.com"
                className="email border-[1px] border-[#fffbfb88] dark:border-[#e4e4e4] w-[100%] rounded-[30px] flex flex-col justify-center items-center p-[20px] shadow-2xl hover:bg-[#575656] dark:hover:bg-[#e7e5e5] cursor-pointer"
              >
                <MdAttachEmail className="text-[#fff] dark:text-[#000] text-[33px] duration-[0.5s]" />
                <div className="block_for_text flex justify-center">
                  <h1 className="text-[30px] text-[#fff] dark:text-[#000] font-[700] duration-[0.5s] text-center">
                    {t("s6.t2")}
                  </h1>
                </div>
                <p className="text-[19px] text-[#fff] dark:text-[#000] hover:underline duration-[0.5s] cursor-pointer">
                  oyuldoshev39@gmail.com
                </p>
              </a>
              <a
                href="https://web.whatsapp.com/992919697875"
                className="whatsapp border-[1px] border-[#fffbfb88] dark:border-[#e4e4e4] w-[100%] rounded-[30px] flex flex-col justify-center items-center p-[20px] shadow-2xl hover:bg-[#575656] dark:hover:bg-[#e7e5e5] cursor-pointer"
              >
                <FaWhatsapp className="text-[#fff] dark:text-[#000] text-[33px] duration-[0.5s]" />
                <h1 className="text-[30px] text-[#fff] dark:text-[#000] font-[700] duration-[0.5s]">
                  {t("s6.t3")}
                </h1>
                <p className="text-[19px] text-[#fff] dark:text-[#000] hover:underline duration-[0.5s] cursor-pointer">
                  +992919697875
                </p>
              </a>
              <a
                href="https://t.me/olim_yuldoshev_ooo3"
                className="telegram border-[1px] border-[#fffbfb88] dark:border-[#e4e4e4] w-[100%] rounded-[30px] flex flex-col justify-center items-center p-[20px] shadow-2xl hover:bg-[#575656] dark:hover:bg-[#e7e5e5] cursor-pointer"
              >
                <FaTelegramPlane className="text-[#fff] dark:text-[#000] text-[33px] duration-[0.5s]" />
                <h1 className="text-[30px] text-[#fff] dark:text-[#000] font-[700] duration-[0.5s]">
                  {t("s6.t4")}
                </h1>
                <a
                  href="https://t.me/olim_yuldoshev_ooo3"
                  className="text-[19px] text-[#fff] dark:text-[#000] hover:underline duration-[0.5s]"
                >
                  @olim_yuldoshev_ooo3
                </a>
              </a>
              <a
                href="https://www.instagram.com/olim_yuldoshev_ooo3/"
                className="instagram border-[1px] border-[#fffbfb88] dark:border-[#e4e4e4] w-[100%] rounded-[30px] flex flex-col justify-center items-center p-[20px] shadow-2xl hover:bg-[#575656] dark:hover:bg-[#e7e5e5] cursor-pointer"
              >
                <FaInstagram className="text-[#fff] dark:text-[#000] text-[33px] duration-[0.5s]" />
                <h1 className="text-[30px] text-[#fff] dark:text-[#000] font-[700] duration-[0.5s]">
                  {t("s6.t5")}
                </h1>
                <a
                  href="https://www.instagram.com/olim_yuldoshev_ooo3/"
                  className="text-[19px] text-[#fff] dark:text-[#000] hover:underline duration-[0.5s]"
                >
                  @olim_yuldoshev_ooo3
                </a>
              </a>
              <a
                href="https://github.com/olimyuldoshev2003"
                className="gitHub border-[1px] border-[#fffbfb88] dark:border-[#e4e4e4] w-[100%] rounded-[30px] flex flex-col justify-center items-center p-[20px] shadow-2xl hover:bg-[#575656] dark:hover:bg-[#e7e5e5] cursor-pointer"
              >
                <FiGithub className="text-[#fff] dark:text-[#000] text-[33px] duration-[0.5s]" />
                <h1 className="text-[30px] text-[#fff] dark:text-[#000] font-[700] duration-[0.5s]">
                  {t("s6.t6")}
                </h1>
                <a
                  href="https://github.com/olimyuldoshev2003"
                  className="text-[19px] text-[#fff] dark:text-[#000] hover:underline duration-[0.5s]"
                >
                  @olimyuldoshev2003
                </a>
              </a>
              <a
                href="https://www.linkedin.com/in/olim-yuldoshev-36793b264/"
                className="linkedIn border-[1px] border-[#fffbfb88] dark:border-[#e4e4e4] w-[100%] rounded-[30px] flex flex-col justify-center items-center p-[20px] shadow-2xl hover:bg-[#575656] dark:hover:bg-[#e7e5e5] cursor-pointer"
              >
                <FaLinkedinIn className="text-[#fff] dark:text-[#000] text-[33px] duration-[0.5s]" />
                <h1 className="text-[30px] text-[#fff] dark:text-[#000] font-[700] duration-[0.5s]">
                  {t("s6.t7")}
                </h1>
                <a
                  href="https://www.linkedin.com/in/olim-yuldoshev-36793b264/"
                  className="text-[19px] text-[#fff] dark:text-[#000] hover:underline duration-[0.5s]"
                >
                  Olim Yuldoshev
                </a>
              </a>
            </div>
          </section>
        </main>
        <footer className="footer mt-[60px] flex flex-col justify-center items-center gap-4">
          <div className="footer_block_1">
            <h1 className="dark:text-[#1f1f1f] text-[#fff] md:text-[56px] sm:text-[38px] font-[600] text-center duration-[0.5s]">
              {t("f.t1")}
            </h1>
            <div className="for_p_foote flex justify-center">
              <p className="dark:text-[#1f1f1f] text-[#9E9E9E] text-[19px] font-[400] text-center duration-[0.5s] max-w-[300px]">
                {t("f.t2")}
              </p>
            </div>
            <a
              href={myResume}
              download={myResume}
              className="flex justify-center mt-[20px]"
            >
              <button className="p-[16px_13px] for_btn text-[23px] font-[400] text-[#fff] duration-[0.5s]">
                {t("f.t3")}
              </button>
            </a>
          </div>
          <div className="footer_block_2"></div>
        </footer>
      </div>
    </>
  );
};

export default App;
