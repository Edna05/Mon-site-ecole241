import style from '../style.module.css'
import Main from '../components/Main';
import Footer from '../components/Footer'
import Image from 'next/image';
import Outils from "../components/Outils"
import {motion} from 'framer-motion';


const Formations = ()=>{
    return(
    <>
      <body>
        <Main />

      <section className="px-4 py-8 sm:flex lg:items-center lg:justify-between bg-black">
  <div className="text-center lg:text-left lg:w-1/2 py-8 px-8">
    <h1 className= "text-3xl text-white md:text-4xl lg:text-5xl font-bold items-center">
      Engagez <span className={style.span}>un développeur  expérimenté</span> pour rejoindre votre équipe
    </h1>
    <p className="relative mt-4 md:mt-6 lg:mt-8 text-white ">
      Exprimez vos besoins, et nous vous fournirons une sélection de <br className="hidden md:block" /> candidats qualifiés dans les 48 heures.
    </p>
   
  </div>
</section>


<section className="m-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-28 px-4">
  <div className="flex flex-col justify-center py-8 px-8">
    <h1 className="text-3xl md:text-4xl lg:text-5xl text-center lg:text-left font-bold mt-12">
      +100 DEVELOPPEURS <br className="hidden md:block" /> FORMÉS
    </h1>
    <p className="mt-6 lg:mt-10">
      École 241, est la première institution gabonaise dédiée à la formation gratuite de <br className="hidden md:block" /> développeurs …
    </p>
    <p className="mt-6 lg:mt-10">
      Notre approche pédagogique repose sur l’enseignement actif, où les apprenants bénéficient <br className="hidden md:block" /> d’un suivi personnalisé assuré par des coachs spécialisés en développement. En <br className="hidden md:block" /> collaboration avec notre partenaire principal, Symplon, notre programme intègre des cours <br className="hidden md:block" /> et des évaluations rigoureuses.
    </p>
  </div>
  <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
    <Image
      className="w-full lg:w-8/12 rounded-xl object-cover mt-12"
      src="/eCOLE47_1297919770577707_5409795518867950751_n-1536x1024.jpeg"
      alt="Description de l'image"
      width={1000}
      height={200}
    />
  </div>
</section>

        <Outils /> 
      </body>
    
    </>
    )
}
export default Formations;