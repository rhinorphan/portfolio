import React from 'react';
import {GrSafariOption} from 'react-icons/gr';
import {BiCodeAlt} from 'react-icons/bi';
import { useTranslation } from "react-i18next";

function Mockup() {

  const { t, i18n } = useTranslation();

  return (
    <div className='mx-10 py-20 md:py-32 text-center font-sora text-xs md:text-lg text-gray-800 dark:text-gray-200'>
      <div className='grid justify-center grid-cols-1 md:grid-cols-2 gap-10 font-semibold'>
        <div>
          <div className="macbook">
            <div className="screen">
              <div className="viewport-project1">
              </div>
            </div>
            <div className="base"></div>
            <div className="notch"></div>
          </div>
          <h1 className='my-3'>{t('portfolio.title-1')}</h1>
          <h2 className='my-2'>Desc</h2>
          <div className='flex flex-col gap-2 justify-center items-center text-center text-xs md:text-sm'>
            <button className='border-2 border-gray-800 dark:border-gray-200 rounded-full p-2 w-fit hover:bg-gray-200 dark:hover:bg-gray-800'>
              <div className='flex flex-row justify-center items-center'>
                <GrSafariOption className='mr-2 text-[20px] md:text-[25px]'/>
                <a href="" className='hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text hover:text-transparent duration-500'>{t('portfolio.btn-1')}</a>
              </div>
            </button>
            <button className='border-2 border-gray-800 dark:border-gray-200 rounded-full p-2 w-fit hover:bg-gray-200 dark:hover:bg-gray-800 disable'>
              <div className='flex flex-row justify-center items-center'>
                <BiCodeAlt className='mr-2 text-[20px] md:text-[25px]'/>
                <a href="" className='hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text hover:text-transparent duration-500'>{t('portfolio.btn-2')}</a>
              </div>
            </button>
          </div>
        </div>
        <div>
          <div className="macbook">
            <div className="screen">
              <div className="viewport-project2">
              </div>
            </div>
            <div className="base"></div>
            <div className="notch"></div>
          </div>
          <h1 className='my-3'>{t('portfolio.title-2')}</h1>
          <div className='flex flex-col gap-2 justify-center items-center text-center text-xs md:text-sm'>
            <button className='border-2 border-gray-800 dark:border-gray-200 rounded-full p-2 w-fit hover:bg-gray-200 dark:hover:bg-gray-800'>
              <div className='flex flex-row justify-center items-center'>
                <GrSafariOption className='mr-2 text-[20px] md:text-[25px]'/>
                <a href="" className='hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text hover:text-transparent duration-500'>{t('portfolio.btn-1')}</a>
              </div>
            </button>
            <button className='border-2 border-gray-800 dark:border-gray-200 rounded-full p-2 w-fit hover:bg-gray-200 dark:hover:bg-gray-800'>
              <div className='flex flex-row justify-center items-center'>
                <BiCodeAlt className='mr-2 text-[20px] md:text-[25px]'/>
                <a href="" className='hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text hover:text-transparent duration-500'>{t('portfolio.btn-2')}</a>
              </div>
            </button>
          </div>
        </div>
        <div>
          <div className="macbook">
            <div className="screen">
              <div className="viewport-project3">
              </div>
            </div>
            <div className="base"></div>
            <div className="notch"></div>
          </div>
          <h1 className='my-3'>{t('portfolio.title-3')}</h1>
          <div className='flex flex-col gap-2 justify-center items-center text-center text-xs md:text-sm'>
            <button className='border-2 border-gray-800 dark:border-gray-200 rounded-full p-2 w-fit hover:bg-gray-200 dark:hover:bg-gray-800'>
              <div className='flex flex-row justify-center items-center'>
                <GrSafariOption className='mr-2 text-[20px] md:text-[25px]'/>
                <a href="" className='hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text hover:text-transparent duration-500'>{t('portfolio.btn-1')}</a>
              </div>
            </button>
            <button className='border-2 border-gray-800 dark:border-gray-200 rounded-full p-2 w-fit hover:bg-gray-200 dark:hover:bg-gray-800'>
              <div className='flex flex-row justify-center items-center'>
                <BiCodeAlt className='mr-2 text-[20px] md:text-[25px]'/>
                <a href="" className='hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text hover:text-transparent duration-500'>{t('portfolio.btn-2')}</a>
              </div>
            </button>
          </div>
        </div>
        <div>
          <div className="macbook">
            <div className="screen">
              <div className="viewport-project4">
              </div>
            </div>
            <div className="base"></div>
            <div className="notch"></div>
          </div>
          <h1 className='my-3'>{t('portfolio.title-4')}</h1>
          <div className='flex flex-col gap-2 justify-center items-center text-center text-xs md:text-sm'>
            <button className='border-2 border-gray-800 dark:border-gray-200 rounded-full p-2 w-fit hover:bg-gray-200 dark:hover:bg-gray-800'>
              <div className='flex flex-row justify-center items-center'>
                <GrSafariOption className='mr-2 text-[20px] md:text-[25px]'/>
                <a href="" className='hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text hover:text-transparent duration-500'>{t('portfolio.btn-1')}</a>
              </div>
            </button>
            <button className='border-2 border-gray-800 dark:border-gray-200 rounded-full p-2 w-fit hover:bg-gray-200 dark:hover:bg-gray-800'>
              <div className='flex flex-row justify-center items-center'>
                <BiCodeAlt className='mr-2 text-[20px] md:text-[25px]'/>
                <a href="" className='hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text hover:text-transparent duration-500'>{t('portfolio.btn-2')}</a>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mockup
