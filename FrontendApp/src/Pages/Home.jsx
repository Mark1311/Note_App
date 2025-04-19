import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import NoteModel from "../Components/NoteModel";
import axios from "axios";
import NoteCart from "../Components/NoteCart";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null)

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/note");
      console.log("Fetching notes", data.notes);
      setNotes(data.notes);
    } catch (error) {
      console.log(error);
    }
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const onEdit= (note) =>{
    setCurrentNote(note)
    setModalOpen(true)
  }


  const addNotes = async (title, description) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/note/add",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      if (response.data.success) {
        fetchNotes();
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id) =>{
    try{
      const response = await axios.delete(
        `http://localhost:5000/api/note/${id}`,
        {
          headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      if(response.data.success){
        fetchNotes()
      }
    }catch(error){
      console.log(error)
    }

  }

  const EditNotes = async (id, title, description) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/note/${id}`,
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      if (response.data.success) {
        fetchNotes();
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <div className="px-8 pt-4 grid grid-cols-1 md:grid-cols-3 gap-5">
        {notes && notes.length > 0 ? (
          notes.map((note) => <NoteCart key={note._id} note={note} onEdit={onEdit} deleteNote={deleteNote} />)
        ) : (
          <p>No notes available.</p>
        )}
      </div>

      <button
        onClick={() => setModalOpen(true)}
        className="fixed right-4 bottom-4 text-2xl bg-teal-500 text-white font-boldp-4 rounded-full"
      >
        +
      </button>
      {isModalOpen && <NoteModel closeModal={closeModal} addNotes={addNotes} currentNote={currentNote} EditNotes={EditNotes} deleteNote={deleteNote}/>}
    </div>
  );
}
