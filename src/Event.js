class Event {
  constructor(content, date) {
    this.content = content;
    this.date = new Date(date);
  }

  returnFormatedDate(){
    return this.date.toLocaleString('en-GB', { timeZone: 'UTC' });
  }

};
