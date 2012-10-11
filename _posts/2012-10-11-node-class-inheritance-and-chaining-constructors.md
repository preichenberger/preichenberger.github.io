---
layout: post
title: Node Class Inheritance and Chaining Constructors
author: Phil Reichenberger
---

This is an example of how to do node class inheritance and chain constructors:

### Node class inheritance and chaining constructors:
{% highlight javascript %}
var util = require('util')

var baseHandler = function(name) {
  baseHandler.prototype.name = name
}

baseHandler.prototype.test = function() {
  console.log(baseHandler.prototype.name)
}

var domainHandler = function(name) {
  domainHandler.super_(name)  
}

util.inherits(domainHandler, baseHandler)
var dh = new domainHandler('myname')

// This will output 'myname'
dh.test()
{% endhighlight %}
