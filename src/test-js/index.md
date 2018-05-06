# Testing

Testing is very important part of software development process. Tests serve several purposes. Firstly, they check that your code actually does what it is supposed to. Secondly, they act as a safety-net for refactoring big project and allow better code quality and less manual QA. As a bonus, testable code is usually structured and written better than non-tested code.
Automated testing frees us from the need of manually testing our code each time, a task that becomes virtually impossible as the code-base grows.  

## Topics

1. Unit tests
    1. TDD
    2. BDD
1. UI tests
1. Tools
    1. Mocha
    1. Chai
    1. Sinon
    1. Protractor (Selenium)
1. Code coverage
1. Linters: ESLint

## Exercise

1. Implement [FizzBuzz](http://rosettacode.org/wiki/FizzBuzz#Alternative_version_.28one-liner.29) function.
2. Add a test case for each possibility, using Mocha.
3. Add a FizzBuzz generator function that receives a number N generates a concatenated string with results from #1 from 1 ... N
4. Add some tests to #4
5. Make sure all tests run in chrome
6. Make your test configuration output the code coverage

## Resources
* [JS Unit Testing for Beginners](https://designmodo.com/test-javascript-unit/)
* [JavaScript Testing Playlist](https://www.youtube.com/watch?v=KraMqFbLUGU&list=PLAwxTw4SYaPkv4LG-0UHNfhPkKPfYacOg&index=1)
* [Mocha for novice](https://hackernoon.com/testing-for-the-novice-javascript-developer-f41f22563855)
* [Types of tests](https://stackoverflow.com/questions/520064/what-is-unit-test-integration-test-smoke-test-regression-test)