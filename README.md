# Webpack loading dynamic modules

This project is an attempt to load modules dynamically in an app bundled by webpack, with those dynamic modules unknown at build time, and they import/use modules from the core bundle.

Idea: use a tool like requirejs or scriptjs to load the modules, and use Webpack externals and aliases to expose some core modules.

based on [typescript-webpack-starter](https://github.com/emyann/typescript-webpack-starter)