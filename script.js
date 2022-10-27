const windowInnerHeight = document.documentElement.clientHeight;
var doc = document.querySelectorAll("section");
doc.height = windowInnerHeight + "px";
Window.print(windowInnerHeight);
