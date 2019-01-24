window.addEventListener('load', () => {

  let eventsCalender = new EventsCalender();

  let textbox = document.getElementById('text')
  let date = document.getElementById('date')
  let button = document.getElementById('button')

  button.onclick = function(){
    let event = new Event(textbox.value, date.value);
    eventsCalender.addEvent(event)
    textbox.value = "";
    date.value = "";
    eventsCalender.sortEvents();
    displayEvents();
  }

  function displayEvents(){

    eventsCalender.eventsToDisplay();

  }

})
