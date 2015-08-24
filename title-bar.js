'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  TabBarIOS,
  TouchableHighlight,
  View,
} = React;

var TitleBar = React.createClass({
  renderBackButton: function() {
    return (
      <TouchableHighlight onPress={() => this.props.navigator.pop() }>
        <Text>Back</Text>
      </TouchableHighlight>
    )
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          {this.props.backBtn && this.renderBackButton()}
          <Text style={styles.title}>{this.props.title || 'React Rally'}</Text>
        </View>
      </View>
    )
  }

});

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#825D92',
    height: 64,
    paddingBottom: 12
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  title: {
    color: '#FFF102',
    fontSize: 24,
    fontFamily: 'Courier-Bold'
  }
})

module.exports = TitleBar
