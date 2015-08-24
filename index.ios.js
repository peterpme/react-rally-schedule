'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  TabBarIOS,
  View,
} = React;

var ScheduleView = require('./schedule-view')

var day2 = [
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

var INITIAL_ROUTE = 0
var ROUTE_STACK = [
  { id: 'day1', component: 'ScheduleView'},
  { id: 'day2', component: 'ScheduleView'}
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
            systemIcon="bookmarks"
            selected={this.state.tabIndex === 0}
            onPress={() => {
              this.setState({tabIndex: 0})
              this.props.onTabIndex(0)
            }}>
            <View />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            systemIcon="contacts"
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

  handleDetailView: function() {
  },

  renderEvent: function(event, index) {
    return (
      <TouchableHighlight key={index} onPress={() => this.handleDetailView(event)}>
        <View>
          <View>{event.time}</View>
          <View>{event.name}</View>
          <View>{event.speaker}></View>
        </View>
      </TouchableHighlight>
    )
  },

  renderScene(route, nav) {
    switch(route.id) {
      case 'day2':
        return <ScheduleView day={day2} navigator={nav} />
      default:
        return <ScheduleView day={day1} navigator={nav} />
    }
  },

  render: function() {
    return (
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
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#F5FCFF',
  },
  navbar: {
    height: 50
  }
});

AppRegistry.registerComponent('ReactRally', () => ReactRally);
