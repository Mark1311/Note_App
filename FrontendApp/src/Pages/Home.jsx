import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import NoteModel from "../Components/NoteModel";
import axios from "axios";
import NoteCart from "../Components/NoteCart";
import { toast } from "react-toastify";
import { useAuth } from "../ContextAPI/ContextProvider";
import book from "../Img/book.png";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [filteredNotes, setFilteredNotes] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [query, setQuery] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchNotes(); // user logged in hai -> fetch notes
    } else {
      setNotes([]); // user null ho gaya -> clear notes
    }
  }, [user]);

  useEffect(() => {
    setFilteredNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLocaleLowerCase())
      ) ||
        notes.filter((note) =>
          note.description.toLowerCase().includes(query.toLocaleLowerCase())
        )
    );
  }, [query, notes]);

  const fetchNotes = async () => {
    try {
      const { data } = await axios.get("https://note-app-l2da.onrender.com/api/note", {
        // const { data } = await axios.get("http://localhost:5000/api/note", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setNotes(data.notes);
    } catch (error) {
      console.log(error);
    }
  };
  
  const closeModal = () => {
    setModalOpen(false);
    setCurrentNote(null); // ✅ Reset current note
  };

  const onEdit = (note) => {
    setCurrentNote(note);
    setModalOpen(true);
  };

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
        toast.success("Note Added SuccessFully");
        fetchNotes();
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/note/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        toast.success("note deleted");
        fetchNotes();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        toast.success("Note Edit Sucess");
        fetchNotes();
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen">
      <NavBar setQuery={setQuery} />
      <div className="px-8 pt-4 grid grid-cols-1 md:grid-cols-3 gap-5">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <NoteCart
              key={note._id}
              note={note}
              onEdit={onEdit}
              deleteNote={deleteNote}
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center text-center mt-10">
            <h1 className="text-xl font-semibold mb-4" style={{ filter: "blur(1.25px)"}}>No Notes Available...!!!</h1>
            <img
              src={book}
              alt="Logo"
              className="w-120  h-auto"
              style={{ filter: "blur(4.5px)"}}
            />
          </div>
        )}
      </div>

      <button
        onClick={() => {
          setCurrentNote(null); // ✅ Just to be safe
          setModalOpen(true);
        }}
        className="fixed right-4 bottom-4 text-3xl bg-teal-500 text-white font-bold p-4 rounded-full shadow-lg hover:bg-teal-600 transition duration-300"
      >
        +
      </button>
      {isModalOpen && (
        <NoteModel
          closeModal={closeModal}
          addNotes={addNotes}
          currentNote={currentNote}
          EditNotes={EditNotes}
          deleteNote={deleteNote}
        />
      )}
    </div>
  );
}
