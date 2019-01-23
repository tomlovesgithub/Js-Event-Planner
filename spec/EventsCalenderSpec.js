describe('EventsCalender', () => {
  const evntCal = new EventsCalender()
  it('starts empty', () => {
    expect((evntCal.events).length).toBe(0)
  })
  it('increases by one when event is added', () => {
    evntCal.addEvent(event)
    evntCal.storeEvent(event)
    expect((evntCal.events).length).toBe(1)
  })
});
