import React from 'react';
import PropTypes from 'prop-types';

function ArchivedNote({id, text, onArchive}) {
    return <button className='action' id={id} onClick={() => onArchive(id)} title={text}>&#9750;</button>;
}

ArchivedNote.propTypes = {
    id: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}

export default ArchivedNote;