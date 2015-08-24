'use strict';

var React = require('react-native');

var ScheduleView = require('./schedule-view');
var DetailView = require('./detail-view');
var TitleBar = require('./title-bar');

var DAY_1 = require('./app/stores/day1');
var DAY_2 = require('./app/stores/day2');

var {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  TabBarIOS,
  View,
} = React;

var INITIAL_ROUTE = 0
var ROUTE_STACK = [
  { id: 'day1'},
  { id: 'day2'},
  { id: 'ScheduleView'}
]

var Navbar = React.createClass({
  getInitialState: function() {
    return {
      tabIndex: this.props.initTabIndex
    }
  },

  render: function() {
    return (
      <View style={styles.navbar}>
        <TabBarIOS>
          <TabBarIOS.Item
            title="Day 1"
            selected={this.state.tabIndex === 0}
            onPress={() => {
              this.setState({tabIndex: 0})
              this.props.onTabIndex(0)
            }}>
            <View />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Day 2"
            selected={this.state.tabIndex === 1}
            onPress={() => {
              this.setState({tabIndex: 1})
              this.props.onTabIndex(1)
            }}>
            <View />
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    )
  }
})

var ReactRally = React.createClass({

  renderScene(route, nav) {
    switch(route.id) {
      case 'day2':
        return <ScheduleView day={DAY_1} navigator={nav} />
      case 'DetailView':
        return <DetailView event={route.event} navigator={nav} />
      default:
        return <ScheduleView day={DAY_2} navigator={nav} />
    }
  },

  render: function() {
    return (
      <View style={styles.container}>
        <TitleBar title="React Rally 2015" />
        <Navigator
          debugOverlay={false}
          style={styles.container}
          ref={(navigator) => {
            this._navigator = navigator;
          }}
          renderScene={this.renderScene}
          initialRoute={ROUTE_STACK[INITIAL_ROUTE]}
          initialRouteStack={ROUTE_STACK}
          configureScene={() => ({
            ...Navigator.SceneConfigs.HorizontalSwipeJump,
          })}
          navigationBar={
            <Navbar
              ref={(navBar) => {
                this.navBar = navBar;
              }}
              initTabIndex={INITIAL_ROUTE}
              onTabIndex={(index) => {
                this._navigator.jumpTo(ROUTE_STACK[index]);
              }}
            />
          }
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  navbar: {
    height: 50
  }
});

AppRegistry.registerComponent('ReactRally', () => ReactRally);
