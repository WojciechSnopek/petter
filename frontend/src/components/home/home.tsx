import { useEffect, useState } from 'react';
import './home.css';

const Home = () => {
  const [petsitters, setPetsitters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPetsitters = async () => {
      const JWTToken = localStorage.getItem('JWTToken');
      try {
        const response = await fetch('http://127.0.0.1:8099/petsitters/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${JWTToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPetsitters(data); // Assuming the response is an array of petsitters
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPetsitters();
  }, []);

  return (
    <div>
      <div style={{ color: 'white', width: '20%' }}>
      <div className="petsitters-container">
        {error ? (
          <p className="error">Error: {error}</p>
        ) : petsitters.length > 0 ? (
          petsitters.map((petsitter) => (
            <div className="card" key={petsitter.id}>
              <img
                src={petsitter.photo}
                alt={`${petsitter.username}'s profile`}
                className="card-image"
              />
              <h2>{petsitter.username}</h2>
              <p><strong>Email:</strong> {petsitter.email}</p>
              <p><strong>Phone:</strong> {petsitter.phone}</p>
            </div>
          ))
        ) : (
          <p>Loading petsitters...</p>
        )}
      </div>
      </div>

      <div className="title">
        <h1>PETTER</h1>
        <p className="subtitle">Let us take care of your pets</p>
      </div>
    </div>
  );
};

export default Home;