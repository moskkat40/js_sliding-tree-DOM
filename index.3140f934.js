var e=document.querySelector(".tree");document.querySelectorAll("li").forEach(function(e){var n=document.createElement("span");n.classList.add("element"),e.prepend(n),n.prepend(n.nextSibling)}),e.addEventListener("click",function(e){var n=e.target;"element"===n.className&&n.nextSibling&&(n.nextSibling.hidden=!n.nextSibling.hidden)});
//# sourceMappingURL=index.3140f934.js.map
