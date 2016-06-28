*[![Feedback](https://github.com/wix/react-training-kit/blob/master/assets/feedback.gif) Got feedback?](mailto:Academy@wix.com)*


# Performance Optimization

By the end of this kit you'll be able to...
- Understand and control the reconciliation of your components tree.
- Use `shouldComponentUpdate`, `PureRenderMixim`, immutable objects and containers to optimize your app's performance.

![](https://github.com/wix/react-training-kit/blob/master/assets/clock-16.png) **This kit will take you approximately 2.5 hours**


<a href="#learn"><img src="https://github.com/wix/react-training-kit/blob/master/assets/btn-learn.png" alt="Learn" height="48" width="140"></img></a>
<a href="#practice"><img src="https://github.com/wix/react-training-kit/blob/master/assets/btn-practice.png" alt="Practice" height="48" width="140"></img></a>
<a href="#extras"><img src="https://github.com/wix/react-training-kit/blob/master/assets/btn-extras.png" alt="Extras" height="48" width="140"></img></a>


# Learn

###A reminder about VDOM and Reconciliation (diffing)

React makes use of a **virtual DOM**, which is a descriptor of a DOM subtree rendered in the browser. 
This parallel representation allows React to avoid creating DOM nodes and accessing existing ones, which is slower than operations on JavaScript objects. 

When a component's `props` or `state` change, React decides whether an actual DOM update is necessary by constructing a new virtual DOM and comparing it to the old one. 
Only in the case they are not equal, will React **reconcile** the DOM, applying as few mutations as possible.


###Optimizing Pure Components

A **pure component** is a component that always renders the same result given the same `props` and `state`.

1.  **`shouldComponentUpdate`**

We've seen this as a method that "hooks" into the component lifecycle - 
it is invoked when a component is updated *before* rendering when new `props` or `state` are being received. 

![](https://github.com/wix/react-training-kit/blob/master/assets/tag-read.png) ![](https://github.com/wix/react-training-kit/blob/master/assets/time-30m.png) 
[Optimizing with shouldComponentUpdate](http://buildwithreact.com/article/optimizing-with-shouldcomponentupdate).

2.	**`pureRenderMixin`** 

This mixin compares the `props` and `state` using shallowEqual, and avoids calling `render` if they're the same.

![](https://github.com/wix/react-training-kit/blob/master/assets/tag-read.png) ![](https://github.com/wix/react-training-kit/blob/master/assets/time-5m.png) 
[Optimizing with pureRenderMixin](http://kenev.net/2015/03/08/react-purerendermixin-performance-simple-overview/).
  
###Using Immutabile (Data Comparable) Objects 

The problem with mutable objects is that once passed to a function:

-	You don't know anything about their final state or props
-	You can't answer anything regarding shouldComponentUpdate

Immutable objects to the rescue!

[Immutable.JS]( https://facebook.github.io/immutable-js/docs/#/) is an open source of immutable collections for JS, here are a few worth knowing:

-	***List***: Ordered indexed dense collections, much like a JavaScript Array. 
-	***Record***: Creates a new Class which produces Record instances. A record is similar to a JS object, but enforce a specific set of allowed string keys, and have default values.
-	***Map***: An unordered 	KeyedIterable of (key,value) pairs with O(log32 N) gets and O(log32 N) persistent sets.


![](https://github.com/wix/react-training-kit/blob/master/assets/tag-video.png) ![](https://github.com/wix/react-training-kit/blob/master/assets/time-30m.png) 
[Immutable Data and React](https://www.youtube.com/watch?v=I7IdS-PbEgI).


###Static Containers

Containers do the data fetching, they're the newest optimization from FB - 
a sort of childless components, connected to the store, that can fetch data without the whole re-rendering.

![](https://github.com/wix/react-training-kit/blob/master/assets/tag-video.png) ![](https://github.com/wix/react-training-kit/blob/master/assets/time-30m.png) 
[Making your app fast with high-performance components](https://www.youtube.com/watch?v=KYzlpRvWZ6c).

# Practice

- [ ] **Immutable Collections** ![](https://github.com/wix/react-training-kit/blob/master/assets/time-1h.png) ![](https://github.com/wix/react-training-kit/blob/master/assets/tag-handson.png)

    Experience using [immutable Collections](https://github.com/facebook/immutable-js).
    

# Extras

