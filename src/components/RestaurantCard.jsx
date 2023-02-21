import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ImgURL } from '../config';
import UserContext from '../utils/UserContext';

export const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString, avgRating }) => {
  const { user } = useContext(UserContext);
  return (
    <div className='w-80 mx-2 p-2 h-full rounded-lg hover:shadow-md transform trasition-all hover:scale-105 duration-300 border-slate-400 '>
      <img src={ImgURL + cloudinaryImageId} className='rounded-lg mb-2' />
      <p className='text-lg font-semibold mb-1 m-1'>{name}</p>
      <div className='mb-2 mx-1 border-t text-xs text-gray-700'></div>
      <p className='mb-4 m-1 text-slate-500 text-sm truncate'>{cuisines.join(', ')}</p>
      <div className='mb-2 mx-1 border-t text-xs text-gray-700'></div>
      <div className='flex justify-between'>
        <span className='col-start-1 p-1 rounded-lg text-sm font-medium '>{lastMileTravelString}</span>
        <span
          className={`col-end-7 font-medium text-xs rounded-md flex items-center justify-center w-12 h-6 ${
            avgRating >= 4 ? 'bg-green-500' : 'bg-yellow-300'
          } mb-2`}
        >
          {avgRating} &nbsp;
          <FontAwesomeIcon icon='star' />
        </span>
      </div>
      <div className='flex justify-between text-xs'>
        <span>{user.name}</span>
        <span>{user.email}</span>
      </div>
    </div>
  );
};
