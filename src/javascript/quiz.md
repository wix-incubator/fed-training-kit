# JavaScript Quiz

### 1. Primitive Values

1. What's the value of `b`?

``` js
let a = [0, 1];
let b = a;
a.push(2);
console.log(b);
```

2. What's the result of the following and why?

```js
typeof([]);
```

### 2. Functions and `this`

1. What's the difference between `var` and `let`? Provide an example.
2. What's the result of following invocations?
```js
// given the following object
const me = {
  name: 'Adam',
  hello() {
    return `hello ${this.name}`;
  }
};
```
```js
me.hello();
```
```js
const anotherMeSaysHello = me.hello;
anotherMeSaysHello();
```
```js
const anotherMeSaysHello = me.hello;
anotherMeSaysHello.call(me);
```
```js
const anotherMeSaysHello = me.hello;
anotherMeSaysHello.call({name: 'Regina'});

```
```js
const anotherMeSaysHello = me.hello.bind(me);
anotherMeSaysHello();
```

3. What's the result of running every example? Explain the difference between them.

```js
function test () {
  console.log(test);
  var test = 5;
}
test();
```

```js
function test () {
  var test = 5;
  console.log(test);
}
test();
```
```js
function test () {
  console.log(test);
  let test = 5;
}
test();
```

4. Explain shadowing and provide code example that demonstrates its definition.

5. Provide code example of closure.
6. Fix the [alert index exercise](https://jsbin.com/gamupeboha/1/edit?html).

### 3. Objects and Inheritance

1. Draw the inheritance diagram of the following. Explain the result of `console.log` statement.

```js
let obj1 = { a: 1 };
let obj2 = Object.create(obj1);
console.log(obj2.a) // 1
```

2. Draw the inheritance diagram of the following code.

```js
class A {
    sayA() {
        console.log('A');
    }
}
class B extends A {
    sayB() {
        console.log('B');
    }
}
const a = new A();
const b = new B();
```

### 4. Async

1. Explain how event loop works.
2. Fix the following [problem](http://jsbin.com/tobipi/latest/edit?html,js,console,output).
3. What's the callback hell?
4. Implement the following using callbacks and promises.

```js
function verifyBeforeRender(successCallback) {
  // make 2 ajax calls at the same time
  // when both of them return result, make a 3rd ajax call
  // if the result if 3rd ajax request was successful, call a `successCallback`
}
```

### 5. DOM API
1. Implement HTML page with a counter and two buttons of increment and decrement. Everything in JS. File of `index.html` should contain empty `body` as an initial state.