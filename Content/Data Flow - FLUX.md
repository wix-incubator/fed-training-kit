*[![Feedback](https://github.com/wix/server-training-kit/blob/master/assets/feedback.gif) Got feedback?](https://docs.google.com/a/wix.com/forms/d/1T7x-wCSPc5JaE52a6C4xYOu0ZVMKlHVp9TK5cspeCxA/viewform?usp=send_form)*


# Data Flow - FLUX

By the end of this kit you'll be able to implement Flux data flow in your React app.


![](../assets/clock-16.png) **This kit will take you approximately 5 hours**


<a href="#learn"><img src="assets/btn-learn.png" alt="Learn" height="48" width="140"></img></a>
<a href="#practice"><img src="assets/btn-practice.png" alt="Practice" height="48" width="140"></img></a>
<a href="#extras"><img src="assets/btn-extras.png" alt="Extras" height="48" width="140"></img></a>


# Learn

React Implements a Unidirectional Data Flow Called Flux.
There are many ways to implement Flux, as long as they are unidirectional and implement the following, they're fine.

![](../assets/tag-video.png) ![](../assets/time-30m.png)
[Intro to Flux](https://www.youtube.com/watch?v=nYkdrAPrdcw#t=10m10s) - Watch Jing Chen's part (till minute 24).


To implement Flux follow these 4 categories:

1.	**Actions & Action Creators**

    <img src="/assets/Actions.png" height="185" width="565"></img>

  - Upon new data (a user interacting with the application or through a web API), an *action* is invoked.
  - An action is an object literal containing the new fields of data and a specific action type.

2.	**The Dispatcher**

  <img src="/assets/Dispatcher.png" height="185" width="565"></img>

  - A centralized hub that creates a bridge between your app and the Store. A registry of callbacks, registered by stores.
  - When new data comes in, the dispatcher uses these callbacks to propagate that data to all of the stores.
  - Can invoke callbacks in order.
  - API: register() and dispatch().

3.	**Stores**

    <img src="/assets/Stores.png" height="225" width="565"></img>

  - Hold data & application logic for a logical domain.
  - Control and update themselves. Public interface: only getters.
  - Stores decide if and how they should respond to the callback. When they update, they emit a change event.

4.	**Views (Controller)** 	

    <img src="/assets/Views.png" height="185" width="565"></img>

  - We need a React component near the top of our component hierarchy to listen for changes broadcasted by stores.
  - When it receives a change event from the store, it requests the new data and passes and calls its own setState() method, causing its render() and all its descendants’ render() to run.


![](../assets/tag-video.png) ![](../assets/time-30m.png)
[Fetching data for React applications](https://www.youtube.com/watch?v=9sc8Pyc51uU).


![](../assets/tag-read.png) ![](../assets/time-1h.png)
[Creating A Simple Shopping Cart with React.js and Flux](https://scotch.io/tutorials/creating-a-simple-shopping-cart-with-react-js-and-flux).


# Practice

**TODO List** ![](../assets/time-3h.png) ![](../assets/tag-handson.png)

Complete the [Flux Tutorial](https://facebook.github.io/flux/docs/todo-list.html#content) and build your first TODO App using React and Flux.


# Extras

- [Dispatcher API](https://facebook.github.io/flux/docs/dispatcher.html#content)
- [Flux Utils](https://facebook.github.io/flux/docs/flux-utils.html)
