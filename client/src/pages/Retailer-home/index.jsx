import React from 'react'

const Retailer_home = () => {
  return (
    <div>
            <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div class="container max-w-screen-lg mx-auto">
    <div>
      <h2 class="font-semibold text-xl text-gray-600">Customise Now</h2>
      <p class="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p>

      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            <p class="font-medium text-lg">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

            <div class="md:col-span-5">
                <label for="retailer_name">Name</label>
                <input type='text' name="retailer_name" id="retailer_name" class="h-10 border mt-1 rounded w-full bg-gray-50 " />
              </div>

            <div class="md:col-span-5">
                <label for="retailer_locality">Locality</label>
                <input type='text' name="retailer_locality" id="retailer_locality" class="h-10 border mt-1 rounded w-full bg-gray-50 " />
              </div>
            <div class="md:col-span-5">
                <label for="retailer_city">City</label>
                <input type='text' name="retailer_city" id="retailer_city" class="h-10 border mt-1 rounded w-full bg-gray-50 " />
              </div>
            <div class="md:col-span-5">
                <label for="retailer_state">State</label>
                <input type='text' name="retailer_state" id="retailer_state" class="h-10 border mt-1 rounded w-full bg-gray-50 " />
              </div>
            <div class="md:col-span-5">
                <label for="retailer_country">Country</label>
                <input type='text' name="retailer_country" id="retailer_country" class="h-10 border mt-1 rounded w-full bg-gray-50 " />
              </div>
              <div class="md:col-span-5">
                <label for="retailer_distributor">Distributor</label>
                <select name="retailer_distributor" id="retailer_distributor" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                  <option>Crocs</option>
                  <option>Adidas</option>
                </select>
              </div>
              
      
              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
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

export default Retailer_home