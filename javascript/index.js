function updateTime() {
  let melbourneElement = document.querySelector("#melbourne");
  let melbourneDateElement = melbourneElement.querySelector(".date");
  let melbourneTimeElement = melbourneElement.querySelector(".time");
  let melbourneCurrent = moment().tz("Australia/Melbourne");
  melbourneDateElement.innerHTML = melbourneCurrent.format("MMMM Do YYYY");
  melbourneTimeElement.innerHTML = melbourneCurrent.format(
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
