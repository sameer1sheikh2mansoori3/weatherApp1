const form = document.querySelector("form");
const search = document.querySelector("#search");

const weather = document.querySelector('#weather');

const printData = (afterData)=>{
console.log(afterData);
if( afterData.cod == 400 ){
    weather.innerHTML = `<h1>please enter valid data</h1>`

}
else{
    weather.innerHTML = `
    
     <div>
    <img src="https://openweathermap.org/img/wn/${afterData.weather[0].icon}@2x.png" alt="">
</div>
<div>
    <h2>${afterData.main.temp}</h2>
    <h4> ${afterData.weather[0].main} </h4>
</div> 
    `
}

}
var afterData;
const fetchData = async(city)=>{
    const API_KEY = `c72e069caad91af8ecfb27d530d7e06e`
   const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
   

    const fetchData = await fetch(API);
    afterData = await fetchData.json();
    
    printData(afterData);


    


}



form.addEventListener("submit" , (event)=>{

  fetchData(search.value);
    event.preventDefault();

})