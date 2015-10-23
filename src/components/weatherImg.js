

export default {
    getWeatherImage: function(newWeather) {
console.log(newWeather+"newWeatherUrl");
           let newWeatherUrl: "sunny.png";

            switch (newWeather)
            {
            case "Sunny":
                newWeatherUrl:"sunny.png"
            break;

            case "Clouds":
                newWeatherUrl:"sunny.png"
            break;

            default: newWeatherUrl:"./img/sunny.png"
                }
            console.log(newWeatherUrl+"newWeatherUrl");
        return "http://users.metropolia.fi/~annikaa/img/"+newWeatherUrl
}
}

//http://api.openweathermap.org/data/2.5/weather?lat=22&lon=11&cnt=1&APPID=3ed27ed2eee32b18eb6c9db91e2f1eb5)
