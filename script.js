const apiKey="2566505f14a3812323cacd6d821b8aec";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")

var date = new Date();
var current_date=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
var date_time = current_date+" "+current_time;

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
   
    document.querySelector(".descrip").innerHTML=data.weather[0].main;
    document.querySelector(".temp").innerHTML=data.main.temp + "°C";
    document.querySelector(".feels-like").innerHTML="Feels like "+ data.main.feels_like+"°C" ;
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";
    document.querySelector(".date").innerHTML =`Date & Time: ${(date_time)}`

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
        document.body.style.background="url(img/weather-cloudy.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
        document.body.style.background = "url(img/weather-clear-sky.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
        document.body.style.background = "url(img/weather-rain.jpg)";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundRepeat = "no-repeat";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
        document.body.style.background = "url(img/drizzle.jpg)";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundRepeat = "no-repeat";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
        document.body.style.background = "url(img/weather-mist.jpg)";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundRepeat = "no-repeat";
    }
    else if(data.weather[0].main=="Haze"){
        weatherIcon.src=" https://openweathermap.org/img/wn/50d@2x.png";
        document.body.style.background = "url(img/haze.jpg)";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundRepeat = "no-repeat";
    }
    document.querySelector(".weather").style.display="block";

   
}
searchBtn.addEventListener("click",()=>{
     checkWeather(searchBox.value);
})
