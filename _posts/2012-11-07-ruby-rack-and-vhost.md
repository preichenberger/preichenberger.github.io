---
layout: post
title: Ruby, Rack, and Vhost
author: Phil Reichenberger
---

[Sinatra](http://www.sinatrarb.com/) is a great microframework for web apps. One of the great things about Sinatra is that it's [Rack](http://rack.github.com/) based so you can add middleware! I couldn't find any easy way to have multiple vhosts for Sinatra so I made my own middleware, [rack-vhost](http://github.com/preichen/rack-vhost) I can now have multiple Sinatra apps be accessed through one router app!

Example config.ru using rack-vhost:
    require 'rack/vhost'

    class Router
      def call(env)
        [200, { 'Content-Type' => 'text/plain' }, 'Router app']
      end
    end

    class APIApp
      def call(env)
        [200, { 'Content-Type' => 'text/plain' }, 'API app']
      end
    end

    class MainApp
      def call(env)
        [200, { 'Content-Type' => 'text/plain' }, 'Main app']
      end
    end

    use Rack::Vhost, :vhost => '^api', :app => APIApp.new
    use Rack::Vhost, :vhost => 'www.philcolabs.com', :app => MainApp.new
    run Router.new
