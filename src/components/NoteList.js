import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

function NoteList({notes}) {
    if(!notes.length) {
        return (
            <div className="notes-list-empty">
                <p>Catatan tidak ditemukan</p>
            </div>
        );
    }
    
    return (
        <div className="notes-list">
            {
                notes.map((note) => (
                    <NoteItem key={note.id} {...note}/>
                ))
            }
        </div>
    );
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default NoteList;