
import { useState , useEffect } from "react";
import { Card } from "../Components/Card/Card";
import { Map } from "../Components/Map/Map";
import datas from './data.json'
export function GoogleMap() {
    
    const [coordinates, setCoordinates] = useState({});
    
    const data = datas.Operators;
    
    useEffect(() =>{
        navigator.geolocation.getCurrentPosition(({ coords:{latitude, longitude}}) => {
            setCoordinates({lat:latitude ,lng:longitude})
        })
    },[]);

    return(<>
        <section className="text-gray-600 body-font relative ">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
        <div className="lg:w-2/3 md:w-1/2  bg-gray-300 rounded-lg overflow-hidden sm:mr-10 relative h-screen w-full">
        <Map
            coordinates = {coordinates}
            data = {data}
            />
        </div>
        <div className="lg:w-1/3 md:w-1/2 sm:w-full bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <div className="relative mb-4">
            <h1 className="text-slate-900 font-semibold uppercase text-2xl">Operators</h1>
          </div>
          <div className="relative mb-4">
            <h1 className="text-slate-600 font-semibold text">List of operators near you...</h1>
          </div>
          <div className="relative mb-4">
          <form class="w-full max-w-lg">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Name
            </label>
            <div className="flex items-center border-b hover:border-sky-500 group-focus:border-sky-500 py-2">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Someone" aria-label="Full name" required />
            <button class="flex-shrink-0 bg-sky-500 hover:bg-sky-700 border-sky-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                Search
            </button>
            </div>
            </form>
          </div>
        <div className=" flex flex-col overflow-y-scroll h-1/2">
          <div className="relative mb-4 flex flex-grow">
            <Card />
          </div>
          <div className="relative mb-4 flex flex-grow">
            <Card />
          </div>
          <div className="relative mb-4 flex flex-grow">
            <Card />
          </div>
          
        </div>
    </div>
      </div>
    </section>
    </>
    );
}