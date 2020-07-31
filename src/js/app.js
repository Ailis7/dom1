export default function interval() {
  const arr = [...document.querySelectorAll('.square')];
  const img = document.querySelector('.goblin');
  const squareWithGoblin = img.closest('.square');
  arr.splice(arr.indexOf(squareWithGoblin), 1);

  function randomInteger(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  const newSquareWithGoblin = arr[randomInteger(0, 2)];
  newSquareWithGoblin.innerHTML = squareWithGoblin.innerHTML;
  squareWithGoblin.innerHTML = '';
}

setInterval(interval, 1000);
