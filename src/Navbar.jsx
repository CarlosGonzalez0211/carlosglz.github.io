export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Your Name */}
        <div className="text-xl font-bold text-gray-800">Your Name</div>

        {/* Right: Page Links */}
        <ul className="flex space-x-6 text-gray-600 font-medium">
          <li>
            <a href="#about" className="hover:text-blue-600">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
