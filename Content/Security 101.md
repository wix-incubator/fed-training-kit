*[![Feedback](/assets/feedback.gif) Got feedback?](https://docs.google.com/a/wix.com/forms/d/1aJHLJJsRKY_5TgHgsqh1Yrkt_EYaDkm-t8wCKNqGLMo/viewform?usp=send_form)*

# What is a Security Vulnerability?
A [security vulnerability](https://www.owasp.org/index.php/Category:Attack) is a system flaw or weakness in an application, that could be exploited to compromise the system data, system availability or to impersonate legitimate users of the application.

Over the last years, the center of gravity of the Web has shifted towards the client, 
where the browser has become a full-fledged execution platform for highly dynamic, complex Web applications.
In order to make secure applications security should be a first class citizen 
and you should always consider the security aspects of the code. 

![](/assets/clock-16.png) **This kit will take you approximately 5 hours**

<a href="#learn"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/btn-learn.png" alt="Learn" height="48" width="140"></img></a>
<a href="#practice"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/btn-practice.png" alt="Practice" height="48" width="140"></img></a>
<a href="#extras"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/btn-extras.png" alt="Extras" height="48" width="140"></img></a>


# Learn
There are two steps to handling security issues; One, know the risks. Two, know what to do to prevent most of them. 

####Step 1: Know the Risks
- **[Client-Side Web Secutiry](https://lirias.kuleuven.be/bitstream/123456789/471059/1/thesis.pdf)**   <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-read.png"></img></a>      
Read chapter 2.1 – provides a good intro of the web application's building blocks in the context of security.

- **Most Common Attacks Today**   <a href="#"><img src="/assets/time-30m.png"></img></a> <a href="#"><img src="/assets/tag-video.png"></img></a>  <a href="#"><img src="/assets/tag-read.png"></img></a>        
  -	[SQL injection](http://www.veracode.com/security/sql-injection) 
  -	[Cross Site Scripting(XSS)](https://www.youtube.com/watch?v=7M-R6U2i5iI)
  -	[Cross Site Request Forgery (CSRF)](https://www.youtube.com/watch?v=oSvl1cdF4UM) 
  - For more risks, see [Extras](https://github.com/wix/ng-training-kit/new/master/Content#extras).


- **[Security Storms in Your JavaScript](https://www.youtube.com/watch?v=JcctFlYstqM)**   <a href="#"><img src="/assets/time-30m.png"></img></a> <a href="#"><img src="/assets/tag-video.png"></img></a>          
Demonstrates how hackers may exploit JS and the new HTML5 formats.

- **[JSONP Security Concerns](http://phocean.net/2013/10/13/csrf-with-jsonp.html)**   <a href="#"><img src="/assets/time-30m.png"></img></a> <a href="#"><img src="/assets/tag-read.png"></img></a>        
If you already know what JSONP is and what it's used for, start reading from 'Security Concerns'.

####Step 2: Protect Your Application
- **[Frontend Security](https://mikewest.org/2013/09/frontend-security-frontendconf-2013)**   <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-video.png"></img></a>      
A great talk on general security and specifically on the Content Security Policy.

- **[White List Input Validation](https://www.owasp.org/index.php/Input_Validation_Cheat_Sheet)**   <a href="#"><img src="/assets/time-5m.png"></img></a> <a href="#"><img src="/assets/tag-read.png"></img></a>      
Explains shortly why a white list is better than a black list strategy and how to construct it. 
- **[Input and Output Handling](https://vip.wordpress.com/documentation/best-practices/security/validating-sanitizing-escaping/)**   <a href="#"><img src="/assets/time-5m.png"></img></a> <a href="#"><img src="/assets/tag-read.png"></img></a>      
A short summary of the 3 strategies for handling inputs and outputs.

- **[Trusted HTML with Angular](http://odetocode.com/blogs/scott/archive/2014/09/10/a-journey-with-trusted-html-in-angularjs.aspx)**   <a href="#"><img src="/assets/time-30m.png"></img></a> <a href="#"><img src="/assets/tag-read.png"></img></a>      
When and how to use default protection of Angular JS to trust HTML.

- **[Cross Origin Resource Policy](http://odetocode.com/blogs/scott/archive/2014/09/10/a-journey-with-trusted-html-in-angularjs.aspx)**   <a href="#"><img src="/assets/time-30m.png"></img></a> <a href="#"><img src="/assets/tag-read.png"></img></a>      
If you're not familiar with it, read about it here. Almost all browsers support it and it can be a powerful tool for protecting the browser-server communication.

- **[Strict Contextual Escaping for XSS](https://docs.angularjs.org/api/ng/service/$sce)**   <a href="#"><img src="/assets/time-30m.png"></img></a> <a href="#"><img src="/assets/tag-read.png"></img></a>      
How to use Angular's `$sce` for binding in certain contexts to result in a value that is marked as safe to use for that context. 

- **[JSON Vulnerability and XSRF](https://docs.angularjs.org/api/ng/service/$http#json-vulnerability-protection)**   <a href="#"><img src="/assets/time-5m.png"></img></a> <a href="#"><img src="/assets/tag-read.png"></img></a>      
Angular methods to follow in order to protect your code against JSONP vulnerabilities and XSRF.

- **[Sandbox Frames](https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet#Sandboxed_frames)**   <a href="#"><img src="/assets/time-5m.png"></img></a> <a href="#"><img src="/assets/tag-read.png"></img></a>      
Rules for using Sandbox frames safely.

- **[Angular Do and Don't Do](https://docs.angularjs.org/guide/security)**   <a href="#"><img src="/assets/time-5m.png"></img></a> <a href="#"><img src="/assets/tag-read.png"></img></a>      
Explains some of AngularJS's security features and best practices.

# Practice

**[Game of Hacks](http://www.gameofhacks.com/game)** <a href="#"><img src="/assets/time-30m.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
A great way to experience spotting vulnerabilities in code snippets.
 
# Extras

- **More Security Risks**
  - [Session Hijacking](https://www.owasp.org/index.php/Session_hijacking_attack)
  - [Session Fixation](https://www.owasp.org/index.php/Session_Fixation)
  - [UI Redressing (Clickjacking)](http://www.troyhunt.com/2013/05/clickjack-attack-hidden-threat-right-in.html)
  - [DDoS](https://www.youtube.com/watch?v=OhA9PAfkJ10)
  - [Samy is my hero - XSS Worm](https://en.wikipedia.org/wiki/Samy_%28computer_worm%29)

- **[Content Security Policy](http://www.cspplayground.com/csp_overview)**   
  A summary of everything you need to remember regarding the policy.
  
- **[Quick Reference Guide - Secure Coding Practices](https://www.owasp.org/images/0/08/OWASP_SCP_Quick_Reference_Guide_v2.pdf)**   
  The golden rules from OWASP.

- **[Strict-Transport-Security Header](https://www.owasp.org/index.php/HTTP_Strict_Transport_Security)**   
  An opt-in security enhancement that addresses user bookmarks, purely HTTPS intended applications and intercepting traffic via certificates.
  
- **[XSS Cheat Sheet](http://n0p.net/penguicon/php_app_sec/mirror/xss.html)**   
  Underlying attack vectors of XSS for filter evasion.
  

  
  

