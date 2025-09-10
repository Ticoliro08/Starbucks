import { Link } from 'react-router-dom';
import { ShoppingCart, Sun } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center text-white font-bold">★</div>
        <span className="font-bold text-green-900">Starbucks</span>
      </div>

      <nav className="flex gap-6">
        <Link to="/" className="hover:text-green-800">Home</Link>
        <Link to="/menu" className="hover:text-green-800">Menu</Link>
        <Link to="/contato" className="hover:text-green-800">Contato</Link>
      </nav>

      <div className="flex gap-4">
        <Sun size={20} className="cursor-pointer"/>
        <ShoppingCart size={20} className="cursor-pointer"/>
      </div>
    </header>
  )
}
