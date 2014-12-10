FLL-Judging
==========

FLL Judging application is a first step towards a complete digital judging system. Please note that this is still very much under development and should not be used in live enviroments. 

Goal
----
The goal of the application is to support the judging process according the international FLL guidelines. This includes (but is not limited to) the following:
* Digital rubrics, with comments
* Ranking & nominations support
* Dissementation of rubrics (feedback) to teams
* Import and export of data (to and from judging lite or other applications)

Development
-----------
The application is built as an webapplication using angular. Like the scoring application the ambitioin is to support a wide range of configurations (tournament- and network use). It should also pull and push data to and from other applications. 

However the first step is to move all the judging forms (rubrics and nominations) to a digital version. 

Prerequisites & Installation
============================
The project is based on angularJS and setup using Yeoman generator. It requires

Install
-------
To install the required packages run `npm install` or use `bower install` to install the individual packages. The following packages are included:

* angular
* angular-mocks
* angular-scenario
* angular-animate
* angular-aria
* angular-cookies
* angular-messages
* angular-resource
* angluar-sanitize

Run
---
To preview (run) the application open a command prompt and execute: `grunt serve`

For testing execute `grunt test`

To build the application run `grunt`

Project
=======
If you have ideas, questions or want to contribute, please head over to the [issue tracker](https://github.com/FirstLegoLeague/flljudging/issues)

License
--------
This projected is licensed under the terms of the [GNU GPL v2.0 licenses](https://raw.githubusercontent.com/FirstLegoLeague/flljudging/master/LICENSE)

Basically, it allows users to legally copy, distribute and modify software. This means you can:
* Copy it onto your own servers, your client’s servers, your own computer, pretty much anywhere you want. There’s no limit to the number of copies you can make. 
* Provide a download link on your website. Put the software on a bunch of thumb drives and give them away. Print out the source code and throw it from the rooftops (please don’t, though, because that would waste a lot of paper and make a mess).
Charge a fee to distribute the software.
* If you want to charge someone to provide the software, set it up on their website or do anything else related to it, you can do so. But, you must give them a copy of the GNU GPL, which basically tells them that they could probably get the software elsewhere for free. Best to be up front about that, and about why you’re charging them.
* If you want to add or remove functionality, go ahead. If you want to use a portion of the code in another project, you can. The only catch is that the other project must also be released under the GPL. Ideally we would want you to share your improvements back with us on this GitHub. 
* We welcome your feedback but please remember that this software comes with no guarantees. We are dedicated volunteer and experiences software developpers and will do our best make sure we make a valuable and reliable contribution to the community. However the use of this software is at your own risk.  

Authors
--------

- [Kenny Meesters](mailto:k.meesters@gmail.com)

