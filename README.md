modern-web-framework
====================

A personal template for creating modern HTML5 single-page webapps.


Why
===

* I'm teaching my fiancé to code at the moment.  I want her to learn how to do it right,
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
| Name                  | Version | License    | Purpose |
|-----------------------|---------|------------|---------|
| Backbone.js           | 0.9.10  | MIT        | Core    |
| jQuery                | 1.9.1   | MIT        | Core    |
| RequireJS             | 2.1.5   | MIT or BSD | Core    |
| RequireJS text        | 2.0.5+  | MIT or BSD | Core    |
| RequireJS i18n        | 2.0.2   | MIT or BSD | Core    |
| Underscore.js         | 1.4.4   | MIT        | Core    |
| Jasmine               | 1.3.1   | MIT        | Test    |
| Jasmine HTML Reporter | 1.3.1   | MIT        | Test    |
| Sinon.JS              | 1.6.0   | BSD        | Test    |

* Core libraries are part of the main application.  You will need to deploy them onto your production webserver.
* Test libraries are only used during development and do not need to be deployed into production.

License
=======
This project is released under the MIT license.  See the LICENSE file in the project root directory for details.


TODO
====
* Coding
	* Example of a Backbone model loading from the server via AJAX
	* Example of a Jasmine test mocking the server response with Sinon
	* Set up a Backbone router and have a couple of different dummy pages to switch between

* Next steps
	* Possibly move specs & specrunner into seperate dir to make exclusion for minification easier
	* Set up r.js minifier etc for production builds
	* Research what's in HTML5 Boilerplate that I might need - e.g. reset css, IE shim, etc


Useful Documentation
====================

Internationalisation
--------------------

Add strings that you want to externalise to i18n/nls/bundle.js (the default i18n bundle). You can then set up
locale-specific translations by creating extra bundle files similar to i18n/nls/en-uk/bundle.js - note that you need to
list the locale in the default bundle at the end of the file.

You can force a locale by adding the following section to require-config.js

	config: {
		i18n: {
			locale: "en-uk"
		}
	}

Just add that to require-config.js wholesale, just before the final `});` in the file.  You'll then see a very different
 message in the splashscreen view!
