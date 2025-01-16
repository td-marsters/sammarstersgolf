const HOME = "";
const ABOUT = "about/";
const EVENTS = "events/";
const NEWS = "news/";

function header(link) {
    console.log( toString(link).split(ABOUT)[0] );
}

function redirect(e) {
    window.Location.href = window.location.href.replace(ABOUT, HOME);
}