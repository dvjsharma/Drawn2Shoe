import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Carousel = () => {
  const carousel = useRef();
  const [scrolll, setScrolll] = useState(0);
  useEffect(()=>{
    console.log(carousel.current.scrollWidth);
  }, [scrolll])
  return (
    <div ref={carousel} className='relative overflow-x-scroll flex w-[100vw] h-[350px] scroll-auto transition-transform: flex-row' >
      <div className='flex animate-marquee'>
      <Link to="/categories" className="mx-3">

      <img className=' rounded-3xl mx-3 h-[350px] w-[350px]' src="https://fakeimg.pl/600x600" alt="" />
      </Link>
      <Link to="/categories" className="mx-3">

      <img className=' rounded-3xl mx-3 h-[350px] w-[350px]' src="https://fakeimg.pl/600x600" alt="" />
      </Link>
      <Link to="/categories" className="mx-3">

      <img className=' rounded-3xl mx-3 h-[350px] w-[350px]' src="https://fakeimg.pl/600x600" alt="" />
      </Link>
      <Link to="/categories" className="mx-3">

      <img className=' rounded-3xl mx-3 h-[350px] w-[350px]' src="https://fakeimg.pl/600x600" alt="" />
      </Link>
      <Link to="/categories" className="mx-3">

      <img className=' rounded-3xl mx-3 h-[350px] w-[350px]' src="https://fakeimg.pl/600x600" alt="" />
      </Link>
      <Link to="/categories" className="mx-3">

      <img className=' rounded-3xl mx-3 h-[350px] w-[350px]' src="https://fakeimg.pl/600x600" alt="" />
      </Link>
      </div>
      {/* <div className='absolute top-0 left-[100%] flex animate-marquee2'>
      <img className=' rounded-3xl mx-3 h-[350px] w-[350px]' src="https://fakeimg.pl/600x600" alt="" />
      <img className=' rounded-3xl mx-3 h-[350px] w-[350px]' src="https://fakeimg.pl/600x600" alt="" />
      <img className=' rounded-3xl mx-3 h-[350px] w-[350px]' src="https://fakeimg.pl/600x600" alt="" />
      <img className=' rounded-3xl mx-3 h-[350px] w-[350px]' src="https://fakeimg.pl/600x600" alt="" />
      <img className=' rounded-3xl mx-3 h-[350px] w-[350px]' src="https://fakeimg.pl/600x600" alt="" />
      <img className=' rounded-3xl mx-3 h-[350px] w-[350px]' src="https://fakeimg.pl/600x600" alt="" />
      <img className=' rounded-3xl mx-3 h-[350px] w-[350px]' src="https://fakeimg.pl/600x600" alt="" />
      </div> */}
        
    </div>
  )
}

export default Carousel
