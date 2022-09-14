import React from 'react';
import {SiTailwindcss} from 'react-icons/si';
import { useTranslation } from "react-i18next";

function Footer() {

  const { t, i18n } = useTranslation();

  return (
    <div className='flex flex-col justify center items-center mt-20 pb-3 w-full overflow-hidden'>
      <div className='flex text-xs lg:text-sm text-gray-400'>{t('footer.title-1')}<span className='mx-1'><SiTailwindcss/></span>{t('footer.title-2')}</div>
      <div className='text-xs text-gray-400'>{t('footer.title-3')}</div>
    </div>
  )
}

export default Footer