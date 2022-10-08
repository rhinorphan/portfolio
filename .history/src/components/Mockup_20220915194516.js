import React from 'react';
import {GrSafariOption} from 'react-icons/gr';
import {BiCodeAlt} from 'react-icons/bi';
import { useTranslation } from "react-i18next";

function Mockup() {

  const { t, i18n } = useTranslation();

  return (
    <div className='mx-10 py-20 md:py-32 text-center font-sora text-xs md:text-lg text-gray-800 dark:text-gray-200'>
      <div className='grid justify-center grid-cols-1 md:grid-cols-2 gap-10 font-semibold items-center'>
        <div>
          <div className="macbook">
            <div className="screen">
              <div className="viewport-project1">
              </div>
            </div>
            <div className="base"></div>
            <div className="notch"></div>
          </div>
          <div className='flex flex-col justify-evenly items-center'>
            <h1 className='my-3'>{t('portfolio.title-1')}</h1>
            <h2 className=' text-sm my-2'>{t('portfolio.desc-1')}</h2>
            <div className='flex gap-4 justify-center items-center mx-auto my-2'>
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"  class="item flex flex-col items-center justify-around group">
              <img class="w-10 h-10 transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg" alt="" />
              </a>
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"  class="item flex flex-col items-center justify-around group">
                <img class="w-10 h-10 transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/tailwindcss.svg" alt="" />
              </a>
              <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer"  class="item flex flex-col items-center justify-around group">
                <img class="w-10 h-10 transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/firebase.svg" alt="" />
              </a>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center text-center text-xs md:text-sm'>
              <button className='border-2 border-gray-800 dark:border-gray-200 rounded-full p-2 w-fit hover:bg-gray-200 dark:hover:bg-gray-800'>
                <div className='flex flex-row justify-center items-center'>
                  <GrSafariOption className='mr-2 text-[20px] md:text-[25px]'/>
                  <a href="https://www.axelcoaching.fr" target="_blank" rel="noopener noreferrer" className='hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text hover:text-transparent duration-500'>{t('portfolio.btn-1')}</a>
                </div>
              </button>
              <button className='border-2 border-gray-800 dark:border-gray-200 rounded-full p-2 w-fit hover:bg-gray-200 dark:hover:bg-gray-800 disable'>
                <div className='flex flex-row justify-center items-center'>
                  <BiCodeAlt className='mr-2 text-[20px] md:text-[25px]'/>
                  <a href="/" className='hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text hover:text-transparent duration-500'>{t('portfolio.btn-2')}</a>
                </div>
              </button>
            </div>
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
          <div className='flex flex-col justify-between items-center'>
            <h1 className='my-3'>{t('portfolio.title-2')}</h1>
            <h2 className=' text-sm my-2'>{t('portfolio.desc-2')}</h2>
            <div className='flex gap-4 justify-center items-center mx-auto my-2'>
              <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"  class="item flex flex-col items-center justify-around group">
                <img class="w-10 h-10 transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/next.svg" alt="" />
                
              </a>
              <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"  class="item flex flex-col items-center justify-around group">
                <img class="w-10 h-10 transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/typescript.svg" alt="" />
              </a>
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"  class="item flex flex-col items-center justify-around group">
                <img class="w-10 h-10 transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/tailwindcss.svg" alt="" />
              </a>
              <a href="https://www.sanity.io/" target="_blank" rel="noopener noreferrer"  class="item flex flex-col items-center justify-around group">
                <img class="w-10 h-10 transition duration-300 group-hover:scale-110" src="https://firebasestorage.googleapis.com/v0/b/portfolio-axel.appspot.com/o/sanity.png?alt=media&token=24870f33-5076-4498-a0e9-b024a396b4c8" alt="Sanity logo" />
              </a>
              <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer"  class="item flex flex-col items-center justify-around group">
                <img class="w-10 h-10 transition duration-300 group-hover:scale-110" src="https://www.svgrepo.com/show/354513/vercel-icon.svg" alt="" />
              </a>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center text-center text-xs md:text-sm'>
              <button className='border-2 border-gray-800 dark:border-gray-200 rounded-full p-2 w-fit hover:bg-gray-200 dark:hover:bg-gray-800'>
                <div className='flex flex-row justify-center items-center'>
                  <GrSafariOption className='mr-2 text-[20px] md:text-[25px]'/>
                  <a href="https://clarisse-webmedia.vercel.app/" target="_blank" rel="noopener noreferrer" className='hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text hover:text-transparent duration-500'>{t('portfolio.btn-1')}</a>
                </div>
              </button>
              <button className='border-2 border-gray-800 dark:border-gray-200 rounded-full p-2 w-fit hover:bg-gray-200 dark:hover:bg-gray-800'>
                <div className='flex flex-row justify-center items-center'>
                  <BiCodeAlt className='mr-2 text-[20px] md:text-[25px]'/>
                  <a href="/" className='hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text hover:text-transparent duration-500'>{t('portfolio.btn-2')}</a>
                </div>
              </button>
            </div>
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
          <div className='flex flex-col justify-around items-center'>
            <h1 className='my-3'>{t('portfolio.title-2')}</h1>
            <h2 className=' text-sm my-2'>{t('portfolio.desc-2')}</h2>
            <div className='flex gap-4 justify-center items-center mx-auto my-2'>
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" class="item flex flex-col items-center justify-around group">
              <img class="w-10 h-10 transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg" alt="" />
              </a>
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"  class="item flex flex-col items-center justify-around group">
                <img class="w-10 h-10 transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/tailwindcss.svg" alt="" />
              </a>
              <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer"  class="item flex flex-col items-center justify-around group">
                <img class="w-10 h-10 transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/firebase.svg" alt="" />
              </a>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center text-center text-xs md:text-sm'>
              <button className='border-2 border-gray-800 dark:border-gray-200 rounded-full p-2 w-fit hover:bg-gray-200 dark:hover:bg-gray-800'>
                <div className='flex flex-row justify-center items-center'>
                  <GrSafariOption className='mr-2 text-[20px] md:text-[25px]'/>
                  <a href="https://clarisse-webmedia.vercel.app/" target="_blank" rel="noopener noreferrer" className='hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text hover:text-transparent duration-500'>{t('portfolio.btn-1')}</a>
                </div>
              </button>
              <button className='border-2 border-gray-800 dark:border-gray-200 rounded-full p-2 w-fit hover:bg-gray-200 dark:hover:bg-gray-800'>
                <div className='flex flex-row justify-center items-center'>
                  <BiCodeAlt className='mr-2 text-[20px] md:text-[25px]'/>
                  <a href="/" className='hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text hover:text-transparent duration-500'>{t('portfolio.btn-2')}</a>
                </div>
              </button>
            </div>
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
          <div className='flex flex-col justify-around items-center'>
            <h1 className='my-3'>{t('portfolio.title-2')}</h1>
            <h2 className=' text-sm my-2'>{t('portfolio.desc-2')}</h2>
            <div className='flex gap-4 justify-center items-center mx-auto my-2'>
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"  class="item flex flex-col items-center justify-around group">
              <img class="w-10 h-10 transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg" alt="" />
              </a>
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"  class="item flex flex-col items-center justify-around group">
                <img class="w-10 h-10 transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/tailwindcss.svg" alt="" />
              </a>
              <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer"  class="item flex flex-col items-center justify-around group">
                <img class="w-10 h-10 transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/firebase.svg" alt="" />
              </a>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center text-center text-xs md:text-sm'>
              <button className='border-2 border-gray-800 dark:border-gray-200 rounded-full p-2 w-fit hover:bg-gray-200 dark:hover:bg-gray-800'>
                <div className='flex flex-row justify-center items-center'>
                  <GrSafariOption className='mr-2 text-[20px] md:text-[25px]'/>
                  <a href="https://clarisse-webmedia.vercel.app/" target="_blank" rel="noopener noreferrer" className='hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text hover:text-transparent duration-500'>{t('portfolio.btn-1')}</a>
                </div>
              </button>
              <button className='border-2 border-gray-800 dark:border-gray-200 rounded-full p-2 w-fit hover:bg-gray-200 dark:hover:bg-gray-800'>
                <div className='flex flex-row justify-center items-center'>
                  <BiCodeAlt className='mr-2 text-[20px] md:text-[25px]'/>
                  <a href="/" className='hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text hover:text-transparent duration-500'>{t('portfolio.btn-2')}</a>
                </div>
              </button>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mockup
