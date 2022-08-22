import { useState, useEffect } from 'react';
import NotesList from "./components/NotesList";
import { nanoid } from 'nanoid'; 
import SearchBar from './components/SearchBar';
import Header from './components/Header';

function App() {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "Example 1",
    date: "08/18/20",
  },
    {
    id: nanoid(),
    text: "Example 2",
    date: "08/18/20",
  },
    {
    id: nanoid(),
    text: "Exampe 3",
    date: "08/18/20",
  },
    {
    id: nanoid(),
    text: "Type in the blue box then press save       ------> ",
    date: "08/18/20",
  },
]);

  const [searchText, setSearchText] = useState('');


  //  Set Boolean
  const [darkMode, setDarkMode] = useState(false);

 // Load saved storage


  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('takenotes')
      );

      if(savedNotes) {
        setNotes(savedNotes);
      }
    
  }, []);
  
  


//  LocalStorage
  useEffect(() => {
    localStorage.setItem('takenotes', JSON.stringify(notes)
    )
  }, [notes])

 

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [... notes, newNote];
    setNotes(newNotes);
  };

    const deleteNote = (id) => {
      // filter function
      const newNotes = notes.filter((note)=> note.id !== id);
      setNotes(newNotes);

    }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className='container'>
        <Header handleToggleDarkMode={setDarkMode}/>
        <SearchBar 
        // Hook Function, now destructure in searchbar component
        handleSearchNote={setSearchText} />
        <NotesList 
        // how to search for specific note
        notes={notes.filter((note)=>
           note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}/>
      
    </div>

    </div>

  );
}

export default App;
