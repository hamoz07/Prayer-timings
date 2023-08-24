
function getSala(option) {
  axios
    .get(`https://api.aladhan.com/v1/timingsByCity?country=EG&city=${option}`)
    .then((response) => {
      let allPrayersTimings = response.data.timings;
      console.log(response)
      let rowsHolder = document.getElementById("salawat");
      rowsHolder.innerHTML = "";

      for (let key in allPrayersTimings) {
        let data = `
                  <div class="row border-dots">
                      <div class="col-sm-4">
                          ${key}
                      </div>
                      <div class="col-sm-4">
                      ${allPrayersTimings[key]}
                      </div>
                  </div>
                  `;
        rowsHolder.innerHTML += data;
      }
    });
}

getSala("Cairo")


document.querySelector("select").addEventListener("change", (ev) => {
  let option = ev.target.value

  getSala(option);
  document.getElementsByClassName("city")[0].innerHTML = option
});