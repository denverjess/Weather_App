console.log("Hello World!");

let submit = document.getElementById("submit");
let input = document.getElementById("input");

let temp = document.getElementById("temp");
let img = document.getElementById("icon");
let weatherDesc = document.getElementById("weatherDesc");
const url = `https://api.openweathermap.org/data/2.5/weather?q=city-name&units=imperial&appid=b2bf93dcb80a4720b47f5d646b2e7993`
const api = "b2bf93dcb80a4720b47f5d646b2e7993";
const form = document.getElementById("inputContainer")
const feedback = document.getElementById("feedback");

const giveFeedback = (str) => { feedback.classList.add("show");
feedback.textContent = str;
setTimeout(() => feedback.classList.remove("show"), 5000);
 }


form.addEventListener("submit", fetchWeather);

function fetchWeather(event) {
    event.preventDefault()
    const inputVal = input.value;
    if (inputVal.trim().length===0) {
        giveFeedback("Invalid search item")
        return;
    }
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&appid=${api}`, {
    mode: "cors"
})
    .then((response) => response.json())
    .then((response) => {
       
        temp.textContent = Math.round (response.main.temp) + "\u00B0F" 
        weatherDesc.textContent = (response.weather[0].main)
        icon.innerHTML = (response.weather[0].icon)
            console.log(img)
    }) 
    .catch((error) => {
       giveFeedback(`No result could be found for "${input.value}"!`)
    

})};