---
layout: post
title: Puppet, Hash of Resources Using create_resources
---

Puppet can be overwhelming. From modules, to classes, to defines, includes, 
and requires. There is a smorgasburg of concepts to keep track of and the list 
keeps growing. One nugget of awesomeness I found recently is 
[create_resources] (http://docs.puppetlabs.com/references/latest/function.html#createresources)

If you ever tried using an [ENC] (http://docs.puppetlabs.com/guides/external_nodes.html) with Puppet you'll
find that you cannot add individual resources, only classes.

Here's a way to use an ENC and pass a hash to create a bunch of resources.

Let's create a class that uses create_resources.

### Puppet class: modules/testclass/manifests/init.pp
{% highlight ruby %}
class testclass (
  $files = {}
) {

  $file_defaults = {
    mode  => 0644
  }

  create_resources(file, $files, $file_defaults)
}
{% endhighlight %}

Next, update your ENC to output the following:
{% highlight yaml %}
---
classes:
  testclass:
    files: 
      '/tmp/test':
        ensure: 'present'
      '/tmp/test1':
        ensure: 'present'
{% endhighlight %}

Now, run puppet and you should see:

### Puppet output
{% highlight bash %}
Notice: /Stage[main]/Testclass/File[/tmp/test1]/ensure: created
Notice: /Stage[main]/Testclass/File[/tmp/test]/ensure: created
Notice: Finished catalog run in 0.03 seconds
{% endhighlight %}

Thats it. This also works for custom defines. Now you can pull data for
something like a vhost, dns record, individual conf files, or anything else a
define is good for from a datastore and have Puppet express it for you.
