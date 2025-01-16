const HOME = "";
const ABOUT = "about/";
const EVENTS = "events/";
const NEWS = "news/";

function redirect(e) {
    window.location.href = window.location.href.replace(ABOUT, e);
}