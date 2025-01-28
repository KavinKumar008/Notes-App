import { RiDeleteBin6Line } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useState } from "react";

const Notes = ({
  item,
  ind,
  storingData,
  setStoringData,
  enteringTitle,
  enteringNotes,
}: {
  ind: Number;
}) => {
  const [open, setOpen] = useState(false);
  const [editStoringTitle, setEditStoringTitle] = useState(item.title);
  const [editStoringNotes, setEditStoringNotes] = useState(item.notes);
  // const handleDelete = (index) => {
  //   const updatedData = storingData.filter((_, i) => i !== index);
  //   setStoringData(updatedData);
  //   console.log(index);
  //   // handleDelete(id);
  // };

  console.log(item._id, storingData);
  console.log("Item in Notes Component:", item);

  const handleEditOpen = () => {
    setOpen(!open);
  };

  // const handleEditSave = async (id) => {
  //   const updatedData = {
  //     title: editStoringTitle,
  //     notes: editStoringNotes,
  //   };
  //   try {
  //     const res = await fetch(`http://localhost:3001${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body:JSON,stringify(updatedData)
  //     });
  //     if (res.ok) {
  //       const data = await res.json();
  //       console.log(data);
  //       const updatedEdit = storingData.map((data, index) => {
  //         return index === ind
  //           ? {
  //               ...data,...updatedData
  //             }
  //           : data;
  //       });
  //       setStoringData(updatedEdit);
  //       setOpen(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleEditSave = async (id: string) => {
  //   console.log(id);
  //   const updatedData = {
  //     title: editStoringTitle,
  //     notes: editStoringNotes,
  //   };

  //   try {
  //     const res = await fetch(`http://localhost:3001/update/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(updatedData),
  //     });

  //     if (res.ok) {
  //       const data = await res.json();
  //       console.log("Update Successful:", data);

  //       // Update the front-end state
  //       const updatedNotes = storingData.map((note) =>
  //         note._id === id ? { ...note, ...updatedData } : note
  //       );
  //       setStoringData(updatedNotes);
  //       setOpen(false);
  //     } else {
  //       console.error("Failed to update note");
  //     }
  //   } catch (error) {
  //     console.error("Error updating note:", error);
  //   }
  // };

  const handleEditSave = async () => {
    const currTitle = editStoringTitle;
    const currNotes = editStoringNotes;

    try {
      console.log("Editing note with ID:", item._id); // Debug log

      const res = await fetch(`http://localhost:3001/update/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: currTitle, note: currNotes }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log(data);
        const updatedEdit = storingData.map((data, index) =>
          index === ind ? { ...data, title: currTitle, notes: currNotes } : data
        );
        setStoringData(updatedEdit);
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(item.title, item.notes);
  return (
    <main className="flex flex-col gap-4 items-center w-full p-10">
      <section className="w-[450px] h-[230px] bg-white rounded-xl shadow-2xl">
        <div className="flex justify-between items-center p-4 cursor-pointer">
          <div className="bg-gray-300 p-1 px-5 rounded-3xl">
            <p className="text-red-400 font-bold">Buisness</p>
          </div>
          <div className="flex gap-4 text-xl">
            <MdCheckBoxOutlineBlank />
            <MdModeEdit onClick={handleEditOpen} />
            <RiDeleteBin6Line onClick={() => handleDelete(ind)} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="px-4 font-bold">{item.title}</h3>
          <p className="text-sm/loose px-4 font-medium overflow-auto">
            {item.notes}
          </p>
          <div className="flex justify-end items-end pt-15 pr-4">
            <p className="font-medium">{item.time}</p>
          </div>
        </div>
      </section>
      {open ? (
        <section className="w-[400px] h-[170px] flex flex-col border-2 border-blue-500 pt-2 bg-gray-200 rounded-md shadow-xl p-2">
          <div className="flex flex-col gap-3">
            <input
              type="text"
              value={editStoringTitle}
              className="h-[40px] border border-blue-300 outline-none rounded-lg pl-2"
              onChange={(e) => setEditStoringTitle(e.target.value)}
            />
            <textarea
              value={editStoringNotes}
              className="h-[70px] border border-blue-300 outline-none rounded-lg pl-2"
              onChange={(e) => setEditStoringNotes(e.target.value)}
            />
          </div>
          <div className="flex items-end justify-end pt-2 pr-4">
            <button
              type="submit"
              className="cursor-pointer  border border-red-200 px-3 bg-green-300 rounded-lg font-medium"
              onClick={handleEditSave}
            >
              Set
            </button>
          </div>
        </section>
      ) : null}
    </main>
  );
};

export default Notes;
