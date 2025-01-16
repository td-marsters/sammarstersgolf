const HOME = "sammarstersgolf/"
const ABOUT = "sammarstersgolf/about/"
const EVENTS = "sammarstersgolf/events/"
const NEWS = "sammarstersgolf/news/"


function redirect(e) {
    window.location.href = window.location.href.replace(EVENTS, e);
}