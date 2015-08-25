var React = require('react-native');
var Schedule = require('./Schedule');
var Detail = require('./Detail');
var TitleBar = require('./TitleBar');

var {
  View,
  TabBarIOS,
  NavigatorIOS,
  Navigator,
  StyleSheet
} = React;

var Main = React.createClass({
  getInitialState: function() {
    return {
      isDetailView: false
    }
  },

  setDetailView: function(nav) {
    this.setState({
      isDetailView: true
    });
  },

  clearDetailView: function(nav) {
    this.setState({
      isDetailView: false
    });
  },

  handleBackButton: function() {
    this._navigator.pop();
  },

  componentDidMount: function() {
    this._navigator.navigationContext.addListener('willfocus', function(event) {
      // this.currentRoute will go away
      // event.data.route will be focused
      if(event.data.route.id == 'detail') {
        this.setDetailView();
      } else {
        this.clearDetailView();
      }
    }.bind(this));
  },

  renderScene: function(route, nav) {
    switch (route.id) {
      case 'detail':
        //this.setDetailView();
        return (
            <Detail
              navigator={nav}
              event={route.data}
            />
        );
      default:
        return (
            <Schedule
              data={this.props.data}
              navigator={nav}
              setDetail={this.setDetailView}
              clearDetail={this.clearDetailView}
            />
        );
    }
  },

  render: function() {
    return (
      <View style={styles.navContainer}>
        <TitleBar backBtn={this.state.isDetailView} handleBackButton={this.handleBackButton} />
        <Navigator
          ref={(navigator) => {
            this._navigator = navigator;
          }}
          renderScene={this.renderScene}
          initialRoute={{name: 'React Rally 2015', index: 0}}
          style={styles.navContainer}
          configureScene={() => ({
            ...Navigator.SceneConfigs.HorizontalSwipeJump,
          })}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    backgroundColor: '#1B3646',
  }
});

module.exports = Main;
