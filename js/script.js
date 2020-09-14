// Getting the data from Google Sheets

const datalink = "http://spreadsheets.google.com/feeds/list/18QShemZlLoq2j6zasY3bNjFkoqkDb_tP7Tpjujma3mg/od6/public/values?alt=json";

window.addEventListener("DOMContentLoaded", getData);

function getData(){
    fetch(datalink)
    .then(response => response.json())
    .then(handleData);
}

function handleData(data) {
    const myData = data.feed.entry;
    console.log("Here is our data");
    console.log(myData);
    myData.forEach(showData);
}

function showData(singleActivity) {
    console.log(singleActivity.gsx$activitytype.$t);
}
