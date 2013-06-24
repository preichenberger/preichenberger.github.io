---
layout: post
title: Node Auto Reload
---

Restarting an application is a common task during node development. However, if you're like me and hate restarting your app everytime you make a code change then you're in luck! 

[node-dev](https://github.com/fgnass/node-dev) will restart the app everytime you save a change to your code. One of the best parts of node-dev is that no configuration is required. This was a great suprise after having a run in with [node-supervisor](https://github.com/isaacs/node-supervisor) 

According to the github page the magic behind the no configuration is:
> This is done using a thin wrapper script that hooks into the require() function as well as into several methods of the VM module to determine which files need to be monitored." 

Also:
> This does not only work for .js files, but also for .json or .node or .coffee files or any other custom extension that has been added to require.extensions.

The docs suggest to install node-dev globally with:

### Global install of node-dev
{% highlight bash %}
npm install -g node-dev
{% endhighlight %}

I'm a stickler when it comes to dependencies so I like to install into a node_modules bundle.

### Create your app directory:
{% highlight bash %}
mkdir app
{% endhighlight %}

### Create sample app at app/app.js:
{% highlight javascript %}
var express = require('express');
var app = express();
{% endhighlight %}

### Setup your package.json at app/package.json:
{% highlight javascript %}
{
  "name": "app",
  "description": "This app does stuff",
  "version": "0.0.1",
  "private": true,
  "dependencies": {
    "express": "*"
  },
  "devDependencies": {
    "node-dev": "*"
  }
}
{% endhighlight %}

### Install node_modules:
{% highlight bash %}
cd app
npm install
{% endhighlight %}

### Run app with node-dev:
{% highlight bash %}
cd app
node_modules/node-dev/node-dev app.js
{% endhighlight %}

Now open up app.js make a change and save and you should see the following in console:

### node-dev restart output
{% highlight bash %}
[INFO] Restarting
{% endhighlight %}

And that's it, no more reloading your app during development
