*[![Feedback](/assets/feedback.gif) Got feedback?](https://docs.google.com/a/wix.com/forms/d/1aJHLJJsRKY_5TgHgsqh1Yrkt_EYaDkm-t8wCKNqGLMo/viewform?usp=send_form)*

# What is Website Architecture?
Various topics may fall into the category of website architecture, such as information architecture or UI/UX, 
but we will focus on the development approach. 

We will start with how a web page is structured, how to access and dynamically affect its structure, content and style with JS, 
as well as the order in which our JS is executed in the page's lifecycle. 

We will then continue with exploring two popular designs and what should be considered when you go down that route: iFrames (HTML document embedded within another HTML document) and single page applications.

![](/assets/clock-16.png) **This kit will take you approximately 1 day**

<a href="#learn"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/btn-learn.png" alt="Learn" height="48" width="140"></img></a>
<a href="#practice"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/btn-practice.png" alt="Practice" height="48" width="140"></img></a>
<a href="#extras"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/btn-extras.png" alt="Extras" height="48" width="140"></img></a>


# Learn

####The DOM
  
  [DOM](http://www.w3.org/DOM/) (Document Object Model), is a platform and language-neutral interface. It provides a static representation of the HTML document as a structured tree of nodes and objects that  have properties and methods. 

  So you can look at the DOM as a set of APIs that allows scripting languages (usually JavaScript) to dynamically access and update the document's content, structure and style. 
  The DOM has its own standard and is implemented by browsers vendors; as a result, the DOM API might vary from browser to browser.

- **[What the DOM is]( https://www.youtube.com/watch?v=4Gv81XcC8iE)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-5m.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-video.png"></img></a>   
  A visualization of the DOM and its positioning between our HTML and web page.
  
- **[Traversing the DOM](http://www.kirupa.com/html5/traversing_the_dom.htm)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-read.png"></img></a>   
  Explains how to navigate it in order to access the elements you want, which is usually what people tackle with.
  
- **[Using the DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#Important_Data_Types)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-5m.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-read.png"></img></a>   
  In order to use the [DOM API](https://developer.mozilla.org/en-US/docs/Web/API), you first need to be aware of the data types you are accessing in the DOM, as they all have different methods and ways of handling. Continue to ***DOM Interfaces***, up to the point of ***Testing the DOM API***.


####DOM Events

  Web browsers are inherently event-driven. The code that we write isn't constantly running while a user looks at our webpage. 
  Instead, each piece of code is assigned to a specific event and when that event occurs, our code is executed.
  Events may be user-driven e.g., when someone clicks on a page, submits a form etc. They may also be non-user initiated e.g., when a page is loaded, a timer has completed etc. 

- **[DOM Events](http://www.smashingmagazine.com/2013/11/an-introduction-to-dom-events/)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-1h.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-read.png"></img></a>   
  Describes how DOM events work, from listening to events to handling them, maintain their context and more.


####The Web Page Lifecycle

Beginners often lack the fundamental knowledge of what exactly happens as a page is being loaded into a browser. 
Here are a couple of links explaining that.

- **[Execution Order](http://javascript.about.com/od/hintsandtips/a/exeorder.htm)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-read.png"></img></a>   
  Describes the order in which the JavaScript in your page gets run.
  
- **[Document Loading and DOM Lifecycle Events](http://www.breck-mckye.com/blog/2014/04/document-loading-and-DOM-lifecycle-events/)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-read.png"></img></a>   
  A rundown of document loading lifecycle events.


####iFrames

The HTML Inline Frame Element (`<iframe>`) represents a nested browsing context, effectively embedding another HTML 
page into the current page. In HTML 4.01, a document may contain a head and a body or a head and a frame-set, 
but not both (a body *and* a frame-set). However, an `<iframe>` can be used within a normal document body. Each browsing context has its own session history and active document. The browsing context that contains the embedded content is called the parent browsing context. 
The top-level browsing context (which has no parent) is typically the browser window.

- **[Introduction to iFrames](http://javascript.info/tutorial/frames-and-iframes)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-read.png"></img></a>   
  If you don't know how to create or work with iFrames, here's a good place to start.
  
- **[Cross Window Messaging](http://javascript.info/tutorial/cross-window-messaging-with-postmessage)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-read.png"></img></a>   
  The cross window messaging API allows windows/frames from multiple domains to communicate with each other. Here's how to implement it.

- **[Limiting Cross Window Messaging](http://javascript.info/tutorial/same-origin-security-policy)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-read.png"></img></a>   
  Sometimes we want to prevent windows from communicating from security purposes. You should be aware of the *Same Origin* security policy and how to implement it.


####Single Page Applications

A [Single Page Application](https://en.wikipedia.org/wiki/Single-page_application) (SPA) is a web application or website 
that loads all of the resources required to navigate throughout the site on the first page load. 
With an average of over 11s for a page to load on the internet, this is invaluable. 
As the user clicks links and interacts with the page, subsequent content is loaded dynamically.
Most of Wix Templates are single page websites.

- **[Keys to a Successful SPA](https://www.youtube.com/watch?v=46Bu9ms9mBg)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-video.png"></img></a>   
  An interesting overview of the power of SPAs.

- **[SPA Considerations](http://code.tutsplus.com/tutorials/important-considerations-when-building-single-page-web-apps--net-29356)** <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/time-1h.png"></img></a> <a href="#"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/tag-read.png"></img></a>   
  An extensive overview of the important things that should be considered when building SPAs. You can skip the first 2 topics and begin straight from Client-Site Templates.


# Practice

- [ ] **DOM Exercises** <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  Run through [these exercises](http://www.ibm.com/developerworks/library/wa-jsanddom-pr/) for practicing traversing the DOM, node access and manipulating the DOM. 

- [ ] **DOM Events Exercises** <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  Practice [exercises 1](http://www.w3schools.com/js/exercise.asp?filename=exercise_dom_events1), [2](http://www.w3schools.com/js/exercise.asp?filename=exercise_dom_events1) and [3](http://www.w3schools.com/js/exercise.asp?filename=exercise_dom_events1).
  
- [ ] **Learn & Practice Event Delegation** <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  [This](http://javascript.info/tutorial/event-delegation) is a good tutorial with code examples for practicing event delegation, one of the most important JS patterns, that helps to simplify event handling by smart use of bubbling.

- [ ] **Making a Single Page App Without a Framework** <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  [This post](http://tutorialzine.com/2015/02/single-page-app-without-a-framework/) explains how the following [webpage](http://demo.tutorialzine.com/2015/02/single-page-app-without-a-framework/) was built as a single page application. Download the code and browse through it while you read "the making of".

# Extras

- **[DOM Structure Cheat Sheet](http://overapi.com/html-dom/)**   
  Grouped links to elements, events and more for the DOM API.

- **[DOM Methods Cheat Sheet]( http://christianheilmann.com/stuff/JavaScript-DOM-Cheatsheet.pdf)**   
  The most common DOM methods at a glance.

- **[IFrames API](https://developer.mozilla.org/en/docs/Web/HTML/Element/iframe)**   
  A short summary of everything you need to implement iFrames.

- **[SPA Inspiration]( http://www.awwwards.com/websites/single-page/)**   
  Best single page websites.

