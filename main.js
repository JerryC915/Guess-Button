let correctButtonIndex;
let totalClicks = 0;
let totalRights = 0;

if (sessionStorage.getItem('clickCount')) {
  totalClicks = parseInt(sessionStorage.getItem('clickCount'), 10);
  document.getElementById('clickCounter').textContent = `Total Clicks: ${totalClicks}`;
}
if(sessionStorage.getItem('rightCount')) {
  totalRights = parseInt(sessionStorage.getItem('rightCount'), 10);
  document.getElementById('rightCounter').textContent = `Total Correct Clicks: ${totalRights}`;
}

function randomizeCorrectButton() {
  correctButtonIndex = Math.floor(Math.random() * 3);
}

function updateClickCounter() {
  totalClicks++;
  sessionStorage.setItem("clickCount", totalClicks);
  document.getElementById('clickCounter').textContent = `Total Clicks: ${totalClicks}`;
}

function handleButtonClick(buttonIndex) {
  updateClickCounter();

  if (buttonIndex === correctButtonIndex) {
    alert('Right! U GOT IT!');
    totalRights++;
    sessionStorage.setItem("rightCount", totalRights);
    document.getElementById('rightCounter').textContent = `Total Correct Clicks: ${totalRights}`;
  } else {
    alert('Oops, you got it wrong!');
  }

  randomizeCorrectButton();
}

document.addEventListener('DOMContentLoaded', function() {
  randomizeCorrectButton();
  const buttons = document.querySelectorAll('.guessButton');
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => handleButtonClick(index));
  });
});

document.getElementById('clickCounter').textContent = `Total Clicks: ${totalClicks}`;
