*[![Feedback](/assets/feedback.gif) Got feedback?](https://docs.google.com/a/wix.com/forms/d/1aJHLJJsRKY_5TgHgsqh1Yrkt_EYaDkm-t8wCKNqGLMo/viewform?usp=send_form)*

# What are client / server communications?

The [Server Paradigm](https://en.wikipedia.org/wiki/Client%E2%80%93server_model) is an architectural solution 
for dealing with distributed machines (like the Internet). 

A *client* is defined as a piece of software that requests data (much like a human client at a store) from an entity. A *server* is defined as a software that replies for said requests by serving data. The type of data is not important (text, binary, etc), nor is the type of client.

Many times the roles can be reversed. Assuming that the server does not hold the information needed, it will use an internal client to request additional information from a 3rd party (a database for example). In web development when we refer to clients, we normally talk about the browser, and the server as the back end service.

In this training kit we will explore several ways and types of communication when dealing with a browser, JS, and the server.

![](/assets/clock-16.png) **This kit will take you approximately 1-2 days**

<a href="#learn"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/btn-learn.png" alt="Learn" height="48" width="140"></img></a>
<a href="#practice"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/btn-practice.png" alt="Practice" height="48" width="140"></img></a>
<a href="#extras"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/btn-extras.png" alt="Extras" height="48" width="140"></img></a>


# Prerequisites

  If you don't know HTTP or JSON, please review these kits respectively before you start this one, as for us front end developers it’s important to understand several aspects that will help us with design, debug and traffic optimizations.

- **[HTTP Training Kit](https://github.com/wix/server-training-kit/blob/master/content/HTTP.md)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-5h.png"></img> </a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>    <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-video.png"></img></a>   <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-handson.png"></img></a>   

- **[JSON Training Kit](https://github.com/wix/server-training-kit/blob/master/content/JSON.md)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-1h.png"></img> </a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>    <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-video.png"></img></a>   <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-handson.png"></img></a>   

# Learn

[**AJAX**](https://developer.mozilla.org/en-US/docs/AJAX) stands for Asynchronous JavaScript and Xml 
but that's a misleading name. Originally it was used with XML messaging. It’s better to view it as a text protocol, where the text can be XML, JSON, HTML, CSV or any other text based protocol. 

The main feature of Ajax is that it is asynchronous, giving the developer a mean to query the server time and time again, without having to refresh the entire page (causing network overhead, reflow, repaint and so on).  


- **[AJAX](http://www.codeproject.com/Articles/31155/Ajax-Tutorial-for-Beginners-Part)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-1h.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a> and **[AJAX with XML & JSON](http://www.codeproject.com/Articles/31271/Ajax-Tutorial-for-Beginners-with-XML-JSON-Part))** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-1h.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>   
  Guides that explain how it works and how to implement.<br></br>
 

The next topic has nothing to do with AJAX - it just enables some of AJAX capabilities (with a little DOM overhead). Due to the Cross Domain limitation imposed on AJAX requests, a hack was discovered, and is widely used all over the web.

In wix we don’t particularly like [JSON-P](https://en.wikipedia.org/wiki/JSONP) (JSON with Padding) because it’s a messy protocol, not secured and has an impact on the DOM.

- **[JSONP](https://www.youtube.com/watch?v=qXVCbitYUwE)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-5m.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-video.png"></img></a>   
  A short video explaining JSONP and the problem it solves. Remember that the server needs to know that this request is for JSONP communication, an overhead that does not exist in regular AJAX requests.<br></br>
 
So, we don’t like JSONP, but we still want to get information from other domains, how to do it? [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) (Cross-Origin Resource Sharing) is your answer. This relatively new technology tackles the cross domain permissions issue directly by adding an additional communication layer that is agnostic to the client but relevant to the server.

- **[CORS](https://www.nczonline.net/blog/2010/05/25/cross-domain-ajax-with-cross-origin-resource-sharing/)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>   
  The basic idea behind CORS is to use custom HTTP headers to allow both the browser and the server to know enough about each other to determine if the request or response should succeed or fail. It is implemented differently in different browsers, so this post explains it quite well.<br></br>

The next topic deals with iframe to iframe communications. We don’t like frames (avoid it when you can), but sometimes for security reasons (as is the case with outside of Wix TPA), we cannot avoid them.

- **[HTML5 Web Messaging](https://dev.opera.com/articles/window-postmessage-messagechannel/)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-1h.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>   
  Cross-document messaging (`window.postMessage()`) and channel messaging (`MessageChannel`) allow you to get around security exceptions thrown by the browser when communicating with iframes. This post explains how to implement them.<br></br>
 
So http is a request / response protocol. What happens when you need to have an open channel of communication that is bi-directional, e.g. a live chat? WebSockets gives you the capability to open network sockets, though which both the client and server can send data at any time, without having the overhead of HTTP.

- **[WebSockets](http://www.html5rocks.com/en/tutorials/websockets/basics/)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>   
  Explains what a WebSocket is used for and how to open one.<br></br>

When you need only one direction of communication, why have the overhead of multiplex and bi-directional state management? So when you need to design a news tick for example, or a stock market update, you only need an open line from the server to the client.

- **[Server-Sent Events](http://www.html5rocks.com/en/tutorials/eventsource/basics/)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-video.png"></img></a>   
  Explains how to implement, and in what SSEs are different than polling, long polling and WebSockets.<br></br>

Although BI events are not generic web client messaging per say, the way they are being used in Wix is relevant. BI events communicate user actions and behavior to a special server back end in an interesting way that is different from all of the above. 

- **[Wix BI for TPA developers](https://kb.wixpress.com/display/AM/BI+Reporting+for+WixLabs+TPA)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>   
  More about Wix BI [here](https://github.com/wix/crash-course/tree/master/common/BI) and instructions for the BI Logger [here](https://github.com/wix/wix-bi-logger).<br></br>

# Practice

- [ ] **Using AJAX to load JSON** <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
An [exercise] (http://www.santarosa.edu/~jperetz/projects/ajax-json/) for using AJAX to load JSON data for Google visualization charts.

- [ ] **CORS & JSONP** <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
Scroll all the way down and do the [last 2 exercises](https://www.webucator.com/tutorial/learn-ajax/cors-jsonp.cfm). 

- [ ] **WebSockets** <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
    - [Use Node as a server](http://code.tutsplus.com/tutorials/using-nodejs-and-websockets-to-build-a-chat-service--net-34482)
  - [Client building]( http://code.tutsplus.com/tutorials/start-using-html5-websockets-today--net-13270) 


# Extras


- **[HTML5 Security](https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet)**   
  A cheat sheet that serves as a guide for safe implementation of web messaging, CORS, WebSockets and SSEs.


- **[WebSockets vs. SSEs](http://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource)**   
  A summary of the differences and advantages of each method.


- **Can I use**   
   - [XMLHttpRequest advanced features](http://caniuse.com/#search=ajax)
   - [CORS](http://caniuse.com/#search=cors)
   - [WebSockets](http://caniuse.com/#search=websockets)

