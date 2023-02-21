import React, { useEffect, useState } from 'react';

// const Carousel = () => {
//   const data = ["1", "2", "3", "4"];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carouselInfiniteScroll = () => {
//     if (currentIndex === data.length - 1) {
//       return setCurrentIndex(0);
//     }
//     return setCurrentIndex(currentIndex + 1);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       carouselInfiniteScroll();
//     }, 3000);
//     return clearInterval(interval);
//   });

//   return (
//     <div className='bg-slate-300 flex flex-nowrap overflow-hidden'>
//       {data.map((item, index) => {
//         return (
//           <h1 key={index} className='h-80 w-1/2 flex items-center justify-center transition-all ease-in-out' style={{transform: `translate(-${currentIndex * 100}%)`}}>
//             {item}
//           </h1>
//         );
//       })}
//     </div>
//   );
// };
const Carousel = () => {
  const images = [
    'https://unsplash.com/photos/tOeo4_ra6oc',
    'https://www.google.com/search?q=images&rlz=1C1UEAD_enIN980IN980&sxsrf=AJOqlzVx_Xf0TTA3TrZWzqjTgkIxkR6hiQ:1676551422712&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjciP7fiJr9AhV_x3MBHcn8DPYQ_AUoAXoECAEQAw&biw=1536&bih=714&dpr=1.25#imgrc=3du_EqKvbNmtvM',
    'https://www.google.com/search?q=images&rlz=1C1UEAD_enIN980IN980&sxsrf=AJOqlzVx_Xf0TTA3TrZWzqjTgkIxkR6hiQ:1676551422712&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjciP7fiJr9AhV_x3MBHcn8DPYQ_AUoAXoECAEQAw&biw=1536&bih=714&dpr=1.25#imgrc=ISsdmwh92GPtrM',
    'https://www.google.com/search?q=images&rlz=1C1UEAD_enIN980IN980&sxsrf=AJOqlzVx_Xf0TTA3TrZWzqjTgkIxkR6hiQ:1676551422712&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjciP7fiJr9AhV_x3MBHcn8DPYQ_AUoAXoECAEQAw&biw=1536&bih=714&dpr=1.25#imgrc=pZG009_n8yw8iM',
    'https://www.google.com/search?q=images&rlz=1C1UEAD_enIN980IN980&sxsrf=AJOqlzVx_Xf0TTA3TrZWzqjTgkIxkR6hiQ:1676551422712&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjciP7fiJr9AhV_x3MBHcn8DPYQ_AUoAXoECAEQAw&biw=1536&bih=714&dpr=1.25#imgrc=VNNQIEwG0_eaAM',
  ];
  const [index, setIndex] = useState(0);
  const length = 3;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className='flex'>
      <button onClick={handlePrevious}>Previous</button>
      {images.map((image, index) => {
        return <img src={image} alt='images' key={index} className='w-80' />;
      })}
      <button onClick={handleNext}>Next</button>
      <p>{index}</p>
    </div>
  );
};

export default Carousel;
