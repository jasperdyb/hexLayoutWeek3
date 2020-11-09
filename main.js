import "./scss/main.scss";

var template = require("./src/template/layout/main.pug");

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = template();
});
