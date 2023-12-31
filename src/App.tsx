import React, { useState } from "react";
import "./App.css";

// For Drawer Materiial UI
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

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

type Anchor = "top" | "left" | "bottom" | "right";

//For images
import imgS1 from "./assets/my-photo.jpg";
import imgHTML from "./assets/Group 321.png";
import imgCSS from "./assets/Group 320.png";
import imgJS from "./assets/js 3.png";
import imgBootstrap from "./assets/bootstrap-4-logo-pngrepo-com 4.png";
import imgTailwind from "./assets/Tailwind.png";
import imgReact from "./assets/react 2.png";

//For resume
import myResume from "./uploads/My-Resume-English.pdf";

import Switcher from "./components/Switch UI/Switcher";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";

const App = () => {
  //for translation
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };

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

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="bg-[#1f1f1f] text-[#fff] dark:text-[#1f1f1f] dark:bg-[#fff]"
    >
      <List>
        {[
          {
            id: "#home",
            section: t("h.t1"),
          },
          {
            id: "#about",
            section: "About me",
          },
          {
            id: "#skills",
            section: "Skills",
          },
          {
            id: "#language",
            section: "Language",
          },
          {
            id: "#studies",
            section: "Studies",
          },
          {
            id: "#courses",
            section: "Courses",
          },
          {
            id: "#projects",
            section: "Projects",
          },
          {
            id: "#contacts",
            section: "Contacts",
          },
        ].map((text) => (
          <a href={text.id} key={text.id}>
            <ListItem key={text.section} disablePadding>
              <ListItemButton>
                <ListItemText primary={text.section} />
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="bg-[#1f1f1f] dark:bg-[#fff] pb-[30px]">
      <header className="header md:p-[20px_60px] sm:p-[20px_5px] flex justify-between">
        <div>
          <h1 className="alex_brush text-[#fff] text-[28px] font-[400] dark:text-[#1f1f1f] duration-[0.7s]">
            Olim Karomatov
          </h1>
        </div>
        <div className="flex items-center gap-[10px]">
          <ul className="lg:flex lg:items-center flex-wrap lg:gap-[10px] sm:hidden poppins">
            <li className="text-[#989898] text-[20px] font-[400] hover:text-[#fff] cursor-pointer duration-[0.7s] dark:text-[#1f1f1f] dark:hover:text-[#bea3a3]">
              <a
                className="hover:underline text-[#989898] text-[20px] font-[400] hover:text-[#fff] cursor-pointer duration-[0.7s] dark:text-[#1f1f1f] dark:hover:text-[#bea3a3]"
                href="#home"
              >
                {t("h.t1")}
              </a>
            </li>
            <li>
              <a
                className="hover:underline text-[#989898] text-[20px] font-[400] hover:text-[#fff] cursor-pointer duration-[0.7s] dark:text-[#1f1f1f] dark:hover:text-[#bea3a3]"
                href="#about"
              >
                About me
              </a>
            </li>
            <li>
              <a
                className="hover:underline text-[#989898] text-[20px] font-[400] hover:text-[#fff] cursor-pointer duration-[0.7s] dark:text-[#1f1f1f] dark:hover:text-[#bea3a3]"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="hover:underline text-[#989898] text-[20px] font-[400] hover:text-[#fff] cursor-pointer duration-[0.7s] dark:text-[#1f1f1f] dark:hover:text-[#bea3a3]"
                href="#language"
              >
                Language
              </a>
            </li>
            <li>
              <a
                className="hover:underline text-[#989898] text-[20px] font-[400] hover:text-[#fff] cursor-pointer duration-[0.7s] dark:text-[#1f1f1f] dark:hover:text-[#bea3a3]"
                href="#studies"
              >
                Studies
              </a>
            </li>
            <li>
              <a
                className="hover:underline text-[#989898] text-[20px] font-[400] hover:text-[#fff] cursor-pointer duration-[0.7s] dark:text-[#1f1f1f] dark:hover:text-[#bea3a3]"
                href="#courses"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                className="hover:underline text-[#989898] text-[20px] font-[400] hover:text-[#fff] cursor-pointer duration-[0.7s] dark:text-[#1f1f1f] dark:hover:text-[#bea3a3]"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="hover:underline text-[#989898] text-[20px] font-[400] hover:text-[#fff] cursor-pointer duration-[0.7s] dark:text-[#1f1f1f] dark:hover:text-[#bea3a3]"
                href="#contacts"
              >
                Contacts
              </a>
            </li>
          </ul>
          <div>
            <Switcher />
          </div>
          <div className="for_translation">
            <select
              name=""
              id=""
              className="outline-none border-[2px] border-[solid] border-[#fff] bg-[#000] text-[#fff] dark:bg-[#fff] dark:text-[#000] dark:border-[#000]"
              onChange={(event) => changeLanguage(event.target.value)}
            >
              <option
                value=""
                className="dark:text-[#000] dark:bg-[#fff]"
                disabled
              >
                Lang
              </option>
              <option value="en" className="dark:text-[#000] dark:bg-[#fff]">
                En
              </option>
              <option value="ru" className="dark:text-[#000] dark:bg-[#fff]">
                Ru
              </option>
              <option value="tj" className="dark:text-[#000] dark:bg-[#fff]">
                Tj
              </option>
            </select>
          </div>
          <div className="mobile_menu sm:block lg:hidden">
            {(["right"] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                <MenuIcon
                  className="text-[#fff] dark:text-[#1f1f1f] duration-[0.7s]"
                  sx={{ fontSize: `33px` }}
                  onClick={toggleDrawer(anchor, true)}
                  onKeyDown={toggleDrawer(anchor, true)}
                ></MenuIcon>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </div>
      </header>
      <main
        className="main md:p-[20px_60px] sm:p-[20px_5px] flex flex-col justify-center items-center"
        id="home"
      >
        <h1 className="text-center text-[#fff] dark:text-[#1f1f1f] md:text-[70px] sm:text-[35px] uppercase duration-[0.7s]">
          My portfolio
        </h1>
        <section className="section_1 flex md:justify-between items-center sm:flex-wrap-reverse md:flex-nowrap gap-[50px] sm:justify-center mt-[30px]">
          <div className="flex flex-col gap-[15px] items-start" id="contact">
            <h4 className="poppins text-[#fff] text-[25px] font-[300] dark:text-[#1f1f1f] duration-[0.7s]">
              Welcome
            </h4>
            <h1 className="poppins text-[#FFFFFF] md:text-[60px] sm:text-[34px] font-[600] dark:text-[#1f1f1f] duration-[0.7s]">
              I’m Karomatov Olim
            </h1>
            <h5 className="poppins text-[#FFFFFF] text-[20px] font-[300] duration-[0.7s] dark:text-[#1f1f1f]">
              Junior Frontend Developer
            </h5>
            <object
              data={myResume}
              type="application/pdf"
              className="max-w-[270px]"
            ></object>
            {/* <embed src={myResume} type="" /> */}
            <a href={myResume} download={myResume}>
              <button className="p-[16px_46px] for_btn text-[23px] font-[400] text-[#fff] duration-[0.7s]">
                Download CV
              </button>
            </a>
            <div className="social_links flex items-center gap-2">
              <a href="https://www.linkedin.com/in/olim-yuldoshev-36793b264/">
                <FaLinkedinIn className="text-[30px] text-[#c2c0c0] dark:text-[#464545] font-[700] duration-[0.7s] hover:text-[#fff] dark:hover:text-[#000] hover:scale-110" />
              </a>
              <a href="https://github.com/olimyuldoshev2003">
                <FiGithub className="text-[30px] text-[#c2c0c0] dark:text-[#464545] font-[700] duration-[0.7s] hover:text-[#fff] dark:hover:text-[#000] hover:scale-110" />
              </a>
              <a
                href="https://t.me/olim_yuldoshev_ooo3"
                className="flex items-center gap-3 text-[16px] text-[#000] dark:text-[#fff] font-[700] duration-[0.7s] p-[10px] bg-[#c2c0c0] dark:bg-[#464545] rounded-[15px] hover:bg-[#fff] dark:hover:bg-[#000] hover:scale-105"
              >
                Say Hello{" "}
                <FaTelegramPlane className="text-[19px] text-[#000] dark:text-[#fff] font-[700] duration-[0.7s]" />
              </a>
            </div>
          </div>
          <div className="md:w-[50%] sm:w-[92%]">
            <img src={imgS1} alt="" />
          </div>
        </section>
        <section className="section_2 mt-[50px] flex flex-col gap-7" id="about">
          <div className="for_text_about_me_s_2 flex justify-center">
            <h1 className="border-t-[3px] border-t-[#fff] dark:border-[#000] text-center text-[#fff] dark:text-[#1f1f1f] md:text-[50px] sm:text-[35px] uppercase duration-[0.7s] max-w-[246px]">
              About me
            </h1>
          </div>
          <div className="block_s_2 flex md:justify-between sm:justify-center items-center sm:flex-wrap md:flex-nowrap gap-[20px]">
            <div className="md:w-[40%] sm:w-[92%]">
              <img src={imgS1} alt="" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[#FFFFFF] lg:text-[100px] md:text-[60px] sm:text-[40px] font-[400] dark:text-[#1f1f1f] duration-[0.7s]">
                A little bit
              </h1>
              <h1 className="text-[#040ca1] lg:text-[100px] md:text-[60px] sm:text-[40px] font-[400] duration-[0.7s]">
                about me ...
              </h1>
              <p className="text-[#fff] dark:text-[#1f1f1f] text-[14px] font-[400] max-w-[521px] duration-[0.7s]">
                I was born in the 19th of November 2003 years. When I became 10
                years old, I started studying at the secondary school. In 2021
                years I finished my school and I took the exam of National Test
                Center and I passed to the Tajik National University, faculty
                Mechanic and Math, special Information. After this I started
                studying at that University. In my second course from support
                the organization of "Hamdam" I studied the Frontend Developer in
                the Ilmhona and Softclub. I finished Ilmhona in the January and
                Softclub in the September (in the third course).
              </p>
            </div>
          </div>
        </section>
        <section className="section_3 mt-[50px]" id="skills">
          <div className="block_centering_s_3_skills flex justify-center">
            <h1 className="poppins border-t-[3px] border-t-[#fff] md:max-w-[300px] sm:max-w-[146px] dark:text-[#1f1f1f] dark:border-[#1f1f1f] pt-[20px] duration-[0.7s] text-[#FFFFFF] md:text-[50px] sm:text-[35px] font-[600] text-center">
              My skills
            </h1>
          </div>
          <div className="icons_of_my_skills flex justify-center gap-[50px] flex-wrap mt-[50px] duration-[0.7s]">
            <img src={imgCSS} alt="" />
            <img src={imgHTML} alt="" />
            <img src={imgJS} alt="" />
            <img src={imgBootstrap} alt="" />
            <img src={imgTailwind} className="w-[113px] h-[125px]" alt="" />
            <img src={imgReact} alt="" />
          </div>
          <div className="my_skills_with_percent mt-[40px]">
            <div className="icons_of_my_skills_with_percent flex justify-center">
              <h1 className="poppins border-t-[3px] border-t-[#fff] md:max-w-[300px] sm:max-w-[220px] dark:text-[#1f1f1f] dark:border-[#1f1f1f] pt-[20px] duration-[0.7s] text-[#FFFFFF] md:text-[50px] sm:text-[35px] font-[600] text-center">
                My skills (%)
              </h1>
            </div>
            <div className="blocks_my_skills mt-[40px] flex md:justify-between items-center flex-wrap sm:justify-center gap-10">
              <div className="block_1_my_skills">
                <div className="C++ flex items-center md:gap-5 sm:gap-2">
                  <div className="block_1">
                    <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                  </div>
                  <div className="block_2 flex flex-col gap-2">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      C++ basic (only logic)
                    </h1>
                    <meter
                      value={CPlusPlus}
                      max={100}
                      className="sm:w-[180px] md:w-[280px] h-[30px]"
                    ></meter>
                  </div>
                  <div className="block_3">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      {CPlusPlus}%
                    </h1>
                  </div>
                </div>
                <div className="html flex items-center md:gap-5 sm:gap-2">
                  <div className="block_1">
                    <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                  </div>
                  <div className="block_2 flex flex-col gap-2">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      HTML
                    </h1>
                    <meter
                      value={HTML}
                      max={100}
                      className="sm:w-[180px] md:w-[280px] h-[30px]"
                    ></meter>
                  </div>
                  <div className="block_3">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      {HTML}%
                    </h1>
                  </div>
                </div>
                <div className="css flex items-center md:gap-5 sm:gap-2">
                  <div className="block_1">
                    <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                  </div>
                  <div className="block_2 flex flex-col gap-2">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      CSS
                    </h1>
                    <meter
                      value={CSS}
                      max={100}
                      className="sm:w-[180px] md:w-[280px] h-[30px]"
                    ></meter>
                  </div>
                  <div className="block_3">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      {CSS}%
                    </h1>
                  </div>
                </div>
                <div className="scss flex items-center md:gap-5 sm:gap-2">
                  <div className="block_1">
                    <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                  </div>
                  <div className="block_2 flex flex-col gap-2">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      SCSS
                    </h1>
                    <meter
                      value={SCSS}
                      max={100}
                      className="sm:w-[180px] md:w-[280px] h-[30px]"
                    ></meter>
                  </div>
                  <div className="block_3">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      {SCSS}%
                    </h1>
                  </div>
                </div>
                <div className="sass flex items-center md:gap-5 sm:gap-2">
                  <div className="block_1">
                    <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                  </div>
                  <div className="block_2 flex flex-col gap-2">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      SASS
                    </h1>
                    <meter
                      value={SASS}
                      max={100}
                      className="sm:w-[180px] md:w-[280px] h-[30px]"
                    ></meter>
                  </div>
                  <div className="block_3">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      {SASS}%
                    </h1>
                  </div>
                </div>
                <div className="js flex items-center md:gap-5 sm:gap-2">
                  <div className="block_1">
                    <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                  </div>
                  <div className="block_2 flex flex-col gap-2">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      JavaScript
                    </h1>
                    <meter
                      value={JS}
                      max={100}
                      className="sm:w-[180px] md:w-[280px] h-[30px]"
                    ></meter>
                  </div>
                  <div className="block_3">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      {JS}%
                    </h1>
                  </div>
                </div>
                <div className="ts flex items-center md:gap-5 sm:gap-2">
                  <div className="block_1">
                    <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                  </div>
                  <div className="block_2 flex flex-col gap-2">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      TypeScript
                    </h1>
                    <meter
                      value={TS}
                      max={100}
                      className="sm:w-[180px] md:w-[280px] h-[30px]"
                    ></meter>
                  </div>
                  <div className="block_3">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      {TS}%
                    </h1>
                  </div>
                </div>
                <div className="reactJS flex items-center md:gap-5 sm:gap-2">
                  <div className="block_1">
                    <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                  </div>
                  <div className="block_2 flex flex-col gap-2">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      ReactJS
                    </h1>
                    <meter
                      value={reactJS}
                      max={100}
                      className="sm:w-[180px] md:w-[280px] h-[30px]"
                    ></meter>
                  </div>
                  <div className="block_3">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      {reactJS}%
                    </h1>
                  </div>
                </div>
                <div className="reactTS flex items-center md:gap-5 sm:gap-2">
                  <div className="block_1">
                    <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                  </div>
                  <div className="block_2 flex flex-col gap-2">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      ReactTS
                    </h1>
                    <meter
                      value={reactTS}
                      max={100}
                      className="sm:w-[180px] md:w-[280px] h-[30px]"
                    ></meter>
                  </div>
                  <div className="block_3">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
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
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      Redux Toolkit
                    </h1>
                    <meter
                      value={redux}
                      max={100}
                      className="sm:w-[180px] md:w-[280px] h-[30px]"
                    ></meter>
                  </div>
                  <div className="block_3">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      {redux}%
                    </h1>
                  </div>
                </div>
                <div className="git flex items-center md:gap-5 sm:gap-2">
                  <div className="block_1">
                    <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                  </div>
                  <div className="block_2 flex flex-col gap-2">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      Git
                    </h1>
                    <meter
                      value={git}
                      max={100}
                      className="sm:w-[180px] md:w-[280px] h-[30px]"
                    ></meter>
                  </div>
                  <div className="block_3">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      {git}%
                    </h1>
                  </div>
                </div>
                <div className="github flex items-center md:gap-5 sm:gap-2">
                  <div className="block_1">
                    <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                  </div>
                  <div className="block_2 flex flex-col gap-2">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      GitHub
                    </h1>
                    <meter
                      value={gitHub}
                      max={100}
                      className="sm:w-[180px] md:w-[280px] h-[30px]"
                    ></meter>
                  </div>
                  <div className="block_3">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      {gitHub}%
                    </h1>
                  </div>
                </div>
                <div className="tailwind flex items-center md:gap-5 sm:gap-2">
                  <div className="block_1">
                    <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                  </div>
                  <div className="block_2 flex flex-col gap-2">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      TailwindCSS
                    </h1>
                    <meter
                      value={tailwind}
                      max={100}
                      className="sm:w-[180px] md:w-[280px] h-[30px]"
                    ></meter>
                  </div>
                  <div className="block_3">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      {tailwind}%
                    </h1>
                  </div>
                </div>
                <div className="materialUI flex items-center md:gap-5 sm:gap-2">
                  <div className="block_1">
                    <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                  </div>
                  <div className="block_2 flex flex-col gap-2">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      Material UI
                    </h1>
                    <meter
                      value={materialUI}
                      max={100}
                      className="sm:w-[180px] md:w-[280px] h-[30px]"
                    ></meter>
                  </div>
                  <div className="block_3">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      {materialUI}%
                    </h1>
                  </div>
                </div>
                <div className="antDesign flex items-center md:gap-5 sm:gap-2">
                  <div className="block_1">
                    <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                  </div>
                  <div className="block_2 flex flex-col gap-2">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      Ant Design
                    </h1>
                    <meter
                      value={antDesign}
                      max={100}
                      className="sm:w-[180px] md:w-[280px] h-[30px]"
                    ></meter>
                  </div>
                  <div className="block_3">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      {antDesign}%
                    </h1>
                  </div>
                </div>
                <div className="RestAPI flex items-center md:gap-5 sm:gap-2">
                  <div className="block_1">
                    <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                  </div>
                  <div className="block_2 flex flex-col gap-2">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      Rest API
                    </h1>
                    <meter
                      value={RESTAPI}
                      max={100}
                      className="sm:w-[180px] md:w-[280px] h-[30px]"
                    ></meter>
                  </div>
                  <div className="block_3">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      {RESTAPI}%
                    </h1>
                  </div>
                </div>
                <div className="NextJS flex items-center md:gap-5 sm:gap-2">
                  <div className="block_1">
                    <VscVerifiedFilled className="text-[#4040ff] text-[40px]" />
                  </div>
                  <div className="block_2 flex flex-col gap-2">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      Next JS
                    </h1>
                    <meter
                      value={nextJS}
                      max={100}
                      className="sm:w-[180px] md:w-[280px] h-[30px]"
                    ></meter>
                  </div>
                  <div className="block_3">
                    <h1 className="text-[26px] text-[#fff] font-[600] dark:text-[#000] duration-[0.7s]">
                      {nextJS}%
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_4 mt-[50px] flex md:justify-between items-start sm:flex-wrap sm:justify-center gap-[30px]">
          <div className="item_1_s_4" id="language">
            <h2 className="text-[#FFFFFF] md:text-[56px] sm:text-[37px] font-[600] border-b-[2px] border-b-[#fff] max-w-[280px] pb-[10px] poppins dark:text-[#1f1f1f] dark:border-[#1f1f1f] duration-[0.7s]">
              Language
            </h2>
            <div className="mt-[24px]">
              <div>
                <div>
                  <h2 className="text-[#FFFFFF] text-[29px] font-[600] poppins dark:text-[#1f1f1f] poppins duration-[0.7s]">
                    English
                  </h2>
                </div>
                <div className="flex flex-col w-[218px] ">
                  <p className="text-[#FFFFFF] text-[14px] font-[600] text-end dark:text-[#1f1f1f] poppins duration-[0.7s]">
                    Intermediate
                  </p>
                  <hr className="btn_grad w-[220px] py-[10px] mt-[5px]" />
                </div>
              </div>

              <div className="mt-[30px]">
                <div>
                  <h2 className="text-[#FFFFFF] text-[29px] font-[600] poppins dark:text-[#1f1f1f] poppins duration-[0.7s]">
                    Russian
                  </h2>
                </div>
                <div className="flex flex-col w-[86px] ">
                  <p className="text-[#FFFFFF] text-[14px] font-[600] text-end dark:text-[#1f1f1f] poppins duration-[0.7s]">
                    Good
                  </p>
                  <hr className="btn_grad w-[90px] py-[10px] mt-[5px]" />
                </div>
              </div>
              <div className="mt-[30px]">
                <div>
                  <h2 className="text-[#FFFFFF] text-[29px] font-[600] poppins dark:text-[#1f1f1f] poppins duration-[0.7s]">
                    Tajik
                  </h2>
                </div>
                <div className="flex flex-col w-[280px] ">
                  <p className="text-[#FFFFFF] text-[14px] font-[600] text-end dark:text-[#1f1f1f] poppins duration-[0.7s]">
                    Fluent
                  </p>
                  <hr className="btn_grad w-[280px] py-[10px] mt-[5px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="item_2_s_4" id="studies">
            <h2 className="text-[#FFFFFF] md:text-[56px] sm:text-[37px] font-[600] border-b-[2px] border-b-[#fff] dark:border-[#1f1f1f] max-w-[280px] pb-[10px] poppins dark:text-[#1f1f1f] duration-[0.7s]">
              Studies
            </h2>
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
                <h2 className="text-[#FFFFFF] dark:text-[#1f1f1f] text-[29px] font-[600] poppins duration-[0.7s]">
                  Tajik National University
                </h2>
                <p className="text-[#E3E1E1] dark:text-[#1f1f1f] text-[18px] font-[300] poppins">
                  Dushanbe 2021
                </p>
              </div>
            </div>
          </div>
          <div className="courses" id="courses">
            <h2 className="text-[#FFFFFF] md:text-[56px] sm:text-[37px] font-[600] border-b-[2px] border-b-[#fff] dark:border-[#1f1f1f] max-w-[280px] pb-[10px] poppins dark:text-[#1f1f1f] poppins duration-[0.7s]">
              Courses
            </h2>
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
              <div className="second_block_texts ">
                <h2 className="text-[#FFFFFF] dark:text-[#1f1f1f] text-[29px] font-[600] poppins duration-[0.7s]">
                  English
                </h2>
                <p className="text-[#E3E1E1] dark:text-[#1f1f1f] text-[18px] font-[300] poppins duration-[0.7s]">
                  Hisor, Dushanbe 10.2019-9.2022
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
              <div className="second_block_texts ">
                <h2 className="text-[#FFFFFF] dark:text-[#1f1f1f] text-[29px] poppins font-[600] duration-[0.7s]">
                  Ilmhona
                </h2>
                <p className="text-[#E3E1E1] dark:text-[#1f1f1f]  text-[18px] font-[300] poppins duration-[0.7s]">
                  Dushanbe 10.2022-1.2023
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
              <div className="second_block_texts ">
                <h2 className="text-[#FFFFFF] dark:text-[#1f1f1f] poppins text-[29px] font-[600] duration-[0.7s]">
                  Softclub
                </h2>
                <p className="text-[#E3E1E1] dark:text-[#1f1f1f] duration-[0.7s] text-[18px] font-[300] poppins">
                  Dushanbe 4.2023-9.2023
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section_5 mt-[60px]" id="projects">
          <h1 className="poppins border-t-[3px] border-t-[#fff] max-w-[500px] dark:text-[#1f1f1f] dark:border-[#1f1f1f] pt-[20px] duration-[0.7s] text-[#FFFFFF] md:text-[50px] sm:text-[35px] font-[600] text-center">
            My projects
          </h1>
        </section>
        <section className="section_6 mt-[60px]" id="contacts">
          <div className="centering_the_text_s_6 flex justify-center">
            <h1 className="poppins border-t-[3px] border-t-[#fff] md:max-w-[500px] sm:max-w-[100%] dark:text-[#1f1f1f] dark:border-[#1f1f1f] pt-[20px] duration-[0.7s] text-[#FFFFFF] md:text-[50px] sm:text-[35px] font-[600] text-center">
              Contact with me
            </h1>
          </div>
          <div className="block_of_contacts mt-[40px] flex gap-[20px] flex-wrap justify-center">
            <div className="email border-[1px] border-[#fffbfb88] dark:border-[#e4e4e4] max-w-[288px] rounded-[30px] flex flex-col justify-center items-center p-[20px] shadow-2xl hover:bg-[#575656] dark:hover:bg-[#e7e5e5]">
              <MdAttachEmail className="text-[#fff] dark:text-[#000] text-[33px] duration-[0.7s]" />
              <h1 className="text-[30px] text-[#fff] dark:text-[#000] font-[700] duration-[0.7s]">
                Email
              </h1>
              <p className="text-[19px] text-[#fff] dark:text-[#000] hover:underline duration-[0.7s] cursor-pointer">
                oyuldoshev39@gmail.com
              </p>
            </div>
            <div className="whatsapp border-[1px] border-[#fffbfb88] dark:border-[#e4e4e4] max-w-[288px] rounded-[30px] flex flex-col justify-center items-center p-[20px] shadow-2xl hover:bg-[#575656] dark:hover:bg-[#e7e5e5]">
              <FaWhatsapp className="text-[#fff] dark:text-[#000] text-[33px] duration-[0.7s]" />
              <h1 className="text-[30px] text-[#fff] dark:text-[#000] font-[700] duration-[0.7s]">
                WhatsApp
              </h1>
              <p className="text-[19px] text-[#fff] dark:text-[#000] hover:underline duration-[0.7s] cursor-pointer">
                +992919697875
              </p>
            </div>
            <div className="telegram border-[1px] border-[#fffbfb88] dark:border-[#e4e4e4] max-w-[288px] rounded-[30px] flex flex-col justify-center items-center p-[20px] shadow-2xl hover:bg-[#575656] dark:hover:bg-[#e7e5e5]">
              <FaTelegramPlane className="text-[#fff] dark:text-[#000] text-[33px] duration-[0.7s]" />
              <h1 className="text-[30px] text-[#fff] dark:text-[#000] font-[700] duration-[0.7s]">
                Telegram
              </h1>
              <a
                className="text-[19px] text-[#fff] dark:text-[#000] hover:underline duration-[0.7s]"
                href="https://t.me/olim_yuldoshev_ooo3"
              >
                @olim_yuldoshev_ooo3
              </a>
            </div>
            <div className="instagram border-[1px] border-[#fffbfb88] dark:border-[#e4e4e4] max-w-[288px] rounded-[30px] flex flex-col justify-center items-center p-[20px] shadow-2xl hover:bg-[#575656] dark:hover:bg-[#e7e5e5]">
              <FaInstagram className="text-[#fff] dark:text-[#000] text-[33px] duration-[0.7s]" />
              <h1 className="text-[30px] text-[#fff] dark:text-[#000] font-[700] duration-[0.7s]">
                Instagram
              </h1>
              <a
                className="text-[19px] text-[#fff] dark:text-[#000] hover:underline duration-[0.7s]"
                href="https://www.instagram.com/olim_yuldoshev_ooo3/"
              >
                @olim_yuldoshev_ooo3
              </a>
            </div>
            <div className="gitHub border-[1px] border-[#fffbfb88] dark:border-[#e4e4e4] max-w-[288px] rounded-[30px] flex flex-col justify-center items-center p-[20px] shadow-2xl hover:bg-[#575656] dark:hover:bg-[#e7e5e5]">
              <FiGithub className="text-[#fff] dark:text-[#000] text-[33px] duration-[0.7s]" />
              <h1 className="text-[30px] text-[#fff] dark:text-[#000] font-[700] duration-[0.7s]">
                GitHub
              </h1>
              <a
                className="text-[19px] text-[#fff] dark:text-[#000] hover:underline duration-[0.7s]"
                href="https://github.com/olimyuldoshev2003"
              >
                @olimyuldoshev2003
              </a>
            </div>
            <div className="linkedIn border-[1px] border-[#fffbfb88] dark:border-[#e4e4e4] max-w-[288px] rounded-[30px] flex flex-col justify-center items-center p-[20px] shadow-2xl hover:bg-[#575656] dark:hover:bg-[#e7e5e5]">
              <FaLinkedinIn className="text-[#fff] dark:text-[#000] text-[33px] duration-[0.7s]" />
              <h1 className="text-[30px] text-[#fff] dark:text-[#000] font-[700] duration-[0.7s]">
                LinkedIn
              </h1>
              <a
                className="text-[19px] text-[#fff] dark:text-[#000] hover:underline duration-[0.7s]"
                href="https://www.linkedin.com/in/olim-yuldoshev-36793b264/"
              >
                Olim Yuldoshev
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer mt-[60px] flex flex-col justify-center items-center gap-4">
        <h1 className="dark:text-[#1f1f1f] text-[#fff] md:text-[56px] sm:text-[38px] font-[600] text-center duration-[0.7s]">
          Intrested in my Work
        </h1>
        <p className="dark:text-[#1f1f1f] text-[#9E9E9E] text-[19px] font-[400] text-center duration-[0.7s]">
          Download my CV to know more about me
        </p>
        <a href={myResume} download={myResume}>
          <button className="p-[16px_46px] for_btn text-[23px] font-[400] text-[#fff] duration-[0.7s]">
            Download CV
          </button>
        </a>
      </footer>
    </div>
  );
};

export default App;
