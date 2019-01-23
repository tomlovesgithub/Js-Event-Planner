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
    eventDiv = ""
    var eventsList = document.getElementById('eventsList')
    var eventDiv = document.createElement('div')

    let eventsArr = eventsCalender.events;
    eventsArr.forEach(function(event){
      eventDiv.innerText = `${event.content}:${event.date} -:- `
      eventsList.appendChild(eventDiv);
    })
  }



})
