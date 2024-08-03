import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

async function main() {

    // Delete existing data    {because it's gives errors if you modify seed.js and try to run "prisma/seed.js"}
    await prisma.cart.deleteMany({});
    await prisma.orders.deleteMany({});
    await prisma.product.deleteMany({});
    await prisma.retailer.deleteMany({});
    await prisma.designer.deleteMany({});
    await prisma.mainuser.deleteMany({});
    await prisma.design.deleteMany({});
    await prisma.shoe.deleteMany({});
    await prisma.supplier.deleteMany({});

    

  // Insert data for the Mainuser table
  await prisma.mainuser.create({
    data: {
      name: 'Admin',
      email: 'admin@drawn2shoe.com',
      profilepic: '/profile',
      passwd: '$2b$10$iVuJlBO15/2g9vUIfRjvPuPgiv43vFtXEf0nols67g/3slZHJCNha',
      street: '/street',
      city: '/city',
      state: '/state',
      pincode: 111111,
    },
  });

  // Insert data for the Design table
  await prisma.design.createMany({
    data: [
      { designId: 1,userId:'admin@drawn2shoe.com', shoeModel:"Crocs",shoeSize: 8, description: 'My one of the best artworks!!', image: 'https://shopzapatopia.com/cdn/shop/products/image_d080f6fe-2b6e-4cfa-9598-45d5f775c945.jpg?v=1675780288&width=823' },
      { designId: 2,userId:'admin@drawn2shoe.com', shoeModel:"Crocs",shoeSize: 10, description: 'My one of the best artworks!!', image: 'https://i.etsystatic.com/7731983/r/il/f6f907/5513082597/il_794xN.5513082597_m5yv.jpg' },
      { designId: 3,userId:'admin@drawn2shoe.com', shoeModel:"Converse cdg",shoeSize: 7, description: 'My one of the best artworks!!', image: 'https://images.tshirtslowprice.com/wp-content/uploads/2022/07/14091149/Personalised-One-Piece-Art-Custom-Crocs-Crocband-Shoes-600x600.jpg' },
      { designId: 4,userId:'admin@drawn2shoe.com', shoeModel:"Crocs",shoeSize: 8, description: 'My one of the best artworks!!', image: 'https://i.etsystatic.com/32325243/r/il/76e732/3471760499/il_794xN.3471760499_o0mj.jpg' },
      { designId: 5,userId:'admin@drawn2shoe.com', shoeModel:"Converse cdg",shoeSize: 9, description: 'My one of the best artworks!!', image: 'https://i.etsystatic.com/38858364/r/il/e4edf3/4701581789/il_794xN.4701581789_o0j5.jpg' },
      { designId: 6,userId:'admin@drawn2shoe.com', shoeModel:"Airforce",shoeSize: 8, description: 'My one of the best artworks!!', image: 'https://i.etsystatic.com/38858364/r/il/6f647c/4657056636/il_794xN.4657056636_fuef.jpg' },
      { designId: 7,userId:'admin@drawn2shoe.com', shoeModel:"Converse cdg",shoeSize: 9, description: 'My one of the best artworks!!', image: 'https://www.highsnobiety.com/static-assets/dato/1663198452-comme-des-garcons-play-converse-chuck-70-heart-print-release-date-price-01.jpg' },
    ],
  });

  // Insert data for the Supplier table
  await prisma.supplier.createMany({
    data: [
      { supplierId: 1, supplierName: 'Crocs', location: 'USA' },
      { supplierId: 2, supplierName: 'Nike', location: 'India' },
      { supplierId: 3, supplierName: 'Converse', location: 'India' },
    ],
  });

    // Insert data for the Shoe table
    await prisma.shoe.createMany({
      data: [
        { shoeid: 1, shoename: 'Clogs', supplierId: 1, price: 2000, shoeImage: 'https://i.pinimg.com/originals/ec/fc/75/ecfc75a461fb72790ff6e328011db91b.jpg' },
        { shoeid: 2, shoename: 'Airforce 1', supplierId: 2, price: 4000, shoeImage: 'https://i.pinimg.com/originals/78/8a/0a/788a0aaa7e8cdb218c06fcb55fa221f1.jpg' },
        { shoeid: 3, shoename: 'Converse cdg', supplierId: 3, price: 4500, shoeImage: 'https://i.ibb.co/FHKXdbM/Screenshot-2023-11-25-at-07-43-48-Gawx-Art-on-Instagram-custom-converse-x-comme-des-gar-ons-Painting.png' },
      ],
    });

    
  // Insert data for the Product table
  await prisma.product.createMany({
    data: [
      { productId: 1, shoeId: 1, designId: 1, category: 'pre-designed', productImage: 'https://shopzapatopia.com/cdn/shop/products/image_d080f6fe-2b6e-4cfa-9598-45d5f775c945.jpg?v=1675780288&width=823' },
      { productId: 2, shoeId: 3, designId: 2, category: 'pre-designed', productImage: 'https://i.etsystatic.com/7731983/r/il/f6f907/5513082597/il_794xN.5513082597_m5yv.jpg' },
      { productId: 3, shoeId: 1, designId: 3, category: 'pre-designed', productImage: 'https://images.tshirtslowprice.com/wp-content/uploads/2022/07/14091149/Personalised-One-Piece-Art-Custom-Crocs-Crocband-Shoes-600x600.jpg' },
      { productId: 4, shoeId: 2, designId: 4, category: 'pre-designed', productImage: 'https://i.etsystatic.com/32325243/r/il/76e732/3471760499/il_794xN.3471760499_o0mj.jpg' },
      { productId: 5, shoeId: 2, designId: 5, category: 'pre-designed', productImage: 'https://i.etsystatic.com/38858364/r/il/e4edf3/4701581789/il_794xN.4701581789_o0j5.jpg' },
      { productId: 6, shoeId: 2, designId: 6, category: 'pre-designed', productImage: 'https://i.etsystatic.com/38858364/r/il/6f647c/4657056636/il_794xN.4657056636_fuef.jpg' },
      { productId: 7, shoeId: 3, designId: 7, category: 'pre-designed', productImage: 'https://www.highsnobiety.com/static-assets/dato/1663198452-comme-des-garcons-play-converse-chuck-70-heart-print-release-date-price-01.jpg' },
    ],
  });


  

  // Insert data for the Orders table
  await prisma.orders.createMany({
    data: [
      { orderId: 1, productId: 1, email: 'admin@drawn2shoe.com', shoeSize: 42, quantity: 1, orderTime: new Date() },
      
    ],
  });

  // Insert data for the Cart table
  await prisma.cart.createMany({
    data: [
      { productId: 1, email: 'admin@drawn2shoe.com', shoeSize: 42, quantity: 1 },
     
    ],
  });

  // Insert data for the Designer table
  await prisma.designer.createMany({
    data: [
      { email: 'admin@drawn2shoe.com', description: 'Top designer', portfolioLink: 'https://portfolio.com' },
   
    ],
  });

  // Insert data for the Retailer table
  await prisma.retailer.createMany({
    data: [
      { email: 'admin@drawn2shoe.com', shopName: 'Shoe Shop', contactNumber: 1234567890, shopaddressLine1: 'Shop street', shopCity: 'Shop city', shopPincode: 123456 },
      
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
