function updateTime() {
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyCurrent = moment().tz("Australia/sydney");
    sydneyDateElement.innerHTML = sydneyCurrent.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyCurrent.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let adelaideElement = document.querySelector("#adelaide");
  if (adelaideElement) {
    let adelaideDateElement = adelaideElement.querySelector(".date");
    let adelaideTimeElement = adelaideElement.querySelector(".time");
    let adelaideCurrent = moment().tz("Australia/adelaide");
    adelaideDateElement.innerHTML = adelaideCurrent.format("MMMM Do YYYY");
    adelaideTimeElement.innerHTML = adelaideCurrent.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let perthElement = document.querySelector("#perth");
  if (perthElement) {
    let perthDateElement = perthElement.querySelector(".date");
    let perthTimeElement = perthElement.querySelector(".time");
    let perthCurrent = moment().tz("Australia/Perth");
    perthDateElement.innerHTML = perthCurrent.format("MMMM Do YYYY");
    perthTimeElement.innerHTML = perthCurrent.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  let citiesElement = document.querySelector("#city-container");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
  <button class="all-cities-button"><a href="/" >All Cities</a></button>      
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city-select");
citiesSelect.addEventListener("change", updateCity);
