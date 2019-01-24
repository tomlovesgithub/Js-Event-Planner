class EventsCalender {
  constructor() {
    this.events = []
  }

  addEvent(event) {
    this.events.push(event)
  }

  sortEvents(){
    let futureEvents= []

    this.events.forEach(function(event){
      let today = new Date()
      let eventDate = new Date(event.date)

      if(eventDate > today) {
        futureEvents.push(event)
      }

    })
    return futureEvents;

  }

  eventsToDisplay(){
    let eventDiv;
    eventDiv = document.createElement('div')
    eventDiv.className = 'event';

    this.sortEvents().forEach(function(event){
      var eventsList = document.getElementById('eventsList')
      eventDiv.innerText = `${event.content}: ${event.date}`
      eventsList.appendChild(eventDiv);

    })
    return eventDiv;
    return eventsList;
    eventDiv.innerText = ''
  }

}
