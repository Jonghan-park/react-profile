import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG7 from "../../assets/portfolio7.png";
import IMG8 from "../../assets/portfolio8.png";
import IMG9 from "../../assets/portfolio9.png";
import IMG10 from "../../assets/portfolio10.png";
import IMG11 from "../../assets/portfolio11.png";
import IMG12 from "../../assets/portfolio12.png";
import IMG13 from "../../assets/portfolio13.png";

const data = [
  {
    id: 1,
    image: IMG8,
    title: "CB Drive inn(Restaurant app with a client) ",
    skills: "React, HTML, CSS",
    body: "The project used React hooks useState and useEffect, and the purpose of the project is to accomplish client’s requirement which motivates customers to be interested in the restaurant. The customer can visit the web application to explorer menus and some info in terms of the restaurant.",
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
    image: IMG13,
    title: "Todo web app",
    skills: "React, HTML, CSS, Node, MongoDB",
    body: "The project has CRUD functions for adding, crossing the line and deleting a todo. ",
    demo: "https://todo-jonghan-frontend.onrender.com/",
  },
  {
    id: 4,
    image: IMG1,
    title: "Fruits",
    skills: "React, HTML, CSS",
    body: "The project used React hooks useState. Each item is loaded from data.js which has 4 different kinds of fruits including id, name, quantities and image and displays on a form from a list component.",
    github: "https://github.com/Jonghan-park/fruit-basket",
    demo: "https://jonghan-fruit.netlify.app/",
  },
  {
    id: 5,
    image: IMG3,
    title: "Reviews",
    skills: "React, HTML, CSS",
    body: "The project used React hooks useState. Each review is displayed on a form with image, name, job title and review. The form has left and right arrow to change next review, and the Surprise Me will show random review on the dataset. ",
    github: "https://github.com/Jonghan-park/reviews",
    demo: "https://jonghan-reviews.netlify.app",
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
