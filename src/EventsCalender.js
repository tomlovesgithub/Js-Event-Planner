class EventsCalender {
  constructor() {
    this.events = []
  }

  addEvent(event) {
    this.events.push(event)
  }

  returnFutureEvents(){
    let futureEvents = []

    this.events.forEach(function(event){
      let today = new Date()
      let eventDate = new Date(event.date)
      if(eventDate > today) {
        futureEvents.push(event)
      }
    })
    return futureEvents;
  }

  returnChronologicalEvents() {
    let futureChronologicalEvents = this.returnFutureEvents()
    // console.log(futureChronologicalEvents);
    // console.log(1);
    futureChronologicalEvents.sort((e1, e2) => {
      let date1 = e1.date;
      let date2 = e2.date;
      // console.log(date1);
      // console.log(date2);
      return date1 - date2
    })
    console.log(futureChronologicalEvents);
    // console.log(2);
    return futureChronologicalEvents
  }

  displayEvents(){
    let result = document.createElement('div')
    this.returnChronologicalEvents().forEach(function(event){
      let eventDiv = document.createElement('div')
      eventDiv.className = 'event';
      eventDiv.innerText = `${event.content}: ${event.date}`
      result.appendChild(eventDiv)
    })
    return result
  }

}
