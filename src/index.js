import './style.css';
import avatarPic from './img/male.svg';
import projectTodDo from './img/Screenshot221.png';
import projectRest from './img/Screenshot222.png';
import project1 from './img/Screenshot22.png';
import project2 from './img/Screenshot.png';
import project3 from './img/Screenshot33.png';
import project4 from './img/Screenshot44.png';

const getBlogs = require('./scripts/mediumApi');

const avatar = document.querySelector('#avatar');
avatar.src = avatarPic;

const profile = document.querySelector('#profile');
profile.src = avatarPic;

const imgScreenshot2 = document.querySelector('#imgScreenshot2');
imgScreenshot2.src = project1;
const imgScreenshot3 = document.querySelector('#imgScreenshot3');
imgScreenshot3.src = project2;
const imgScreenshot4 = document.querySelector('#imgScreenshot4');
imgScreenshot4.src = project3;
const imgScreenshot5 = document.querySelector('#imgScreenshot5');
imgScreenshot5.src = project4;

const imgScreenshot6 = document.querySelector('#projectTodDo');
imgScreenshot6.src = projectTodDo;

const imgScreenshot7 = document.querySelector('#projectRest');
imgScreenshot7.src = projectRest;

getBlogs();
