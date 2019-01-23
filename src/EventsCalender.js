class EventsCalender {
  constructor() {
    this.events = []
  }

  addEvent(event) {
    this.events.push(event)
  }

  eventsToDisplay(){
    var eventsArr = this.events;
    var eventDiv = document.createElement('div')
    eventDiv.innerText = ''

    eventsArr.forEach(function(event){
      var eventsList = document.getElementById('eventsList')
      eventDiv.innerText = `${event.content}:${event.date}`
      eventsList.appendChild(eventDiv);
      return eventDiv;
    })
  }
}
