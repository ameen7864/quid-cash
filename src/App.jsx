import React, { useState } from "react";
// import "./Notes.css"; // Add your styles here

const Notes = () => {
  const [notes, setNotes] = useState([
    { id: "1", content: "Note 1" },
    { id: "2", content: "Note 2" },
    { id: "3", content: "Note 3" },
  ]);

  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };

  const handleDragEnter = (index) => {
    const newNotes = [...notes];
    const draggedItem = newNotes[draggedItemIndex];
    newNotes.splice(draggedItemIndex, 1);
    newNotes.splice(index, 0, draggedItem);

    setDraggedItemIndex(index);
    setNotes(newNotes);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = () => {
    setDraggedItemIndex(null);
  };

  return (
    <div className="notes-container">
      {notes.map((note, index) => (
        <div
          key={note.id}
          className="note"
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragEnter={() => handleDragEnter(index)}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {note.content}
        </div>
      ))}
    </div>
  );
};

export default Notes;
