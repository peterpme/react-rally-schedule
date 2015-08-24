'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  ListView,
  TouchableHighlight,
  Text,
  View,
} = React;

var ScheduleView = React.createClass({

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return {
        dataSource: ds.cloneWithRows(this.props.day),
      };
  },

  handleDetailView(event) {
    console.log('event', event)
  },

  renderRow: function(event, index) {
    return (
      <TouchableHighlight key={index} onPress={() => this.handleDetailView(event)}>
        <View>
          <Text>{event.time || '7:00 AM'}</Text>
          <Text>{event.name || 'Johny Football'}</Text>
          <Text>{event.speaker || 'Test'}</Text>
        </View>
      </TouchableHighlight>
    )
  },

  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderSeparator={() => { return <View style={styles.separator} /> }}
        automaticallyAdjustContentInsets={false}
      />
    )
  }

})

var styles = StyleSheet.create({
  separator: {
    backgroundColor: '#eee',
    height: .5
  }
})

module.exports = ScheduleView
