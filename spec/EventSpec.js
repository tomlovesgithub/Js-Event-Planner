describe('Events', () => {
  const evnt = new Event("content","date","time")
  it('stores content', () => {
    expect(evnt.content).toBe("content")
  })
  it('stores date', () => {
    expect(evnt.date).toBe("date")
  })
  it('stores content', () => {
    expect(evnt.time).toBe("time")
  })
});
