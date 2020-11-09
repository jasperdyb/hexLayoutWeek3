"use strict";

require("./scss/main.scss");

var template = require("./src/template/layout/main.pug");

document.addEventListener("DOMContentLoaded", function () {
  document.body.innerHTML = template();
});