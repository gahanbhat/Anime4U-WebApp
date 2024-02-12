import axios from "axios";
import { useState, useEffect } from "react";

const Anime = (data) => {
  console.log(data);
  const [popUp, setPopUp] = useState(false);
  return (
    <div>
      <div
        onClick={() => setPopUp(true)}
        class=" cursor-pointer max-w-sm  rounded-xl overflow-hidden shadow-lg border-b-8 border-neutral-900 bg-neutral-800 transform transition duration-200 hover:scale-105"
      >
        <div class="flex pt-4 justify-center items-center">
          <img
            class=" w-auto object-cover  h-48 rounded-lg "
            src={data.data.images.jpg.image_url}
            alt="Sunset in the mountains"
          />
        </div>
        <div class="px-6 py-4">
          <div class="text-amber-400 font-bold text-center px-2 truncate overflow-hidden text-xl mb-2  ">
            {data.data.title}
          </div>
          <p class="text-neutral-400 text-base line-clamp-4 text-justify px-4 mb-2">
            {data.data.synopsis}
          </p>
        </div>

        <div class=" flex pb-4 justify-center  ">
          <span class="inline-block bg-amber-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {data.data.genres[0].name}
          </span>
          <span class="inline-block bg-amber-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {data.data.year !== undefined && data.data.year !== null
              ? data.data.year
              : "N/A"}
          </span>
          <span class="inline-block bg-amber-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {data.data.score}
          </span>
        </div>
      </div>
      <PopUp data={data} popUp={popUp} setPopUp={setPopUp} />
    </div>
  );
};

{
  /* Overlay */
}
const PopUp = ({ data, popUp, setPopUp }) => {
  return (
    <div className={` z-50 fixed ${popUp ? "" : "hidden"}  w-auto `}>
      <div className="fixed inset-0 z-10 duration-100 px-2 backdrop-blur-sm bg-trasparent overflow-y-auto overflow-x-hidden  overscroll-contain  ">
        <div className="flex  justify-center  text-center sm:p-0  ">
          <div className="fixed transform bg-white text-left shadow-xl transition-all  h-20 w-auto ">
            <div className="bg-gradient-to-b justify-center  bg-neutral-800 px-4 pb-4  sm:p-6 sm:pb-4 w-screen h-auto">
              <div className="sm:flex sm:items-center ">
                <div className="mt-3 text-justify sm:mt-0 sm:text-left">
                  <h3 className="text-xl text-amber-400  font-semibold leading-6 ">
                    {data.data.title}
                  </h3>
                  <div class="flex pt-4 justify-center items-center">
                    <img
                      class=" flex w-auto   object-cover shadow-lg h-48 rounded-lg "
                      src={data.data.images.jpg.image_url}
                      alt="Sunset in the mountains"
                    />
                  </div>
                  <div className="text-neutral-400  text-justify mt-4 mx-2 pb-4">
                    {data.data.synopsis}
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex rounded-lg bg-neutral-800 border-b-8 border-neutral-900 sm:justify-center justify-center md:justify-center lg:justify-end    sm:px-6">
              <button
                type="button"
                onClick={() => setPopUp(!popUp)}
                className="mb-5  inline-flex w-20  rounded-md bg-amber-400 justify-center p-2  font-semibold text-gray-700 shadow-md ring-1 ring-inset ring-amber-400 hover:bg-amber-500 "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Animecards = () => {
  const [title, setTitle] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.jikan.moe/v4/anime");
      const data = await response.json();
      setTitle(data.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="px-96 mt-15 mx-64">
        <h1 className="text-3xl mt-10  border-b-2 rounded-md mx-10 border-amber-300 lg:text-left sm:text-center text-center mb-4 lg:justify-items-center sm:justify-items-center"></h1>
      </div>
      <div className=" flex flex-warp justify-center mt-10 max-w-8xl sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-4 gap-6 md:grip-cols-2">
          {title &&
            title.map((item, i) => {
              return <Anime data={item} key={i} />;
            })}
        </div>
      </div>
    </>
  );
};
