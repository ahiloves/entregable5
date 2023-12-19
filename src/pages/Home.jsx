import { useDispatch } from "react-redux";
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerName(e.target.trainerName.value));
    navigate("/pokedex");
  };

  return (
    <section className="grid grid-rows-[1fr_auto] h-screen overflow-hidden">
      <div className="text-center justify-self-center self-center" >
        <main className=" mt-10 items-center justify-center" >
          <header className="relative h-[200px] mx-auto">
            <img src="/images/pokemon.png" className="max-w-[400px]"  alt="" />
          </header>
         <div className=" items-center justify-center">
         <h3 className=" text-white relative text-lg font-bold p-2 py-1grid gap2">Hello Trainer!</h3>
          <p className="text-gray-800 font-medium">Write your name to start...</p>
          <form onSubmit={handleSubmit}>
            <input className="rounded-sm p-1" name="trainerName" placeholder="Your name..." autoComplete="off" type="text" required />
            <button className="bg-red-500 text-white rounded-sm px-4 p-1" type="submit">Start</button>
          </form>
         </div>
        </main>
      </div>
      <footer>
        {/* Footer content goes here */}
        {/* <div className="h-10 bg-red-500"></div>
        <div className="h-10 bg-black"></div> */}
      </footer>
    </section>
  );
};

export default Home;