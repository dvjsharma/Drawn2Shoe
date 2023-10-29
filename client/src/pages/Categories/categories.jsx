import React from 'react'
import Productcard from '../../components/Product-card'

const Categories = () => {
  return (
    <div>
      <div class="text-center p-10">
    <h1 class="font-bold text-4xl mb-4">Categories</h1>
    {/* <h1 class="text-3xl">Tailwind CSS</h1> */}
</div>

{/* <!-- ✅ Grid Section - Starts Here 👇 --> */}
<section id="Projects"
    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

    <Productcard/>
    <Productcard/>
    <Productcard/>
    <Productcard/>
    <Productcard/>
    <Productcard/>
    <Productcard/>

</section>

{/* <!-- 🛑 Grid Section - Ends Here --> */}


{/* <!-- credit --> */}
<div class="text-center py-10 px-10">
    <h2 class="font-bold text-2xl md:text-4xl mb-4">Thanks to <a href="https://unsplash.com/@nixcreative"
            class="underline font-black">Tyler Nix</a> for those AMAZING product images!</h2>
</div>
    </div>
  )
}

export default Categories
