import React from 'react'

const Carousel2 = () => {
  return (
    <div className='flex w-full items-center justify-center'>

    <div className="carousel min-h-[300px] w-[700px] rounded-2xl mx-6 my-10" style={{boxShadow: "2px 4px 35px 4px rgba(0, 0, 0, 0.10)"
}}>
  <div id="slide1" className="carousel-item relative w-full justify-center items-center" >
    <div className='flex w-[80%] justify-start items-center flex-col py-5'>
        <div className='flex justify-start items-center w-full'>
            <div className='flex w-[20%] justify-start items-start'>
            <img className=' rounded-[100%]' src="https://fakeimg.pl/100x100" alt="" />
            </div>
            <div className='flex w-[80%] justify-start items-start flex-col'>
            <svg xmlns="http://www.w3.org/2000/svg" width="206" height="31" viewBox="0 0 206 31" fill="none">
                <path d="M15.5 0L18.98 10.7102H30.2414L21.1307 17.3295L24.6107 28.0398L15.5 21.4205L6.38933 28.0398L9.86929 17.3295L0.758624 10.7102H12.02L15.5 0Z"             fill="#FFB800"/>
                <path d="M59.0937 0L62.5737 10.7102H73.8351L64.7245 17.3295L68.2044 28.0398L59.0937 21.4205L49.9831 28.0398L53.463 17.3295L44.3524 10.7102H55.6138L59.0937              0Z" fill="#FFB800"/>
                <path d="M102.687 0L106.167 10.7102H117.429L108.318 17.3295L111.798 28.0398L102.687 21.4205L93.5768 28.0398L97.0568 17.3295L87.9461 10.7102H99.2075L102.687             0Z" fill="#FFB800"/>
                <path d="M146.281 0L149.761 10.7102H161.023L151.912 17.3295L155.392 28.0398L146.281 21.4205L137.171 28.0398L140.651 17.3295L131.54 10.7102H142.801L146.281              0Z" fill="#FFB800"/>
                <path d="M189.875 0L193.355 10.7102H204.616L195.506 17.3295L198.986 28.0398L189.875 21.4205L180.764 28.0398L184.244 17.3295L175.134 10.7102H186.395L189.875             0Z" fill="#D9D9D9"/>
            </svg>
            <div>
                Andrew Garfield
            </div>
            </div>
        </div>
        <div className='w-full h-[1.5px] bg-[#A1A1A1] my-3'>

        </div>
        <div className='font-bold text-[20px]'>
            I was surprised. The quality was much higher than I expected! The best feeling is having people coming up to me in the street and asking where I got them.
        </div>
    </div>
    {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div> */}
    </div>
    </div>
    <div className="carousel min-h-[300px] w-[700px] rounded-2xl mx-6 my-10 max-md:hidden" style={{boxShadow: "2px 4px 35px 4px rgba(0, 0, 0, 0.10)"
}}>
  <div id="slide1" className="carousel-item relative w-full justify-center items-center" >
    <div className='flex w-[80%] justify-start items-center flex-col py-5'>
        <div className='flex justify-start items-center w-full'>
            <div className='flex w-[20%] justify-start items-start'>
            <img className=' rounded-[100%]' src="https://fakeimg.pl/100x100" alt="" />
            </div>
            <div className='flex w-[80%] justify-start items-start flex-col'>
            <svg xmlns="http://www.w3.org/2000/svg" width="206" height="31" viewBox="0 0 206 31" fill="none">
                <path d="M15.5 0L18.98 10.7102H30.2414L21.1307 17.3295L24.6107 28.0398L15.5 21.4205L6.38933 28.0398L9.86929 17.3295L0.758624 10.7102H12.02L15.5 0Z"             fill="#FFB800"/>
                <path d="M59.0937 0L62.5737 10.7102H73.8351L64.7245 17.3295L68.2044 28.0398L59.0937 21.4205L49.9831 28.0398L53.463 17.3295L44.3524 10.7102H55.6138L59.0937              0Z" fill="#FFB800"/>
                <path d="M102.687 0L106.167 10.7102H117.429L108.318 17.3295L111.798 28.0398L102.687 21.4205L93.5768 28.0398L97.0568 17.3295L87.9461 10.7102H99.2075L102.687             0Z" fill="#FFB800"/>
                <path d="M146.281 0L149.761 10.7102H161.023L151.912 17.3295L155.392 28.0398L146.281 21.4205L137.171 28.0398L140.651 17.3295L131.54 10.7102H142.801L146.281              0Z" fill="#FFB800"/>
                <path d="M189.875 0L193.355 10.7102H204.616L195.506 17.3295L198.986 28.0398L189.875 21.4205L180.764 28.0398L184.244 17.3295L175.134 10.7102H186.395L189.875             0Z" fill="#D9D9D9"/>
            </svg>
            <div>
                Andrew Garfield
            </div>
            </div>
        </div>
        <div className='w-full h-[1.5px] bg-[#A1A1A1] my-3'>

        </div>
        <div className='font-bold text-[20px]'>
            I was surprised. The quality was much higher than I expected! The best feeling is having people coming up to me in the street and asking where I got them.
        </div>
    </div>
    {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div> */}
    </div>
    </div>
    </div>
  )
}

export default Carousel2
