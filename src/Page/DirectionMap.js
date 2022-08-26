import React, { useEffect, useState } from 'react'
import { Map } from '../Components/Operator/Map/Map';
import datas from './data.json'
function DirectionMap() {
    const [coordinates, setCoordinates] = useState({});
    const data = datas.Operators[0];
    console.log({data});
  
    useEffect(() =>{
        navigator.geolocation.getCurrentPosition(({ coords:{latitude, longitude}}) => {
            setCoordinates({lat:latitude ,lng:longitude})
        })
    },[]);
  return (
    <div className='w-full h-screen'>
    <Map coordinates={coordinates} data={data}/>

    </div>

  )
}

export default DirectionMap