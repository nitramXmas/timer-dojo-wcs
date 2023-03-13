let startBtn = document.querySelector('#btn-start');

function reverseCount(time) {
  for (let i = time; i > 0; i--) {
    alert(i);
  }
}

startBtn.addEventListener('click', function () {
  let timeSelect = document.getElementById('time-select').value;
  reverseCount(timeSelect);
});
