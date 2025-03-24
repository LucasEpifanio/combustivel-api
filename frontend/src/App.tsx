import React from 'react';
import './App.css';
import Formuluario from './components/Formulario';
import MapComponent from "./components/Mapa";

function App() {

  return (
      <div className="App">
        <header className="App-header">
          <h1 className='App-title' style={{ fontSize: '2.2rem' }}>Encontre o Combustível mais barato da sua região 📍</h1>
        </header>
        <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1400px', margin: '0 auto', paddingTop: '2rem', height: '100vh' }}>
        <section className='main-section' style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', alignContent: 'center', width: '100%' }}>
        <div style={{ flex: 3 }}>
            <Formuluario />
          </div>
          <div style={{ flex: 7 }}>
            <MapComponent />
          </div>
          </section>
        </main>
    </div>
  );
}

export default App;
