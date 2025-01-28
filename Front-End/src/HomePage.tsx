import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Notes from "./Notes";
import { useState, useEffect } from "react";
// import { dataTypes } from "./Types";

const HomePage = () => {
  const api = import.meta.env.VITE_API;
  const [enteringTitle, setEnteringTitle] = useState("");
  const [enteringNotes, setEnteringNotes] = useState("");
  const [storingData, setStoringData] = useState([]);
  const [backendDelete, setbackEneDelete] = useState([]);
  console.log(storingData);

  // const handleSubmit = () => {
  //   let settingTIme = new Date().toLocaleTimeString();
  //   setStoringData((prev) => [
  //     ...prev,
  //     { title: enteringTitle, notes: enteringNotes, time: settingTIme },
  //   ]);
  //   setEnteringTitle("");
  //   setEnteringNotes("");
  // };

  const handleSend = async () => {
    let settingTIme = new Date().toLocaleTimeString();

    const newData = {
      title: enteringTitle,
      notes: enteringNotes,
      time: settingTIme,
    };
    setStoringData((prev) => [...prev, newData]);
    setEnteringTitle("");
    setEnteringNotes("");
    try {
      const res = await fetch(`${api}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: newData }),
      });

      const data = await res.json();
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReceive = async () => {
    try {
      const res = await fetch(`${api}/getData`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setStoringData(data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log("storingData before rendering Notes:", storingData);

  // const handleDelete = async (id) => {
  //   try {
  //     const res = await fetch(`${api}/delete/${id}`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (res.ok) {
  //       setStoringData((prev) => prev.filter((note) => note._id !== id));
  //     } else {
  //       console.log("falied to delete");
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  useEffect(() => {
    // fetchApi();
    handleReceive();
  }, []);

  return (
    <main className="w-full">
      <section>
        <div className="flex items-center justify-center gap-4 bg-white shadow-lg p-10">
          <div className="flex flex-col gap-2">
            <h3>Title</h3>
            <input
              type="text"
              value={enteringTitle}
              placeholder="Enter Title"
              className="w-[250px] p-3 outline-none border border-gray-300 rounded-lg bg-gray-200"
              onChange={(e) => setEnteringTitle(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="flex flex-col gap-3">
              <h3>Notes</h3>
              <div className="flex  items-center gap-4 w-[1000px] border border-gray-300 p-3 rounded-md bg-gray-200 max-sm:w-full">
                {/* <FaSearch className="text-gray-600" /> */}
                <input
                  type="text"
                  value={enteringNotes}
                  placeholder="Type Your Notes"
                  className="font-medium w-full outline-none"
                  onChange={(e) => setEnteringNotes(e.target.value)}
                />
              </div>
            </div>
            <div
              className="w-[100px] flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-4 rounded-3xl cursor-pointer"
              onClick={handleSend}
            >
              <button
                type="submit"
                className="cursor-pointer flex items-center gap-1"
              >
                <FaPlus />
                Add
              </button>
            </div>
          </div>
        </div>
        {/* <button
          type="submit"
          className="border border-blue-300 bg-green-300 cursor-pointer"
          onClick={handleSend}
        >
          Click!
        </button> */}
        <button
          type="submit"
          className="border-2 border-pink-50 bg-blue-400 cursor-pointer"
          onClick={handleReceive}
        >
          Receive?
        </button>
      </section>
      <div className="grid grid-cols-3 gap-3">
        {storingData.map((item, ind) => (
          <div key={item._id || ind}>
            {" "}
            <Notes
              item={item}
              ind={ind}
              storingData={storingData}
              setStoringData={setStoringData}
              enteringTitle={enteringTitle}
              enteringNotes={enteringNotes}
            />{" "}
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
