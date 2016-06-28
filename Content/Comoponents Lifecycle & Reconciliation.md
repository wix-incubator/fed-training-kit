*[![Feedback](https://github.com/wix/server-training-kit/blob/master/assets/feedback.gif) Got feedback?](https://docs.google.com/a/wix.com/forms/d/1T7x-wCSPc5JaE52a6C4xYOu0ZVMKlHVp9TK5cspeCxA/viewform?usp=send_form)*


# Component Lifecycle

By the end of this kit you'll be able to...
- Use ref and lifecycle methods to access components in the DOM.
- Use keys for controlling the reconciliation order.

![](assets/clock-16.png) **This kit will take you approximately 3 hours**


<a href="#learn"><img src="assets/btn-learn.png" alt="Learn" height="48" width="140"></img></a>
<a href="#practice"><img src="assets/btn-practice.png" alt="Practice" height="48" width="140"></img></a>
<a href="#extras"><img src="assets/btn-extras.png" alt="Extras" height="48" width="140"></img></a>


# Learn

Components in the React framework embody a state-machine that has three distinct states.

1.	**The Component comes to life after being *Mounted*.**
  Mounting results in going through a render-pass that generates the component-tree (VDOM).  This tree is converted and placed into a container-node of the real DOM.

2.	**Once mounted, the component stays in the *Update* state.**
Update results in calling render(), which brings the DOM in sync with the data (props & state).

3.	**The final state is *Unmounted*.**
Unmounted happens when you explicitly callReact.unmountAndReleaseReactRootNode() or automatically if a component was a child that was no longer generated in a render() call. Most often you don't have to deal with this and just let React do the proper thing.

React has special methods for accessing specific points in the [lifecycle](https://pbs.twimg.com/media/B-G3_T8CcAAmTHV.jpg:large):

![](assets/tag-video.png) ![](assets/time-30m.png)
[React Lifecycle Methods](https://vimeo.com/channels/797633/103917886) - View lessons 9 to 11.


###Referencing Components

To interact with the browser, you'll need a reference to a DOM node.

You can attach a `ref` to any element, which allows you to reference the backing instance of the component.
This is useful if you need to invoke imperative functions on the component, or want to access the underlying DOM nodes.

To reference a node, follow these steps:

1.	Assign a `ref` attribute to anything returned from `render`:
` <input ref = "myInput" />`
2.	In some other code, access the backing instance via `this.ref`:
`this.refs.myInput`


You can also access the component's DOM node directly by calling:
`React.findDOMNode(this.refs.myInput)`

![](assets/tag-read.png) ![](assets/time-30m.png)
[Refs and findDOMNode](https://facebook.github.io/react/docs/more-about-refs.html).


###Child Reconciliation

Reconciliation is the process by which React updates the DOM with each new render pass.
In general, children are reconciled according to the *order in which they are rendered*.

Adding a child to the end of a list is not a problem. But what happens when you add a child to the top of the list?
React is going to run into mutation mode, and replace the first child with the new one.

In order for React to treat the children according to their index, and compare the first with the first, second vs. second etc., we use *keys*:

```
renderA: <div><span key="first">first</span></div>
renderB: <div><span key="second">second</span><span key="first">first</span></div>
=> [insertNode <span>second</span>]
```


![](assets/tag-read.png) ![](assets/time-1h.png)
[React (Virtual ) DOM Terminologies](https://facebook.github.io/react/docs/glossary.html).

![](assets/tag-read.png) ![](assets/time-30m.png)
[Why the keys are important](http://blog.arkency.com/2014/10/react-dot-js-and-dynamic-children-why-the-keys-are-important/).


# Practice

**Interacting with the DOM** ![](assets/time-1h.png) ![](assets/tag-handson.png)

Do [exercises 1-3](http://jamesknelson.com/react-js-by-example-interacting-with-the-dom/) yourself.


# Extras

- [Best Practices & Conventions](https://web-design-weekly.com/2015/01/29/opinionated-guide-react-js-best-practices-conventions/)
- [How FB Dealed with 'Data Changing over Time'](https://www.youtube.com/watch?v=nYkdrAPrdcw&feature=youtu.be&t=1456)
