import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Текущее время:</h1>
        <h2>{this.state.time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

class UrlWatcher extends React.Component {
  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      console.log(`URL изменился на ${location.pathname}${location.search}`);
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    return null;
  }
}


export default Timer

