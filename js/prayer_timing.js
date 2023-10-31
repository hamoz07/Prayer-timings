
function getSala(option) {
  axios
    .get(`https://api.aladhan.com/v1/timingsByCity?city=${option}&country=EG&method=8`)
    .then((response) => {
      let allPrayersTimings = response.data.data.timings;
      
      let rowsHolder = document.getElementById("salawat");
      rowsHolder.innerHTML = "";

      for (let key in allPrayersTimings) {

        let data = `
                  <div class="text-black" style="gap: 40px;display: grid;grid-template-columns: auto auto;">
                      <div class="data">
                      
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
