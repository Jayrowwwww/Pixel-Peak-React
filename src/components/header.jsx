import Logo from '../assets/_imgs/logo-only.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-100 h-20 w-full px-5 md:px-40 z-10 fixed shadow-md font-[Montserrat]">
      
      <Link to="/">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-9 md:h-10" />
          <h1 className="font-bold text-[20px] ml-2">PixelPeak</h1>
        </div>
      </Link>

      <button className="md:hidden text-sky-800 text-3xl cursor-pointer focus:outline-none" id="menu-btn">
        <i className="fa-solid fa-bars"></i>
      </button>

      <ul className="md:flex gap-20 text-[20px] hidden">
        <li><Link to="/" className="hover:text-[#38BDF8]">Home</Link></li>
        <li><Link to="/products" className="hover:text-[#38BDF8]">Products</Link></li>
        <li><Link to="/about" className="hover:text-[#38BDF8]">About</Link></li>
        <li><Link to="/contact" className="hover:text-[#38BDF8]">Contact</Link></li>
        <li><Link to="/cart" className="hover:text-[#38BDF8]">Cart</Link></li>
      </ul>
    </header>
  );
}
