describe('Events', () => {
  let time = new Date().toLocaleString
  console.log(time.now);
  const evnt = new Event("content", time)

  it('is an instance of event', () => {
    expect(evnt instanceof Event).toBe(true)
  });

  it('stores content', () => {
    expect(evnt.content).toBe("content")
  })

});
