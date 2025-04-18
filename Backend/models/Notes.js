import mongoose, { Types } from "mongoose"

const NoteSchema = new mongoose.Schema({
    title :{type:"String", require: True},
    description :{type: "String", require: true},
    userId : { type: mongoose.Schema.Types.ObjectId, ref:'User'},
});

const Note = mongoose.model("Note",NoteSchema);
export default Note;