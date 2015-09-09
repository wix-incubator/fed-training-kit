*[![Feedback](/assets/feedback.gif) Got feedback?](https://docs.google.com/a/wix.com/forms/d/1aJHLJJsRKY_5TgHgsqh1Yrkt_EYaDkm-t8wCKNqGLMo/viewform?usp=send_form)*

# What is JavaScript?

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is the most popular programming language in the world. 
It is most known as the scripting language for Web pages, but used in many non-browser environments as well such as [node.js](https://nodejs.org/) or [Apache CouchDB](https://couchdb.apache.org/). 

It is a cross-platform, object-oriented scripting language; small and lightweight. Inside a host environment (e.g., a web browser), 
JavaScript can be connected to the objects of its environment to provide programmatic control over them.

-	***Client-side JavaScript*** extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.

-	***Server-side JavaScript*** extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.

![](/assets/clock-16.png) **This kit will take you approximately 1 day**

<a href="#learn"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/btn-learn.png" alt="Learn" height="48" width="140"></img></a>
<a href="#practice"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/btn-practice.png" alt="Practice" height="48" width="140"></img></a>
<a href="#extras"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/btn-extras.png" alt="Extras" height="48" width="140"></img></a>


# Learn

####Syntax

  JavaScript borrows most of its syntax from Java, but is also influenced by Awk, Perl and Python. To that end, pick a link from this list based on the language you are already familiar with:
  
- **[Basic JavaScript](http://speakingjs.com/es5/ch01.html)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-1h.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-read.png"></img></a>   
  If you are absolutely clueless, start here :) Browse this guide for syntax you don’t already know, especially working with numbers, strings, loops, functions and arrays.

- **[JavaScript for Object-Oriented Developers](https://www.youtube.com/watch?v=FGNKoHv7xPY)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-video.png"></img></a>   
  All you need to know to get started with JS coming from Java, C#, php or other OOP languages. 

- **[The *this* Keyword](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-read.png"></img></a>   
  Learn how to master the *this* keyword, which confuses new and seasoned JavaScript developers alike. 

####Functional Programming

Functional programming is a programming paradigm - a style of building the structure and elements of computer programs - 
that treats computation as the evaluation of functions and avoids changing-state and mutable data. 

- **[Immutability](http://www.sitepoint.com/immutability-javascript/)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-read.png"></img></a>   
  Covers what immutability is, how to use it in JavaScript and why it's useful.

- **[Stateful vs. Stateless](http://programmers.stackexchange.com/questions/101337/whats-the-difference-between-stateful-and-stateless)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-5m.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-read.png"></img></a>   
  Practical approach for thinking 'stateless' when you code.
  
- **[Intro to Functional Programming](http://www.srirangan.net/2011-12-functional-programming-in-javascript)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-1h.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-read.png"></img></a>   
  Hoisting, higher-order functions and closures.

####The Object-Oriented Basics

A few links to demonstrate how to implement object-oriented concepts in JavaScript. 

- **[Classes](https://www.youtube.com/watch?v=coIsvOMYEi0)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-video.png"></img></a>   

- **[Prototypes](https://www.youtube.com/watch?v=EBoUT2eBlT4)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-5m.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-video.png"></img></a>   

- **[Inheritance](https://www.youtube.com/watch?v=pu08qQCmw8I)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-5m.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-video.png"></img></a>   

####Data Interchange with JSON

[JSON](http://json.org/) (JavaScript Object Notation) is a lightweight format for creating and sending data objects. JSON is a part of JavaScript and not a separate entity, the notation syntax is built into the raw Javascript programming language.

As a simple example, information about me might be written in JSON as follows:

```var jason = {
	"age" : "24",
	"hometown" : "Missoula, MT",
	"gender" : "male"
};```

This creates an object that we access using the variable `jason`. 
Inside the object, we can declare any number of properties using a `"name": "value"` pairing, separated by commas. 
To access the information stored in jason, we can simply refer to the name of the property we need. For instance:

`document.write('Jason is ' jason.age); // Output: Jason is 24`

Many applications use JSON for data interchange. [This](http://graph.facebook.com/youtube) for example, is the JSON data of Facebook's [Youtube page](http://www.facebook.com/youtube). The page's name, number of likes etc. are all represented in pairs, as we've learned, allowing update of the page's data.

That's the gist.

- [**Introduction to JSON**](https://www.youtube.com/watch?v=40aKlrL-2V8) ![](/assets/time-5m.png) ![](/assets/tag-video.png)   
  What makes JSON a "lightweight data-interchange" and what's the difference between JSON and XML?

- [**JSON in a JavaScript**](https://www.youtube.com/watch?v=wbB3lVyUvAM) ![](/assets/time-30m.png) ![](/assets/tag-read.png)   
  Demonstrates the actual use in JavaScript. The follow up tutorial is [here](https://www.youtube.com/watch?v=BSi4iUlzBiU).

# Practice

- [ ] **Step 1 - Getting Started** <a href="#"><img src="/assets/time-5m.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  Follow these [3 simple steps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction#Hello_world) to get your 'Hello World' working.

- [ ] **Step 2 – The Basics** <a href="#"><img src="/assets/time-30m.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  Select exercises from [this resource](http://www.w3resource.com/javascript-exercises/), which groups them by topics, by an increasing difficulty level.

- [ ] **Step 3 – Functions** <a href="#"><img src="/assets/time-30m.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  These [short challenges](http://www.teaching-materials.org/javascript/exercises/functions.html) describe the function to implement, solutions included.

- [ ] **Step 4 – Menu Application** <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  [This exercise](https://github.com/caiovaccaro/JavascriptExercise) practices building a menu, including loading data from a JSON file.

- [ ] **Step 5 – Image Gallery** <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  [This exercise](https://github.com/aron/javascript-exercises/tree/master/gallery) (do steps 1 and 2) practices building an image gallery, based on included HTML and CSS files.


# Extras

- **[JS Cheat Sheet](http://overapi.com/javascript/)**   
  A quick reference guide.
  
- **[The Full JS Tutorial](http://eloquentjavascript.net/)**   
  An online book for extra refernces.

- **[JSON Formatter & Validator](http://jsonformatter.curiousconcept.com/)**   
  An online tool that formats JSON data so that it is easy to read and debug by human beings.

- **JSON for [Chrome](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en)/[Firefox](https://addons.mozilla.org/en-Us/firefox/addon/jsonview/)**   
  Browser extensions.
  
