import React, { useState, useEffect } from 'react'
import { phrasesApi } from '../../api/kenye'
import './styles.css'

function Home() {
  const [phrases, setPhrases] = useState()

  useEffect(() => {
    phrasesApi().then(response => setPhrases(response))
  },[])
  
  return (
    <div className="App">
      <h1>{phrases + ' - Kanye West'}</h1>
      <button onClick={() => phrasesApi().then(response => setPhrases(response))}>Next Sentence</button>
    </div>
  );
}

export default Home;