// import React, { useEffect, useState } from 'react';
// import getWeatherData from '../../weather.js';
// import "./Clima.css"

// const Clima = () => {
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         const data = await getWeatherData();
//         setWeather(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWeather();
//   }, []);

//   if (loading) {
//     return <p>Loading weather data...</p>;
//   }

//   return (
//     <div className='climaCont'>

//       {weather ? (
//         <div className='dataClimaCont'>
//           <h2>Weather in {weather.wx_desc}</h2>
//           <p>Temperature: {weather.temp_c}°C</p>
//           <p>Humidity: {weather.humid_pct}%</p>
//           {/* Añade más detalles del clima si lo deseas */}
//         </div>
//       ) : (
//         <p>No weather data available</p>
//       )}
//     </div>
//   );
// };

// export default Clima;
import React, { useEffect } from "react";
import "./Clima.css";

const Clima = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "weatherwidget-io-js";
    script.src = "https://weatherwidget.io/js/widget.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script if the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/es/n24d78n65d42/salta/"
        data-label_1="SALTA"
        data-label_2="CLIMA"
        data-font="Roboto"
        data-icons="Climacons Animated"
        data-theme="clear"
        data-basecolor="background-color: #7d7d7d;
background-image: linear-gradient(59deg, #7d7d7d 0%, #000000 100%);"
        data-textcolor="#ffffff"
        data-highcolor="#ffffff"
        data-suncolor="#ffeb73"
        data-snowcolor="#ffffff"
      >
        SALTA CLIMA
      </a>
    </div>
  );
};

export default Clima;
