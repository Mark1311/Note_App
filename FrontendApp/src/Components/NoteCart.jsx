import React from 'react'
// import {FrEdit, FaTrash} from 'react-icons/fa'
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";


const NoteCart = ({note , onEdit, deleteNote}) => {
  // console.log(note)
  // console.log(note.title)
  return (
    <div className='bg-white p-4 rounded shadow'>
        <h2 className='text-xl font-bold'>{note.title}</h2>
        <p>{note.description}</p>
        <div className='flex justify-end mt-2'>
            <button className='text-blue-500 mr-2' onClick={()=>onEdit(note)}>
            <FaRegEdit />
            </button>
            <button className='text-red-500' onClick={()=>deleteNote(note._id)}>
            <FaTrashCan />
            </button>

        </div>

    </div>
  )
}

export default NoteCart