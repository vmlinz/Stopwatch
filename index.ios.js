import React, { Component } from 'react';
import {
  Text,
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
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  timer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'green',
  },
  laps: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

class Stopwatch extends Component {
  startStopButton() {
    return (
      <View style={styles.startButton}>
        <Text>
          Start
        </Text>
      </View>
    );
  }
  lapButton() {
    return (
      <View style={styles.stopButton}>
        <Text>
          Lap
        </Text>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.monitor}>
          <View style={styles.timer}>
            <Text>
              00:00.00
            </Text>
          </View>
          <View style={styles.buttons}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>
        <View style={styles.laps}>
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
