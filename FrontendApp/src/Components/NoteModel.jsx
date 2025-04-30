import React, { useEffect, useState } from "react";

const NoteModel = ({ closeModal, addNotes, currentNote, EditNotes }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setDescription(currentNote.description);
    } else {
      // ✅ Jab currentNote null ho (new note), to fields blank ho
      setTitle("");
      setDescription("");
    }
  }, [currentNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentNote) {
      EditNotes(currentNote._id, title, description);
    } else {
      addNotes(title, description);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-20 flex justify-center items-center">
      <div className="bg-white p-8 rounded">
        <h2 className="text-xl font-bold mb-4">
          {currentNote ? "Edit Notes" : "Add New Notes"}
        </h2>
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
            onChange={(e) => setDescription(e.target.value)}
            placeholder="ENTER Des."
            className="border p-2 w-full mb-4"
          />
          <button
            type="submit"
            className="bg-blue-800 text-white px-4 py-2 rounded "
          >
            {currentNote ? "Update Note" : "Add Notes"}
          </button>
        </form>
        <button className="mt-4 text-red-600" onClick={closeModal}>
          Cancled Notes
        </button>
      </div>
    </div>
  );
};

export default NoteModel;
