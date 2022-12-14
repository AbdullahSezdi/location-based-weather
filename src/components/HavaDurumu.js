import "../app.css"


const HavaDurumu = (props) => {
    var {weather} =props
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    const key = process.env.REACT_APP_WEATHER_API_KEY;

    


    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };

    if(!weather){
        return <h1>Hava durumu yükleniyor</h1>
    }

    return <div className="Weather"> 
        
        <h1>{weather.name},  {weather.sys.country} </h1>
        <div className="date">{today.toLocaleDateString("en-US", options)}</div>

        <div className="temp">
            <h2>{(weather.main.temp-273).toFixed(0)} °C</h2>
        </div>
        <h3 >{capitalizeFirst(weather.weather.map((data)=>data.description).join(","))}</h3>
        

        </div>

}

export default HavaDurumu;