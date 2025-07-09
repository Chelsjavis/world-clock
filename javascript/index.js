function updateTime() {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyCurrent = moment().tz("Australia/sydney");
  sydneyDateElement.innerHTML = sydneyCurrent.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyCurrent.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let perthElement = document.querySelector("#perth");
  let perthDateElement = perthElement.querySelector(".date");
  let perthTimeElement = perthElement.querySelector(".time");
  let perthCurrent = moment().tz("Australia/Perth");
  perthDateElement.innerHTML = perthCurrent.format("MMMM Do YYYY");
  perthTimeElement.innerHTML = perthCurrent.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
