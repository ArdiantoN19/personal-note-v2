import React from 'react';
import autoBindReact from 'auto-bind/react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';

function AddPageWrapper() {
    const navigate = useNavigate();

    function onAddNotesHandler(notes) {
        addNote(notes);
        navigate('/');
    }

    return (
        <section>
            <h2>Tambah Catatan</h2>
            <AddPage addNote={onAddNotesHandler}/>
        </section>
    )
}

class AddPage extends React.Component {
    constructor(props) {
        super(props);
        autoBindReact(this);
        this.state = {
            title: '',
            body: '',
        };
    }

    onTitleChangeEventHandler(event) {
        const { value } = event.target;
        this.setState(() => {
            return {
                title: value
            };
        });
    }
    
    onInputHandler(event) {
        this.setState(() => {
            return {
                body: event.target.innerHTML
            };
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
                <form className='add-new-page__input' onSubmit={this.onSubmitEventHandler}>
                    <input type="text" className='add-new-page__input__title' placeholder='Ketikkan judul disini...' value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                    <div className='add-new-page__input__body' data-placeholder='Ketikkan catatan disini...' contentEditable onInput={this.onInputHandler}/>
                    <button type='submit' className='button-add-item' title='Simpan'>&#10004;</button>
                </form>
        )
    }
}

AddPage.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default AddPageWrapper;