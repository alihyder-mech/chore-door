let doorImage1 = document.getElementById('door1');
  const botDoorPath =  "https://content.codecademy.com/projects/chore-door/images/robot.svg";

const beachDoorPath="https://content.codecademy.com/projects/chore-door/images/beach.svg";

const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let numClosedDoors= 3;
const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
let startButton =  document.getElementById('start');
let currentPlaying = true;
let openDoor1;
let openDoor2;
let openDoor3;
const randomChoreDoorGenerator= () => {
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  if(choreDoor === 0){
 openDoor1 = botDoorPath;
 openDoor2= beachDoorPath;
 openDoor3 = spaceDoorPath;
  } else if( choreDoor ===1) {
  openDoor2 = botDoorPath;
  openDoor1 =beachDoorPath;
  openDoor3 = spaceDoorPath;

  } else if (choreDoor === 2){
openDoor3 =  botDoorPath;
openDoor1 = beachDoorPath;
openDoor2 = spaceDoorPath;
  }

};
let startRound = () => {
 
  currentPlaying = true;
  numClosedDoors =  3;
  startButton.innerHTML = "Good luck!";
  doorImage1.src= closedDoorPath;
  doorImage2.src= closedDoorPath;
  doorImage3.src= closedDoorPath;
  randomChoreDoorGenerator();
 
};


doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && currentPlaying){
doorImage1.src = openDoor1;
playDoor(doorImage1);
ifWin(doorImage1);

}}
let doorImage2 = document.getElementById('door2');

doorImage2.onclick = () => {
  if(!isClicked(doorImage2) && currentPlaying){
doorImage2.src = openDoor2;
playDoor(doorImage2);
ifWin(doorImage2);

}}
let doorImage3 = document.getElementById('door3');
doorImage3.onclick = () => {
  if(!isClicked(doorImage3) && currentPlaying){
doorImage3.src = openDoor3;
playDoor(doorImage3);
ifWin(doorImage3);

}}
startButton.onclick= ()=> {
  if(!currentPlaying){
  startRound();}
}

 

let isBot= (door) => {
  if(door.src === botDoorPath) {
    return true;
  }else
  {
    return false;
  }
}
let isClicked = (door) => {
  if (door.src == closedDoorPath){
    return false;
  }else{
    return true;
  }
}
let playDoor = (door) => {
  numClosedDoors -= 1;
 
  if ( numClosedDoors === 0){
    gameOver('win');
  }else if ( isBot(door)){
    gameOver();
  }
}
let gameOver = (status) => {
  if(status =='win'){
  startButton.innerHTML  = "You win! Play again?";
  } else{
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentPlaying = false;
}
const ifWin= (door) => {
  if (numClosedDoors === 1 && door.src != botDoorPath){gameOver('win')}
}

startRound();

