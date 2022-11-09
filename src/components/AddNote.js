import React from 'react';
import { Link } from 'react-router-dom';

function AddNote() {
    return <Link to="/notes/new" className='action' state={{TextDecoration: 'none'}} title='Tambah catatan'>&#10010;</Link>
}

export default AddNote;