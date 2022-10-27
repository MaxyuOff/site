const windowInnerHeight = document.documentElement.clientHeight;
var doc = document.querySelectorAll("section");
doc.style.height = windowInnerHeight + "px";
Window.print(windowInnerHeight);
