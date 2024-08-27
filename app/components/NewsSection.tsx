"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const NewsSection: React.FC = () => {
  const newsItems = [
    {
      src: "/inscr.jpg",
      title: "Inscriptions prolongées",
      description:
        "En raison de votre enthousiasme pour les inscriptions, nous avons décidé de prolonger la date des inscriptions jusqu'au 31/08/2024 à 23h59 ⏳. Nous voulons donner la chance à quelqu'un de rejoindre notre fabrique. Partagez la bonne nouvelle avec vos proches ! 😊",
      link: "/inscriptions-prolongees", // Example link
    },
    {
      src: "/promo89.jpg",
      title: "Nouvelles cohortes",
      description:
        "Nous sommes de R.E.T.O.U.R ! Oui oui et avec de très bonnes nouvelles pour les villes de Libreville et de Port-Gentil 🔥🚀. Devenez Réferent Digital et Développeur Web et Web Mobile en 9 mois grâce à Ecole 241 et Initiative Jeunesse Autonome !",
      link: "/nouvelles-cohortes", // Example link
    },
    {
      src: "/duvangu.jpg",
      title: "Duvangu! La fabrique creative.",
      description:
        "Journée exceptionnelle dans les locaux de la fabrique creatrice.",
      link: "/duvangu-fabrique-creative", // Example link
    },
    {
      src: "/labs.jpg",
      title: "🚨 APPEL À CANDIDATURE 🚨",
      description:
        "L'Organisation du monde islamique pour l'éducation, les sciences et la culture (ICESCO) est une institution spécialisée qui opère sous l'égide de l'Organisation de la coopération islamique (OCI). Elle se concentre sur la promotion des domaines de l'éducation, des sciences, de la culture et de la communication dans les pays islamiques",
      link: "https://www.facebook.com/photo?fbid=482384317743201&set=a.186020244046278",
    },
    {
      src: "/promo89.jpg",
      title: "Nouvelles cohortes",
      description:
        "Nous sommes de R.E.T.O.U.R ! Oui oui et avec de très bonnes nouvelles pour les villes de Libreville et de Port-Gentil 🔥🚀 Devenez Réferent Digital et Développeur Web et Web Mobile en 9 mois grâce à Ecole 241 et Initiative Jeunesse Autonome !",
      link: "https://www.facebook.com/photo?fbid=482384317743201&set=a.186020244046278",
    },
    {
      src: "/hackathon.jfif",
      title: "Hackathon!",
      description:
        "Comme il est de coutume chez nous, tous les vendredis c'est le mode : hackathon activé ! Rdv à partir de 12h pour les restitutions de nos travaux  🔥. Soyez nombreux à débriefer sur les travaux de nos apprenants avec nous.",
      link: "https://www.facebook.com/photo?fbid=482384317743201&set=a.186020244046278", // Example link
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        sectionRef.current?.classList.add("active");
        observer.unobserve(sectionRef.current!);
      }
    });

    observer.observe(sectionRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-16" ref={sectionRef}>
      <h2 className="text-xl mb-8 text-center">Découvrez nos actualités</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsItems.map((news, index) => (
          <div key={index} className="relative overflow-hidden">
            <Image
              src={news.src}
              alt={news.title}
              width={600}
              height={400}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
              <p className="text-white text-xl text-center mb-4">
                {news.description}
              </p>
              <a
                href={news.link}
                className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-300"
              >
                Découvrir plus
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
