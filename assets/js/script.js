// This was helped by my fellow classmates
let apiKey = "48193cc4935d04e2ad13ac559577c38c";
let searchBoxEl = $("#search-box");
let searchForm = $("#search-form");
let cityTitle = $(".city-name");
let temp = $("#temp");
let wind = $("#wind");
let humidity = $("#humidity");

function weatherSearch() {
    let city = searchBoxEl.val();
    let queryUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial" +
        "&appid=" +
        apiKey;

    getWeather(queryUrl);
}

function getWeather(queryUrl) {
    fetch(queryUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            cityTitle.text(`${data.name}`);
            temp.text(
                `${Math.trunc(data.main.temp)} ${String.fromCharCode(176)} F`
            );
            wind.text(`Wind: ${data.wind.speed} MPH`);
            humidity.text(`Humidity: ${data.main.humidity} %`);
            let lat = data.coord.lat;
            let lon = data.coord.lon;
            forecast(lat, lon);
        });
}

function forecast(lat, lon) {
    let forecastUrl =
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
        lat +
        "&lon=" +
        lon +
        "&units=imperial&appid=" +
        apiKey;

}


searchForm.on("submit", function (e) {
    e.preventDefault();
    weatherSearch();
    searchBoxEl.val("");
});
