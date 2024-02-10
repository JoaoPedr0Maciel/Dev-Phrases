import { useEffect, useState } from "react";

import logo from "./assets/logo.png";

function App() {
  const [author, setAuthor] = useState();
  const [phrase, setPhrase] = useState();

  async function getData() {
    const api = await fetch(`https://api.quotable.io/random`);
    const data = await api.json();
    setAuthor(data.author);
    setPhrase(data.content);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="h-screen flex justify-center items-center flex-col bg-[#111111]">
      <div className="h-[13rem] mb-[3rem]">
        <img className="h-[12rem]  " src={logo} alt="" />
      </div>

      <div className="flex justify-center items-center flex-col mt-[4rem] font-merriweather ">
        <span className="w-[500px] h-[150px]  flex flex-col text-white font-bold text-center text-md  max-sm:w-[350px] ">
          "{phrase}"
          <div className="text-[#1FA4DB] font-extrabold text-sm italic ">
            Author: {author}
          </div>
        </span>

        <button
          className="bg-white text-black  rounded-lg w-[200px] h-[2rem] transition duration-[.4s] hover:bg-[#1FA4DB] hover:text-white"
          onClick={() => getData()}
        >
          New Phrase
        </button>
      </div>
    </div>
  );
}

export default App;
