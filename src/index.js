import './style.css';
import avatarPic from './img/male.svg';
import projectTodDo from './img/Screenshot221.png';
import projectRest from './img/Screenshot222.png';
import project1 from './img/Screenshot22.png';
import project2 from './img/Screenshot.png';
import project3 from './img/Screenshot33.png';
import project4 from './img/Screenshot44.png';
import projectGame from './img/Screenshotgame.png';

const Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

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

const theProjectGame = document.querySelector('#projectGame');
theProjectGame.src = projectGame;

//getBlogs();

const sendMessage = () => {
  const name = document.querySelector('#contactName').value;
  const email = document.querySelector('#contactEmail').value;
  const msg = document.querySelector('#contactMessage').value;

  let success = true;

  if (name.length < 2 || name.length > 15) {
    document.querySelector('#contactName').className = 'border-danger';
    success = false;
  } else {
    //document.querySelector('#contactName').removeClass('border-danger');
    success = true;
  }
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) === false) {
    document.querySelector('#contactEmail').className = 'border-danger';
    success = false;
  } else {
    //document.querySelector('#contactEmail').removeClass('border-danger');
    success = true;
  }
  if (msg.length < 5 || msg.length > 100) {
    document.querySelector('#contactMessage').className = 'border-danger';
    success = false;
  } else {
    //document.querySelector('#contactMessage').removeClass('border-danger')
    success = true;
  }
  if (success) {
    Email.send({
      SecureToken: '60629796-104b-4824-bf91-366ed67321c7',
      To: 'guillainbisimwam@gmail.com',
      From: 'you@isp.com',
      Subject: 'This is the subject',
      Body: 'And this is the body',
      Attachments: [
        {
          name: 'smtpjs.png',
          path: 'https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png',
        },
      ],
    }).then(
      // eslint-disable-next-line no-alert
      message => alert(message),
    );
  }
};

const sendMessageBtn = document.querySelector('#send_msg');
sendMessageBtn.addEventListener('click', sendMessage);
