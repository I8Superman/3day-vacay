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
// We clone the activity template
    const template = document.querySelector('template').content;
    const activityCopy = template.cloneNode(true);
// We populate the template
// Get the image
    activityCopy.querySelector(".activity_image").setAttribute("src", "http://ssays.dk/kea/common_interest_images/" + singleActivity.gsx$image.$t);
    const h4 = document.querySelector("h4");
    h4.textContent = singleActivity.gsx$venuename.$t;

    // Append the template
    const parentElement = document.querySelector("section");
    parentElement.appendChild(activityCopy);
}

e
