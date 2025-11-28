let percentage = 0;
const percentText = document.querySelector(".percentage");

const interval = setInterval(() => {
  percentage++;
  percentText.textContent = percentage + "%";
  if (percentage >= 100) clearInterval(interval);
}, 50); // 50ms per step
