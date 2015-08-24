var day1 = [
  {
    time: '7:00 AM',
    title: 'Registration',
    speaker: null,
    detail: 'Register for React Rally',
    id: 1,
    day: 1
  },
  {
    time: '7:30 AM',
    title: 'Breakfast',
    speaker: null,
    detail: 'Food Trucks',
    id: 2,
    day: 1
  },
  {
    time: '9:00 AM',
    title: 'Principals of Functional Programming in React',
    speaker: 'Jessica Kerr',
    detail: 'As software grows, we look for new ways to break it into parts and then hook the parts together. Functional programming is about new ways to isolate and then integrate code. Learn principles behind the trappings of functional programming. React embodies some of these principles — and can embody all of them, if we use it carefully. See how we are untangling the spaghetti of MVC, first with React, then Flux, then Elm. Find out how you’re already following functional principles, and how you can choose to benefit even more.',
    id: 3,
    day: 1
  },
  {
    tile: '9:30 AM',
    title: 'Elegant React with ES6 (and a bit of ES7)',
    speaker: 'Jem Young',
    detail: 'This talk is about how to write cleaner, more efficient React code using ES6 and ES7. It will cover various topics from how to write components that work as both higher-order components and as decorators to using Symbols to quickly iterate over stored objects.',
    id: 4,
    day: 1
  },
  {
    time: '10:00 AM',
    title: 'Break',
    speaker: null,
    detail: null,
    id: 5,
    day: 1
  },
  {
    time: '10:30 AM',
    title: 'Bringing Observable Data to React',
    speaker: 'Andrew Imm',
    detail: 'With the addition of the new Observe API, React becomes truly reactive! This fresh feature allows components to subscribe to observable data sources, and respond automatically as data is fetched or updated. The talk will cover when and how to use the new API in your own applications, and discuss how it stands to change the way we build and organize React components. We\'ll also detail how Parse implemented the first data source designed to interact with this API, and the lessons we learned along the way. Finally, we\'ll explore some unique use cases for observable data to inspire your own projects.',
    id: 6,
    day: 1
  },
  {
    time: '11:00 AM',
    title: 'Testable React Components',
    speaker: 'Julia Gao',
    detail: 'Testing is a good way to see whether the program actually runs as you intended, and I\'d like to show you some of the gotchas when testing react components, and how some components are easier to test than others.',
    id: 7,
    day: 1
  },
  {
    time: '11:30 AM',
    title: 'Why is React "functional"?',
    speaker: 'John K. Paul',
    detail: 'We all know that React works, but being functional implies so much more than the typical dictionary definition would imply. Using React and Om as an example, I’d like to walk you through some tenets of functional programming. A win much bigger than the words ‘virtual dom’ exists in React, and through my examples, you’ll see what makes reasoning about functional systems such a treat.',
    id: 8,
    day: 1
  },
  {
    time: '12:00 PM',
    title: 'Lunch',
    speaker: null,
    detail: null,
    id: 9,
    day: 1
  },
  {
    time: '2:00 PM',
    title: 'Exploring GraphQL',
    speaker: 'Lee Byron',
    detail: 'GraphQL is a query language that lets client applications concisely describe the data they require, and a server-side library that binds to your existing application code. GraphQL powers Facebook\'s mobile applications and is the data language of Relay. Learn more about GraphQL and how it might simplify your data driven applications.',
    id: 10,
    day: 1
  },
  {
    time: '2:30 PM',
    title: 'GraphQL Servers',
    speaker: 'Nick Schrock',
    detail: "In this talk, we'll dive into the structure of GraphQL servers, the APIs they enable, and where we want to take the broader ecosystem around GraphQL.",
    id: 11,
    day: 1
  },
  {
    time: '3:00 PM',
    title: 'Break',
    speaker: null,
    detail: null,
    id: 12,
    day: 1
  },
  {
    time: '4:00 PM',
    title: 'Syncing stores using socket streams',
    speaker: 'Abhinav Rastogi',
    detail: "tl;dr: This talk will be about syncing application state across clients over the network using sockets and observable streams and managing it using the Flux pattern. Also, canvas and functional reactive programming.\n\nBasically, I will talk about how to build a simple multi-player game, which stores player state in a Flux store and syncs it across other players using sockets. Socket programming usually means event based async programming. Using streams/observables (RxJS) we can use sockets in a reactive manner, which makes it cleaner and easier to reason about.",
    id: 13,
    day: 1
  },
  {
    time: '4:30 PM',
    title: 'Making small modules actually work with webpack and npm',
    speaker: 'Lin Clark',
    detail: "Server-side JavaScript developers have been developing with small modules for years. Small modules have been more pain than their worth for many front-end developers, though. The tools for doing it well haven't been there.\n\nBut the tools are starting to change as the front-end is moving towards a componentized future. Frameworks like React are encouraging developers to create components that are compact and easy to reason about, as well as easy to share.\n\nIn this talk, we'll look at some of those tools, such as webpack and npm, to see how they help you work with small modules today and what's coming in the future.",
    id: 14,
    day: 1
  },
  {
    time: '5:00 PM',
    title: 'Interoperable CSS',
    speaker: 'Glen Maddern',
    detail: "Most people aren't aware just what an achievement CommonJS was and the true extent of its impact. It took a language that only ran in browsers, had no concept of separate files, used global variables and a single global DOM to communicate; and built something viable, then something thriving, then something dominant. All by adding only a couple of pieces of syntax and a new mental model.\n\nThere have been a lot of ideas and a lot of speculation about the future of CSS in the last year or so, largely driven by the ingenuity of the React community — will we write styling code purely in JS? Will CSS continue to be useful? Will someone concoct some X-files-style JS+CSS alien-human hybrid language that takes over the world? It's all possible (mostly).\n\nThis talk is about a new format for CSS, one that's now supported by default in Webpack & JSPM, and available with plugins for Browserify. It's called Interoperable CSS, and it hopes to do for CSS what CommonJS did for JavaScript.",
    id: 15,
    day: 1
  },
  {
    time: '6:00 PM',
    title: 'Party',
    speaker: null,
    detail: null,
    id: 16,
    day: 1
  }
];

module.exports = day1;
