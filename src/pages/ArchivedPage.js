import React from "react";
import autoBindReact from 'auto-bind/react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import { getArchivedNotes } from "../utils/local-data";
import SearchBar from '../components/SearchBar';

function ArchivedPageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({keyword})
    }

    return <ArchivedPage changeSearchParams={changeSearchParams} defaultKeyword={keyword}/>
}

class ArchivedPage extends React.Component {
    constructor(props) {
        super(props);
        autoBindReact(this);
        this.state = {
            notes: getArchivedNotes(),
            keyword: props.defaultKeyword || ''
        };
    }

    onSearchHandler(event) {
        const { value } = event.target;
        this.setState(() => {
            return {
                keyword: value
            }
        });
        this.props.changeSearchParams(value);
    }

    render() {
        const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.keyword.toLowerCase()));
        return (
            <section>
                <h2>Catatan Arsip</h2>
                <SearchBar search={this.state.keyword} onSearch={this.onSearchHandler}/>
                <NoteList notes={notes}/>
            </section>
        );
    }
}

ArchivedPage.propTypes = {
    defaultKeyword: PropTypes.string,
    changeSearchParams: PropTypes.func.isRequired,
}

export default ArchivedPageWrapper;