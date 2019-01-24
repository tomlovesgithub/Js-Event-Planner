describe('EventsCalender', () => {

  it('starts empty', () => {
    let evntCal = new EventsCalender()
    expect(evntCal.events.length).toBe(0)
  })

  it('increases by one when event is added', () => {
    let evntCal = new EventsCalender()
    let event = new Event('BBQ', '2019-01-09T12:02')
    evntCal.addEvent(event)
    expect(evntCal.events.length).toBe(1)
  });

  it('saves an event', () => {
    let evntCal = new EventsCalender()
    let event = new Event('BBQ', '2019-01-09T12:02')
    evntCal.addEvent(event)
    expect(evntCal.events[0]).toBe(event)
  })

  it('returns only future events', ()=> {
    let evntCal = new EventsCalender()
    let eventFuture = new Event('BBQ', '5000-01-09T12:02')
    let eventPast = new Event('Birth', '1995-01-20T09:00')
    evntCal.addEvent(eventFuture)
    evntCal.addEvent(eventPast)
    expect(evntCal.sortEvents() instanceof Array).toBe(true)
    expect(evntCal.sortEvents().length).toBe(1)
    expect(evntCal.sortEvents().find((e) => e === eventFuture)).toBe(eventFuture);
  })


  it('eventCalendar holds a list of the events', () => {
    let evntCal = new EventsCalender()
    evntCal.addEvent(3)
    expect(evntCal.events[0]).toBe(1);
    expect(evntCal.events[1]).toBe(3);
  })

  it('displays events in a div', () => {
    let evntCal = new EventsCalender()
    let eventFuture = new Event('BBQ', '5000-01-09T12:02')
    let eventFuture2 = new Event('BBQ2', '5001-01-09T12:02')
    let eventFuture3 = new Event('BBQ3', '5002-01-09T12:02')
    evntCal.addEvent(eventFuture)
    evntCal.addEvent(eventFuture2)
    evntCal.addEvent(eventFuture3)

  })

  it('sorts events chronologically', () => {
    let evntCal = new EventsCalender()

  })

});
