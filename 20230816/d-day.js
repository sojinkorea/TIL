const clockTitle = document.querySelector('.js-clock');

function dayCalculator() {
  const date = new Date();
  const christmas = new Date('2023-12-25');

  const diff = christmas - date;

  const diffDay = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
  const diffHour = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
  const diffMin = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
  const diffSec = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

  clockTitle.innerText = `${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}s`;
}

dayCalculator();
setInterval(dayCalculator, 1000);
