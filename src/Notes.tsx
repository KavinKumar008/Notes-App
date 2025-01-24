import { RiDeleteBin6Line } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Notes = ({ item }) => {
  return (
    <main className="flex items-center w-full p-10">
      <section className="w-[350px] h-[200px] bg-yellow-300 rounded-xl">
        <div className="flex justify-between items-center p-4 cursor-pointer">
          <div className="border border-blue-400 bg-gray-400 p-1 px-5 rounded-3xl">
            <p className="text-red-600">Buisness</p>
          </div>
          <div className="flex gap-4 text-xl">
            <MdCheckBoxOutlineBlank />
            <MdModeEdit />
            <RiDeleteBin6Line />
          </div>
        </div>
        <p className="text-sm/loose p-4 font-medium">{item}</p>
      </section>
      {/* <section className="w-[350px] h-[200px] bg-yellow-300 rounded-xl">
        <div className="flex justify-between items-center p-4 cursor-pointer">
          <div className="border border-blue-400 bg-gray-400 p-1 px-5 rounded-3xl">
            <p className="text-red-600">Buisness</p>
          </div>
          <div className="flex gap-4 text-xl">
            <MdCheckBoxOutlineBlank />
            <MdModeEdit />
            <RiDeleteBin6Line />
          </div>
        </div>
      </section>
      <section className="w-[350px] h-[200px] bg-yellow-300 rounded-xl">
        <div className="flex justify-between items-center p-4 cursor-pointer">
          <div className="border border-blue-400 bg-gray-400 p-1 px-5 rounded-3xl">
            <p className="text-red-600">Buisness</p>
          </div>
          <div className="flex gap-4 text-xl">
            <MdCheckBoxOutlineBlank />
            <MdModeEdit />
            <RiDeleteBin6Line />
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default Notes;
