import { useState, useEffect } from 'react';
import { User } from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login - in production, this would make an API call
    const mockUser: User = {
      id: '1',
      email,
      firstName: 'John',
      lastName: 'Doe',
      isAdmin: email === 'admin@example.com'
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    return mockUser;
  };

  const register = async (email: string, password: string, firstName: string, lastName: string) => {
    // Mock registration - in production, this would make an API call
    const mockUser: User = {
      id: Date.now().toString(),
      email,
      firstName,
      lastName,
      isAdmin: false
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    return mockUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return {
    user,
    isLoading,
    login,
    register,
    logout
  };
};