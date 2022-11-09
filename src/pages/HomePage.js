import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import autoBindReact from 'auto-bind/react';
import NoteList from '../components/NoteList';
import { getActiveNotes } from '../utils/local-data';
import AddNote from '../components/AddNote';
import SearchBar from '../components/SearchBar';

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({keyword});
    }

    return <HomePage onSearch={changeSearchParams} defaultKeyword={keyword}/>
}   

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        autoBindReact(this);
        this.state = {
            notes: getActiveNotes(),
            keyword: props.defaultKeyword || '',
        };
    }

    onSearchHandler(event) {
        const { value } = event.target;
        this.setState(() => {
            return {
                keyword: value
            };
        });
        this.props.onSearch(value);
    }

    render() {
        const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.keyword.toLowerCase()));
        return (
            <section>
                <h2>Catatan Aktif</h2>
                <SearchBar search={this.state.keyword} onSearch={this.onSearchHandler}/>
                <NoteList notes={notes}/>
                <div className="homepage__action">
                    <AddNote />
                </div>
            </section>
        );
    }
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
}

export default HomePageWrapper;