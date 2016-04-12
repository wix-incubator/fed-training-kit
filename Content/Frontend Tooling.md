*[![Feedback](/assets/feedback.gif) Got feedback?](mailto:leeb@wix.com)*

# What are Frontend Tools?

Following the growth in the frontend field in the recent years, many new tools were invented in order to allow developers to develop their software faster and better.
This kit covers a few of them.

![](/assets/clock-16.png) **This kit will take you approximately 6 hours**

<a href="#learn"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/btn-learn.png" alt="Learn" height="48" width="140"></img></a>
<a href="#practice"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/btn-practice.png" alt="Practice" height="48" width="140"></img></a>
<a href="#extras"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/btn-extras.png" alt="Extras" height="48" width="140"></img></a>


# Learn


####npm

[npm](https://www.npmjs.com/) is a package manager for JavaScript, and is the default for Node.js.

A package manager is a collection of tools that automate the process of installing, upgrading, configuring, and removing packages, distributions of software and data in archive files. 
Packages contain metadata and a list of dependencies necessary for the software to run properly, e.g. a basic package [jscore](https://www.npmjs.com/package/jscore).


- **[Getting Started](http://www.sitepoint.com/beginners-guide-node-package-manager/)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-1h.png"></img></a> <img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>   
  A Beginner’s Guide to npm - the Node Package Manager.


####Bower
[Bower](http://bower.io/) is a package manager for the web which allows you to easily manage dependencies for your projects. This includes assets such as JavaScript, images and CSS. It is maintained by Twitter and the open-source community.
The important thing to note here is that Bower is just a package manager, and nothing else. It doesn’t offer the ability to concatenate or minify code, it doesn’t support a module system like AMD: its sole purpose is to manage packages.

The main difference between npm and Bower is that npm is usually used for managing the server-side packages and tools, where Bower is usually used for the client-side packages, which are running in the browser.


- **[Getting Started](http://blog.teamtreehouse.com/getting-started-bower)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-1h.png"></img></a> <img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>   
  About installing the Bower CLI and the various commands that are available for managing packages.


####Task runners - Grunt and Gulp
[Grunt](http://gruntjs.com/) is a task-based command line build tool for JavaScript projects. When working on a JavaScript project, there are a bunch of things you'll want to do regularly – concatenate given files, run JSHint on your code, run tests, minify your scripts etc. Instead of doing all those tasks manually, Grunt can be used to do that automatically.
Grunt is NOT a standalone build tool, it is a task runner. A task can be anything that needs to be done for the project, to turn it from a bunch of code files to something that can be distributed. Tasks are modules installed with npm.

- **[Using Grunt Demo](https://www.youtube.com/watch?v=TMKj0BxzVgw)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-1h.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-video.png"></img></a> <img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>   
  Start with the demo and what you don't understand, figure out from [this guide](http://gruntjs.com/getting-started). [Here](http://gruntjs.com/sample-gruntfile)'s a link to a walkthrough of a sample Gruntfile.
 
- **[Another Task Runner - Gulp](https://www.youtube.com/watch?v=LmdT2zhFmn4)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-5m.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-video.png"></img></a> 
  A short explanation of how a typical Gulp file is structured and how it differs from Grunt.


####Yeoman
[Yeoman](http://yeoman.io/) helps you kickstart new projects, prescribing best practices and tools to help you stay productive. To do so, it provides a generator ecosystem. A generator is basically a plugin that can be run with the `yo` command to scaffold complete projects or useful parts.
The plugin promotes the Yeoman workflow that is comprised of three types of tools: the scaffolding tool (yo), the build tool (Grunt, Gulp, etc) and the package manager (like Bower and npm). It also includes support for linting, testing, minification and much more, so developers can focus on solutions rather than worrying about the little things.

- **[Getting Started](http://yeoman.io/learning/index.html)** <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/time-30m.png"></img></a> <a href="#"><img src="https://github.com/wix/fed-training-kit/blob/master/assets/tag-read.png"></img></a>   
  Explains installation, basic scaffolding and using packages such as Bower, Gulp and Grunt.


# Practice

- [ ] **KickStart Your AngularJS Development** <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  Follow the instructions in [this tutorial](http://www.sitepoint.com/kickstart-your-angularjs-development-with-yeoman-grunt-and-bower/). It covers setting up an application using a Yeoman generator, installing its npm and Bower packages and using Grunt to launch a local server and run the tests of the application.

- [ ] **Setup a Wix Development Environment** <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  Follow the instructions [here](https://kb.wixpress.com/login.action;jsessionid=92A94AF44A013064C1BBF5575330597D?os_destination=%2Fpages%2Fviewpage.action%3Ftitle%3DWix-Angular%2Bdevelopment%2Benvironment%26spaceKey%3Ddashboard).
  

# Extras

- **[Build Tools vs npm Scripts: Why Not Both?](http://engineering.hobsons.com/2015/06/26/build-tools-vs-npm-scripts-why-not-both/)**
- **[What npm is capable of as a build tool](http://www.sitepoint.com/guide-to-npm-as-a-build-tool/)**


**Quick Reference Links**

- **npm**    
  - [Search packages](https://www.npmjs.com/)
  - [Docs you're looking for](https://docs.npmjs.com/)

- **Bower**    
  - [Search packages](http://bower.io/search/)
  - [Creating packages](http://bower.io/docs/creating-packages/)
  - [Cool Stats](http://bower.io/stats/)

- **Grunt**    
  - [Plugins](http://gruntjs.com/plugins)

- **Yeoman**    
  - [Generators](http://yeoman.io/generators/)
  - [Writing your own Generator](http://yeoman.io/authoring/)


