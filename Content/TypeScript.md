*[![Feedback](/assets/feedback.gif) Got feedback?](https://docs.google.com/a/wix.com/forms/d/1aJHLJJsRKY_5TgHgsqh1Yrkt_EYaDkm-t8wCKNqGLMo/viewform?usp=send_form)*

# What is TypeScript?

[TypeScript](http://www.typescriptlang.org/) is a typed superset of ES6 JavaScript (i.e. any JavaScript code is TypeScript code).

It allows you to add optional static representation to your JS dynamic types, that are evaluated at development time.
Type inference is automatic, offering static checking, symbol-based navigation, statement completion, and code refactoring for high-confidence application development.

![](/assets/clock-16.png) **This kit will take you approximately 2 hours**

<a href="#learn"><img src="https://github.com/wix/ng-training-kit/blob/master/assets/btn-learn.png" alt="Learn" height="48" width="140"></img></a>
<a href="#practice"><img src="https://github.com/wix/server-training-kit/blob/master/assets/btn-practice.png" alt="Practice" height="48" width="140"></img></a>
<a href="#extras"><img src="https://github.com/wix/server-training-kit/blob/master/assets/btn-extras.png" alt="Extras" height="48" width="140"></img></a>


# Learn

  Before we begin, let's have a look at what TypeScript looks like.
  Consider the following JS code:

  ```
  /**
   * @param {string} name - Somebody's name.
   * @param {number} age - Somebody's age.
   */
  function sayHello(name, age) {
     alert(name.toLowerCase() + ' is ' + age.toLowerCase());
  }
  ```

  In TypeScript, we can add the variables' types as part of the code:
  ```
  function sayHello(name:string, age:number){
     alert(name.toLowerCase() + ' is ' + age.toLowerCase());
  }
  ```
  As a result, TypeScript will color `age.toLowerCase()` in red ONCE WE WRITE IT, so we can change it to `age` right away.
  In large scale applications, that have hundreds of variables, classes, modules, interfaces and more, automatic type inference is invaluable.

  When we do run the code, TypeScript will be compiled into idiomatic JS, so this is what we'll get:
  ```
  function sayHello(name, age) {
     alert(name.toLowerCase() + ' is ' + age);
  }
  ```

- **[Introduction to TypeScript](http://media.ch9.ms/ch9/c3e5/e5e02f2e-5962-48db-9ddd-85e27a4fc3e5/IntroducingTSAndersH_mid.mp4)**   <a href="#"><img src="/assets/time-1h.png"></img></a> <a href="#"><img src="/assets/tag-video.png"></img></a>     
A great run-through TypeScript's features, that provides you with enough knowledge to begin writing in TypeScript.


# Practice

- [ ] **Experience TypeScript in the Browser** <a href="#"><img src="/assets/time-5m.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  Copy one of [these](http://www.typescriptlang.org/Samples) TypeScript code samples (select one of the ts files) to the [playground](http://www.typescriptlang.org/Playground).
  Hover variables, classes etc. to view their types.


- [ ] **Add Types to JS Sample Code** <a href="#"><img src="/assets/time-30m.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  Copy the following snippet to the [playground](http://www.typescriptlang.org/Playground) and write it in TypeScript.
  ```
  var Person = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
  }

  Person.prototype.greet = function (otherName) {
    alert('Hi ' + otherName + ', I am ' + this.firstName + '. Nice to meet you!');
  }
  ```
  Now add an Employee class in TypeScript, that inherits from Person. The constructor should also receive the work place and the greet function should use that too.


- [ ] **Quick Start** <a href="#"><img src="/assets/time-30m.png"></img></a> <a href="#"><img src="/assets/tag-handson.png"></img></a>     
  Follow [this guide](http://www.typescriptlang.org/Tutorial) for getting TypeScript and writing a basic web applciation.


# Extras


- **[Definitely Typed](https://github.com/borisyankov/DefinitelyTyped)**   
  The repository for high quality TypeScript type definitions.


- **[TypeScript Roadmap](https://typescript.codeplex.com/wikipage?title=Roadmap)**   
