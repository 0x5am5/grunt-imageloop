# grunt-imageloop

> Creating JSON files since '16.

## Getting Started
This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-imageloop --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-imageloop');
```

## The "image_loop" task

### Overview
In your project's Gruntfile, add a section named `image_loop` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  image_loop: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.minify
Type: `Boolean`
Default value: `false`

Minifies the json output.

### Usage Examples

#### Default Options
In this example, the default options are used to output a json file based on images found within all folders of the img folder.

```js
grunt.initConfig({
  image_loop: {
    options: {},
    files: {
      'tmp/data.json': 'img/**/*.{jpg,gif,png}',
    },
  },
});
```

#### Custom Options
In this example, custom options are used to simply minify the json.

```js
grunt.initConfig({
  image_loop: {
    options: {
      minify: true
    },
    files: {
      'tmp/data-min.json': 'img/**/*.{jpg,gif,png}',
    },
  },
});
```

## Release History
_(Nothing yet)_
