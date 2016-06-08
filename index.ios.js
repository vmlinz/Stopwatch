import React, { Component } from 'react';
import Moment from 'moment';
import padStart from 'lodash-es/padStart';
import {
  Text,
  TouchableHighlight,
  View,
  AppRegistry,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  monitor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 60,
  },
  buttons: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  startButton: {
    borderColor: 'green',
  },
  stopButton: {
    borderColor: 'red',
  },
  lapButton: {

  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  laps: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  lapText: {
    fontSize: 24,
  },
});

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeElapsed: 0,
      timerRunning: false,
      startTime: null,
      laps: [],
    };
    this.onPressStartStopButton = this.onPressStartStopButton.bind(this);
    this.onPressLapButton = this.onPressLapButton.bind(this);
  }
  onPressStartStopButton() {
    // stop timer if running
    if (this.state.timerRunning) {
      clearInterval(this.state.timerInterval);
      this.setState({
        timerInterval: null,
        timerRunning: false,
      });
      return;
    }

    // set current start time
    this.setState({ startTime: new Date() });

    // start timer
    const interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
      });
    }, 30);

    this.setState({
      timerInterval: interval,
      timerRunning: true,
    });
  }
  onPressLapButton() {
    const lap = this.state.timeElapsed;

    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap]),
    });
  }
  startStopButton() {
    const style = this.state.timerRunning ? styles.stopButton : styles.startButton;

    return (
      <TouchableHighlight
        underlayColor={'grey'}
        onPress={this.onPressStartStopButton}
        style={[styles.button, style]}
      >
        <Text>
          {this.state.timerRunning ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight>
    );
  }
  lapButton() {
    return (
      <TouchableHighlight
        underlayColor={'grey'}
        style={[styles.button, styles.lapButton]}
        onPress={this.onPressLapButton}
      >
        <Text>
          Lap
        </Text>
      </TouchableHighlight>
    );
  }
  formatTime(time) {
    return this.formatDuration(time);
  }
  laps() {
    return this.state.laps.map((time, index) => (
      <View key={index} style={styles.lap}>
        <Text style={styles.lapText}>
          Lap #{index + 1}
        </Text>
        <Text style={styles.lapText}>
          {this.formatTime(time)}
        </Text>
      </View>)
    );
  }
  border() {
    return {
    };
  }
  formatDuration(time) {
    const duration = Moment.duration(time);
    const minutes = padStart(duration.minutes().toString(), 2, '0');
    const seconds = padStart(duration.seconds().toString(), 2, '0');
    const milliseconds = padStart((duration.milliseconds() % 100).toString(), 2, '0');
    return `${minutes}:${seconds}.${milliseconds}`;
  }
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.monitor, this.border('yellow')]}>
          <View style={[styles.timerWrapper, this.border('red')]}>
            <Text style={styles.timer}>
              {this.formatDuration(this.state.timeElapsed)}
            </Text>
          </View>
          <View style={[styles.buttons, this.border('green')]}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>
        <View style={[styles.laps, this.border('blue')]}>
          {this.laps()}
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('Stopwatch', () => Stopwatch);
