import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://trak.in/wp-content/uploads/2018/03/AmazonNow-Banner.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="the shitty startup"
            price={29.99}
            image="https://maserati.scene7.com/is/image/maserati/maserati/regional/us/models/my22/levante/22_LV_Trofeo_PS_T1_HomePage_1920x1080.jpg"
            rating={4}
          />
          <Product
            title="what the fuck"
            price={49.99}
            image="https://images.leafly.com/menu/XQ355njRnOMqzElhXGmn_store-image-inside.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="is going on"
            price={123.99}
            image="https://images.ctfassets.net/u77gi3ejnmxq/2ErZTK3uDXGvB9g2BQuJm8/ab320e93c3677b0aeb237c8e10c510b1/Hermarketingsite-min.png"
            rating={4}
          />
          <Product
            title="css sucks"
            price={756.99}
            image="https://images.potguide.com/store/803629/CmRaAAAAzRHm7axc_bScKnKJECjsa48AVhF1_thumb_small.jpg"
            rating={1}
          />
          <Product
            title="weird painging"
            price={22.99}
            image="https://images.leafly.com/menu/XQ355njRnOMqzElhXGmn_store-image-inside.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;
