const updateUTCTime = () => {
  document.getElementById("currentTimeUTC").textContent =
    new Date().toISOString().split(".")[0] + " UTC";
};

// Initial update
updateUTCTime();

// Update every second
setInterval(updateUTCTime, 1000);
