*[![Feedback](https://github.com/wix/server-training-kit/blob/master/assets/feedback.gif) Got feedback?](https://docs.google.com/a/wix.com/forms/d/1T7x-wCSPc5JaE52a6C4xYOu0ZVMKlHVp9TK5cspeCxA/viewform?usp=send_form)*


# React Components

By the end of this kit you'll be able to...
- Create components in React.
- Assign data dynamically to components.
- Define your initial component specs.
- Use Mixins.

![](https://github.com/wix/react-training-kit/blob/master/assets/clock-16.png) **This kit will take you approximately 3 hours**


<a href="#learn"><img src="https://github.com/wix/react-training-kit/blob/master/assets/btn-learn.png" alt="Learn" height="48" width="140"></img></a>
<a href="#practice"><img src="https://github.com/wix/react-training-kit/blob/master/assets/btn-practice.png" alt="Practice" height="48" width="140"></img></a>
<a href="#extras"><img src="https://github.com/wix/react-training-kit/blob/master/assets/btn-extras.png" alt="Extras" height="48" width="140"></img></a>


# Learn

Before we begin with creating components, let's first understand what they are:

![](https://github.com/wix/react-training-kit/blob/master/assets/tag-video.png) ![](https://github.com/wix/react-training-kit/blob/master/assets/time-5m.png) 
[What Components are](https://reactforbeginners.com/learn/l3s31xvg/wixcom-ltd#/view/qmx8bu7wom).

**Here's how you create a component:** 

`ReactElement createElement(string/ReactClass type,[object props],[children ...])`

Each component is constructed of a type, object and children. The type argument can be either an html tag name string (e.g. `div`, `span`, etc), or a ReactClass (created via `React.createClass`).

**Every component must implement the render function** and it is recommended that every component renders the next hierarchy of components. 

For example:

```
var HelloMessage = React.createClass({displayName: “HelloMessage”, 
      render: function() {
             return   (React.createElement("div", {className: “Hello”},
	                        React.createElement(“h1", “Hello World”))
	            )
      };
React.render(React.createElement(HelloMessage, null), mountNode);
```

`render` > calls `HelloMessage` > which **owns** `div` > which **owns** `h1`. 

It is a recursive hierarchy of a component and its children (each a component in itself), or rather, a tree of functions.


![](https://github.com/wix/react-training-kit/blob/master/assets/tag-read.png) ![](https://github.com/wix/react-training-kit/blob/master/assets/time-5m.png) 
[Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html) - Read to the end of step 1.


###Components' Props

In the previous example, if `div` is styled red, so will its children (`h1`) be. 
But if a component is static, it probably won't be reused, would it? So in order to pass data dynamically, each component has `props` (properties).
-	**The owner component sets the properties**(`props`) of other components.
-	A component's `props` **can change when their owner re-renders** and passes them different `props`.


![](https://github.com/wix/react-training-kit/blob/master/assets/tag-read.png) ![](https://github.com/wix/react-training-kit/blob/master/assets/time-5m.png) 
[Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html) - Read to the end of step 2.


###Components' State

Components cannot change their `props`, but a component may want to change something confined within it, 
sometimes as a response to user actions (such as `dropDownIsOpen` or `secondsElapsed`). To this end, we use `state`.

-	Component state is **owned by the component itself** and does not affect other components
-	A component's `state` **can change when a component changes its state**.

For example, let's create a timer. 
We'll have to set its initial state, allow its state to update upon an event trigger and finally use the state in 
the component's render function, so it can use its own state:

```
	var Timer = React.createClass({displayName: “MyCounter”,
	    getInitialState:function(){
	       return {… }
	    },
	    update: function(e){
	         this.setState(….)
	   },
	   render: function() {
	       return   (React.createElement("div", {className: “Hello”},
	                              React.createElement(“h1", null, “ ”, this.state.counter))
	                        )
	   };
```

![](https://github.com/wix/react-training-kit/blob/master/assets/tag-read.png) ![](https://github.com/wix/react-training-kit/blob/master/assets/time-30m.png) 
[Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html) - Read steps 3+4.

![](https://github.com/wix/react-training-kit/blob/master/assets/tag-video.png) ![](https://github.com/wix/react-training-kit/blob/master/assets/time-30m.png) 
[Understanding state](https://reactforbeginners.com/learn/l3s31xvg/wixcom-ltd#/view/y5crna4dvg).


###Initial Component Specs

When creating a component class by invoking `React.createClass()`, you should provide a specification object that contains a `render` method and...

- `object getInitialState()` - returns the initial value for state.
- `object getDefaultProps()` - sets fallback props values if props aren’t supplied. Called once when `React.createClass` is called, for all components in the class.
- `object propTypes` - allows you to validate props begin passed to your component in Debug mode, as well as to define your API clearly.
- `object statics` - allows defining static methods that can be called on the component class.
- `string displayName` - used in debugging messages, viewable in React dev tools.


###Mixins

Components are the best way to reuse code in React. 
When very different components may share some common functionality, we use React Mixins:
`mixins: [React.addons.MixinName]`

![](https://github.com/wix/react-training-kit/blob/master/assets/tag-video.png) ![](https://github.com/wix/react-training-kit/blob/master/assets/time-30m.png) 
[The LinkedState Mixin](https://reactforbeginners.com/learn/l3s31xvg/wixcom-ltd#/view/414i7f6ubw).

###Composability & Separation of Concerns

One of React's finest features is composability; This is achieved by building modular components that reuse other components with well-defined interfaces, effectively creating a tree of components (the root being `render`).

![](https://github.com/wix/react-training-kit/blob/master/assets/tag-read.png) ![](https://github.com/wix/react-training-kit/blob/master/assets/time-30m.png) 
[Multiple Components](https://facebook.github.io/react/docs/multiple-components.html).


# Practice

- [ ] **Step 1 – Create components and play with their props** ![](https://github.com/wix/react-training-kit/blob/master/assets/time-1h.png) ![](https://github.com/wix/react-training-kit/blob/master/assets/tag-handson.png)

    Do [exercises 2-4](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/) yourself. 
    
- [ ] **Step 2 – Add a working `onChange` prop** ![](https://github.com/wix/react-training-kit/blob/master/assets/time-5m.png) ![](https://github.com/wix/react-training-kit/blob/master/assets/tag-handson.png)

    Do [exercises 1](http://jamesknelson.com/learn-raw-react-ridiculously-simple-forms/) yourself. 
    
- [ ] **Step 3 – Work with application state** ![](https://github.com/wix/react-training-kit/blob/master/assets/time-1h.png) ![](https://github.com/wix/react-training-kit/blob/master/assets/tag-handson.png)

    Do [exercises 2-4](http://jamesknelson.com/learn-raw-react-ridiculously-simple-forms/) yourself. 
    
    
# Extras

- [Searchable database of React components](http://react-components.com/)
