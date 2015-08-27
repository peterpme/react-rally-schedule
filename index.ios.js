'use strict';

var React = require('react-native');

var Main = require('./app/components/Main');
var Schedule = require('./app/components/Schedule');

var DAY_1 = require('./app/stores/day1');
var DAY_2 = require('./app/stores/day2');

var {
  AppRegistry,
  TabBarIOS,
} = React;

var ReactRally = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'day1'
    }
  },

  changeTab(tabName) {
    this.setState({
      selectedTab: tabName
    });
  },

  render: function() {
    return (
      <TabBarIOS
        barTintColor="#323232"
        tintColor="#377C9B">
        <TabBarIOS.Item
          title="Day 1"
          icon={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAfiAAAH4gEdSRVIAAAC3klEQVRIx73WTYhWZRQH8N84zTh+5KA5JhEuKlAYxY0obtTAhRBKRCTaF2SKKLgRSlRcCiWCiLYKAl24G7CNMiJiU+BCRVAiQiqnRKMZR/yakel1XJwz+Po678y9g3rg4Xnuc+85/3u+T6NytBjdmITTJXnHTYswhJMJ/NLoQAKveZmghJlvJPihqvsVeOtFAL6Gljw34HiCz0ITLmP58wb9DGcxOZ/fwX3h52E6iKNlBU8Y4/0cLMO8fF6TPFtrZLQ9b43hPHbkeQpm17x/GzPLCn2lwDddeJjavovpqeFD4fNzIqcf4VZR4IZR3k3DZnyKGbiNv0Vk/4mruIc3sRoL8K3w+biBv8ZXqU13avSriO6JItj+xwD60Ye56BSptq2s6WGlSJf1WIpTuIj/8n4oAStVz//iffyOn8cD2oJdKewceqqEV69e/JQmH77rz/27IkC16VQRefoozVePZmChiPIfsUFEd6cIwGF3tNQTUBvVg3k3gA/RnOZuy/OAKJ3NnhSSzir+U9iHDrwqAm4LjhWxwtY02aJxuGot7uIavscP+CN/YlRTEykizVeW7mCqqO/zhL9b0kpjAvfn3pt7YwngVjzAx8k3GxdEE3kqdUcCvpN7B77AJyWAm4Sb+lL2FFHNJqkZHkYqmd3JeEL4a1UJ4MYEqAiXtaWmt9MSowL3iuieJfx8NZmHCgAPW/BuatqasgbrfVhND0QO/iICY11BUCLdGnBYTCZdIqefUXAk4EFcxxLsxm8lTF1J4FZsFEPE67nGHBAbcSW1fC/vmgsCf5ng7aK77U05nxdhbsA/uTZhewmNP0ige6KOX8f+Evy6PGkUa0VBKELtybdHxEndfl9v5rqU+zXR7t4oCLxU9OkOEaR1g7Le6HMz949EWvSImtsjfFipEdononin8OuVMuatpvli4hgqub4pCjDazDVZBMv8NHWb6MNNIjcniq7zF87gSP5sIXoMkiu6oNY6nogAAAAASUVORK5CYII=" }}
          onPress={ () => this.changeTab('day1') }
          selected={ this.state.selectedTab === 'day1' }>
          <Main data={DAY_1} day="1" />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Day 2"
          icon={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAjcAAAI3AGf6F88AAADBElEQVRIx63WW4xdYxQH8F9PRkVMXRMlVRWixAuR6NQ1CE0qCCKqTV/6IDx0goREQkLSROcB8eClhHgRjRemccsIBhWXJtKkDxKkEkoQTKuomU4dD2udnK979plzTnv+yc4+Z33f/v/3unxrL/rDaZX/D2IfmvgPP+NtXNkn77x4DHuwOv9vSsG38CK24NO03TtI4SeT9Cdszt8PV/a8lPZlgxQ+BpNJ3EwPS4yk/d1eyBb0KX483scKEeKPsRcnYkzk+1J8MwhPF2ToWoV1ish1E5/jSxH+F3Bsr6RDXby7A3enh/vTo+1o5J5xvInrcIIoqmWYxdeYwPf9ePlAetHK5y95/Y4DOFSs/YUf8Qa+wnf4s1ifwNndBM8XOWw99AQuxqlYjIXFvqmMwF24GreIXDcwnLbnk+cP3NBJ9FztZvAazqnZczvuxOUZkSk8mmFt4sKaZ87Ct53WF+LDwtPxDi/3crGnvH7I9HSqmeWZnsnqwm0Vop04qQPJZaJVPpRi13bLX2IyuVe2DMeJo9ASPZj5GTTGtetGA6O4sbJpRLuQBoX9eV+F64kWV83ZLlGZ/eJW9UUJjyf3tIjwYUU1m/cNRyB6RT67qbCN4vUiiq3zv30IM7nQepsGPjoC4d+wA18U0ZoWLZboYLMihdNECyzD/EFu7Lnv1uBVbKvwrCw03muIplFiRnz0lxyF8FW4ufAazizWh4ewVRTEBWlcJXrt7qMQfgdLK7YVeZ+SjWQRXnF4uHeYe8T6wbD4WpWY0G7Hi1vGUXOP1JbeNHrCcvyTvBvLhSXiC1IK3zNA4WeTc6+a2nm6EJ3JKCztg7wTVhe8Y3UbTs83auJXMaruMc93tEd8kpz7FLmtYo25uf5XHK9+0cBzBc+6bg88UiO+UwwKrUq9RKThPDGNXIObcJE4DZsLT5uiT/eEsYrwbtESn8F60XMP1LzgIXOjdX+/oVorBrfmPNdW7fNZvSbEjF2LbgP9ybhPDAaLcEbmbhue0h7cR8QUcxB/4zM1Y06J/wF+sAD9xUc0hAAAAABJRU5ErkJggg==" }}
          onPress={ () => this.changeTab('day2') }
          selected={ this.state.selectedTab === 'day2' }>
          <Main data={DAY_2} day="2" />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

AppRegistry.registerComponent('ReactRally', () => ReactRally);
// For Exponent JS. Other apps ignore this.
AppRegistry.registerComponent('main', () => ReactRally);
