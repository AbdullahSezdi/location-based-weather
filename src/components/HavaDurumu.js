import "../app.css"

const HavaDurumu = (props) => {
    const {weather} =props
    const newDate = new Date()
    
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };

    if(!weather){
        return <h1>Hava durumu yükleniyor</h1>
    }
    console.log(weather)
    return <div className="Weather"> 
        
        <h1>{weather.name},  {weather.sys.country} </h1>
        <div className="temp">
            <h1>{(weather.main.temp-273).toFixed(0)} °C</h1>
        </div>
        <h3>{capitalizeFirst(weather.weather.map((data)=>data.description).join(","))}</h3>
        

        </div>

}

export default HavaDurumu;