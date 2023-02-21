const Shimmer = () => {
  return (
    <div className='flex flex-wrap mx-6 p-4'>
      {Array(15)
        .fill()
        .map((e, index) => (
          <div className='rounded-md p-2 max-w-sm w-80 mx-auto mb-4' key={index}>
            <div className='animate-pulse rounded-lg mb-2 flex space-x-4'>
              <div className='flex-1 space-y-6 py-1'>
                <div className='h-44 bg-slate-400 rounded'></div>
                <div className='space-y-3'>
                  <div className='h-3 w-20 bg-slate-400 rounded'></div>
                  <div className='h-3 bg-slate-400 rounded'></div>
                  <div className='flex justify-between'>
                    <div className='h-3 w-8 bg-slate-400 rounded col-span-2'></div>
                    <div className='h-3 w-8 bg-slate-400 rounded col-span-1'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
