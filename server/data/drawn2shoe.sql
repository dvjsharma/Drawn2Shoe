-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 11, 2024 at 09:29 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `drawn2shoe`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `productId` int(11) NOT NULL,
  `email` varchar(30) NOT NULL,
  `shoeSize` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `design`
--

CREATE TABLE `design` (
  `designId` int(11) NOT NULL,
  `description` varchar(500) NOT NULL,
  `image` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `design`
--

INSERT INTO `design` (`designId`, `description`, `image`) VALUES
(1, 'My one of the best artworks!!', 'https://shopzapatopia.com/cdn/shop/products/image_d080f6fe-2b6e-4cfa-9598-45d5f775c945.jpg?v=1675780288&width=823'),
(2, 'My one of the best artworks!!', 'https://i.etsystatic.com/7731983/r/il/f6f907/5513082597/il_794xN.5513082597_m5yv.jpg'),
(3, 'My one of the best artworks!!', 'https://images.tshirtslowprice.com/wp-content/uploads/2022/07/14091149/Personalised-One-Piece-Art-Custom-Crocs-Crocband-Shoes-600x600.jpg'),
(4, 'My one of the best artworks!!', 'https://i.etsystatic.com/32325243/r/il/76e732/3471760499/il_794xN.3471760499_o0mj.jpg'),
(5, 'My one of the best artworks!!', 'https://i.etsystatic.com/38858364/r/il/e4edf3/4701581789/il_794xN.4701581789_o0j5.jpg'),
(6, 'My one of the best artworks!!', 'https://i.etsystatic.com/38858364/r/il/6f647c/4657056636/il_794xN.4657056636_fuef.jpg'),
(7, 'My one of the best artworks!!', 'https://www.highsnobiety.com/static-assets/dato/1663198452-comme-des-garcons-play-converse-chuck-70-heart-print-release-date-price-01.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `designer`
--

CREATE TABLE `designer` (
  `email` varchar(30) NOT NULL,
  `description` varchar(300) DEFAULT NULL,
  `portfolioLink` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mainuser`
--

CREATE TABLE `mainuser` (
  `name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `profilepic` varchar(300) DEFAULT NULL,
  `passwd` varchar(250) NOT NULL,
  `street` varchar(40) NOT NULL,
  `city` varchar(30) NOT NULL,
  `state` varchar(30) NOT NULL,
  `pincode` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mainuser`
--

INSERT INTO `mainuser` (`name`, `email`, `profilepic`, `passwd`, `street`, `city`, `state`, `pincode`) VALUES
('Admin', 'admin@drawn2shoe.com', '/profile', '$2b$10$iVuJlBO15/2g9vUIfRjvPuPgiv43vFtXEf0nols67g/3slZHJCNha', '/street', '/city', '/state', 111111);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `email` varchar(30) NOT NULL,
  `shoeSize` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `orderTime` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `productId` int(11) NOT NULL,
  `shoeId` int(11) DEFAULT NULL,
  `designId` int(11) DEFAULT NULL,
  `category` varchar(20) NOT NULL DEFAULT 'pre-designed',
  `productImage` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`productId`, `shoeId`, `designId`, `category`, `productImage`) VALUES
(1, 1, 1, 'pre-designed', 'https://shopzapatopia.com/cdn/shop/products/image_d080f6fe-2b6e-4cfa-9598-45d5f775c945.jpg?v=1675780288&width=823'),
(2, 3, 2, 'pre-designed', 'https://i.etsystatic.com/7731983/r/il/f6f907/5513082597/il_794xN.5513082597_m5yv.jpg'),
(3, 1, 3, 'pre-designed', 'https://images.tshirtslowprice.com/wp-content/uploads/2022/07/14091149/Personalised-One-Piece-Art-Custom-Crocs-Crocband-Shoes-600x600.jpg'),
(4, 2, 4, 'pre-designed', 'https://i.etsystatic.com/32325243/r/il/76e732/3471760499/il_794xN.3471760499_o0mj.jpg'),
(5, 2, 5, 'pre-designed', 'https://i.etsystatic.com/38858364/r/il/e4edf3/4701581789/il_794xN.4701581789_o0j5.jpg'),
(6, 2, 6, 'pre-designed', 'https://i.etsystatic.com/38858364/r/il/6f647c/4657056636/il_794xN.4657056636_fuef.jpg'),
(7, 3, 7, 'pre-designed', 'https://www.highsnobiety.com/static-assets/dato/1663198452-comme-des-garcons-play-converse-chuck-70-heart-print-release-date-price-01.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `retailer`
--

CREATE TABLE `retailer` (
  `email` varchar(30) NOT NULL,
  `shopName` varchar(30) NOT NULL,
  `contactNumber` int(11) NOT NULL,
  `shopaddressLine1` varchar(30) DEFAULT NULL,
  `shopCity` varchar(30) DEFAULT NULL,
  `shopPincode` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `shoe`
--

CREATE TABLE `shoe` (
  `shoeid` int(11) NOT NULL,
  `shoename` varchar(50) NOT NULL,
  `supplierId` int(11) NOT NULL,
  `price` double NOT NULL,
  `shoeImage` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shoe`
--

INSERT INTO `shoe` (`shoeid`, `shoename`, `supplierId`, `price`, `shoeImage`) VALUES
(1, 'Clogs', 1, 2000, 'https://i.pinimg.com/originals/ec/fc/75/ecfc75a461fb72790ff6e328011db91b.jpg'),
(2, 'Airforce 1', 2, 4000, 'https://i.pinimg.com/originals/78/8a/0a/788a0aaa7e8cdb218c06fcb55fa221f1.jpg'),
(3, 'Converse cdg', 3, 4500, 'https://i.ibb.co/FHKXdbM/Screenshot-2023-11-25-at-07-43-48-Gawx-Art-on-Instagram-custom-converse-x-comme-des-gar-ons-Painting.png');

-- --------------------------------------------------------

--
-- Table structure for table `supplier`
--

CREATE TABLE `supplier` (
  `supplierId` int(11) NOT NULL,
  `supplierName` varchar(20) NOT NULL,
  `location` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `supplier`
--

INSERT INTO `supplier` (`supplierId`, `supplierName`, `location`) VALUES
(1, 'Crocs', 'USA'),
(2, 'Nike', 'India'),
(3, 'Converse', 'India');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`productId`,`email`),
  ADD KEY `email` (`email`);

--
-- Indexes for table `design`
--
ALTER TABLE `design`
  ADD PRIMARY KEY (`designId`);

--
-- Indexes for table `designer`
--
ALTER TABLE `designer`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `mainuser`
--
ALTER TABLE `mainuser`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`,`productId`),
  ADD KEY `productId` (`productId`),
  ADD KEY `email` (`email`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productId`),
  ADD KEY `shoeId` (`shoeId`),
  ADD KEY `designId` (`designId`);

--
-- Indexes for table `retailer`
--
ALTER TABLE `retailer`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `shoe`
--
ALTER TABLE `shoe`
  ADD PRIMARY KEY (`shoeid`),
  ADD KEY `supplierId` (`supplierId`);

--
-- Indexes for table `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`supplierId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `design`
--
ALTER TABLE `design`
  MODIFY `designId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `shoe`
--
ALTER TABLE `shoe`
  MODIFY `shoeid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `supplier`
--
ALTER TABLE `supplier`
  MODIFY `supplierId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `product` (`productId`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`email`) REFERENCES `mainuser` (`email`);

--
-- Constraints for table `designer`
--
ALTER TABLE `designer`
  ADD CONSTRAINT `designer_ibfk_1` FOREIGN KEY (`email`) REFERENCES `mainuser` (`email`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `product` (`productId`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`email`) REFERENCES `mainuser` (`email`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`shoeId`) REFERENCES `shoe` (`shoeid`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`designId`) REFERENCES `design` (`designId`);

--
-- Constraints for table `retailer`
--
ALTER TABLE `retailer`
  ADD CONSTRAINT `retailer_ibfk_1` FOREIGN KEY (`email`) REFERENCES `mainuser` (`email`);

--
-- Constraints for table `shoe`
--
ALTER TABLE `shoe`
  ADD CONSTRAINT `shoe_ibfk_1` FOREIGN KEY (`supplierId`) REFERENCES `supplier` (`supplierId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
