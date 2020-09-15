//FETCH DATA
fetch(
  "https://spreadsheets.google.com/feeds/list/18QShemZlLoq2j6zasY3bNjFkoqkDb_tP7Tpjujma3mg/od6/public/values?alt=json"
).then(res => res.json())
.then(showCities)

//GRAB AND SHOW ONLY CITIES
function showCities(data) {
console.log(data)
data.feed.entry.forEach(city => {
  if (city.gsx$primary.$t == "1") {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h1").textContent = city.gsx$city.$t;
    copy.querySelector("a").href = `city.html?city=${city.gsx$city.$t}`
    document.querySelector("main").appendChild(copy)
  }
})

}