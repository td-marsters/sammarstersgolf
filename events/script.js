const HOME = "sammarstersgolf/"
const ABOUT = "sammarstersgolf/about/"
const EVENTS = "sammarstersgolf/events/"
const NEWS = "sammarstersgolf/news/"


function redirect(e) {
    window.location.href = window.location.href.replace(EVENTS, e);
}

function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById("dropdown-items").style.display = (document.getElementById("dropdown-items").style.display == "none") ?  "block" : "none";
}