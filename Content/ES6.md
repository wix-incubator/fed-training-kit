*[![Feedback](/assets/feedback.gif) Got feedback?](mailto:leeb@wix.com)*

# What is ECMAScript 6?

[ECMAScript 6](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-overview), also known as ECMAScript 2015, is the latest version of the ECMAScript standard. ES6 is a significant update to the language, and the first update to the language since ES5 was standardized in 2009.

![](/assets/clock-16.png) **This kit will take you approximately 6 hours**

<a href="#learn"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/btn-learn.png" alt="Learn" height="48" width="140"></img></a>
<a href="#practice"><img src="https://github.com/wix/server-training-kit/blob/master/assets/btn-practice.png" alt="Practice" height="48" width="140"></img></a>
<a href="#extras"><img src="https://github.com/wix/server-training-kit/blob/master/assets/btn-extras.png" alt="Extras" height="48" width="140"></img></a>


# Learn

  With every new spec release from ECMA, code developing becomes a little easier. 
  Things that we are now used to (such as regular expressions and `tryCatch`) have been released in previous ECMAScript versions. 
  
  New features help with shortening some work-arounds. They improve readability. They also include things from other languages that were lacking in JS. 
  
Using ES6 Right now - the majority of browsers [are catching up](https://kangax.github.io/compat-table/es6/) on implementing new ES6 features but not one has full support. Using transpilers in the last couple of years has become the norm. [Babel](https://babeljs.io/) is an ES6 to ES5 transpiler that supports all of the ES6 features.

  
- **[ES6 Right Now - Features Review](https://www.youtube.com/watch?v=rwm5JLqCpdk#t=6m33s)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-video.png"></img></a>   
  Watch this guy John Paul - a run through ES6 introduced features.

- **[New Features Summary](https://github.com/lukehoban/es6features)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-1h.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>   
  This is a good sum-up with examples.

  
There's a big difference between learning new syntax, and understanding what you can do with it and its design goals. Here are a few in depth overviews of some of ES6 major features introduced in the standard. 
Take your time with diving into one, more or all of them.

- **[let & const](https://www.youtube.com/watch?v=1sHq04erG9o)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-5m.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-video.png"></img></a>   
  Explains why these very basic ES6 keywords allow us to better scope variables compared to ES5's `var`.

- **[Symbols](https://www.youtube.com/watch?v=ku_s_Aw_ms4)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-5m.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-video.png"></img></a>   
  Introduces the new type, and the nuances that make it unique from the other JS types.

- **[Rest & Spread](https://www.youtube.com/watch?v=8U3ZTCtZy5Q)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-5m.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-video.png"></img></a>   
  Demonstrates how these solve the hacks we once used to do to compensate for lack of functionality.

- **[Arrow Functions](http://www.nczonline.net/blog/2013/09/10/understanding-ecmascript-6-arrow-functions/)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>   
  The variations of arrow function syntax and in what arrow functions differ from regular JS functions.
  
- **[Classes](http://www.2ality.com/2015/02/es6-classes-final.html)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-1h.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>   
  Explains how classes work and how subclassing is handled. You can skip sections 1 and 2 if you know ES6 class essentials. 

- **[Destructuring](https://strongloop.com/strongblog/getting-started-with-javascript-es6-destructuring/)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>   
  Explains how destructuring of arrays, objects and function arguments can help with more explicit variable and argument declaration and assignment. 
  
- **[Modules](http://www.2ality.com/2014/09/es6-modules-final.html)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-1h.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>   
  A very good coverage about the new ES6 modules, its syntax and design goals.

- **[Promises](http://www.datchley.name/es6-promises/)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-1h.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>   
  Explains how to create a promise and how to use it.
  
- **[ES7 async Functions](https://jakearchibald.com/2014/es7-async-functions/)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-5m.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>   
  With async functions, you can `await` on a promise. This halts the function in a non-blocking way, waits for the promise to resolve and returns the value. If the promise rejects, it throws with the rejection value, so you can deal with it using `catch`.


# Practice

- [ ] **Warm-up** <a href="#"><img src="/assets/time-30m.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  [This online tool](http://www.es6fiddle.net/) allows you to run and play with ES6 code examples, doesn't support async-await.


- [ ] **Write the Beer Song with ES6** <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  Write a class `BeerSong` using ES6 that generates the Beer Song (i.e., “99 bottles of beer on the wall…”). You can use [Babel](https://babeljs.io/). Solution example code [here](http://gwmccull.github.io/2015/06/05/exercism-beer-song-es6/).
  

- [ ] **Learn ES6 by Fixing Failing Tests** <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  [This kata assembly](http://es6katas.org/) covers a vast amount of topics, and provides a succinct yet well-structured training program starting at the basics, moving to advanced technices as you go along. Contains a total of 79 testing workshops (currently).
  

# Extras


- **[Fiddle with ES6](http://www.es6fiddle.net/)**    
  An online fiddler with code examples.

- **[ES6 Learning Repo](https://github.com/ericdouglas/ES6-Learning)**    
  An impressive amount of materials to learn ES6 features the way you prefer (reading materials/courses/talks/podcasts etc.).

- **[Learning ES6 by Example](http://learnharmony.org/#)**    
  Executable, editable examples. Covers some basic topics. 

- **[In Depth ES6](http://www.2ality.com/search/label/esnext)**    
  A collection of blog posts, giving in-depth coverage of various ES6 features, including specification excerpts and underlying specification details.
