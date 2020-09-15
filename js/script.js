// Getting the data from Google Sheets

const datalink = "http://spreadsheets.google.com/feeds/list/18QShemZlLoq2j6zasY3bNjFkoqkDb_tP7Tpjujma3mg/od6/public/values?alt=json";

window.addEventListener("DOMContentLoaded", getData);

function getData() {
    fetch(datalink)
        .then(response => response.json())
        .then(handleData);
}

function handleData(data) {
    const myData = data.feed.entry;
    console.log("Here is our data");
    console.log(myData);
    // Looping through the data, getting individual activites
    myData.forEach(showData);
}

// Each individual activity gets treated here.
function showData(singleActivity) {
    //console.log(singleActivity.gsx$activitytype.$t);
// We clone the activity template
    const template = document.querySelector('template').content;
    const activityCopy = template.cloneNode(true);
// We populate the template
    const h2 = document.querySelector(".venue_name");
    h2.textContent = singleActivity.gsx$venuename.$t;
}
