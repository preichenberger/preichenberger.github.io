---
layout: post
title: Thor Subcommands and Formatting
---

We have a project that has CLI to perform a number of functions. 
In Ruby, optparse is pretty good, but we wanted subcommands similar to Heroku''s wonderful
client. Enter [Thor](https://github.com/wycats/thor 'Thor'). Thor maps command line arguments to class methods.
It wasn''t entirely clear how to do subcommands from the docs, but here''s how to use subcommands in Thor.

### Setup your subcommand:
{% highlight ruby %}
require 'thor'

class SubCommand < Thor

  desc 'realcommand usage', 'realcommand description'
  def realcommand
    puts 'this is a real command'
  end

end
{% endhighlight %}

### Use subcommand in main command:
{% highlight ruby %}
class Command < Thor

  desc 'subcommand usage', 'subcommand description'
  subcommand 'subcommand', SubCommand

end
{% endhighlight %}

After getting our subcommands working, we wanted the output to be formatted to our needs. You can override the following methods to the formatting you want out of Thor.

### Thor formatting methods to override:
{% highlight ruby %}
require 'thor'

class Command < Thor

  # Help for a task or command
  desc 'help', 'list available commands'
  def help(task = nil, subcommand = false)
  end
    
  class << self
    # Gives help for a task
    def task_help(shell, task_name)
    end 

    # Help
    def help(shell, subcommand = false)
    end

    # Subcommand Help
    def subcommand_help(cmd)
    end

    # Banner
    def banner(task, namespace = nil, subcommand = false)
    end
end

{% endhighlight %}
