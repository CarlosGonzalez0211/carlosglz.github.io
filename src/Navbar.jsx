import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-primary text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyPortfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-accent">About</a></li>
          <li><a href="#projects" className="hover:text-accent">Projects</a></li>
          <li><a href="#contact" className="hover:text-accent">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;