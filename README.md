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

Optionally, you can also contact [Kenny Meesters](mailto:k.meesters@gmail.com)

