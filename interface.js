window.addEventListener('load', () => {

  let eventsCalender = new EventsCalender();
  window.el = eventsCalender
  window.fe = eventsCalender.futureEvents
  let textbox = document.getElementById('text')
  let date = document.getElementById('date')
  let button = document.getElementById('button')

  button.onclick = function(){
    if (textbox.value == "" || date.value == "") {
      alert("please enter Title and Date")
    } else {
      let event = new Event(textbox.value, date.value);
      eventsCalender.addEvent(event)
      textbox.value = "";
      date.value = "";
      // eventsCalender.sortEvents();
      displayEvents();
    }
  }

  function displayEvents(){

    eventsCalender.eventsToDisplay();

  }

})
