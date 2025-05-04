import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

const NoteCart = ({ note, onEdit, deleteNote }) => {
  return (
    <div className="p-4 rounded shadow">
      <h2 className="text-lg sm:text-xl font-bold">{note.title}</h2>
      <p className="text-sm sm:text-base">{note.description}</p>
      <div className="flex justify-end mt-2">
        <button
          className="text-blue-500 mr-2 text-sm sm:text-base"
          onClick={() => onEdit(note)}
        >
          <FaRegEdit />
        </button>
        <button
          className="text-red-500 text-sm sm:text-base"
          onClick={() => deleteNote(note._id)}
        >
          <FaTrashCan />
        </button>
      </div>
    </div>
  );
};

export default NoteCart;
