# bemmit

[![Build Status](https://travis-ci.org/jlengstorf/bemmit.svg?branch=master)](https://travis-ci.org/jlengstorf/bemmit) [![Code Climate](https://codeclimate.com/github/jlengstorf/bemmit/badges/gpa.svg)](https://codeclimate.com/github/jlengstorf/bemmit) [![Test Coverage](https://codeclimate.com/github/jlengstorf/bemmit/badges/coverage.svg)](https://codeclimate.com/github/jlengstorf/bemmit/coverage)

A small utility for quickly generating [BEM-style naming for CSS classes](http://getbem.com/naming/).

## Installation

``` sh
# Install the package
npm install --save bemmit
```

## Usage

``` js
// Load bemmit
var bemmit = require('bemmit');

// Create a block called 'photo'.
var getClass = bemmit('photo');

// Get the block classname.
getClass(); // -> photo

// Get the block classname with the modifiers 'active' and 'round'.
getClass(null, ['active', 'round']); // -> photo photo--active photo--round

// Get an element class for the caption
getClass('caption'); // -> photo__caption

// Get an element class for the share button with the modifier 'pinterest'.
getClass('share', ['pinterest']); // -> photo__share photo__share--pinterest
```

## API

### `bemmit(blockName)`

Generates a function that will return BEM-style CSS classnames.

#### Parameters

- `blockName` — the name of the block. This is used as the base of the class name.

#### Return Value

- Function — a function that will generate CSS class names, with optional `element` and `modifiers` parameters.

### `bemmit(blockName)([element][, [modifiers]])`

Generates BEM-style CSS classname(s).

#### Parameters

- `element` (optional) — the element name
- `modifiers` (optional) — an array of modifiers for the class

#### Return Value

- String — the class or classes

#### Examples of Usage in Markup

``` js
var bemmit = require('bemmit');

// Create an instance of bemmit.
var getClass = bemmit('my-block');

// Now you can quickly add BEM-friendly classes to your HTML:
var myMarkup = `
<div class="${getClass()}">
    <h1 class="${getClass('header')}">Choose Your Weapon</h1>
    <ul class="${getClass('weapon-list')}">
        <li class="${getClass('weapon', ['rubber-chicken'])}">
            Rubber Chicken
        </li>
        <li class="${getClass('weapon', ['feather'])}">
            Feather
        </li>
        <li class="${getClass('weapon', ['colorful-language'])}">
            Colorful Language
        </li>
    </ul>
</div>
`;
```

This generates the following markup:

``` html
<div class="my-block">
    <h1 class="my-block__header">Choose Your Weapon</h1>
    <ul class="my-block__weapon-list">
        <li class="my-block__weapon my-block__weapon--rubber-chicken">
            Rubber Chicken
        </li>
        <li class="my-block__weapon my-block__weapon--feather">
            Feather
        </li>
        <li class="my-block__weapon my-block__weapon--colorful-language">
            Colorful Language
        </li>
    </ul>
</div>
```
