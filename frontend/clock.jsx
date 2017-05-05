import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    let date = new Date();
    let hours = date.getHours();

    let ampm = "";
    if (hours < 13) {
      ampm = "AM";
    } else {
      ampm = "PM";
    }

    this.state = {hours: date.getHours() % 12, mins: date.getMinutes(), seconds: date.getSeconds(), ampm };
    this.incrementTime();
  }



  incrementTime() {
    setInterval(this.incrementSeconds.bind(this), 1000);
  }

  render() {
    return (
      <div className="main">
        <div className="hours">{ this.padNum(this.state.hours) }:</div >
        <div className="mins"> { this.padNum(this.state.mins) }:</div >
        <div className="secs"> { this.padNum(this.state.seconds) }</div >
        <div className="ampm">{ this.state.ampm }</div >
      </div>
    );
  }
}

export default Clock;
