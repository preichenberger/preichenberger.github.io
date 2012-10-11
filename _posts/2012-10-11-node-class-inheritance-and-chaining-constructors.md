---
layout: post
title: Node Class Inheritance and Chaining Constructors
author: Phil Reichenberger
---

This is just a clear example of how to do node class inheritance and chain constructors:

### Node class inheritance and chaining constructors:
{% highlight javascript %}
var util = require('util')

var baseHandler = function(name) {
  this.name = name
}

var domainHandler = function(name) {
  domainHandler.super_(name)  
}

util.inherits(domainHandler, baseHandler)

// This has to come after inherits
domainHandler.prototype.test() = function() {
  console.log(domainHandler.name)
}

var dh = new domainHandler('myname')

// This will output 'myname'
dh.test()
{% endhighlight %}