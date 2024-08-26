import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function Blogs() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const images = [
    { src: "/actu.avif", title:  "Actualité 1" },
    { src: "/actu2.avif", title: "Actualité 2" },
    { src: "/actu3.avif", title: "Actualité 3" },
  ];

  return (
    <>
      <header>
        <h1>My Blog</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Slider */}
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-4xl font-bold">{image.title}</h1>
              </div>
            </div>
          ))}
        </Slider>

        {/* Contenu des actualités */}
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-8 text-center">Actualités</h1>
          <h2 className="text-xl mb-8 text-center">Découvrez nos actualités</h2>
          
          {/* Exemple de section d'actualités */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden">
              <Image src="/actu1.jpg" alt="Actualité 1" width={600} height={400} className="w-full h-auto" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl">Description de l'actualité 1</p>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <Image src="/actu2.jpg" alt="Actualité 2" width={600} height={400} className="w-full h-auto" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl">Description de l'actualité 2</p>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <Image src="/actu3.jpg" alt="Actualité 3" width={600} height={400} className="w-full h-auto" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl">Description de l'actualité 3</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
