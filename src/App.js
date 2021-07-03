import { Component } from "react";
import "./styles.css";

import Slider from "react-slick";

import img1 from "./images/ricky-kharawala-adK3Vu70DEQ-unsplash.jpg";
import img2 from "./images/simon-rae-jY_2XG-6HU0-unsplash.jpg";
import img3 from "./images/ronald-gijezen-7h06P9UKhYY-unsplash.jpg";
import img4 from "./images/kelly-sikkema-r077pfFsdaU-unsplash.jpg";

const images = [
  {
    id: "1",
    name: "Guinea Pig",
    alt: "",
    url: img1,
    href: "https://www.facebook.com",
  },
  {
    id: "2",
    name: "Husky",
    alt: "",
    url: img2,
    href: "https://www.google.com",
  },
  {
    id: "3",
    name: "Rhino",
    alt: "",
    url: img3,
    href: "https://www.github.com",
  },
  {
    id: "4",
    name: "Gorilla",
    alt: "",
    url: img4,
    href: "https://www.netflix.com",
  },
];

export default class Carousel extends Component {
  render() {
    const settings = {
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
        {images.map((image) => {
          return (
            <div className="wrapper" key={image.id}>
              {/*add rel="noreferrer" for security concern*/}
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
