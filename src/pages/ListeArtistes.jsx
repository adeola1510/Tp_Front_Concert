import React, { useEffect, useState } from 'react';

export default function ListeArtistes() {
  const [artistes, setArtistes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8082/artiste/dto')
      .then((res) => {
        if (!res.ok) throw new Error('Erreur réseau');
        return res.json();
      })
      .then((data) => setArtistes(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-primary">Liste des Artistes</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nom Artistique</th>
              <th>Genre Musical</th>
            </tr>
          </thead>
          <tbody>
            {artistes.map((artiste) => (
              <tr key={artiste.id}>
                <td>{artiste.id}</td>
                <td>{artiste.nomArtistique}</td>
                <td>{artiste.genreMusical}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
