*[![Feedback](https://github.com/wix/server-training-kit/blob/master/assets/feedback.gif) Got feedback?](https://docs.google.com/a/wix.com/forms/d/1T7x-wCSPc5JaE52a6C4xYOu0ZVMKlHVp9TK5cspeCxA/viewform?usp=send_form)*


# Intro to React

By the end of this kit you'll be able to...
- Write a very simple react application.
- Describe all syntax options available.

![](../assets/clock-16.png) **This kit will take you approximately 3 hours**


<a href="#learn"><img src="../assets/btn-learn.png" alt="Learn" height="48" width="140"></img></a>
<a href="#practice"><img src="../assets/btn-practice.png" alt="Practice" height="48" width="140"></img></a>
<a href="#extras"><img src="../assets/btn-extras.png" alt="Extras" height="48" width="140"></img></a>


# Learn


React makes use of a *virtual DOM*, which is a descriptor of a DOM subtree rendered in the browser.

This parallel representation allows React to avoid creating DOM nodes and accessing existing ones,
which is slower than operations on JavaScript objects.

When a change is done React takes care of diffing for us, we don’t have to think about it.
React decides whether an actual DOM update is necessary by constructing a new virtual DOM and comparing it to the old one.
Only if they're not equal, will React reconcile the DOM (more on this later), applying as few mutations as possible.


![](../assets/tag-video.png) ![](../assets/time-30m.png)
[Introduction to React.JS](https://www.youtube.com/watch?v=XxVg_s8xAms)

First 30 minutes explain about the reasons for developing React and the diffing mechanism.

### The render Method

The render method is the only piece of code that is a must in React.
If you don’t use it, you’ll get an exception. At any point in time, you describe how you want your UI to look like.

*What is contains*:  simple DOM components such as div, span, h1s etc.

*What it returns*: the view representation and must be pure, i.e. it must return the same result once invoked.

![](../assets/tag-video.png) ![](../assets/time-5m.png)
[Getting started with the render method](http://learnreact.com/lessons/1-render-getting-started)


###Syntax

React is usually written in JSX, a JavaScript syntax extension that looks similar to XML.
You can use [the Babel REPL](https://babeljs.io/repl/)  for translating JSX to pure JS.

![](../assets/tag-read.png) ![](../assets/time-30m.png)
*[About JSX](https://facebook.github.io/react/docs/jsx-in-depth.html)*

![](../assets/tag-video.png) ![](../assets/time-5m.png)
*[Writing HTML with JSX](https://reactforbeginners.com/learn/l3s31xvg/wixcom-ltd#/view/w6fv3d7dmr)*

![](../assets/tag-read.png) ![](../assets/time-1h.png)
*[React Templates](http://wix.github.io/react-templates/)*


# Practice

- [ ] **Step 1 – Setup the Enviroment** ![](../assets/time-1h.png) ![](../assets/tag-handson.png)

    [Here](https://reactforbeginners.com/learn/l3s31xvg/wixcom-ltd#/view/ballz104ja) are the instructions. [Here](http://facebook.github.io/react/downloads/react-0.11.2.zip) is the React Starter kit. In order to do the next step you don't need it, you can use the JSFiddle (under Extras), but it's a good place to start.

- [ ] **Step 2 - Write a single-file React.js app** ![](../assets/time-30m.png) ![](../assets/tag-handson.png)

    Do [exercise 1](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/) to get simple HTML elements to work with the React render method.


# Extras

- *[JSFiddle without JSX](https://jsfiddle.net/reactjs/5vjqabv3/)*
