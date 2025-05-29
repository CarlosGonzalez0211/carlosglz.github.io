export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black py-5 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-white text-2xl font-bold tracking-wide">
          <span className="text-orange-500 text-3xl align-top">'</span>
          Godsherit
          <span className="text-orange-500">age.</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-10 text-white font-medium text-sm">
          <li>
            <a href="#home" className="text-orange-500">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-orange-500 transition">About Me</a>
          </li>
          <li>
            <a href="#resume" className="hover:text-orange-500 transition">Resume</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-500 transition">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
