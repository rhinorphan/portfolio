import React from 'react';
import Axel from '../assets/hero-axel.png';
import '../App.css';
import party from "party-js";
import { useTranslation } from "react-i18next";

function Hero() {

  const { t, i18n } = useTranslation();

  setTimeout(() => {
    var surprise = document.querySelector(".button");

    surprise.addEventListener("click", function (e) {
      party.confetti(surprise, {count: party.variation.range(20, 40)});
  });

  var emailSurprise = document.querySelector(".email");

    emailSurprise.addEventListener("click", function (e) {
      party.confetti(emailSurprise, {count: party.variation.range(20, 40)});
  });

  }, 500)

  return (
    <div className='flex flex-col md:flex-row text-center md:text-left justify-center items-center my-[15%] gap-3 md:gap-10 text-gray-800 dark:text-gray-200 font-sora mx-5'>
      <div className='w-[200px] md:w-[300px] rounded-full bg-gradient-to-l from-cyan-500 via-blue-500 to-purple-600 shadow-2xl overflow-hidden border-gray-100 dark:border-gray-600 border-2'>
        <a href="/" class="circle">
          <img src={Axel} alt="Axel Tarifa" className='rounded-full w-[250px] md:w-[400px] memoji'/>
        </a>
      </div>
      <div className='flex flex-col justify-center'>
        <div className='flex flex-row gap-3 items-center mt-5 md:mt-0 mb-1 md:mb-3 justify-center md:justify-start'>
          <h1 className='font-extrabold text-lg md:text-2xl lg:text-[38px]'>
            {t('home.title')}<span className='bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent'>Axel</span>
          </h1>
          <button className="button tooltip">
          <h1 className='shaking text-xl md:text-[30px] lg:text-[40px]'>
            👋
          </h1>
          <span className='tooltiptext'>{t('home.bonus')}</span>
          </button>
        </div>
        <h2 className='font-semibold text-sm md:text-xl lg:text-[25px] mb-5'>{t('home.desc-1')}<span className='pre bg-gray-200 rounded-xl p-1 text-gray-400'>{t('home.desc-2')}</span>{t('home.desc-3')}</h2>
        <div className='flex flex-col gap-3 md:gap-3 text-xs md:text-sm lg:text-[18px]'>
          <div className='flex justify-center md:justify-start items-center'>
            <p className='mr-2 md:mr-5 text-[15px] md:text-[25px]'>🧋</p>
            <p>{t('home.li-1')}</p>
          </div>
          <div className='flex justify-center md:justify-start items-center'>
            <p className='mr-2 md:mr-5 text-[15px] md:text-[25px]'>🥖</p>
            <p>{t('home.li-2')}</p>
          </div>
          <div className='flex justify-center md:justify-start items-center'>
            <p className='mr-2 md:mr-5 text-[15px] md:text-[25px]'>💼</p>
            <p>{t('home.li-3')}</p>
          </div>
          <div className='flex justify-center md:justify-start items-center'>
            <button className='mr-2 md:mr-5 text-[15px] md:text-[25px]'>📧</button>
            <p><a href="mailto:axel.tarifa@gmail.com" className='hire-me email'><span>{t('home.li-4')}</span></a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero