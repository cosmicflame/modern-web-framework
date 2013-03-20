modern-web-framework
====================

A personal template for creating modern HTML5 single-page webapps.


Why
===

* I'm teaching my finance to code at the moment.  I want her to learn how to do it right,
but setting up all this boilerplate is hard and annoying.  I want to give her a good starting point so she can focus
on building something cool and shiny right now rather than having to configure require.js first.
* I use this stuff at work all the time but have never had a go at setting it up from scratch.  I wanted to learn more...
* When I get home every night I have lots of plans for cool coding projects, but the thought of
setting up the boilerplate holds me back from actually doing them.  NEVER AGAIN!

What this will be
=================
A good starting point for writing a modern HTML5 webapp using Backbone and Require, with Jasmine tests already set up.

What this will not be
=====================
A project that will do anything useful.  If you run it you'll get a couple of nice dummy pages but that's it!

Libraries
=========
* Backbone
* jQuery
* Require
* Require text plugin
* Underscore
* Jasmine
* Jasmine HTML Reporter
* Sinon

License
=======
I'm currently thinking of licensing this under something really permissive, e.g. BSD, MIT or WTFPL.  I will update
this file once I've decided!


TODO
====
* Coding
	* Example of a Backbone model loading from the server via AJAX
	* Example of a Jasmine test mocking the server response with Sinon
	* Set up a Backbone router and have a couple of different dummy pages to switch between

* Admin
	* Decide on license
	* Look up licenses of libraries in use and make sure I'm complying with them

* Next steps
	* Possibly move specs & specrunner into seperate dir to make exclusion for minification easier
	* Set up r.js minifier etc for production builds
	* Research what's in HTML5 Boilerplate that I might need - e.g. reset css, IE shim, etc

