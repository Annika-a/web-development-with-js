import axios from 'axios';

export default {
    getTussit: function() {
        return axios.get('/api/tussi').then((response)=>{
            return response.data;
        });
    },

    getWeatherData:function (latitude, longitude) {

    let temperature = 30;
    let dfd = $.Deferred();
    let url = "http://api.openweathermap.org/data/2.5/weather?lat=";
    url += latitude;
    url += "&lon=";
    url += longitude;
    url += "&cnt=1&APPID=3ed27ed2eee32b18eb6c9db91e2f1eb5";

    $.ajax({
        type: "POST",
        dataType: "jsonp",
        url: url + "&callback=?",
        async: false,
        success: function (data) {
            console.log(data["weather"][0]["main"]);
            dfd.resolve(data["weather"][0]["main"]);
        },
        error: function (errorData) {
        },
    });
    return dfd.promise();
}
}

//http://api.openweathermap.org/data/2.5/weather?lat=22&lon=11&cnt=1&APPID=3ed27ed2eee32b18eb6c9db91e2f1eb5)
