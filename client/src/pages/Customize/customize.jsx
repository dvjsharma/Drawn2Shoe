import React from 'react'

const Customize = () => {
  return (
    <div>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>
      <h2 className="font-semibold text-xl text-gray-600">Customise Now</h2>
      <p className="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p>

      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label for="shoe_model">Shoe Model</label>
                <select name="shoe_model" id="shoe_model" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                  <option>Crocs</option>
                  <option>Adidas</option>
                </select>
              </div>
              <div className="md:col-span-5">
                <label for="shoe_size">Shoe Size</label>
                <select name="shoe_size" id="shoe_size" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                  <option>Crocs</option>
                  <option>Adidas</option>
                </select>
              </div>

              <div className="md:col-span-5">
                <label for="design_desc">Design Description</label>
                <textarea name="design_desc" id="design_desc" rows={"4"} className="border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Describe your design..." ></textarea>
              </div>

              <div className="md:col-span-5">
                <label for="design_img">Design Image</label>
                <input type='file' name="design_img" id="design_img" className="border mt-1 rounded w-full bg-gray-50 " />
              </div>
              
      
              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Customize
