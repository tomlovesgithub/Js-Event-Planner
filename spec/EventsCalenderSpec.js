describe('EventsCalender', () => {
  const evntCal = new EventsCalender()

  it('starts empty', () => {
    expect((evntCal.events).length).toBe(0)
  })

  it('increases by one when event is added', () => {
    evntCal.addEvent(1,2,3)
    expect((evntCal.events).length).toBe(1)
  });

  it('saves an event', () => {
    expect(evntCal.events[0]).toBe(1,2,3)
  })

  it('is an instance of Event Calendar class', () => {
    expect(evntCal instanceof EventsCalender).toBe(true);
  })


  it('eventCalendar holds a list of the events', () => {
    evntCal.addEvent(3,2,1)
    expect(evntCal.events[0]).toBe(1,2,3);
    expect(evntCal.events[1]).toBe(3,2,1);
  })

});
