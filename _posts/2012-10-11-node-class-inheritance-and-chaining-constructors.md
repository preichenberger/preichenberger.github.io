---
layout: post
title: Node Class Inheritance and Chaining Constructors
author: Phil Reichenberger
---

This is an example of how to do node class inheritance and chain constructors:

### Node class inheritance and chaining constructors:
{% highlight javascript %}
var util = require('util')

function BaseHandler(name) {
  this.name = name
}

BaseHandler.prototype.test = function() {
  console.log(this.name)
}

function DomainHandler(name) {
  DomainHandler.super_.bind(this)(name)
}

util.inherits(DomainHandler, BaseHandler)
var dh = new DomainHandler('myname')


// This will output 'myname'
dh.test()
{% endhighlight %}
