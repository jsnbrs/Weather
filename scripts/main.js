"use strict";

var weather_img;

(function(){
  console.log('script.js loaded.')
  $(':submit').click(function(event){

    var PostCity = $(".pure-input-rounded").val();
    console.log('click noticed.')

    var url = "http://api.openweathermap.org/data/2.5/weather"

    event.preventDefault();
    $.ajax({
      url: url,
      type: "GET",
      data: {"q": PostCity,
         "units":"imperial",
         "appid": "48b89c68e5618656ef677515f1035d8a"
       },

      error: function(){
        alert(url)
      },

      success: function(data){

      var weather = data.weather
      var description = weather[0].description
      var name = data.name
      var temp = data.main.temp
      var icon = weather[0].icon


        $('#forecast').text("Right now in " + name + " it's "+ temp +
          " degrees Farenheit with " + description + ".")

        if (icon.includes("01d")) {
          weather_img = "img/2.svg"; //clear sky
        } else if (icon.includes("02d")) {
          weather_img = "img/8.svg"; //few clouds
        } else if (icon.includes("03d")) {
          weather_img = "img/14.svg";  //scattered clouds
        } else if (icon.includes("04d")) {
          weather_img = "img/9.svg";  //broken clouds
        }  else if (icon.includes("09d")) {
          weather_img = "img/17.svg";  //shower rain
        }  else if (icon.includes("10d")) {
          weather_img = "img/18.svg";  //rain
        }  else if (icon.includes("11d")) {
          weather_img = "img/15.svg";  //thunderstorm
        }  else if (icon.includes("13d")) {
          weather_img = "img/21.svg";  //snow
        }  else if (icon.includes("50d")) {
          weather_img = "img/5.svg";  //mist
        }

        var weather_icon = $('img').attr('src', weather_img);

      }

    })

  });

})();

//mist few clouds, light rain, moderate rain