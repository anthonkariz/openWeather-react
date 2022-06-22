import React from 'react'

export default function Display({cityData}) {
    console.log(cityData.cod)
  return (
  
  
    <div className="card-body border ">
       {cityData.cod ==200 && (
       <>
        <p> Weather condition  <b> {cityData['weather'][0]['description']}</b> </p>

        <ul>

            <li> Temperature <b>{cityData['main']['temp']}  <sup>o</sup> C</b></li>
            <li> Feels like <b> {cityData['main']['feels_like']} <sup>o</sup> C</b></li>
            <li> Humidity <b> {cityData['main']['humidity']}  % </b> </li>
            <li> Minimum temperature <b>{cityData['main']['temp_min']}  <sup>o</sup>C</b></li>
            <li> Maximum temperature <b> {cityData['main']['temp_max']}  <sup>o</sup> C</b></li>

            <li> Wind speed, <b>{cityData['wind']['speed']}hPa</b></li>

        </ul>
        </>
       )
      }
        
    </div>

  )
}
