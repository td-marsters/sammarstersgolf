const HOME = ""
const ABOUT = "about/"
const EVENTS = "events/"
const NEWS = "news/"


function redirect(e) {
    window.Location.href = window.location.href.replace(ABOUT, HOME);
}