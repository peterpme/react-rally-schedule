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
      <TouchableHighlight style={styles.toolbarHighlight} onPress={this.props.handleBackButton}>
        <Text style={styles.backBtn}>&lt; Back</Text>
      </TouchableHighlight>
    )
  },

  renderSpacer: function() {
    return (
      <Text style={styles.toolbarButton}>{' '}</Text>
    );
  },

  render: function() {
    return (
      <View>
        <View style={styles.toolbar}>
          {this.props.backBtn && this.renderBackButton()}
          <Text style={styles.toolbarTitle}>{this.props.title || 'React Rally'}</Text>
          {this.props.backBtn && this.renderSpacer()}
        </View>
      </View>
    )
  }

});

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#825D92',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection:'row'
  },
  toolbarHighlight: {
    width: 100,
    paddingLeft: 10
  },
  toolbarButton: {
    width: 100,
    paddingLeft: 10,
    color:'#fff',
    textAlign:'center',
    fontFamily: 'Helvetica',
    fontWeight: '500'
  },
  toolbarTitle:{
    textAlign:'center',
    fontWeight:'bold',
    flex:1,
    color: '#FFF102',
    fontSize: 24,
    lineHeight: 30,
    fontFamily: 'Courier-Bold'
  },
  backBtn: {
    color: '#FFF',
    fontFamily: 'Helvetica',
    fontWeight: '500',
    lineHeight: 26
  },
})

module.exports = TitleBar
