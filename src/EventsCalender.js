class EventsCalender {
  constructor() {
    this.events = []
  }

  addEvent(content, date, time) {
    newEvent = new Event(content, date, time)
  }
  
  storeEvent() {
    this.events.push(newEvent)
  }
}
