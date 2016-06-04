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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  timer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  laps: {
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
  border(color) {
    return {
      borderColor: color,
      borderWidth: 4,
    };
  }
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.monitor, this.border('yellow')]}>
          <View style={[styles.timer, this.border('red')]}>
            <Text>
              00:00.00
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
