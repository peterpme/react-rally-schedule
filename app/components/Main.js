var React = require('react-native');
var Schedule = require('./Schedule');

var {
  View,
  TabBarIOS,
  NavigatorIOS,
  Navigator,
  StyleSheet
} = React;

var Main = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Schedule,
          title: 'React Rally 2015',
          passProps: { data: this.props.data },
          translucent: true
        }}
        style={styles.navContainer}
      />
    );
  }
});

var styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    backgroundColor: '#1B3646'
  }
});

module.exports = Main;
