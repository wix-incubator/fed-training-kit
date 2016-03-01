*[![Feedback](/assets/feedback.gif) Got feedback?](https://docs.google.com/a/wix.com/forms/d/1aJHLJJsRKY_5TgHgsqh1Yrkt_EYaDkm-t8wCKNqGLMo/viewform?usp=send_form)*

# What is Lodash?

[Lodash](https://lodash.com/) (pronounced low-dash), is a JavaScript utility library that enables you to 
easily handle objects, arrays, collections, functions, strings and more. 
In a nutshell, Lodash functions deliver consistency (cross-browser), modularity, optimized performance & extras. 

Created as a fork of the [Underscore](http://underscorejs.org/) project, Lodash is a (better) superset of features, completely “underscore-compliant”.
Its global is the ‘_’ character. e.g. 
```
_.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });
// → { 'a': 1, 'b': 2, 'c': 3 }
```

![](/assets/clock-16.png) **This kit will take you approximately 3 hours**

<a href="#learn"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/btn-learn.png" alt="Learn" height="48" width="140"></img></a>
<a href="#practice"><img src="https://github.com/wix/server-training-kit/blob/master/assets/btn-practice.png" alt="Practice" height="48" width="140"></img></a>
<a href="#extras"><img src="https://github.com/wix/server-training-kit/blob/master/assets/btn-extras.png" alt="Extras" height="48" width="140"></img></a>


# Learn


- **[Intro to Lodash](https://egghead.io/lessons/core-javascript-introduction-to-lodash)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-5m.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-video.png"></img></a>   
  Watch this short capabilities demonstration by egghead.
  
  Once you are done, you may ask yourself this - if all of Lodash’s methods can be (and have been) implemented in plain JavaScript, why use it?
  Imagine implementing the methods you've seen in this video in plain JS, and match how fast the video demostration was - Lodash is more readable, expressive, functional, convenient and robust. 


- **[Performance Optimizations](https://www.youtube.com/watch?v=cD9utLH3QOk)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-1h.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-video.png"></img></a>   
  Watch this talk by the writer of Lodash John-David Dalton, about how performance issues were thought of and handled, 
  during Lodash's 3rd version features development. 
  It gives some insight to what's considered the `secret sauce` of the library.
  
- **[API Documentation](https://lodash.com/docs)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-video.png"></img></a>   
  Browse [this lecture](https://github.com/wix/fed-training-kit/blob/master/Content/Lodash/Lodash%20draft%201.pptx) to get the gist.
  [Here](https://www.youtube.com/watch?v=kdfikit351Y#t=1m)'s a nice intro for the API segments and exmaples.


# Practice


- [ ] **Step 1 - Install** <a href="#"><img src="/assets/time-5m.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  Make sure Lodash is installed by following these [guidelines](https://lodash.com/#installation).

  
- [ ] **Step 2 - Workout** <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  Given this person schema:
  ```
  {
    firstName: string,
    lastName: string,
    age: number,
    skills: ['run', 'jump', 'swim', 'dance'],
    gender: string (male / female),
    married: boolean
  }
  ```
  adult schema extends person with:
  ```
  children: {  // an object with key-value pairs, as firstName: person
    'childName': {person},
    'childName': {person},
    etc...
  }
  ```

  Given an array of adults perform the following tasks using lodash. Note that each task is a separate problem:

  - Filter by age under 30 and has the skills 'run' and 'swim'.
  - Filter by children who can swim or dance, and sort by gender and age.
  - Get an array of population, which contains all the people (adults and children) in the array.
  - Filter by people who have daughters and are not married.
  - Filter by married people who can jump.
  - Filter by people who have last name that starts with 'j' or later in the alphabet, and have married children.
  - Change the collection so that the name of each person is: `name: {first: 'string', last: 'string'}` instead of `firstName` and `lastName`.
  - Get an array of all children.
  - Get an array of just the ages. Let's say you want to do something when a certain event occurs but the event is fired very often when it happens. 
    For example, when dragging something or scrolling, you want to perform some complex action, but you don't want it to happen so many times since it will slow down the UI.
  - Create a function `doSomething` which will only execute 1/x times at most.
  - Create a function which will only execute 1/x seconds.
  - Given a function `get(url, data, successCallback)`, create a function that will perform the get, but will always use a given url 'baseUrl' and specified data 'someData'.
  

# Extras


- **[Lodash Extenstions](http://eng.rightscale.com/2015/01/22/lodash-extensions.html)**   
  Extending Lodash for fun and profit.


- **[Cheat Sheet](http://delapouite.com/ramblings/lodash-difference-between-extend-assign-merge-defaults.html)**   
  The difference between extend/assign, merge and defaults functions.

