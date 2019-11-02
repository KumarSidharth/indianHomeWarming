var dateContainer: HTMLSpanElement;
var nameContainer: HTMLSpanElement;

function setDate() {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const date = new Date().toLocaleDateString("hi-IN", options);
    dateContainer.innerText = date;
}

function getName (): string {
    let name = window.location.search.replace('?to=','');
    return decodeURIComponent(name);
}

function setName() {
    let name = getName();
    nameContainer.innerText = name.replace('_', ' ');
}

function load() {
    dateContainer = document.getElementById('date');
    nameContainer = document.getElementById('name');
    setDate();
    setName();
}
