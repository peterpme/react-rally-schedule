'use strict';

var React = require('react-native');
var TitleBar = require('./title-bar');

var {
  StyleSheet,
  Text,
  View,
} = React;

var DetailView = React.createClass({

  render: function() {
    var event = this.props.event
    return (
      <View>
        <Text>{event.time || '12:00'}</Text>
        <Text>{event.speaker || ''}</Text>
        <Text>{event.detail || ''}</Text>
      </View>
    )
  }

})

var styles = StyleSheet.create({
  separator: {
    backgroundColor: '#eee',
    height: .5
  }
})

module.exports = DetailView
