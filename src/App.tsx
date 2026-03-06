import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { Footer } from './components/Footer';
import { BootSequence } from './components/BootSequence';

function App() {
  const [booting, setBooting] = useState(true);

  return (
    <>
      {booting ? <BootSequence onComplete={() => setBooting(false)} /> : null}
      <div style={{ opacity: booting ? 0 : 1, transition: 'opacity 0.6s ease-in', height: '100%' }}>
        <Navbar />
        <Hero />
        <TrustedBy />
        <Services />
        <Benefits />
        <Footer />
      </div>
    </>
  );
}

export default App;
