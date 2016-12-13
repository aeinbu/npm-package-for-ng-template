# Template
## How to use this template project

1. Copy the files and structure of this project.
2. Create your NPM component in the `source` folder. (Modify entry and externals in `source/webpack.config.js` as neccessary.)
3. Modify `package.json` to reflect the correct names.
4. Try out your new component by modifying files in the `demo-app` folder. Run `npm run demo` to start the dev-server.
5. Build by running `npm run build`

## Features

- Builds with webpack and babel
- Externalizes all node_modules components. (Ie. they are not included in the npm package you're building...)

## Usage patterns for Angular 1.x

- See `source/app/search/searchComponent.js` for how to include a template from an HTML-file.
- See `source/app/index.js` for how to use `$templateCache` to include a template for use with `<ng-include src="'...'"></ng-include>` (As it is done in `source/app/index.html`.)
