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
  const handleDelete = (index, id) => {
    const updatedData = storingData.filter((_, i) => i !== index);
    setStoringData(updatedData);
    console.log(index);
    // handleDelete(id);
  };

  const handleEditOpen = () => {
    setOpen(!open);
  };

  const handleEditSave = () => {
    const updatedEdit = storingData.map((data, index) => {
      return index === ind
        ? {
            ...data,
            title: editStoringTitle,
            notes: editStoringNotes,
          }
        : data;
    });
    setStoringData(updatedEdit);
    setOpen(false);
  };

  console.log(item.title, item.notes);
  return (
    <main key={ind} className="flex flex-col gap-4 items-center w-full p-10">
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
