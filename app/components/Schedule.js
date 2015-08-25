var React = require('react-native');

var Detail = require('./Detail');

var {
  StyleSheet,
  Text,
  ListView,
  TouchableHighlight,
  NavigatorIOS,
  View,
} = React;

var Schedule = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return {
        dataSource: ds.cloneWithRows(this.props.data),
      };
  },

  handleDetailView(event) {
    console.log('row clicked');
    this.props.navigator.push({
      title: event.title,
      component: Detail,
      passProps: {event: event}
    });
  },

  renderRow: function(event, index) {
    return (
      <TouchableHighlight key={index} onPress={() => this.handleDetailView(event)}>
        <View style={styles.row}>
          <Text style={styles.time}>{event.time || ''}</Text>
          <Text style={styles.title}>{event.title || ''}</Text>
          <Text style={styles.speaker}>{event.speaker || ''}</Text>
        </View>
      </TouchableHighlight>
    )
  },
  
  render: function() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderSeparator={() => { return <View style={styles.separator} /> }}
          contentInset={{bottom:49}}
          automaticallyAdjustContentInsets={false}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    paddingTop: 65
  },
  listView: {
    flex: 1
  },
  row: {
    backgroundColor: '#1B3646',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  time: {
    color: '#fff',
  },
  title: {
    color: '#46D3BC',
    fontSize: 16,
    fontWeight: 'bold'
  },
  speaker: {
    color: '#fff',
    fontSize: 16
  },
  separator: {
    backgroundColor: '#eee',
    height: .5
  }
});

module.exports = Schedule;
