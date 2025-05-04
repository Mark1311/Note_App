import React, { useEffect, useState } from "react";

const NoteModel = ({ closeModal, addNotes, currentNote, EditNotes }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setDescription(currentNote.description);
    } else {
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
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 sm:p-8 rounded w-full sm:w-auto max-w-md">
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">
          {currentNote ? "Edit Notes" : "Add New Note..."}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note Title..."
            className="border p-2 w-full mb-4 rounded-md"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
            className="border p-2 w-full mb-4 rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-800 text-white px-4 py-2 rounded w-full"
          >
            {currentNote ? "Update Note" : "Add Note"}
          </button>
        </form>
        <button
          className="mt-4 text-red-600 w-full text-center"
          onClick={closeModal}
        >
          Cancel Note
        </button>
      </div>
    </div>
  );
};

export default NoteModel;
