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


    padNum(num) {
      if (num < 10) {
        return "0" + `${num}`;
      }
      return `${num}`;
    }

    incrementSeconds() {
      let sec = this.state.seconds;

      if (sec < 59) {
        this.setState({seconds: sec += 1});
      } else {
        this.setState({seconds: sec = 0 });
        this.incrementMinute();
      }
    }

    incrementMinute() {
      let mins = this.state.mins;

      if (mins < 59) {
        this.setState({mins: mins += 1});
      } else {
        this.setState({mins: mins = 0});
        this.incrementHour();
      }
    }

    incrementHour() {
      let hours = this.state.hours;

      if (hours < 12) {
        this.setState({hours: hours += 1});
      } else {
        this.setState({hours : hours = 1});
      }
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
