import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Benefits />
      <Footer />
    </>
  );
}

export default App;
