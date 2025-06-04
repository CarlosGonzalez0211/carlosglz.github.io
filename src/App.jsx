import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
