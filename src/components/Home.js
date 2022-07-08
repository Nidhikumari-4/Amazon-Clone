import React from "react";
import Product from "./Products";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://user-images.githubusercontent.com/77065920/177403862-2dab332d-6d22-43ce-ae03-60e62c7da2b1.jpg"
      />

      <div className="home_row">
        <Product
          id={12312}
          title="Apple iPhone 13 (256 GB) - Green"
          price={80000}
          rating={4}
          image="https://m.media-amazon.com/images/I/61-r9zOKBCL._AC_UY218_.jpg"
        />
        <Product
          id={12312}
          title="cer Aspire 3 Intel Core i3 11th Generation 15.6-inch (39.6 cms) Full HD Laptop "
          price={32000}
          rating={4}
          image="https://m.media-amazon.com/images/I/711tZecNhyL._AC_UY218_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id={12312}
          title="Analog Blue-Grey Dial Men's Watch"
          price={450}
          rating={3}
          image="https://m.media-amazon.com/images/I/718XDEWTPIL._AC_UL320_.jpg"
        />
        <Product
          id={12312}
          title="boAt Rockerz 255 Pro+ V5.0 Wireless in Ear Earphones "
          price={1599}
          rating={4}
          image="https://m.media-amazon.com/images/I/515jdxLlmaL._AC_UY218_.jpg"
        />
        <Product
          id={12312}
          title="Redmi 9 Activ (Carbon Black, 4GB RAM, 64GB Storage)"
          price={9499}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/416SpYgTVYL._SX300_SY300_QL70_FMwebp_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id={12312}
          title="AOPEN Acer 24-inch (60.96 cm) Aopen Curve Gaming Monitor - 24HC1QR (Black)"
          price={15800}
          rating={5}
          image="https://m.media-amazon.com/images/I/812WXALePlL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
