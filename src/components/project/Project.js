import PropTypes from 'prop-types';
import { useState } from 'react';
import loan from './../../assets/Screenshot22.png';
import ebola from './../../assets/Screenshot33.png';
import ruby from './../../assets/Screenshot44.png';
import todo from './../../assets/Screenshot221.png';
import resto from './../../assets/Screenshot222.png';
import game from './../../assets/Screenshotgame.png';
import festival from './../../assets/Screenshot.png';


const Project = ({project}) => {
    const myProjects = [
        {id:1, title:'Game adventure', link:'http://gbisimwa.me/Game-adventure/dist/', key: 'js1', src: game, stack: ' JavaScript, Phaser3, Git, Webpack, Eslint, Babel', details: 'This is a 2D side-scrolling action game (RPG) where players take control of a little girl, running, and jumping! The mission is to collect as many gifts as possible while avoiding monsters.'},
        {id:2, title:'Restaurant Webpack', link:'http://gbisimwa.me/restaurant/', key: 'js2', src: resto, stack: 'JavaScript, ES6, Git, Webpack, Eslint, Babel', details: 'The main goal of this project is to understand the benefits of modularized code as well as the ability to set up a javascript application made of different modules using Webpack.'},
        {id:3, title:'To-Do-List', link:'http://gbisimwa.me/To-Do-List/', key: 'js3', src: todo, stack: 'JavaScript, ES6, Git, Webpack, Eslint, Babel, localStorage', details: 'This project was built as part of the Microverse JavaScript module. The goal of the project is to build a simple Todo App using Webpack and ES6 by dynamically creating the DOM elements.'},
        {id:4, title:'Loan Group management', link:'https://mysterious-beyond-28823.herokuapp.com/', key: 'ror', src: loan, stack: 'Ruby on rails, postgresql, Heroku, RSpec, Capybara', details: "This is a loan application system. It's a web application with a good responsive design, built with Ruby on Rails to facilitate financial inclusion by giving loans to people."},
        {id:5, title:'Worl Music Festival', link:'http://gbisimwa.me/Worl-Music-Festival/', key: 'html', src: festival, stack: 'HTML5, bootstrap4, css3-flexbox', details: "This Project is based on an online website for a conference. I have followed the given design of the website CC Global Summit 2015 by Cindy Shin."},
        {id:6, title:'DRC ebola evolution', link:'https://drc-ebola-outbreak.herokuapp.com/', key: 'python', src: ebola, stack: 'Flask, Postgresql, python3, dash, rest-api', details: "This project shows the evolution of the Ebola outbreak that has been occurring in the north-east of the DRC since August 2018, using dada science."},
        {id:7, title:'RUBY GEM SUGGESTIONS BOT', link:'https://github.com/guillainbisimwa/Twitter-gem-suggestions-bot/', key: 'ruby', src: ruby, stack: ' Ruby, twitter-bot, twitter-api, rspec, gitflow', details: "This is a Twitter bot that posts inspirational gem suggestions, reply to tweets, follow and tags ruby developer who needs help using our list of # (check githut)."},
    ];
    const [state, setState] = useState(myProjects.filter(ob => ob.key == project))

    return (
        <div className="border border-light p-4 img-container project">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://gbisimwa.me/To-Do-List/"
            >
                <img id="projectTodDo" src={state[0].src} alt="Project Todo " />
            </a>
            <div className="info_project">
                <p className="fw-bold text-truncate">To-Do-List {state[0].id}</p>
               
            </div>
           
            <div className="port-oly">
                <div className="port-btn port-inner-btn">
                    <button className="btn bg-primary_ btn-sm text-light mt-2 btn-block">live preview</button>
                    <button className="btn bg-primary_ btn-sm text-light mt-2 btn-block">view details</button>
                </div>
            </div>
        </div>
    )
}

Project.propTypes = {
    //project: PropTypes.oneOfType([PropTypes.object]).isRequired,
    //project: PropTypes.object,
    project: PropTypes.string.isRequired,
}

export default Project;