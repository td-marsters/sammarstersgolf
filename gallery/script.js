const HOME = ""
const ABOUT = "about"
const CORPORATE = "corporate"
const GALLERY = "gallery"
const SUPPORT = "support"


function redirect(e) {
    window.location.href = "https://" + window.location.host + "/" + e;
}

function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById("dropdown-items").style.display = (document.getElementById("dropdown-items").style.display == "none") ?  "block" : "none";
}

function redirectSocial(e) {
    window.location.href = e == "FB" ? "https://www.facebook.com/profile.php?id=61571928262491" : (e == "IG") ? "https://www.instagram.com/sam.marsters/" : window.location.href;
}