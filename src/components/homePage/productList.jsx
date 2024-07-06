import React from 'react';
import BootstrapCard from './BootstrapCard';

let products = [
  {
    title: "Ace Elec 20000 MAh Ultra Slim Portable Power Bank",
    imageUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/02/3088932/1.jpg?3620",
    price: 99.99,
    description: "High-quality Powerbank."
  },
  {
    title: "Nokia C31 - 6.75",
    imageUrl: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/7864092/1.jpg?7891",
    price: 79000.99,
    description: "Latest model smartphone with a powerful processor and camera."
  },
  {
    title: "XIAOMI Redmi A3x 6.7",
    imageUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/3746153/1.jpg?7577",
    price: 1199.99,
    description: "Lightweight laptop with long battery life and high resolution display."
  },
  {
    title: "UMIDIGI G5A Smartphone, 6.52,4GB RAM 64GB ROM",
    imageUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/37/0990013/1.jpg?0484",
    price: 190009.99,
    description: "Water-resistant smartwatch with health tracking features."
  },
  {
    title: "Samsung Galaxy S10 Plus Single Sim White 8gb Ram 128gb Rom ",
    imageUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/496389/1.jpg?6844",
    price: 497388.99,
    description: "Portable Bluetooth speaker with rich sound quality."
  },
  {
    title: "UMIDIGI A13 Pro (4GB,128GB ROM) 5150mAh NFC",
    imageUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/1693701/1.jpg?5447",
    price: 30990.99,
    description: "Next-gen gaming console with immersive graphics and gameplay."
  },
  {
    title: "Samsung Galaxy S9 (4GBRAM+64GBROM) HD ",
    imageUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/5158411/1.jpg?9856",
    price: 290009.99,
    description: "Durable action camera suitable for outdoor adventures."
  },
  {
    title: "UMIDIGI A15C - 6.7HD(8GB,128GB ROM) Global",
    imageUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/98/4789113/1.jpg?2219",
    price: 790483.99,
    description: "Fitness tracker with heart rate monitoring and step counter."
  },
  {
    title: "UMIDIGI A13 Pro 6.7",
    imageUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/89/6969701/1.jpg?2707",
    price: 129000.99,
    description: "E-Reader with high-resolution display and extensive book library."
  },
  {
    title: "XIAOMI Redmi A3x 6.71",
    imageUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/5659872/1.jpg?8697",
    price: 290283.99,
    description: "Compact portable charger for charging devices on the go."
  }
];

const ProductList = () => {
  return (
    <div className="d-flex flex-wrap">
      {products.map((product, index) => (
        <BootstrapCard 
          key={index}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductList;
