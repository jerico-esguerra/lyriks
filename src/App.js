import { Route, Routes } from 'react-router-dom';

import { SearchBar, Sidebar, TopPlay } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';

function App() {
  return (
    <div>
      <Sidebar />
      <div>
        <SearchBar />
        <div>
          <div>
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div>
            <TopPlay />
          </div>
        </div>
      </div>
      {/*Music Player*/}
    </div>
  );
}

export default App;
