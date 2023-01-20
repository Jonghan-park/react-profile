import React from "react";
import "./portfolio.css";
import IMG7 from "../../assets/portfolio7.png";
import IMG8 from "../../assets/portfolio8.png";
import IMG9 from "../../assets/portfolio9.png";
import IMG10 from "../../assets/portfolio10.png";
import IMG11 from "../../assets/portfolio11.png";
import IMG12 from "../../assets/portfolio12.png";
import IMG13 from "../../assets/portfolio13.png";
import IMG14 from "../../assets/portfolio14.png";
import IMG15 from "../../assets/portfolio15.png";

const data = [
  {
    id: 1,
    image: IMG8,
    title: "CB Drive inn(Restaurant app with a client) ",
    skills: "React, HTML, CSS",
    body: "The project used React hooks useState and useEffect, and the purpose of the project is to accomplish client’s requirement which motivates customers to be interested in the restaurant. The customer can visit the web application to explorer menus and some info in terms of the restaurant. The web server can be delayed to be turned on for a minute. It needs about 30 seconds to be turned on.",
    github: "https://github.com/Jonghan-park/CB-Drive-inn-v3",
    demo: "https://cb-drive-inn-client.onrender.com",
  },
  {
    id: 2,
    image: IMG7,
    title: "Medical appointment system",
    skills: "HTML, CSS, MySQL, JSP/Servlet, AWS(EC2, S3, RDS)",
    body: "This is the project which is used JSP/Servlet, HTML, CSS, Bootstrap and MySql. This project was completed with 7 group members in school as a capstone project. Our group members tried to use what we learned in school and implement lots of functions in the application including security.",
    github: "https://github.com/Jonghan-park/Medical-appointment-system",
  },
  {
    id: 3,
    image: IMG15,
    title: "Todo list (PostgreSQL)",
    skills: "React, HTML, CSS, Node, PostgreSQL",
    body: "The project has CRUD functions for adding, editing and deleting a todo. The web server can be delayed to be turned on for a minute. It might take 30 seconds to fetch a todo list from a database.",
    github: "https://github.com/Jonghan-park/pern-todo",
    demo: "https://pern-todo-av96.onrender.com/",
  },
  {
    id: 4,
    image: IMG13,
    title: "Todo list (MongoDB)",
    skills: "React, HTML, CSS, Node, MongoDB",
    body: "The project has CRUD functions for adding, crossing the line and deleting a todo. The web server can be delayed to be turned on for a minute. It needs about 30 seconds to be turned on.",
    github: "https://github.com/Jonghan-park/mern_todo_app",
    demo: "https://todo-jonghan-frontend.onrender.com/",
  },
  {
    id: 5,
    image: IMG14,
    title: "AskMeAnything app - ChatGPT",
    skills: "Javascript, HTML, CSS, ChatGPT",
    body: "The app developed for having a conversation with ChatGPT technology, and users can ask anything by typing their questions on input field. ChatGPT is able to answer or provide some solutions about coding, so users can solve their coding problem with the ChatGPT. The web server can be delayed to be turned on for a minute. It needs about 30 seconds to be turned on.",
    github: "https://github.com/Jonghan-park/openAI_codeX",
    demo: "https://askmeanything-codex.onrender.com/",
  },
  {
    id: 6,
    image: IMG9,
    title: "Menus",
    skills: "React, HTML, CSS",
    body: "The project used React hooks useState. ",
    github: "https://github.com/Jonghan-park/menus",
    demo: "https://menus-jonghan.netlify.app",
  },
  {
    id: 7,
    image: IMG10,
    title: "Cart - food order",
    skills: "React, Redux, HTML, CSS",
    body: "The project used React hooks useState and redux ",
    github: "https://github.com/Jonghan-park/FoodOrder",
    demo: "https://cart-jonghan.netlify.app",
  },
  {
    id: 8,
    image: IMG11,
    title: "Grocery list",
    skills: "React, HTML, CSS",
    body: "The project used React hooks useState. ",
    github: "https://github.com/Jonghan-park/grocery-list",
    demo: "https://grocery-list-jonghan.netlify.app",
  },
  {
    id: 9,
    image: IMG12,
    title: "Contact manager",
    skills: "React, Redux HTML, CSS",
    body: "The project used React hooks useState and redux ",
    github: "https://github.com/Jonghan-park/redux-crud-project",
    demo: "https://contact-manager-jonghan.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, skills, body, github, demo }) => {
          return (
            <article key={id} className="portfolio__items">
              <div className="portfolio__item-image">
                <img src={image} alt="image1" />
              </div>
              <h3>
                {title} - {skills}
              </h3>
              <h4>{body}</h4>
              <br />
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn" target="_blank">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
