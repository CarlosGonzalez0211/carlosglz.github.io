import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar';
import './App.css'

function App() {
  return (
    <div>
      <Navbar />

      {/* Add top padding so content doesn't hide under navbar */}
      <div className="pt-20">
        <section id="about" className="p-8">About Section</section>
        <section id="projects" className="p-8">Projects Section</section>
        <section id="contact" className="p-8">Contact Section</section>
      </div>
    </div>
  );
}

export default App