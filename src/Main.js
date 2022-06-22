import { useState } from 'react'
import { useGetWweatherMutation } from './Features/openWeather'
import Display from './Componets/Display';

export default function Main() {

    const [city, setCity] = useState('')

    const [getWweather, { data, isSuccess, isError, error, isLoading }] = useGetWweatherMutation();
    const queryApi = (e) => {
        e.preventDefault();

        getWweather({ city: city })
    
    
    }


    return (
        <div>
            <div className="container_fluid">
                <div className="row  p-2">
                    <h3>Open Weather </h3>
                </div>
                <div className="row bg-dark p-4"> </div>
            </div>
            <div className="container">
                <form className="row  gy-2 gx-2 align-items-center pt-4" onSubmit={queryApi}>
                    <div className="col-md-10">
                        <input type="text" name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)} className="form-control" placeholder="Enter city name " />
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary" type='submit'>Search</button>
                    </div>
                </form>

                <div className='row mt-5'>
                <div className="card-header border">
                    <h4>{city} </h4>
                </div>
                {isSuccess   &&( <Display cityData = {data} />)}
                {isError   && (
                    <p className="alert alert-warning mt-4"> Sorry we do not have weather information for that city please try another </p>
                ) }
                {isLoading &&(<p> please wait ....</p>)}
               

                </div>
               

               

            </div>
        </div>

    )
}
