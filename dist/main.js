var DateFormat;
(function (DateFormat) {
    DateFormat["Long"] = "long";
    DateFormat["Numeric"] = "numeric";
})(DateFormat || (DateFormat = {}));
;
var HindiLocale = 'hi-IN';
var dateContainer;
var nameContainer;
function setDate() {
    var options = {
        weekday: DateFormat.Long,
        year: DateFormat.Numeric,
        month: DateFormat.Long,
        day: DateFormat.Numeric
    };
    var date = new Date().toLocaleDateString(HindiLocale, options);
    dateContainer.innerText = date;
}
/**
 * from the URL query params
 * takes the value of `to`
 * changes to human readable form
 * and replaces `_` to blank character
 */
function getName() {
    var name = window.location.search.replace('?to=', '');
    return decodeURIComponent(name).replace('_', ' ');
}
function setName() {
    var name = getName();
    if (!name || name === '') {
        name = 'संबंधी';
    }
    nameContainer.innerText = name;
}
function load() {
    dateContainer = document.getElementById('date');
    nameContainer = document.getElementById('name');
    setDate();
    setName();
}
