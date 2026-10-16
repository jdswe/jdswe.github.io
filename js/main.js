const colombiaClock = document.querySelector("#colombia-clock");
const colombiaTimeFormatter = new Intl.DateTimeFormat("es-CO", {
  timeZone: "America/Bogota",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

function updateColombiaClock() {
  const now = new Date();

  colombiaClock.textContent = colombiaTimeFormatter.format(now);
  colombiaClock.dateTime = now.toISOString();
}

updateColombiaClock();
setInterval(updateColombiaClock, 1000);
