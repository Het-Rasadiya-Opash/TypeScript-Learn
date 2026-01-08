// Type Assertions
var title = document.getElementById("title");
if (title) {
    title.innerText = "heading";
}
var paragraph = document.getElementById("para");
if (paragraph) {
    paragraph.innerText = "Paragraph";
}
var box = document.getElementById("box");
if (box) {
    box.style.backgroundColor = "red";
}
// Query Selector with Generic Type
var btn = document.querySelector("#btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function (e) {
    alert("Button Clicked...");
});
var input = document.querySelector("#input");
var output = document.querySelector("#output");
input === null || input === void 0 ? void 0 : input.addEventListener("input", function () {
    if (output && input) {
        output.textContent = input.value;
    }
});
var a = document.querySelector("a");
a === null || a === void 0 ? void 0 : a.setAttribute("href", "http://www.google.com");
var form = document.querySelector("form");
var email = document.querySelector("#email");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (email) {
        console.log(email.value);
    }
});
var ul = document.querySelector("ul");
var li = document.createElement("li");
li.textContent = "three";
ul === null || ul === void 0 ? void 0 : ul.appendChild(li);
var user = "User";
var info = document.querySelector(".user");
info.innerHTML = "\n    <h2>Welcome</h2>\n    <p>Hello, ".concat(user, "</p>\n");
document.addEventListener("click", function (e) {
    var target = e.target;
    if (target.tagName === "BUTTON") {
        console.log("buttomn click");
    }
});
