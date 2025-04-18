import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import NoteModel from "../ContextAPI/NoteModel";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const addNotes = async (title, description) => {
    try {
      const response = await axios.post("http://localhost:5000/api/note/add", {
        title,
        description,
      }, {
        headers:{
          Authorization:`Bearer ${localStorage.getItem("towken")}`
        }
      });
      console.log(response);
      if (response.data.success) {
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <NavBar />

        <button
          onClick={() => setModalOpen(true)}
          className="fixed right-4 bottom-4 text-2xl bg-teal-500 text-white font-boldp-4 rounded-full"
        >
          +
        </button>
        {isModalOpen && <NoteModel closeModal={closeModal} addNotes={addNotes} />}
      </div>
    </>
  );
}
