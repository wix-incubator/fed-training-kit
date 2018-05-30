# JavaScript Quiz

### 1. Primitive Values

1. What's the value of `b`?

``` js
let a = [0, 1];
a.push(2);
let b = a;
console.log(b);
```

2. What's the result of the following and why?

```js
typeof([]);
```

### 2. Functions

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