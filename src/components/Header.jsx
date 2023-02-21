import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assests/logo1.png';
import CartImg from '../../assests/carts.png';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import store from '../utils/store';

//Title Component
export const Title = () => (
  <a href='/'>
    <img className='p-1 m-1 h-24' alt='logo' src={Logo} />
  </a>
);

export const IsOnline = () => {
  const isOnline = useOnline();
  return <h3>{isOnline ? '✅ Online' : '🔴 - Offline'}</h3>;
};

//NavBar Component
export const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className=''>
      <ul className='flex space-x-4'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/instamart'>Instamart</Link>
        </li>
        <li>
          <Link to='/cart'>
            <Cart />
          </Link>
        </li>
        <li>
          {isLoggedIn ? (
            <button className='rounded-lg bg-red-700 hover:bg-red-600 p-2 text-white' onClick={() => setIsLoggedIn(false)}>
              logout
            </button>
          ) : (
            <button className='rounded-lg bg-green-700 p-2 text-white hover:bg-green-600' onClick={() => setIsLoggedIn(true)}>
              Login
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export const Cart = () => {

  const cartItems = useSelector(store => store.cart.items);

  return (
    <div className='flex'>
      <img src={CartImg} alt='Cart' width='30' height='25' />
      <span class='animate-bounce relative inline-flex rounded-full h-4 w-4 bg-red-400 text-xs mx-1 opacity-75'>
        <span className='text-xs ml-1 font-bold'>{cartItems.length}</span>
      </span>
    </div>
  );
};

// Composing Components
export const Header = () => {
  const [colorHeader, setColorHeader] = useState('bg-white');

  const { user } = useContext(UserContext);
  const cartItems = useSelector(store => store.cart.items);

  const listenScrollEvent = () => {
    if (window.scrollY > 1) {
      return setColorHeader('bg-slate-800 text-white transition delay-75');
    } else return setColorHeader('transition delay-75');
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div className={`flex place-content-between items-center px-2 shadow-lg sticky top-0 ${colorHeader} z-50`}>
      <Title />
      <IsOnline />
      <p className='text-xs font-semibold text-red-500'>Welcome {user.name}</p>
      <NavBar />
    </div>
  );
};
