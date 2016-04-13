import React from 'react';
import Editable from './Editable.jsx';
import Note from './Note.jsx';

import LaneActions from '../actions/LaneActions';


export default ({notes, onValueClick, onEdit, onColorEdit, onDelete}) => {
  return (
    <ul className="notes">{notes.map(note =>
      <Note className="note" id={note.id} key={note.id} editing={note.editing} bgcolor={note.bgcolor} onMove={LaneActions.move}>
        <Editable
        	editing={note.editing}
          	value={note.task}
          	bgcolor={note.bgcolor}
          	onValueClick={onValueClick.bind(null, note.id)}
        	onEdit={onEdit.bind(null, note.id)}
        	onColorEdit={onColorEdit.bind(null, note.id)}
        	onDelete={onDelete.bind(null, note.id)} />
      </Note>
    )}</ul>
  );
}