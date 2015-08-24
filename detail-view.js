'use strict';

var React = require('react-native');
var TitleBar = require('./title-bar');

var {
  StyleSheet,
  ListView,
  Image,
  Text,
  View,
} = React;

var DetailView = React.createClass({

  getTwitterPic: function(username) {
    return 'https://twitter.com/' + this.props.event.twitter + '/profile_image?size=original';
  },

  renderTwitter: function() {
    if(this.props.event.twitter) {
      return (
        <Image
          style={styles.picture}
          source={{uri: this.getTwitterPic()}} />
      );
    }
  },

  renderTwitterLink: function() {
    if(this.props.event.twitter) {
      return (
        <Text style={styles.twitter}>@{this.props.event.twitter}</Text>
      );
    }
  },

  render: function() {
    var event = this.props.event
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{event.title || ''}</Text>
        <View style={styles.infoRow}>
          {this.renderTwitter()}
          <View>
            <Text style={styles.time}>{event.time || ''}</Text>
            <Text style={styles.speaker}>{event.speaker || ''}</Text>
            {this.renderTwitterLink()}
          </View>
        </View>
        <Text style={styles.detail}>{event.detail || ''}</Text>
      </View>
    )
  }

})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#1B3646',
    paddingLeft: 30,
    paddingRight: 30
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingBottom: 20
  },
  separator: {
    backgroundColor: '#eee',
    height: .5
  },
  title: {
    fontSize: 24,
    color: '#46D3BC',
    fontWeight: 'bold'
  },
  speaker: {
    fontSize: 18,
    marginTop: 3,
    color: '#FFF',
    fontWeight: 'bold',
  },
  twitter: {
    fontSize: 16,
    color: '#FFF'
  },
  time: {
    fontSize: 10,
    color: '#FFF',
    paddingRight: 20
  },
  detail: {
    fontSize: 14,
    color: '#FFF',
    lineHeight: 20
  }
})

module.exports = DetailView
