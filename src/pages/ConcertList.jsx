import React, { useState } from 'react';

const concerts = [
  {
    id: 1,
    titre: 'Big Sound Festival',
    artiste: 'DJ Snake',
    ville: 'Paris',
    date: '2025-06-14',
    prix: 45,
    genre: 'Électro',
  },
  {
    id: 2,
    titre: 'Rock en Seine',
    artiste: 'Arctic Monkeys',
    ville: 'Saint-Cloud',
    date: '2025-08-23',
    prix: 60,
    genre: 'Rock',
  },
  {
    id: 3,
    titre: 'Jazz à Vienne',
    artiste: 'Avishai Cohen',
    ville: 'Vienne',
    date: '2025-07-05',
    prix: 35,
    genre: 'Jazz',
  },
];

export default function ConcertList() {
  const [filtre, setFiltre] = useState('Tous');
  const [concertSelectionne, setConcertSelectionne] = useState(null);
  const [formData, setFormData] = useState({ nom: '', email: '', quantite: 1 });
  const [confirmation, setConfirmation] = useState('');

  const genres = ['Tous', ...new Set(concerts.map(c => c.genre))];

  const concertsFiltres =
    filtre === 'Tous' ? concerts : concerts.filter(c => c.genre === filtre);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmation(
      `🎫 Merci ${formData.nom}, vous avez réservé ${formData.quantite} ticket(s) pour "${concertSelectionne.titre}" !`
    );
    setFormData({ nom: '', email: '', quantite: 1 });
    setConcertSelectionne(null);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🎶 Concerts à venir</h2>

      <div className="text-center mb-4">
        <label htmlFor="filtre">Filtrer par genre : </label>{' '}
        <select
          id="filtre"
          value={filtre}
          onChange={(e) => setFiltre(e.target.value)}
        >
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      {confirmation && (
        <div className="alert alert-success text-center">{confirmation}</div>
      )}

      <div className="row">
        {concertsFiltres.map((concert) => (
          <div className="col-md-6 mb-4" key={concert.id}>
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="card-title">{concert.titre}</h5>
                <p className="card-text">
                  <strong>🎤 Artiste :</strong> {concert.artiste} <br />
                  <strong>📍 Ville :</strong> {concert.ville} <br />
                  <strong>📅 Date :</strong> {concert.date} <br />
                  <strong>💶 Prix :</strong> {concert.prix} € <br />
                  <strong>🎵 Genre :</strong> {concert.genre}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setConcertSelectionne(concert);
                    setConfirmation('');
                  }}
                >
                  Acheter un ticket
                </button>

                {concertSelectionne?.id === concert.id && (
                  <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="form-group mb-2">
                      <label>Nom</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.nom}
                        onChange={(e) =>
                          setFormData({ ...formData, nom: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="form-group mb-2">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="form-group mb-2">
                      <label>Nombre de tickets</label>
                      <input
                        type="number"
                        className="form-control"
                        value={formData.quantite}
                        min="1"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            quantite: parseInt(e.target.value, 10),
                          })
                        }
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-success mt-2">
                      Valider la commande
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
