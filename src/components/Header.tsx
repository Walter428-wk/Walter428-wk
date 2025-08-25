import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';

interface HeaderProps {
  onSearchChange?: (search: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchChange) {
      onSearchChange(searchQuery);
    } else {
      navigate(`/products?search=${searchQuery}`);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">WT</span>
            </div>
            <span className="text-xl font-bold text-gray-900">WaltTreads</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/products?category=men" className="text-gray-700 hover:text-blue-600 transition-colors">
              Men
            </Link>
            <Link to="/products?category=women" className="text-gray-700 hover:text-blue-600 transition-colors">
              Women
            </Link>
            <Link to="/products?category=kids" className="text-gray-700 hover:text-blue-600 transition-colors">
              Kids
            </Link>
            <Link to="/products?category=accessories" className="text-gray-700 hover:text-blue-600 transition-colors">
              Accessories
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </form>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                  <User className="w-5 h-5" />
                  <span className="hidden sm:inline">{user.firstName}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {user.isAdmin && (
                    <Link to="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-blue-600 transition-colors">
                <User className="w-5 h-5" />
              </Link>
            )}
            
            <Link to="/cart" className="relative text-gray-700 hover:text-blue-600 transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </form>
            <nav className="space-y-2">
              <Link
                to="/products?category=men"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Men
              </Link>
              <Link
                to="/products?category=women"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Women
              </Link>
              <Link
                to="/products?category=kids"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Kids
              </Link>
              <Link
                to="/products?category=accessories"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Accessories
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;