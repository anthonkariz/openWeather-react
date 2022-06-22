
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Config} from '../Config';

export const openWeather = createApi({
    reducerPath: 'openWeather',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://api.openweathermap.org/data/2.5',

    }),
    endpoints: (builder) => ({
      
        getWweather: builder.mutation({
            query: ({ city }) => ({
                url: `weather?units=metric&q=${city},uk&APPID=${Config.key}`, 
                method: 'GET',
              
            }),
           
        }),


    })

});

export const {useGetWweatherMutation}=openWeather;
//api.openweathermap.org/data/2.5/weather?q=nairobi,kenya&APPID=4d592d1d68d22de221389ab70280c871