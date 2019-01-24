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

})
