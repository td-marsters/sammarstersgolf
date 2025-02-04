const HOME = "";
const ABOUT = "about/";
const EVENTS = "events/";
const NEWS = "news/";

function redirect(e) {
    window.location.href = window.location.href.replace(ABOUT, e);
}

function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById("dropdown-items").style.display = (document.getElementById("dropdown-items").style.display == "none") ?  "block" : "none";
}