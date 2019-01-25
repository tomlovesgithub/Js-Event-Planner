window.addEventListener('load', () => {

  let eventsCalender = new EventsCalender();
  window.el = eventsCalender;
  let button = document.getElementById('button')

  button.onclick = function(){
    let textbox = document.getElementById('text')
    let date = document.getElementById('date')
    if (textbox.value == "" || date.value == "") {
      alert("please enter Title and Date")
    } else {
      let event = new Event(textbox.value, date.value);
      eventsCalender.addEvent(event)
      textbox.value = "";
      date.value = "";
      displayEvents();
    }
  }

  function displayEvents(){
    let eventsList = document.getElementById('eventsList')
    eventsList.innerHTML = '';
    let events = eventsCalender.displayEvents();
    eventsList.appendChild(events);

  }
  const appKey = config.MY_KEY;

  let searchButton = document.getElementById("search-btn");
  let searchInput = document.getElementById("search-txt");
  let cityName = document.getElementById("city-name");
  let icon = document.getElementById("icon");
  let temperature = document.getElementById("temp");
  let humidity = document.getElementById("humidity-div");

  searchButton.addEventListener("click", findWeatherDetails);
  searchInput.addEventListener("keyup", enterPressed);

  function enterPressed(event) {
    if (event.key === "Enter") {
      findWeatherDetails();
    }
  }

  function findWeatherDetails() {
    if (searchInput.value === "") {

    }else {
      let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+config.MY_KEY;
      httpRequestAsync(searchLink, theResponse);
    }
  }

  function theResponse(response) {
    let jsonObject = JSON.parse(response);
    cityName.innerHTML = jsonObject.name;
    icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
    humidity.innerHTML = jsonObject.main.humidity + "%";
  }

  function httpRequestAsync(url, callback) {
    console.log("working");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState == 4 && httpRequest.status == 200)
      callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous
    httpRequest.send();
  }

})
