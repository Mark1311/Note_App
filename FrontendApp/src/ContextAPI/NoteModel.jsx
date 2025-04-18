import React, { useState } from "react";

const NoteModel = ({closeModal, addNotes}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault()
    addNotes(title, description);
    
};

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-20 flex justify-center items-center">
      <div className="bg-white p-8 rounded">
        <h2 className="text-xl font-bold mb-4"> Add New Notes</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="NOte Title"
            className="border p-2 w-full mb-4"  
          />
          <textarea
          value={description}
          onChange={(e)=> setDescription(e.target.value)}
          placeholder="ENTER Des."
          className="border p-2 w-full mb-4"
          />
          <button
          type="button"
          className="bg-blue-300 text-white px-4 py-2 rounded ">
            Add Notes
          </button>
        </form>
        <button className="mt-4 text-red-600" onClick={closeModal}>Cancled Notes</button>
      </div>
    </div>
  );
};

export default NoteModel;
