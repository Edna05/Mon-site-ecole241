import React from "react";
import Link from "next/link"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Assurez-vous d'importer Link correctement

export default function Blogs() {
  return (
    <>
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
    { src: "/actu.avif", title: "actualités 1" },
    { src: "/actu2.avif", title: "actualités 2" },
    { src: "/actu3.avif", title: "actualités 3" },
  ];
      <header>
        <h1>My Blog</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
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
        <div
          className="relative w-full h-96 bg-cover bg-center"
          style={{ backgroundImage: "url('/actu.avif')" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">actualités</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-8 text-center"> actualités </h1>
          <h2 className="text-xl mb-8 text-center">Découvrez nos actualités</h2>
          <div className="grid gr            {newsData.map((newsItem, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden transition duration-300 ease-in-out hover:shado   