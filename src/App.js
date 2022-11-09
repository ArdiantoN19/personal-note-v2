import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePageWrapper from './pages/HomePage';
import ArchivedPageWrapper from './pages/ArchivedPage';
import DetailPageWrapper from './pages/DetailPage';
import AddPageWrapper from './pages/AddPage';
import PageNotFound from './pages/404Pages';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Notes Apps</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePageWrapper/>}/>
          <Route path='/archives' element={<ArchivedPageWrapper/>}/>
          <Route path='/notes/:id' element={<DetailPageWrapper/>}/>
          <Route path='/notes/new' element={<AddPageWrapper/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
