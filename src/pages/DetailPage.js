import React from 'react';
import { useParams } from 'react-router-dom';
import autoBindReact from 'auto-bind/react';
import PropTypes from 'prop-types';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import DeleteNote from '../components/DeleteNote';
import ArchivedNote from '../components/ArchivedNote';
import PageNotFound from './404Pages';

function DetailPageWrapper() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    function onDeleteHandler(id) {
        deleteNote(id);
        navigate('/');
    }

    function onArchivedHandler(id) {
        archiveNote(id)
        navigate('/');
    }

    function onUnarchicedHandler(id) {
        unarchiveNote(id);
        navigate('/');
    }

    return <DetailPage id={id} onDeleteHandler={onDeleteHandler} onArchivedHandler={onArchivedHandler} onUnarchicedHandler={onUnarchicedHandler}/>
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        autoBindReact(this);
        this.state = {
            notes: getNote(props.id)
        };
    }

    render() {
        const result = this.state.notes;
        return (
            result === undefined ?
            <PageNotFound/> :
            <section>
                <NoteDetail {...this.state.notes}/>
                <div className="detail-page__action">
                    {
                        this.state.notes.archived === true ? 
                        <ArchivedNote id={this.props.id} onArchive={this.props.onUnarchicedHandler} text="Aktifkan"/> :
                        <ArchivedNote id={this.props.id} onArchive={this.props.onArchivedHandler} text="Arsipkan"/>
                    }
                    <DeleteNote id={this.props.id} onDelete={this.props.onDeleteHandler}/>
                </div>
            </section>
        );
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
    onDeleteHandler: PropTypes.func.isRequired,
    onArchivedHandler: PropTypes.func.isRequired, 
    onUnarchicedHandler: PropTypes.func.isRequired,
}

export default DetailPageWrapper;