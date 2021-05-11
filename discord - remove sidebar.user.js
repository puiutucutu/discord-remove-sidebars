// ==UserScript==
// @name         discord - remove sidebar
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://discord.com/channels/*/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  window.addEventListener("load", function () {
    const navs = document.getElementsByTagName("nav");
    for (let nav of navs) {
      nav.style.display = "none";
    }

    const re = /sidebar-[^ ]*/gm;
    const divs = document.getElementsByTagName("div");
    for (let div of divs) {
      const className = div.className;
      if (!!re.test(className)) {
        div.style.display = "none";
      }
    }
  });
})();
