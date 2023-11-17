let city=document.getElementById("city");
let type=document.getElementById("type");
let temp=document.getElementById("temp");
let image=document.getElementById("img");
let input=document.getElementById("inp");
let API_key="18b47e371757b861bf82f53ec556a1f3";
const data= async function(search){
    let getData= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
    console.log(getData);
    let jsonData =  await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);

    if(jsonData.cod==400){
        alert("please Enter Location")
        image.src="error1.png"
        city.innerHTML="";
     temp.innerHTML="";
    type.innerHTML="";
    }
    if(jsonData.cod==404){
        alert("please Enter Right Location")
        image.src="error2.png"
        city.innerHTML="search";
     temp.innerHTML="";
    type.innerHTML="";
    }
    

    city.innerHTML=search;
     temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";
    type.innerHTML=jsonData.weather[0].main;
    if(type.innerHTML=="Clouds"){
        image.src="clouds.png"
    }else if(type.innerHTML=="Clear"){
        image.src="clears.png"
    }else if(type.innerHTML=="Rain"){
        image.src="rain.png"
    }else if(type.innerHTML=="Snow"){
        image.src="rain.png"
    }else if(type.innerHTML=="Smoke"){
        image.src="clouds.png"
    }else if(type.innerHTML=="Haze"){
        image.src="haze.png"
    }else if(type.innerHTML=="Strom"){
        image.src="strom.png"
    }
    input.value=""
}
function myFun(){
    search=input.value;
    data(search);
}
