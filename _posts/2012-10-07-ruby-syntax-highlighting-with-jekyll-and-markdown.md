---
layout: post
title: Ruby Syntax Highlighting with Jekyll and Markdown
---

While getting accustomed to using [Jekyll](https://github.com/mojombo/jekyll)
to host this blog, we wanted to have
syntax highlighting and use Markdown at the same time.
Jekyll supports syntax highlighting directly through
[liquid extensions](https://github.com/mojombo/jekyll/wiki/Liquid-Extensions),
but we want to use markdown. How can we use both? Convert it!

You''ll first need to install [Pygments](http://pygments.org), a python library that offers syntax highlighting for a number of languages.

To convert your markdown to HTML on the fly, simply replace in your templates:

    {{ "{{ content " }}}}
with

    {{ "{{ content | markdownify " }}}}

You can now have the ease of markdown with the flexibility of liquid extensions.
### Markdown mixed with liquid extensions:
    [Markdown Link](http://www.philcolabs.com)

    {{ "{% highlight ruby %" }}}
    puts 'ruby syntax highlighint'
    {{ "{% endhighlight %" }}}

