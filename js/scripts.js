var rusInput = document.querySelector(".rus__input");
var thaiInput = document.querySelector(".thai__input");
var usInput = document.querySelector(".us__input");
var rusInputLine = document.querySelector(".form-blocks__rus");
var thaiInputLine = document.querySelector(".form-blocks__thai");
var usInputLine = document.querySelector(".form-blocks__us");


rusInput.addEventListener("focus", function () {
      rusInputLine.classList.add("input-focus--js");
});
rusInput.addEventListener("blur", function () {
      rusInputLine.classList.remove("input-focus--js");
});

thaiInput.addEventListener("focus", function () {
      thaiInputLine.classList.add("input-focus--js");
});
thaiInput.addEventListener("blur", function () {
      thaiInputLine.classList.remove("input-focus--js");
});
usInput.addEventListener("focus", function () {
      usInputLine.classList.add("input-focus--js");
});
usInput.addEventListener("blur", function () {
      usInputLine.classList.remove("input-focus--js");
});