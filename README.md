## cse210-tinyfoot-team13
Updated Bigfoot demo: [https://rohanthorat27.github.io/bigfoot/](https://rohanthorat27.github.io/bigfoot/)
Updated Littlefoot demo: [https://rohanthorat27.github.io/bigfoot/](https://rohanthorat27.github.io/littlefoot/)
# Tinyfoot

## Overview
- **Description**: Create footnotes with minimal JS and CSS overhead.
- **Version**: 1.0.0
- **Author**: CSE210 Team 13

## Installation and Rebuilding
You can download or clone this repo to your device, and then move the ```dist``` folder to your project workplace. Then, add 
1. 
```
<link
  rel="stylesheet"
  href="dist/style.css"
/>
```
2.
```
<script
  src="dist/index.js"
  type="application/javascript"
></script>
```
If you wish to change the source code, you can use
```bash
npm run build
```
to regenerate the ```dist``` folder

## Usage
Just add a ```<t-ftn><a id=“ftn:{number}”> footnote content <a/></t-ftn>``` tag!
Options: 
```<t-options data-hover="false" data-unhoverdelete="false" data-hoverdelay="0"></t-options>``` is the default for footnote options
This means that footnotes will not appear on hover. If you want to:
- Make the footnotes on hover, set ```data-hover=“true”```
- By default, footnotes disappear when user clicks off. If you want it to disappear on unhover, set ```data-unhoverdelete=“true”```
    - By default, footnotes disappear immediately when user hovers off. If you want it to disappear with delay, ```data-hoverdelay=<time in ms>```
# Basic Example
if you want a footnote that opens when user hovers on it and disappears 1 second after they hover off, use:
```<t-options data-hover=“true” data-unhoverdelete=“true” data-hoverdelay=“1000”></t-options>```
```<t-ftn><a id=“ftn:1”>Hello, World!<a/></t-ftn>```

## Functions
**initializeFootnotes()**
adds event listeners and sets up for footnotes

**toggleFootnote()**
toggles visibility when the note is clicked

**addFootnote()**
adds visibility to clicked footnote

**removeFootnote()**
removes visibility from clicked footnote

**removeFootnoteWithTimer()**
removes visibility from clicked footnote with timer (for hover delay)

**removeAllFootnotes(curr)**
removes visibility from all footnotes except for current note (if there is one)
curr = current note

**distance(tdiv, bdiv)**
calculates the distance to place the arrow from the top left of footnote-popup to the center of the footnote button

## Classes

class associated with the ```<t-ftn>``` custom tag, see https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
**Footnote()**

## Configuration
see the example section for using this in your code!
Options: 
```<t-options data-hover="false" data-unhoverdelete="false" data-hoverdelay="0"></t-options>``` is the default for footnote options
This means that footnotes will not appear on hover. If you want to:
- Make the footnotes on hover, set ```data-hover=“true”```
- By default, footnotes disappear when user clicks off. If you want it to disappear on unhover, set ```data-unhoverdelete=“true”```
    - By default, footnotes disappear immediately when user hovers off. If you want it to disappear with delay, ```data-hoverdelay=<time in ms>```

