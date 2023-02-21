import { useContext } from 'react';
import UserContext from '../utils/UserContext';

export const Footer = () => {

const {user} = useContext(UserContext);

  return (
    <footer className='bg-slate-500 mt-10 py-20 text-center text-white'>
      <p>All rights reserved | Copyright &copy; 2023 | Namaste React&reg;</p>
      <p>
        Made and Developed with ❤️ by {user.name}
      </p>
    </footer>
  );
};
