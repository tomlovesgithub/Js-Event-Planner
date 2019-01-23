window.addEventListener('load', () => {

  let eventsCalender = new EventsCalender();

  let textbox = document.getElementById('text')
  let date = document.getElementById('date')
  let button = document.getElementById('button')

  console.log(textbox.value)
  console.log(date.value)
  console.log(button)

  button.onclick = function(){
    let event = new Event(textbox.value, date.value);
    eventsCalender.addEvent(event)
    textbox.value = "";
    date.value = "";
    displayEvents()
  }

  function displayEvents(){
    eventsCalender.eventsToDisplay();
  }

})
