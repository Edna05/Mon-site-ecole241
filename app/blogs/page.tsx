import React from "react";
import Slider from "../components/Slider"; // Assurez-vous que le chemin est correct
import NewsSection from "../components/NewsSection";
import videosplayer from "../components/videosplayer";

const Blogs: React.FC = () => {
  const images = [
    { src: "/actu.avif", title: "Actualité " },
    { src: "/fab.jpg", title: "Actualité " },
    { src: "/actus.jpg", title: "Actualité " },
    { src: "/duvangu.jpg", title: "Actualité " },
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
        <Slider images={images} />
        <NewsSection />
      </main>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-4">Featured Video</h2>
        <video src="/video.mp4" />
      </div>
    </>
  );
};

export default Blogs;
