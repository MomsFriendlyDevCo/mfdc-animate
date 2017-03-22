mfdc-animate
============
Stock animations for Angular.


Installation
============

1. Use NPM to grab the repo

	npm install mfdc-animations

2. Add the main CSS library somewhere in your HTML:

	<link href="/node_modules/mfdc-animations/mfdc-animation.css" rel="stylesheet" type="text/css"/>


A demo is also available. To use this [follow the instructions in the demo directory](./demo/README.md).


Usage
=====
This library is intended to be separated into atomic CSS components. To use combine one optional primary effect, one optional reflow and any number of modifiers.

| Type                | Class                   | Description                                                                                                        |
|---------------------|-------------------------|--------------------------------------------------------------------------------------------------------------------|
| Base                | `animate`               | The base animation class. This must be present on any item that will animate                                       |
| Primary Effect      | `animate-fade`          | Apply a simple fade in / out effect                                                                                |
| Reflow              | `animate-reflow-width`  | Resize the elements width while animating                                                                          |
|                     | `animate-reflow-height` | Resize the elements height while animating. This is ideal for vertical lists or use within tables                  |
|                     | `animate-reflow-scale`  | Scale the entire element while animating. This class is recommended for reflow as it is GPU accelerated            |
| Modifier / Duration | `animate-duration-TIME` | Modify the animation time. Time can be: `100ms`, `200ms`, `500ms` (default), `1s`, `2s`, `5s`, `10s`, `20s`, `30s` |
| Modifier / Easing   | `animate-easing-EASE`   | Modify the animation easing. Ease can be: `linear`, `ease`, `ease-in`, `ease-out` (default), `ease-in-out`         |


Common Gotchas
==============

* `ng-repeat` items need to have a `track by` or an entire copy of the DOM tree is copied after the current node. Basically if your list appears to not remove items from the middle - you're missing a `track by` clause.
