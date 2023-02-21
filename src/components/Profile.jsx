import { useState, useEffect } from 'react';

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {

    console.log('useEffect')

    const timer = setInterval(() => {
      console.log('Namaste React');
    }, 1000);
    
    //return is used for Clean Up as we used componentWillUnmount in Class Component
    return ()=>{
      console.log('useEffect Return')
      clearInterval(timer);
    }
  }, []);
 
  console.log('render')

  return (
    <div className='m-2 p-2'>
      <h2 className='text-lg font-bold text-indigo-500'>This is Profile Functional Component</h2>
      <h3>Name: {props.name}</h3>
      <h3 className='text-lg font-bold text-amber-500'>Count: {count}</h3>
      <h3 className='text-lg font-bold text-slate-500'>Count-2 : {count2}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount2(count2 * 2);
        }}
        className='bg-red-600 p-2 my-2 rounded-lg hover:shadow-md transform trasition-all hover:scale-105 duration-300'
      >
        Function Counter
      </button>
    </div>
  );
};

export default Profile;
