import "../app.css"
import { AiOutlineSearch } from 'react-icons/ai';
import axios from "axios";
import { useState } from "react";

const HavaDurumu = (props) => {
    var {weather} =props
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    const [inputText, setInputText] = useState("");
    const key = process.env.REACT_APP_WEATHER_API_KEY;

    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
        weather= axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${key}`)
        console.log(weather)
      };


    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };

    if(!weather){
        return <h1>Hava durumu yükleniyor</h1>
    }

    return <div className="Weather"> 
        <div className="search-bar">
        <span><AiOutlineSearch /></span>
        <input type="search" id="myInput" onSubmit={inputHandler} placeholder="Search the city"></input>
       
        </div>
        
        <h1>{weather.name},  {weather.sys.country} </h1>
        <div className="date">{today.toLocaleDateString("en-US", options)}</div>

        <div className="temp">
            <h2>{(weather.main.temp-273).toFixed(0)} °C</h2>
        </div>
        <h3 >{capitalizeFirst(weather.weather.map((data)=>data.description).join(","))}</h3>
        

        </div>

}

export default HavaDurumu;