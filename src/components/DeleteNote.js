import React from 'react';
import PropTypes from 'prop-types';

function DeleteNote({id, onDelete}) {
    return <button className='action' id={id} onClick={() => onDelete(id)} title="Hapus catatan">&#10006;</button>;
}

DeleteNote.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DeleteNote;