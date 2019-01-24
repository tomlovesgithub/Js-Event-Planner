class EventsCalender {
  constructor() {
    this.events = []


  }

  addEvent(event) {
    this.events.push(event)
  }

  sortEvents(){
    let futureEvents;
    futureEvents = []

    this.events.forEach(function(event){
      let today = new Date()
      let eventDate = new Date(event.date)
      console.log(today)
      console.log(event.date)
      if(eventDate > today) {
        futureEvents.push(event)
      }
    })
    return futureEvents


  }

  eventsToDisplay(){
    // var eventsArr = this.futureEvents;
    var eventDiv = document.createElement('div')
    eventDiv.innerText = ''

    this.sortEvents().forEach(function(event){
      var eventsList = document.getElementById('eventsList')
      eventDiv.innerText = `${event.content}: ${event.date}`
      eventsList.appendChild(eventDiv);

    })
    return eventDiv;
  }

}
