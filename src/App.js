import React, { useState } from 'react';

function App() {
  const [champions, setChampions] = useState(['Ezreal']);
  const [newChampion, setNewChampion] = useState('');

  function handleAdd() {
    setChampions([...champions, newChampion]);
    setNewChampion('');
  }
  return (
    <>
      <ul>
        {champions.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <input
        value={newChampion}
        onChange={(e) => setNewChampion(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}

export default App;
