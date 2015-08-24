/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
} = React;

var day1 = [
  {
    time: '7:00',
    title: 'Registration',
    speaker: null,
    detail: 'Register for React Rally'
  },
  {
    time: '7:30',
    title: 'Breakfast',
    speaker: null,
    detail: 'Food Trucks'
  },
  {
    time: '9:00',
    title: 'Principals of Functional Programming in React',
    speaker: 'Jessica Kerr',
    detail: 'As software grows, we look for new ways to break it into parts and then hook the parts together. Functional programming is about new ways to isolate and then integrate code. Learn principles behind the trappings of functional programming. React embodies some of these principles — and can embody all of them, if we use it carefully. See how we are untangling the spaghetti of MVC, first with React, then Flux, then Elm. Find out how you’re already following functional principles, and how you can choose to benefit even more.'
  },
  {
    time: '9:30',
    title: 'Elegant React with ES6 (and a bit of ES7)',
    speaker: 'Jem Young',
    detail: 'As software grows, we look for new ways to break it into parts and then hook the parts together. Functional programming is about new ways to isolate and then integrate code. Learn principles behind the trappings of functional programming. React embodies some of these principles — and can embody all of them, if we use it carefully. See how we are untangling the spaghetti of MVC, first with React, then Flux, then Elm. Find out how you’re already following functional principles, and how you can choose to benefit even more.'
  },
  {
    time: '10:00',
    title: 'Break',
    speaker: null,
    detail: null
  }
]

var ReactRally = React.createClass({

  handlePress: function() {
  },
  renderEvent: function(event, index) {
    return (
      <TouchableHighlight key={index} onPress={() => this.handlePress(event)}>
        <View>
          <View>{event.time}</View>
          <View>{event.name}</View>
          <View>{event.speaker}></View>
        </View>
      </TouchableHighlight>
    )
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactRally', () => ReactRally);
