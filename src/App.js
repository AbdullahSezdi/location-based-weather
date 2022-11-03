import axios from "axios";
import { useEffect, useState } from "react";
import { usePosition } from "use-position";
import HavaDurumu from "./components/HavaDurumu";
import "./app.css"



//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


function App() {

  const [weather,setWeather]=useState()
  const {latitude,longitude}=usePosition();

  const getWeather= async(lat,lon) =>{
    const key=process.env.REACT_APP_WEATHER_API_KEY;
    try{
      const {data}= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`);
      setWeather(data)
    }catch{
        alert("veri alırken bir problem yaşandı")
    }
    
  };

  useEffect(()=>{ 
    latitude && longitude && getWeather(latitude,longitude)
  },[latitude,longitude])




  return (
    <div className="App">

    
    <HavaDurumu weather={weather}></HavaDurumu>
     
    </div>
  );
}

export default App;
