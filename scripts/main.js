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


        $('#forecast').text("Right now in " + name + " it's "+ temp +
          " degrees Farenheit with " + description + ".")

        if (description.includes("clear")) {
          weather_img = "img/2.svg";
        } else if (description.includes("mist")) {
          weather_img = "img/5.svg";
        } else if (description.includes("few clouds")) {
          weather_img = "img/8.svg";
        } else if (description.includes("moderate rain")) {
          weather_img = "img/18.svg";
        }

        var weather_icon = $('img').attr('src', weather_img);

      }

    })

  });

})();

//mist few clouds, light rain, moderate rain