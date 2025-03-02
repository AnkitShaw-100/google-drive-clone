import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdMore, IoMdArrowBack } from "react-icons/io";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
} from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
const Mail = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center gap-2 text-gray-700 py-2">
        <div
          onClick={() => navigate("/inbox")}
          className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
        >
          <IoMdArrowBack size={"20px"} />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
          <BiArchiveIn size={"20px"} />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
          <MdOutlineReport size={"20px"} />
        </div>
        <div
          className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
        >
          <MdDeleteOutline size={"20px"} />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
          <MdOutlineMarkEmailUnread size={"20px"} />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
          <MdOutlineWatchLater size={"20px"} />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
          <MdOutlineAddTask size={"20px"} />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
          <MdOutlineDriveFileMove size={"20px"} />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          disabled={false}
          className="hover:rounded-full hover:bg-gray-100"
        >
          <MdKeyboardArrowLeft size={"24px"} />
        </button>
        <button
          disabled={false}
          className="hover:rounded-full hover:bg-gray-100"
        >
          <MdKeyboardArrowRight size={"24px"} />
        </button>
      </div>
    </div>
    
  );
};

export default Mail;
