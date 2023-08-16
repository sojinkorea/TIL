const clock = document.querySelector('h1#clock');

// function sayHello() {
//   console.log('hello');
// }

// setInterval(sayHello, 5000); // 5초마다 실행
// setTimeout(sayHello, 5000); // 한번만 실행

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
