import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import {useState, useEffect} from 'react';
import './App.css';


function App(props) {
  const [searchResults, setSearchResults] = useState([])
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  useEffect(()=> {
    setPlaylistTracks([
      {
        id:1,
        name: "asd",
        album: "Fallling",
        artist: "THis is tit"
      },
      {
        id:2,
        name: "Around and Around",
        album: "Fallling",
        artist: "THis is tit"
      },
      {
        id:3,
        name: "Forever",
        album: "Fallling",
        artist: "THis is tit"
      }
    ])
  }, [])

  const updatePlaylistName = (name)=> {
    setPlaylistName(name)
  }

  const addTrack = (track)=> {
    !playlistTracks.includes(track.id) && setPlaylistTracks((prevTracks)=> [...prevTracks, track])
  }

  const removeTrack = (track)=> {
    setPlaylistTracks((prevTracks)=> prevTracks.filter((x)=>x.id!=track.id))
  }
  
  const savePlaylist = ()=> {
    let trackURIs = playlistTracks.map((track)=> track.uri)
  }

  const search = (term)=> {
    console.log(term)
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search}/>
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack}/>
          <Playlist 
          playlistName={playlistName} 
          playlistTracks={playlistTracks} 
          onRemove={removeTrack} 
          onNameChange={updatePlaylistName}
          onSave={savePlaylist}/>
        </div>
      </div>
    </div>
  );
}

export default App;
