class Event {
  constructor(content, date) {
    this.content = content;
    this.date = new Date(date);
  }

  getContent(){
    return this.contet
  }

  returnDate(){
    return this.date
  }

  dateFormat(){
    return this.date.toLocaleString('en-GB', { timeZone: 'UTC' });
  }

  upcoming(){
    let currentDate = new Date();
    return this.date > currentDate ? true : false
  }

};
