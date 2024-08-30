import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase-config';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa'; // Usa el ícono de Google de react-icons

const Navbar = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-2xl font-semibold">Rotisería La Delicia</Link>
      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/checkout" className="hover:text-gray-300">Checkout</Link>
        {user ? (
          <>
            <span>{user.displayName}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 flex items-center space-x-2"
          >
            <FaGoogle size={20} />
            <span>Login</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
