import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import NavBar from "../components/NavBar";
import "../styles/Style.css";
import { Toggle } from "../components/toggle";
import myProfile from "../assets/me.png";
import fitQuest from "../assets/fitquestWeb.webp";
import fitQuest2 from "../assets/fitquestWeb2.webp";
import fitQuest3 from "../assets/fitquestWeb3.webp";
import fitQuest4 from "../assets/fitquestWeb4.webp";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/JS.png";
import react from "../assets/react.png";
import mongodb from "../assets/mongdb.svg";
import bootstrap from "../assets/bootstrap.svg";
import mysql from "../assets/mysql.png";
import ionic from "../assets/ionic.png";
import figma from "../assets/figma.png";
import me1 from "../assets/me1.png";
import { IoLogoIonic } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";
import { FaAngular } from "react-icons/fa";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import Modal from "../components/modal";

const Home = () => {
  const [isDark, setIsDark] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    console.log("Toggling modal"); // Log to check if toggleModal is called
    setOpen(!open);
  };

  console.log("Modal state:", open);

  return (
    <>
      <div className="home" data-theme={isDark ? "dark" : "light"}>
        <Row>
          {/* <Col className="d-flex flex-column justify-content-center align-items-center">
            <span className="title-port">Portfolio</span>
          </Col> */}
          <Col className="flex-column-bottom mb-5">
            <NavBar />
          </Col>
          {/* <Col className="d-flex flex-column justify-content-center align-items-center">
            <span className="night-mode">
              <Toggle
                isChecked={isDark}
                handleChange={() => setIsDark(!isDark)}
              />
            </span>
          </Col> */}
        </Row>
        <Container class="mt-5">
          <Container id="home">
            {/* Home */}
            <div class="row row-cols-2 mt-5 d-flex justify-content-center">
              <div class="col-12 col-md-6">
                <div
                  class="row"
                  className="d-flex justify-content-center align-items-center text-center"
                >
                  <div class="col-6 " className="profile">
                    <img
                      src={me1}
                      alt="Description"
                      style={{ width: "30vh" }}
                      className="bottom-image"
                    />
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6" className="profile-parent">
                <div class="col-6 align-middle" className="profile">
                  <br></br>
                  <p>Hi, I am</p>
                  <h3>Raven Koby</h3>
                  <h3>Temporaza</h3>
                </div>
                <div className="row justify-content-center">
                  <div className="col-12 col-md-auto mb-2 mb-md-0">
                    <a
                      href="mailto:kobyraventemporaza@gmail.com"
                      className="w-100 text-decoration-none"
                    >
                      <Button
                        className="button-email w-100 d-flex align-items-center justify-content-center"
                        type="button"
                      >
                        <FaEnvelope className="me-2" size={18} /> Email Me
                      </Button>
                    </a>
                  </div>
                  <div className="col-12-mt-3 col-md-auto ">
                    <a
                      href="https://www.canva.com/design/DAGPOtOTNvY/9rTy1vMujDMaaZx3JVD4-A/view?utm_content=DAGPOtOTNvY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd28fa13be5"
                      download="Temporaza_Raven_Koby_CV.pdf"
                      className="w-100 text-decoration-none"
                    >
                      <Button
                        className="w-100 d-flex align-items-center justify-content-center"
                        type="button"
                      >
                        <FaDownload className="me-2" size={18} /> View My CV
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* end of home  */}
            </div>
          </Container>
          {/* About Me */}
          <Container id="about">
            <div
              // style={{ background: "#5E686D" }}
              className="row row-2 rounded-5 mt-5"
            >
              <div className="col-12 col-md-6">
                <div class="col mt-3" data-theme="gray">
                  <div className="about-me">
                    <h1 class="mt-5" className="text-center">
                      About Me
                    </h1>
                    <br></br>
                    <br></br>
                    <p>
                      Hi, I'm Raven Koby Temporaza, a Full-Stack Web Developer
                      with a strong foundation in React.js, Node.js, MongoDB,
                      and Express.js. My journey in web development started with
                      a passion for creating interactive and user-friendly
                      applications, which led me to work on exciting projects
                      like FitQuest Junior, a gamified fitness tracker for kids.
                      <br />
                      <br />
                      I have experience in front-end and back-end development,
                      database management, and QA testing, ensuring that every
                      project I work on is efficient, scalable, and optimized
                      for performance. I’m always excited to tackle new
                      challenges and bring creative ideas to life through
                      technology!
                      <br />
                      <br />I find myself as a well-organized person, problem
                      solver, independent employee with high attention to
                      detail. I have a principle that is "Stay simple and stay
                      humble". I believe that in simplicity there is a
                      complexity and very deep thoroughness.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 mt-3">
                <div className="skills-parent">
                  <h1>Skills</h1>
                </div>
                <div className="row skillSet mt-5 m-3 d-flex justify-content-center">
                  {[
                    { src: html, label: "HTML", size: "5vh" },
                    { src: css, label: "CSS", size: "8vh" },
                    { src: js, label: "JavaScript", size: "8vh" },
                    { src: react, label: "ReactJS", size: "5vh" },
                    { src: mongodb, label: "MongoDB", size: "5vh" },
                    { src: bootstrap, label: "Bootstrap", size: "5vh" },
                    { src: mysql, label: "MySQL", size: "5vh" },
                    { src: ionic, label: "Ionic Angular", size: "5vh" },
                    { src: figma, label: "Figma", size: "3vh" },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="label col-3 d-flex flex-column align-items-center justify-content-center p-3 border rounded shadow-sm  m-1 bg-light hover-effect"
                    >
                      <img
                        src={skill.src}
                        alt={skill.label}
                        className="img-fluid mb-2"
                        style={{ width: skill.size }}
                      />
                      {/* <p className="fw-bold color-primary text-center m-0">
                      {skill.label}
                    </p> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
          {/* Projects */}
          <Container id="contact">
            <div
              className="projects pb-3 rounded-4"
              style={{ background: "#5E686D" }}
            >
              <div>
                <h1 className="text-center">Project</h1>
              </div>
              <div className="container text-center mt-5">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div className="fit-logo">
                      {/* Image */}
                      <img
                        src={fitQuest}
                        alt="Description"
                        className="bottom-image img-hover rounded-5"
                        style={{ width: "90%", height: "auto" }}
                      />

                      {/* Link Text (Always Inside the Hover Area) */}
                      <a
                        href="https://play.google.com/store/apps/details?id=com.fitQuestJunior.app&hl=en"
                        className="image-link"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div className="fit-content ">
                      <h3 className="text-start">
                        FitQuest Junior: A Gamified Fitness App for Kids
                      </h3>
                      <br></br>
                      <h5 className="text-start">Overview:</h5>
                      <div>
                        <p className="text-start">
                          FitQuest Junior is a gamified fitness tracking
                          application designed to help children build healthy
                          habits through interactive challenges and virtual pet
                          rewards. The app features separate parent and child
                          panels, allowing parents to monitor their child's
                          health metrics (BMI, weight, height) while keeping
                          kids engaged with fun activities.
                        </p>
                      </div>

                      <h5 className="text-center">Tools</h5>
                      <div className="tools d-flex justify-content-center gap-3">
                        <div className="p-4 border rounded shadow bg-white">
                          <IoLogoIonic
                            className="text-primary"
                            style={{ fontSize: "40px" }}
                          />
                        </div>
                        <div className="p-4 border rounded shadow bg-white">
                          <IoLogoFirebase
                            className="text-warning"
                            style={{ fontSize: "40px" }}
                          />
                        </div>
                        <div className="p-4 border rounded shadow bg-white">
                          <FaAngular
                            className="text-danger"
                            style={{ fontSize: "40px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Me */}
            <div className="contact-container bg-red mt-5">
              <div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <div className="shape1"></div>
                  <h2 className="text-center contact-header ">Contact Me</h2>
                  <div className="shape2"></div>
                </div>

                <div class="row m-auto d-flex justify-content-center w-75">
                  <div class="col-12 col-md-6 d-flex justify-content-center">
                    <div className="border rounded-pill  d-inline-block py-2 px-3 text-center d-flex align-items-center gap-2">
                      <FaEnvelope className="text-primary" size={20} />
                      <a
                        href="mailto:kobyraventemporaza@gmail.com"
                        className="text-dark text-decoration-none"
                      >
                        <p className="m-0">kobyraventemporaza@gmail.com</p>
                      </a>
                    </div>
                  </div>

                  <div class="col-12 col-md-6 d-flex justify-content-center mt-2">
                    <div className="border rounded-pill d-inline-block py-2 px-3 text-center d-flex align-items-center gap-2">
                      <FaMapMarkerAlt className="text-danger" size={20} />
                      <p className="m-0">Olongapo City, Zambales</p>
                    </div>
                  </div>

                  <div class="col-12 d-flex justify-content-center mt-2">
                    <div className="border rounded-pill  d-inline-block py-2 px-3 text-center d-flex align-items-center gap-2">
                      <FaPhone className="text-success" size={20} />
                      <p className="m-0">09703714292</p>
                    </div>
                  </div>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <div className="shape1"></div>
                  <FaFacebook
                    className="text-primary"
                    style={{ fontSize: "40px" }}
                  />
                  <FaLinkedin
                    className="text-primary"
                    style={{ fontSize: "40px" }}
                  />
                  <FaTwitter
                    className="text-primary"
                    style={{ fontSize: "40px" }}
                  />
                  <div className="shape2"></div>
                </div>
              </div>
              <h1 className="text-center mt-5">Thanks for Scrolling!!</h1>
            </div>
          </Container>
        </Container>
      </div>

      {/* Modal */}
    </>
  );
};

export default Home;
