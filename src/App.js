import { Component } from "react";

//引入 CSS 來進行基本的圖片美化與修飾
import "./styles.css";
//引入 react-slick  來實現輪播圖的功能 與 較為細節的設定
import Slider from "react-slick";

//印入四張輪播圖的照片
import img1 from "./images/ricky-kharawala-adK3Vu70DEQ-unsplash.jpg";
import img2 from "./images/simon-rae-jY_2XG-6HU0-unsplash.jpg";
import img3 from "./images/ronald-gijezen-7h06P9UKhYY-unsplash.jpg";
import img4 from "./images/kelly-sikkema-r077pfFsdaU-unsplash.jpg";

//把四張圖片放入一個陣列 並依序給予個別屬性
const images = [
  {
    id: "1",
    name: "Guinea Pig",
    alt: "Guinea Pig",
    url: img1, //對應到上面 引入的 img1
    href: "https://www.facebook.com", //連結網址 可以每張圖都不同
  },
  {
    id: "2",
    name: "Husky",
    alt: "Husky",
    url: img2, //對應到上面 引入的 img2
    href: "https://www.google.com", //設定到google 為範例 可自行設定
  },
  {
    id: "3",
    name: "Rhino",
    alt: "Rhino",
    url: img3, //對應到上面 引入的 img3
    href: "https://www.github.com", //設定到github 為範例 可自行設定
  },
  {
    id: "4",
    name: "Gorilla",
    alt: "Gorilla",
    url: img4, //對應到上面 引入的 img4
    href: "https://www.netflix.com", //設定到netflix 為範例 可自行設定
  },
];

//製作一個  Component 並 export 出去
export default class Carousel extends Component {
  render() {
    const settings = {
      //對應到下面的 settings 參數 給予從 react-slick 引入的 Slider 使用
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      className: "slides",
    };

    return (
      <Slider {...settings}>
        {/* 從 react-slick 引入的 Slider */}
        {images.map((image) => {
          //對每一個 images進行以下動作
          return (
            <div className="wrapper" key={image.id}>
              {/*連結另開新視窗*/}
              <a href={image.href} rel="noreferrer" target="_blank">
                <img className="sliderImg" src={image.url} alt={image.alt} />
              </a>
              <p className="imgTitle">{image.name}</p>
            </div>
          );
        })}
      </Slider>
    );
  }
}
