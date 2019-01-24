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

  // returnChronologicalEvents() {
  //   let sortedvar = this.sortedEvents()
  //   sortedvar.sort((e1, e2) => {
  //     e1.date - e2.date
  //   })
  //   return sortedvar
  // }

  displayEvents(){
    let result = document.createElement('div')
    this.returnFutureEvents().forEach(function(event){
      let eventDiv = document.createElement('div')
      eventDiv.className = 'event';
      eventDiv.innerText = `${event.content}: ${event.date}`
      result.appendChild(eventDiv)
    })
    return result
  }

}
