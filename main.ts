enum DateFormat {
    Long = 'long',
    Numeric = 'numeric'
};
const HindiLocale = 'hi-IN';
var dateContainer: HTMLSpanElement;
var nameContainer: HTMLSpanElement;

function setDate() {
    const options = {
        weekday: DateFormat.Long,
        year: DateFormat.Numeric,
        month: DateFormat.Long,
        day: DateFormat.Numeric
    };
    const date = new Date().toLocaleDateString(HindiLocale, options);
    dateContainer.innerText = date;
}

/**
 * from the URL query params
 * takes the value of `to`
 * changes to human readable form
 * and replaces `_` to blank character 
 */
function getName (): string {
    let name = window.location.search.replace('?to=','');
    return decodeURIComponent(name).replace('_', ' ');
}

function setName() {
    let name = getName();
    nameContainer.innerText = name;
}

function load() {
    dateContainer = document.getElementById('date');
    nameContainer = document.getElementById('name');
    setDate();
    setName();
}
