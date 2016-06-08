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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = { timeElapsed: 0 };
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    const start = new Date();
    setInterval(() => {
      this.setState({
        timeElapsed: new Date() - start,
      });
    }, 30);
  }
  startStopButton() {
    return (
      <TouchableHighlight
        underlayColor={'grey'}
        onPress={this.onPress}
        style={[styles.button, styles.startButton]}
      >
        <Text>
          Start
        </Text>
      </TouchableHighlight>
    );
  }
  lapButton() {
    return (
      <View style={[styles.button, styles.stopButton]}>
        <Text>
          Lap
        </Text>
      </View>
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
          <View style={styles.lap}>
            <Text>
              Lap 1
            </Text>
          </View>
          <View style={styles.lap}>
            <Text>
              Lap 1
            </Text>
          </View>
          <View style={styles.lap}>
            <Text>
              Lap 1
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('Stopwatch', () => Stopwatch);
