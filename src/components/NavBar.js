import React, { useContext, useState } from 'react';
import {FaDev} from 'react-icons/fa';
import useDarkMode from '../useDarkMode';
import { useTranslation } from "react-i18next";
import LocaleContext from '../LocaleContext';


function NavBar() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const { t, i18n } = useTranslation();
  const { locale } = useContext(LocaleContext);
  const [isEn, setIsEn] = useState(() => locale === "en-GB");

  function changeLocale (l) {
    i18n.changeLanguage(l);
    if (locale !== l) {
      setIsEn(!isEn);
    } else {
      setIsEn(!isEn)
    }
  }
  return (
    <div className='flex justify-center items-center text-gray-800 dark:text-gray-200 font-sora gap-6 md:gap-20 lg:gap-32 text-sm md:text-lg font-semibold overflow-hidden'>
        <a href="/" className='hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text hover:text-transparent duration-500'>{t('navbar.home')}</a>
        <a href="/about" className='hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text hover:text-transparent duration-500'>{t('navbar.about')}</a>
        <div>
          <FaDev size={50} />
        </div>
        <a href="/portfolio" className='hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text hover:text-transparent duration-500'>{t('navbar.portfolio')}</a>
        <a onClick={() => toggleDarkMode(!isDarkMode)} className="cursor-pointer text-2xl">{isDarkMode ? (<span>🌝</span>):(<span>🌚</span>)}</a>
        {isEn ? (<a onClick={() => changeLocale('fr-FR')} className="cursor-pointer text-2xl"><span>🇫🇷</span></a>):(<a onClick={() => changeLocale('en-GB')} className="cursor-pointer text-2xl"><span>🇬🇧</span></a>)}
    </div>
  )
}

export default NavBar