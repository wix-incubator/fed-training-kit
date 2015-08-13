*[![Feedback](/assets/feedback.gif) Got feedback?](https://docs.google.com/a/wix.com/forms/d/1aJHLJJsRKY_5TgHgsqh1Yrkt_EYaDkm-t8wCKNqGLMo/viewform?usp=send_form)*

# What is jQuery?

[jQuery](http://api.jquery.com/), is a fast, small, and feature-rich JavaScript library. 
It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax 
much simpler with an easy-to-use API that works across a multitude of browsers. 
With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.

Why use jQuery?
  - It's free.
  - It's light. Since jQuery pushes content to the client, it therefore reduces the wait time for server response. 
  Plus, it's smaller than Flash, so it results in smoother playbacks and less errors.
  - It works anywhere. HTML5 is cross-browser compatible-it will work on any browser, mobile phone or tablet, and even on Apple devices.
  - It has a low learning curve. Since it's based on plain old JavaScript, developers can learn jQuery fast.
  - It's SEO friendly and CSS3 compliant.

![](/assets/clock-16.png) **This kit will take you approximately 3.5 hours**

<a href="#learn"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/btn-learn.png" alt="Learn" height="48" width="140"></img></a>
<a href="#practice"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/btn-practice.png" alt="Practice" height="48" width="140"></img></a>
<a href="#extras"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/btn-extras.png" alt="Extras" height="48" width="140"></img></a>


# Learn


**Start with `$( document ).ready()`**

A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you. 
Code included inside `$( document ).ready()` will only run once the page [DOM](http://www.w3schools.com/js/js_htmldom.asp) is ready for JavaScript code to execute.

**Selectors - Select What to Manipulate**

The selector is the basic task for getting Dom Element and manipulating it. 
jQuery selectors start with the dollar sign and parentheses − `$()`. 
*NOTE* − you can replace `$()` with `jQuery()` in case you are using any other JavaScript library where the $ sign conflicts 
with something else.

- **[Select Away](https://www.youtube.com/watch?v=4i7Vk_Okav4)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-video.png"></img></a>   
Though slow-going, this tutorial shows by example selectors at work - how a manipulation changes according to different selection of the DOM elements.


- **[Play with Selectors](http://www.w3schools.com/jquery/trysel.asp)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-5m.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-read.png"></img></a>   
  An interactive guide - you click a selector's syntax and it highlights the selected elements.
  
  
**Manipulate the DOM**  
Once you select the DOM element, you can invoke some method on it; usually the syntax is `$(selector).method()`.
Setter methods can:
- Change one of the attributes of an element, for example: `$("a").attr("title", "Click me!");`.
- Set an element's style properties, for example: `$("div").css("background-color","red");`.
- Modify entire elements (or groups of elements) themselves — inserting, copying, removing, and so on. 

Getter methods can retrieve information from DOM elements for later use, for example: `var listItem = $( 'li' ).first();`.

- **[Traversing & Manipulating](http://jqfundamentals.com/chapter/traversing-manipulating)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-1h.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-read.png"></img></a>   
  A nice tutorial that splits the methods api according to their actual use, with examples.
  You can play with methods [here](http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_sel_all2).
  [Here](https://api.jquery.com/category/manipulation/)'s an API of the most popular methods.
  

# Practice


- [ ] **[Step 1 - Warmup](http://jqexercise.droppages.com/)** <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  Run through the small & focused exercises to get to the level you want.

  
- [ ] **[Step 2 - Download jQuery](https://jquery.com/)** <a href="#"><img src="/assets/time-5m.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  [Here](http://www.w3schools.com/jquery/jquery_get_started.asp) are instructions for how to get started.


- [ ] **[Step 3 - Practice Actual Work](https://github.com/macloo/jquery_exercises)** <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  These exercises are provided in some context, to experience stuff you'll actually do with jQuery.


# Extras


- **[Examples & Demos](http://www.tutorialspoint.com/jquery/jquery-dom.htm)**   
  Some code examples and their actual results for DOM manipulation.
  
- **[FAQs](https://learn.jquery.com/using-jquery-core/faq/)**   
  A short list of things you are probably wondering about.
