
function getSala(option) {
  axios
    .get(`https://api.aladhan.com/v1/timingsByCity?country=EG&city=${option}`)
    .then((response) => {
      let allPrayersTimings = response.data.data.timings;
      
      let rowsHolder = document.getElementById("salawat");
      rowsHolder.innerHTML = "";

      for (let key in allPrayersTimings) {
        let salaName = key === "Fajr" ? "../images/sunrise.png": key === "Sunrise" ? "../images/sunrise-notification.png" : key === "Dhuhr" ? "../images/sunny.png" : key === "Asr" ? "../images/weather.png" : key === "Maghrib" ? "../images/sunset.png" : key === "Isha" ? "../images/crescent-moon.png" : ""


        let data = `
                  <div class="text-black" style="gap: 40px;display: grid;grid-template-columns: auto auto;">
                      <div class="data">
                          <img src=${salaName} alt="sala-description" />
                          ${key}
                      </div>
                      <div class="data">
                      ${allPrayersTimings[key]}
                      </div>
              </div>
                  `;
        rowsHolder.innerHTML += data;
      }
    });
}

getSala("Cairo")


document.querySelector("#select").addEventListener("change", (ev) => {
  let option = ev.target.value

  getSala(option);
  document.getElementsByClassName("city")[0].innerHTML = option
});