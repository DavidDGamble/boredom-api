import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BoredService from './js/boredAPI.js';

// Buisness Logic

async function getUnBored(type, participants) {
  const response= await BoredService.getUnBored(type, participants);
  if (response.activity) {
    printElements(response);
  } else {
    printError(response);
  }
}

async function randomUnBored() {
  const response= await BoredService.randomUnBored();
  if (response.activity) {
    printElements(response);
  } else {
    printError(response);
  }
}

// UI Logic -------------------------------------------------------------------

const printElements = (response) => {
  document.getElementById("display-activity").innerHTML = `${response.activity}`;
  document.getElementById("display-participants").innerHTML = `Participants needed: ${response.participants}`;
};

const printError = (error) => {
  document.getElementById('display-activity').innerHTML = `There was an error accessing the data: ${error.error}`;
  document.getElementById("display-participants").innerHTML = null;
};

const handleSubmit = (event) => {
  event.preventDefault();
  const userType = document.getElementById('type').value;
  const userParticipants = document.getElementById('participants').value;
  getUnBored(userType, userParticipants);
};

const handleRandom = (event) => {
  event.preventDefault();
  randomUnBored();
};

addEventListener('load', function() {
  document.querySelector('form').addEventListener('submit', handleSubmit);
  document.getElementById('random').addEventListener('click', handleRandom);
});