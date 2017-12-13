# FLL-Judging
The FLL Judging application is an application to make the judging during a tournament digital. It is a first step to move to a complete digital scoring and judging system for FLL tournaments. *Currently this repository is in a __development__ stage*.

#### Goal
The goal of the application is to support the judging process according the international FLL guidelines. This includes (but is not limited to) the following:
- Digital rubrics, with comments
- Ranking & nominations support
- Dissementation of rubrics (feedback) to teams
- Import and export of data (to and from judging lite or other applications)
For more information on the requirements refer to the [documentation](/description.md) file.

## Development
This application is made using [**Angular**](https://angular.io). Like the [*scoring*](https://github.com/firstlegoleague/fllscoring) it is the ambition to support a wide range of configurations.

#### Installation
The easiest thing to install this application is using [NodeJS](https://nodejs.org) and clone this repository. Then use `npm install` to install the dependencies. See the [wiki/dependencies](https://github.com/firstlegoleague/flljudging/wiki) for the list of packages this project uses.

Since Angular has its own local server you can use `ng serve` to start serving the application. Go to *http://localhost:4200* in your web browser to see the application work. After each save of a file, Angular will automatically reload the page.

#### Contribution
We appreciate contribution and feedback. If you want to contribute please fork this repository and make a pull-request. Read the [issues](https://github.com/firstlegoleague/flljudging/issues) and the [wiki](https://github.com/firstlegoleague/flljudging/wiki) to see what we are working on and where we need help.

## Project
We try to keep the application modular since it has a lot of different functionalities. The overview of modules can be find on the [wiki](https://github.com/firstlegoleague/flljudging/wiki).

#### Parts
Since the application does not only exists of code, the project is divided into parts:

- Code
  - Bugs (have the highest priority in the project)
  - Requirements (functions that must be implemented, high priority)
  - Features (functions that could be implemented, lower priority)
  - Ideas (extra functions that may be implemented, needs decision)
- Documentation
- FLL-digitalization (things that are related to the general digitalization projects for the FLL)

In the [issues](https://github.com/firstlegoleague/flljudging/issues) you can see the list of things that need work or that we are Currently working on. If you find a bug or want to start working on something, please comment on the corresponding issue.

## License
This projected is licensed under the terms of the [GNU GPL v2.0 licenses](/LICENSE).

Basically, it allows users to legally copy, distribute and modify software. This means you can:

- Copy it onto your own servers, your client’s servers, your own computer, pretty much anywhere you want. There’s no limit to the number of copies you can make.
- Provide a download link on your website. Put the software on a bunch of thumb drives and give them away. Print out the source code and throw it from the rooftops (please don’t, though, because that would waste a lot of paper and make a mess). Charge a fee to distribute the software.
- If you want to charge someone to provide the software, set it up on their website or do anything else related to it, you can do so. But, you must give them a copy of the GNU GPL, which basically tells them that they could probably get the software elsewhere for free. Best to be up front about that, and about why you’re charging them.
- If you want to add or remove functionality, go ahead. If you want to use a portion of the code in another project, you can. The only catch is that the other project must also be released under the GPL. Ideally we would want you to share your improvements back with us on this GitHub.
- We welcome your feedback but please remember that this software comes with no guarantees. We are dedicated volunteers and experienced software developers and will do our best make sure we make a valuable and reliable contribution to the community. However the use of this software is at your own risk.

## Authors
- [Marcin van de Ven](https://github.com/marzman95)
- [Kenny Meesters](https://github.com/kmeesters)
