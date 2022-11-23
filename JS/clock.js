const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  function AmPm() {}
  clock.innerText = `${hours}h : ${minutes}m : ${seconds}s`;
}
getClock();
setInterval(getClock, 1000);
