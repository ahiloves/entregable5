import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { borderByType, gradientsByType } from "../constants/pokemons";
import Header from "../components/Header";

const PokemonDetail = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const { id } = useParams();
  const getPercentBarProgress = (stat_value) => {
    const percent = (stat_value * 100) / 255;
    return percent + "%";
  };
  useEffect(() => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(({ data }) => setPokemonInfo(data))
    .catch((err) => console.log(err));
  }, []);
  return (
    <section className="px-10 pb-10 -py-10 " >
      <Header />
      <article >
        <header className="" >
          <img src={pokemonInfo?.sprites.other["official-artwork"].front_default} alt="" className=" text-center max-w-[400px] mx-auto p-1 translate-y-[40%] relative z-10 "/>
        </header>
      <div style={{ backgroundColor: 'rgba(169, 169, 169, 0.5)' }} className={` text-center max-w-[700px] mx-auto border-4 ${borderByType[pokemonInfo?.types[0].type.name]} rounded-lg  mt-20`} to={`/pokedex/${pokemonInfo?.id}`}>
      <div className={`px-2 pt-10 ${gradientsByType[pokemonInfo?.types[0].type.name]} relative h-[680px] pb-4`} >
       <span className="text-gray-100 capitalize text-lg font-bold pt-1 ">#{pokemonInfo?.id}</span>
        <h3  className="text-gray-300 capitalize text-lg font-medium pt-2">{pokemonInfo?.name}</h3>
        <div>
        <div className="relative  text-lg font-bold p-10 grid grid-cols-2 gap2 ">
          <div >
            <h5 className="text-gray-200 font-thin">weight</h5>
            <span className="font-light" >{pokemonInfo?.weight}</span>
          </div>
        
          <div className="border-l-2 border-gray-700 pl-4">
            <h5 className="text-gray-200 font-thin">Height</h5>
            <span  className="font-light">{pokemonInfo?.height}</span>
          </div>
          
        </div>
        <section className="p-10 py-4">
            <h4>stats</h4>
            <ul className="grid gap-3 pb-4">
              {
                pokemonInfo?.stats.map((stat) => <li key={stat.stat.name}>
                  <div className="flex justify-between ">
                    <h5 className="capitalize">{stat.stat.name}</h5>
                    <span>{stat.base_stat}/255</span>
                  </div>
                  {/* barra de progresos */}
                  <div className="h-6 bg-slate-200 rounded-sm overflow-hidden" 
                  >
                    <div style={{
                    width: getPercentBarProgress(stat.base_stat), }} className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 "></div>
                  </div>
                </li>)
              }

            </ul>
          </section>
        </div>
       </div>
      </div>
      </article>
    </section>
  )
}
export default PokemonDetail;