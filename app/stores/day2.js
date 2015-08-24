var day2 = [
  {
    time: '7:00 AM',
    title: 'Registration',
    speaker: null,
    detail: 'Register for React Rally',
    id: 17,
    day: 2
  },
  {
    time: '7:30 AM',
    title: 'Breakfast',
    speaker: null,
    detail: 'Saturday\'s Waffle',
    id: 18,
    day: 2
  },
  {
    time: '9:00 AM',
    title: 'Animated',
    speaker: 'Christopher Chedeau',
    detail: "When talking about animations, most people think about fire and forget animations. But as we transition to mobile, gesture based animations are more prominent than ever. In this talk I'm going to introduce the Animated library that lets you write performant animations in a very React-y way.",
    id: 19,
    day: 2
  },
  {
    time: '9:30 AM',
    title: 'Exponent - a React Native development tool',
    speaker: 'Charlie Cheever',
    detail: "Exponent ( http://exp.host ) is a way create and view rich articles built with React Native. Anyone with an iPhone and the Exponent app can view Exponent articles, and you can develop for it with just a text editor and a web browser -- no need for Xcode or even a simulator.",
    id: 20,
    day: 2
  },
  {
    time: '10:00 AM',
    title: 'Braek',
    speaker: null,
    detail: null,
    id: 21,
    day: 2
  },
  {
    time: '10:30 AM',
    title: 'Falcor: Simplifying Your Data',
    speaker: 'Brian Holt',
    detail: "Many of us have the issue where we have to pass props to children again and again because we have data that a parent has and a deeply nested child needs. It's a difficulty that comes with React and no one has quite solved it yet. At Netflix, we believe we have a good solution for it that is explicit, performant, and terse without sacrificing clarity.\n\nThe name of the soon-to-be open sourced library is Falcor and it takes care not only of your data tunneling issue but also caching, cache invalidation, and even simple AJAX operations. Let's chat about how we can push React data to the next level.",
    id: 22,
    day: 2
  },
  {
    time: '11:00 AM',
    title: 'React & Web Audio Api: Building a MIDI Interace',
    speaker: 'Peter Piekarczyk',
    detail: "The Web Audio API has taken a huge leap forward by introducing MIDI into the equation. That means making music in the browser with all the great instruments you've had at home! Learn what it takes to build your own synths, styles or effects with React!",
    id: 23,
    day: 2
  },
  {
    time: '11:30 AM',
    title: 'React and WebGl',
    speaker: 'Ricky Vetter',
    detail: "Let's explore some of the similarities and differences between these two technologies, as well as how they can be used together in a production application. React is geared toward easy-to-maintain DOM manipulation, while WebGL excels at rendering complex shapes in 3D space. These differences allow us to make interesting tradeoffs, and allow us to do some pretty incredible things.",
    id: 24,
    day: 2
  },
  {
    time: '12:00 PM',
    title: 'Lunch',
    speaker: null,
    detail: null,
    id: 25,
    day: 2
  },
  {
    time: '2:00 PM',
    title: 'Flux for Data Visualization: A Preliminary Manifesto',
    speaker: 'Jana Beck',
    detail: "All you need for a simple bar chart is D3.js, the standard library for interactive data visualization on the web. But for a highly complex visualization - and here \"visualization\" should be interpreted broadly to include all manner of charts, graphs, and dashboards with interactivity provided through scrolling, paging, filtering, focusing, and zooming - managing the state of the visualization becomes a complex task. And the problem multiplies if the data updates in real time.\n\nThis talk introduces a Flux-based strategy to separate the state of the visualization into three stores: one for the configuration of the visualization, one for the data that is the subject of visualization, and a third that bridges - and depends on - the first two and provides methods for accessing exactly the state information needed to render the current configuration of the data visualization using the subset of the current dataset that falls within the domain under inspection.",
    id: 26,
    day: 2
  },
  {
    time: '2:30 PM',
    title: 'Connection Lost...',
    speaker: 'Jakob Dam Jensen',
    detail: "The world is more connected than ever. Many have smartphones connected to the web using cellular-network as well as laptops on WIFI. Inspite of these unreliable data-connections we still design most web-applications with the assumption that the people using them has a solid dependable connection to our services.\n\nThis talk will challenge this approach and discuss how offline-first design can be applied to React apps. How does it fit into Flux architechture and how can it make our apps even faster and more awesome. You'll learn what APIs the browser gives us today and how we can achieve truly offline-capable apps. But we'll also get a sneak peak into the future of what's coming.",
    id: 27,
    day: 2
  },
  {
    time: '3:00 PM',
    title: 'Break',
    speaker: null,
    detail: null,
    id: 28,
    day: 2
  },
  {
    time: '4:00 PM',
    title: 'Flow or: How I learned to stop worrying and typecheck my React code!',
    speaker: 'Jeff Morrison',
    detail: "Flow is a gradual static type system for JavaScript. I'll talk about why we're building it, how it works, where React fits in to it's story, what it is/isn't good for, and why it's probably not like many other type systems you might've used in the past.",
    id: 29,
    day: 2
  },
  {
    time: '4:30 PM',
    title: 'Migrating critical apps to React',
    speaker: 'Jamis Charles',
    detail: "You love React. You want to rewrite your whole app in React right now. But you have millions of paying users, and maintaining a stable app is absolutely critical. How do you migrate now and optimize for future change?\n\nI'll cover the lessons we learned when gradually moving a business critical PayPal Backbone/Node app with millions of users to React.",
    id: 30,
    day: 2
  },
  {
    time: '5:00 PM',
    title: 'How React literally waters my lawn',
    speaker: 'Dave Smith',
    detail: "I hate yard work, but React makes everything better. For this talk, I'll show you how I ported my home-built sprinkler system's old-and-busted iOS app to a hot-and-modern React web app. Including a live demo with a camera feed from my home.",
    id: 31,
    day: 2
  }
];

module.exports = day2;
