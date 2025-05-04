import React, { useState } from 'react';

export default function AjoutArtiste() {
  const [nom, setNom] = useState('');
  const [genre, setGenre] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload =
      {
        nomArtistique: nom,
        genreMusical: genre,
      };

    fetch('http://localhost:8082/artiste/dto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        //if (!res.ok) throw new Error("Erreur lors de l'envoi");
        //return res.json();
      })
      .then(() => {
        setMessage('✅ Artiste ajouté avec succès');
        setNom('');
        setGenre('');
      })
      .catch((err) => {
        console.error(err);
        setMessage('❌ Erreur lors de l\'ajout');
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-success">Ajouter un artiste</h1>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
        <div className="mb-3">
          <label className="form-label">Nom artistique</label>
          <input
            type="text"
            className="form-control"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Genre musical</label>
          <input
            type="text"
            className="form-control"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
      {message && <div className="alert mt-3 alert-info">{message}</div>}
    </div>
  );
}
