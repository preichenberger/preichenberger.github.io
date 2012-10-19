---
layout: post
title: Vagrant Mount Question Mark Fix
author: Phil Reichenberger
---

If you're using [Vagrant](http://vagrantup.com/) and mounting your local file system you may've run into some issues with individual files. If you edit a file on the local file system you might get some question marks when running an 'ls'. Here's a simple fix (from [http://blog.csanchez.org/2012/05/03/automatically-download-and-install-virtualbox-guest-additions-in-vagrant/](http://blog.csanchez.org/2012/05/03/automatically-download-and-install-virtualbox-guest-additions-in-vagrant/)):

Fix for VirtualBox(Vagrant) shared files: 

    vagrant gem install vagrant-vbguest
