import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [champions, setChampions] = useState(['Ezreal']);
  const [newChampion, setNewChampion] = useState('');

  const handleAdd = useCallback(() => {
    setChampions([...champions, newChampion]);
    setNewChampion('');
  }, [champions, newChampion]);

  useEffect(() => {
    const storage = localStorage.getItem('champions');
    if (storage) {
      setChampions(JSON.parse(storage));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('champions', JSON.stringify(champions));
  }, [champions]);

  const championsSize = useMemo(() => champions.length, [champions]);
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
      <p>Total de campeões: {championsSize}</p>
    </>
  );
}

export default App;
