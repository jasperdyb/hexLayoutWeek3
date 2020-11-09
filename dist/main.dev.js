"use strict";

require("./scss/main.scss");

var template = require("./src/template/page/home.pug");

document.addEventListener("DOMContentLoaded", function () {
  document.body.innerHTML = template();
});