const HOME = "";
const ABOUT = "about/";
const EVENTS = "events/";
const NEWS = "news/";

function header(link) {
    console.log( toString(link).split(ABOUT)[0] );
}

function redirect(e) {
    //window.location.href = (window.location.href + e + "index.html");
    console.log(window.location.origin);
    //window.location.replace(window.location.host + e + "index.html");
}