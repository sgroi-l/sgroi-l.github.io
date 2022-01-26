let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/bud.JPG') {
    myImage.setAttribute('src','images/nadbud.jpg');
  } else {
    myImage.setAttribute('src','images/bud.JPG');
  }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + ' likes Budleigh';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = myName + ' likes Budleigh';
}

myButton.onclick = function() {
  setUserName();
}
