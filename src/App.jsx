import { SearchBar } from "./SearchBar";
import { VideoList } from "./VideoList";
import { SearchResultList } from "./SearchResultsList";
import { Footer } from "./Footer";
import { React, useState } from 'react'
// import { ReactPlayer } from 'react-player'



function App() {
  const [results, setResults] = useState([]);


  return (
    <div className="App">
      <div className="search-bar container">
        <SearchBar setResults={setResults} />
        <SearchResultList results={results} />
         <div>
            <VideoList />
            {/* <ReactPlayer url='https://www.youtube.com/watch?v=7z7kqwuf0a8&t=5s&ab_channel=PlayStation' />  */}
            <Footer />
        </div>
      </div>
    </div>
  )
}

export default App;
