import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import dummyStore from './dummy-store';
import FolderList from './components/FolderList';
import Folder from './components/FolderList';
import Note from './components/Note';
import NotesList from './components/NotesList';

class App extends React.Component {

  state = {
    notes: [],
    folders: []
  };

  componentDidMount() {
    // Ajax stuff
  }

  renderFolderView() {

  }

  renderNotesView() {

  }
  // Doing the structure for the main view. Afterwards do the structure for the folder view and notes view.
  //   <div className="App">
  //   <header>
  //     <h1><Link to='/'>Noteful</Link></h1>
  //   </header>
  //   <nav>
  //   <FolderList>
  //     <Folder />
  //     <Folder />
  //     <Folder />
  //   </FolderList>
  //   </nav>
  //   <main>
  //   <NotesList>
  //       <Note />
  //       <Note />
  //     </NotesList>
  //   </main>
  // </div>

  render() {
    const {notes, folders} = this.state;
    return (
      <div className="App">
        <header>
          <h1><Link to='/'>Noteful</Link></h1>
        </header>
        <nav>
          {/* HOW DO IREFERENCE FOLDERS? */}
          {folders.map(path => (
            <Route 
              exact
              key={path}
              path={path}
              render={extraProps => (
                <FolderList 
                  folders={folders}
                  notes={notes}
                  {...extraProps}/>
              )}/>
          ))}
        </nav>
        <main>
        {/* <NotesList /> */}
        </main>
      </div>
    );
  }
}

export default App;
