# gobble-rev

Compile [pug/jade](http://jade-lang.com/) templates with gobble

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-pug
```

## Usage

**gobblefile.js**

```js
var gobble = require( 'gobble' );

var templates = gobble( 'src/templates' );

module.exports = templates.transform( 'pug' );
```

## License

MIT. Copyright 2016 Ali Sabil
