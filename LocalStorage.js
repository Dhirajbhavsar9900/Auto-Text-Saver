let input = document.querySelector("#input");

input.value = localStorage.getItem("SavedText");

input.addEventListener("input", function(){
    localStorage.setItem("SavedText", input.value);
})
