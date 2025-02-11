const HOME = ""
const ABOUT = "about"
const EVENTS = "events"
const GALLERY = "gallery"
const SUPPORT = "support"


function redirect(e) {
    window.location.href = window.location.href.replace(SUPPORT, e);
}

function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById("dropdown-items").style.display = (document.getElementById("dropdown-items").style.display == "none") ?  "block" : "none";
}

function redirectSocial(e) {
    window.location.href = e == "FB" ? "https://www.facebook.com/profile.php?id=61571928262491" : (e == "IG") ? "https://www.instagram.com/sam.marsters/" : window.location.href;
}