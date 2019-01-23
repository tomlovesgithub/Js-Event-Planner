describe('Events', () => {
  const evnt = new Event("content","date")
  it('stores content', () => {
    expect(evnt.content).toBe("content")
  })
  it('stores date and time', () => {
    expect(evnt.date).toBe("date")
  })
});
