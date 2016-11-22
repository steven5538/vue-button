# vue-button [![Build Status](https://travis-ci.org/steven5538/vue-button.svg?branch=master)](https://travis-ci.org/steven5538/vue-button) [![Dependency Status](https://gemnasium.com/badges/github.com/steven5538/vue-button.svg)](https://gemnasium.com/github.com/steven5538/vue-button) ![MIT License](https://img.shields.io/github/license/steven5538/vue-button.svg)

> Button component for Vue.js v2.0.1+.

![vue-button](http://i.imgur.com/YLEH5Ko.png)

## Installation

### NPM (Recommended)
``` bash
$ npm install vue-button
```
### manual
Download `dist/vue-button.js` and include it in your HTML file:
```html
<script src="path/to/vue-button/dist/vue-button.js"></script>
```
or you can include from [unpkg](https://unpkg.com).
```html
<!--use the lastest release-->
<script src="https://unpkg.com/vue-button@lastest"></script>
```
## Usage
```html
<!-- default button -->
<v-button>
  Button
</v-button>

<!-- disabled button -->
<v-button disabled>
  Button
</v-button>

<!-- large button -->
<v-button large>
  Button
</v-button>

<!-- markup button option: primary, success, warning, error -->
<v-button markup="success">
  Button
</v-button>

<!-- button with multiple attribute -->
<v-button markup="warning" large>
 Button
</v-button>
```
## ES Modules with NPM & vue-loader (Recommended)
```js
import Vue from 'Vue'
import VueButton from 'vue-button'

// register component to use
Vue.component('v-button', VueButton)
```
## Parameters
```js
/**
 * Equivalent to the `id` attribute on an `<button>`.
 * @type {String}
 */
id: {
  type: String,
  default: null
},

/**
 * Attach your custom class on the compontent.
 * That means you can change the style if you want.
 * @type {String}
 */
customClass: {
  type: String,
  default: null
},

/**
 * Equivalent to the `name` attribute on an `<button>`.
 * @type {String}
 */
name: {
  type: String,
  default: null
},

/**
 * Equivalent to the `disabled` attribute on an `<button>`.
 * @type {Boolean}
 */
disabled: {
  type: Boolean,
  default: false
},

/**
 * If set enable button font size will be large.
 * @type {Boolean}
 */
large: {
  type: Boolean,
  default: false
},

/**
 * Markup button.
 * The value can be `default`, `primary`, `success`, `warning`, `error`.
 * @type {String}
 */
markup: {
  type: String,
  default: 'default'
},

/**
 * Set the click event on `<button>`.
 */
@click {
  type: Object,
  defalut: null
}
```
