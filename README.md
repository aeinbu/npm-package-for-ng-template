# Template

## Features

- Builds with webpack and babel
- Externalizes all node_modules components. (Ie. they are not included in the npm package you're building...)

## Goals
- This template will act as a starting point for creating npm packages representing angular components etc.
- The output must be compatible with commonJS, and also work when concatenated. with other javascript files.
- The template should contain as few devDependencies as possible,
  so that it will be easy to evolve the build configuration as different packages are updated or made obsolete.

## How to use this template project

1. Copy the files and structure of this project.
   (If you use `git clone` you would probably want to remove the `.git` directory before initializing your new repo.)
2. Create your NPM component in the `source` folder. (Modify entry and externals in `source/webpack.config.js` as neccessary.)
3. Modify `package.json` to reflect the correct names.
4. Try out your new component by modifying files in the `demo-app` folder. Run `npm run demo` to start the dev-server.
5. Build by running `npm run build`

## Usage patterns for Angular 1.x

- See `source/app/search/searchComponent.js` for how to include a template from an HTML-file.
- See `source/app/index.js` for how to use `$templateCache` to include a template for use with `<ng-include src="'...'"></ng-include>`.
  (As it is used in `source/app/index.html`.)
- See `source/app/search/index.js` for how to create a module, and which way the `require` statements point.
  Also note exporting the module name as a string.
- See `source/app/index.js`for how to include a module.
  Note both the `require` statement at top, as well as the dependency declaration in the `angular.module` statement.