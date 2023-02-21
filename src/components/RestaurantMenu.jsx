import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ImgURL } from '../config';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';
import NONVEG from '../../assests/non_veg.svg';
import VEG from '../../assests/veg.svg';

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;
  const restaurants = useRestaurant(resId);

  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className='py-2'>
      <div className='flex justify-around bg-slate-700 text-white items-center'>
        <div className=''>
          <p className='font-semibold text-2xl'>{restaurants.name}</p>
          <p className='mb-2 text-slate-400'> {restaurants.cuisines.join(', ')}</p>
          <p className='mb-2 text-slate-400'>
            {restaurants.area}, {restaurants.city}
          </p>
          <div className='flex justify-between'>
            <div className='text-center text-sm'>
              <p className='text-sm'>
                {restaurants.avgRating} <FontAwesomeIcon icon='star' />
              </p>
              <p className='text-slate-400 text-xs'>{restaurants.totalRatingsString}</p>
            </div>
            <div className=' p-2 mx-1 border-r-2 text-xs text-gray-50'></div>
            <div className='text-center text-sm'>
              <p className='text-sm'> ₹ {restaurants.costForTwo / 100}</p>
              <p className='ml-3 text-xs text-slate-400'> Cost for Two</p>
            </div>
            <div className='p-2 mx-1 border-r-2 text-xs text-gray-50'></div>
            <div className='text-center mx-3'>
              <p className='text-sm'> {restaurants.sla.slaString}</p>
              <p className=' text-slate-400 text-xs'> Delivery Time</p>
            </div>
          </div>
        </div>
        <div className='m-2'>
          <p className='mb-4 font-light italic text-slate-400'>Restaurant ID: {resId}</p>
          <img
            className='mb-4 border-2 border-slate-400 rounded-lg transition-all hover:scale-105 duration-200 delay-75'
            src={ImgURL + restaurants.cloudinaryImageId}
            width='300'
          />
        </div>
      </div>

      <div className='m-2 p-2 grid grid-flow-col mt-4'>
        <ul className='flex flex-wrap flex-col'>
          {Object.values(restaurants?.menu?.items).map((item) => (
            <li key={item.id} className='flex flex-col items-center'>
              <div className='flex justify-between w-1/2'>
                <div className=' w-80'>
                  <div className=''>
                    <img src={item.attributes.vegClassifier === 'NONVEG' ? NONVEG : VEG} className='inline-block w-5' />
                    {item.isBestSeller ? (
                      <span className='m-2 text-yellow-400 font-semibold text-sm'>
                        <FontAwesomeIcon icon='star' /> Bestseller
                      </span>
                    ) : (
                      ''
                    )}
                  </div>
                  <p className='text-xl font-semibold mb-1'>{item.name}</p>
                  <p className='text-sm mb-2'>₹ {item.price / 100}</p>
                  <p className='text-sm mb-2 font-light text-justify'>{item.description}</p>
                  <button className='p-2 bg-green-600 rounded-xl text-sm font-semibold text-white '>Add Item </button>
                </div>
                <div className='flex items-center'>
                  {item.cloudinaryImageId ? (
                    <img
                      className='mb-4 items-center w-60 h-40 border-slate-400 rounded-lg transition-all hover:scale-105 duration-200 delay-75'
                      src={ImgURL + item.cloudinaryImageId}
                    />
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div className=' p-2 mb-4 border-b-2 text-xs text-gray-50 w-1/2'></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
