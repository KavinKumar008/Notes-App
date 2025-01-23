import { RiDeleteBin6Line } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Notes = () => {
  return (
    <section className="w-[300px] h-[200px] bg-yellow-300 rounded-lg">
      <div className="flex p-2 cursor-pointer">
        <p>Buisness</p>
        <div className="flex ">
          <MdCheckBoxOutlineBlank />
          <MdModeEdit />
          <RiDeleteBin6Line />
        </div>
      </div>
    </section>
  );
};

export default Notes;
