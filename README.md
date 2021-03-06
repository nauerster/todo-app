#AngularJS Web App

A basic Frontend Web Application using AngularJS as the MV* JS Framework. The ToDo-App incorporates other open-source projects including Bootstrap which are maintained via BowerJS. A GruntJS configuration has also been implemented and provides common build processes including LESS compiling, CSSMin, HTMLHint, Concatenation, Uglify and Watch. 

* [App Stack](#app-stack)
* [Setup](#setup)
* [Startup](#startup)
* [Build](#build)
* [Folder Structure](#folder-structure)

##App Stack

* [nodeJS](http://nodejs.org/)
	* [Grunt](http://gruntjs.com/)
		* [grunt-cli](https://github.com/nDmitry/grunt-autoprefixer)
		* [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less)
		* [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
		* [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)
		* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
		* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
	* [Bower](http://bower.io/)
* [AngularJS](http://angularjs.org/)
* [Bootstrap](http://getbootstrap.com)


##Setup
#####Step 1: Install nodeJS
Use the [installer](http://nodejs.org/download/) for initial installation as well as updates to nodeJS and NPM.

#####Step 2: Download Code

Either download (i.e. ZIP) or GIT clone this repository so that its on your local computer.

#####Step 3: Install NPM packages

You can configure what [NPM](https://npmjs.org/) installs by modifying the 'component.json' file in the root of the repo. All packages will be installed to the `/node_modules` directory in the root of the repo.

From the command line, in a terminal, go to the root directory and run:

```javascript
> npm install
```
#####Step 4: Install Bower globally

Install bower globally (if you haven't already).
```javascript
> npm install -g bower
```

#####Step 5: Get Bower libraries

You can configure what [bower](http://sindresorhus.com/bower-components/) retrieves by editing the dependencies in the `bower.json` file before running the install command.

From the command line, in a terminal, go to the root directory and run:

```js
> bower install
```

All packages will be installed to the `/bower_components` directory in the root of the repo (bower will create the 'bower_componets' folder for you).

#####Step 6: Configure Node server

Edit the `server.js` file to modify the server port you want to use for the app.


##Startup

#####Step 1: Start node server

From the command line, in a terminal, go to the root directory and run:


```js
> node server.js
```

##Build

Go to the root directory and run:

```js
> grunt
```

This will run all configured Grunt tasks, including compiling LESS, autoprefixing for vendor specific CSS, CSSComb for organizing CSS properties in the best order, CSS Minification, Javascript Uglify/minification, JSON data faking and a Watch setup on any files that effect the Grunt build process so they fire on file change.

##Folder Structure

		