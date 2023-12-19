import { useSelector } from "react-redux";
import PokemonList from "../components/PokemonList";
import { useEffect, useState } from "react";
import axios from "axios";
import trainerNameSlice  from "../store/slices/trainerName.slice";
import Header from "../components/Header";

const Pokedex = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [types, setTypes] = useState([]);
  const trainerName = useSelector((store) => store.trainerName.name);
  const pokemonsByName = allPokemons.filter((pokemon) => pokemon.name.includes(pokemonName.trim()));

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonName(e.target.pokemonName.value.toLowerCase());
  };

  const handleChangeType = (e) => {
    const url = e.target.value
    axios
    .get(url)
    .then(({ data }) => {
      if(url.includes("type")) {
        // ? obtuvimos pokemons por tipo
       const pokemonsFormat = data.pokemon.map((pokemon) => pokemon.pokemon);
       setAllPokemons(pokemonsFormat);
      }else{
        // ? obtuvimos todos los pokemons 
        setAllPokemons(data.results);
      }
    })
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1292")
      .then(({ data }) => {
        // Actualiza el estado allPokemons con los resultados de la API
        setAllPokemons(data.results)
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then(({ data }) => {setTypes(data.results)})
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <Header />
      <main >
      
          <div className="mx-auto w-full sm:w-auto  rounded-lg  items-center justify-center max-w-[700px]">
          <p className="p-3 text-gray-700">
          <b className="text-red-500">Welcome {trainerName}</b>, here you can find your Pokémon!
        </p>
        <form className="grid grid-cols-2 gap2 p-2 " onSubmit={handleSubmit}>
          <div >
            <input  className="rounded-sm p-1" name="pokemonName" placeholder="Search Pokémon..." type="text" />
            <button className="bg-red-500 text-white rounded-sm px-4 p-1">Search</button>
          </div>
          <select className="rounded-md" onChange={handleChangeType}>
            <option className="text-gray-800" value="https://pokeapi.co/api/v2/pokemon?limit=1292">All Pokémon</option>
            {types.map((type) => (
              <option value={type.url} className="capitalize" key={type.name}>
                {type.name}
              </option>
              ))}
          </select>
        </form>
          </div>
          
        <PokemonList pokemons={pokemonsByName} />
      </main>
    </section>
  );
};

export default Pokedex;