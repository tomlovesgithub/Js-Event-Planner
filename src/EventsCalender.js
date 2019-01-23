class EventsCalender {
  constructor() {
    this.events = []
    this.pastEvents = []
    this.futureEvents = []
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
      eventDiv.innerText = `${event.content}: ${event.date}`
      eventsList.appendChild(eventDiv);
      return eventDiv;
    })
  }
  sortEvents(){
    var eventsArr = this.events
    let today = new Date()
    // let futureEvents = []
    // pastEvents = []
    eventsArr.forEach(function(event){
      let eventDate = new Date(event.date)
      console.log(event.date)
      if(eventDate < today) {
        // in the Papast
        this.pastEvents.push(event)
      } else {
        eventDate > today // in the future
        this.futureEvents.push(event)
      }
    })
  }
}
