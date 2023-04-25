 
 const api_key = '30baec7add2697da8a8cb02db20fe99f';
 let userInput =  document.getElementById('user_input');

 const Temperature = document.querySelector('.temperature');
 const Description = document.querySelector('.description');
 const Pressure = document.querySelector('.pressure');
 const Humidity = document.querySelector('.humidity');
 const CountryName = document.querySelector('.country_name');
 const WindSpeed = document.querySelector('.wind_speed');
 const weatherImage = document.getElementById('weather_img');
 const search_btn = document.getElementById('search');



// function that gets the weather information and outputs it to the DOM.
const getWheatherForecast = async (city) =>{
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
        if(response.ok){
            const data = await response.json();
            // console.log(data);
            const {humidity, pressure ,temp} = data.main;
            const name = data.name;
            const {description, icon } = data.weather[0];
            const {speed} = data.wind;   
            Temperature.innerText =`Temperature: ${temp} °C `; 
            Description.innerText  = description; 
            Pressure.innerText = `Pressure: ${pressure} hPa` ;
            Humidity.innerText  = `Humidity: ${humidity} %`;
            CountryName.innerText =`Weather Forecast in ${name}` ;
            WindSpeed.innerText = `Wind Speed: ${speed} km/h`;
            weatherImage.setAttribute('src',`https://openweathermap.org/img/wn/${icon}.png` ) 

        }
        }catch(err){
            console.log(err.message);
        }
   
}

// call the function when you click on the button search.
search_btn.addEventListener('click', (e) =>{
    e.preventDefault();
    getWheatherForecast(userInput.value);
    userInput.value = "";
});


// call the function when you press enter key on your keyboard.
userInput.addEventListener('keyup', (e)=>{
    if(e.key === "Enter"){
    getWheatherForecast(userInput.value);
    userInput.value = "";
    }
    
})

    
    








