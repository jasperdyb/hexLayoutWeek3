import "./scss/main.scss";

var template = require("./src/template/page/home.pug");

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = template();
});
