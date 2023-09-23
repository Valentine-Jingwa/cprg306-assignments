// components/Navbar.js

const Navbar = ({ links }) => {
    return (
      <nav className="fixed top-0 left-0 w-full bg-gray-300 text-center py-4 z-50">
        <ul className="flex justify-around">
          {links.map((link, index) => (
            <li key={index} className="px-6 py-2 rounded-lg hover:bg-gray-200 hover:shadow-md">
              <a href={link.url} className="text-black font-bold">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  
  