import { useState } from "react";


const AddNote = ({ handleAddNote }) => {
  // Empty String, so text box start off with empty string
  const [noteText, setNoteText] = useState('');
  // create function to add note in textarea

  const characterLimit = 200;

  // JS argument event 

  const handleChange = (event) => {
    // console.log(event.target.value)
    // will update the value of the text when typed
    if (characterLimit - event.target.value.length >= 0)
      setNoteText(event.target.value);
  }

  // Allow text in note pad to resizeTo, after you save a new note
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    }

  }


  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className='note-footer'>
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>

  )
}

export default AddNote;