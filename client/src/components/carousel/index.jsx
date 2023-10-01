import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Carousel = () => {
  const carousel = useRef();
  const [scrolll, setScrolll] = useState(0);
  useEffect(()=>{
    console.log(carousel.current.scrollWidth);
  }, [scrolll])
  return (
    <div ref={carousel} className='relative overflow-x-hidden flex w-[100vw] h-[250px] scroll-auto transition-transform: flex-row my-8' >
      <div className='flex animate-marquee'>
      <Link to="/categories" className="mx-3 h-[250px] w-[200px]"><img className=' rounded-3xl mx-3 h-[250px] w-[200px]' src="https://fakeimg.pl/600x600" alt="" /></Link>
      <Link to="/categories" className="mx-3 h-[250px] w-[200px]"><img className=' rounded-3xl mx-3 h-[250px] w-[200px]' src="https://fakeimg.pl/600x600" alt="" /></Link>
      <Link to="/categories" className="mx-3 h-[250px] w-[200px]"><img className=' rounded-3xl mx-3 h-[250px] w-[200px]' src="https://fakeimg.pl/600x600" alt="" /></Link>
      <Link to="/categories" className="mx-3 h-[250px] w-[200px]"><img className=' rounded-3xl mx-3 h-[250px] w-[200px]' src="https://fakeimg.pl/600x600" alt="" /></Link>
      <Link to="/categories" className="mx-3 h-[250px] w-[200px]"><img className=' rounded-3xl mx-3 h-[250px] w-[200px]' src="https://fakeimg.pl/600x600" alt="" /></Link>
      
      </div>
      <div className='absolute top-0 flex animate-marquee2'>
      <Link to="/categories" className="mx-3 h-[250px] w-[200px]"><img className=' rounded-3xl mx-3 h-[250px] w-[200px]' src="https://fakeimg.pl/600x600" alt="" /></Link>
      <Link to="/categories" className="mx-3 h-[250px] w-[200px]"><img className=' rounded-3xl mx-3 h-[250px] w-[200px]' src="https://fakeimg.pl/600x600" alt="" /></Link>
      <Link to="/categories" className="mx-3 h-[250px] w-[200px]"><img className=' rounded-3xl mx-3 h-[250px] w-[200px]' src="https://fakeimg.pl/600x600" alt="" /></Link>
      <Link to="/categories" className="mx-3 h-[250px] w-[200px]"><img className=' rounded-3xl mx-3 h-[250px] w-[200px]' src="https://fakeimg.pl/600x600" alt="" /></Link>
      <Link to="/categories" className="mx-3 h-[250px] w-[200px]"><img className=' rounded-3xl mx-3 h-[250px] w-[200px]' src="https://fakeimg.pl/600x600" alt="" /></Link>
     
      </div>
        
    </div>
  )
}

export default Carousel
