import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Notes from "./Notes";
import { useState } from "react";

const HomePage = () => {
  const [enteringNotes, setEnteringNotes] = useState("");
  const [storingData, setStoringData] = useState([]);
  console.log(storingData);

  const handleSubmit = () => {
    setStoringData((prev) => [...prev, enteringNotes]);
  };
  return (
    <main className="w-full">
      <section>
        <div className="flex justify-center gap-4 bg-white shadow-lg p-6">
          <div className="flex items-center gap-4 w-[1000px] border border-gray-300 rounded-md p-3 bg-gray-200">
            <FaSearch className="text-gray-600" />
            <input
              type="text"
              placeholder="Search"
              className="font-medium w-full outline-none"
              onChange={(e) => setEnteringNotes(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-3xl cursor-pointer">
            <FaPlus />
            <button
              type="submit"
              className="cursor-pointer"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center">
        <div className="flex flex-col gap-6 w-[1100px]">
          <div className="pt-8">
            <h3 className="font-bold">Your Notes</h3>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-6 pl-6 text-gray-600 text-sm cursor-pointer border-b-2 border-gray-300">
              <h4>ALL</h4>
              <h4>PERSONAL</h4>
              <h4>HOME</h4>
              <h4>BUISNESS</h4>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-sm font-medium text-gray-600">
                Show only completed notes
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-3">
        {storingData.map((item, ind) => (
          <div key={ind}>
            {" "}
            <Notes item={item} />{" "}
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
