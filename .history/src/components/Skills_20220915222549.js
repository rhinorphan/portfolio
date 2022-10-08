import React from 'react';
import Web3 from '../assets/Web3.png';
import { useTranslation } from "react-i18next";

function Skills() {

  const { t, i18n } = useTranslation();

  return (
    <div className='mx-10 text-center font-sora text-gray-800 dark:text-gray-200'>
      <h1 className='font-extrabold text-lg md:text-2xl lg:text-3xl mb-7 md:mb-10'>{t('skills.h2-1')}<span className='bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent'>{t('skills.h2-2')}</span>{t('skills.h2-3')}</h1>
      <div className="grid justify-center grid-cols-3 md:grid-cols-5 place-content-center gap-y-[10px] md:gap-y-[20px] font-semibold max-w-2xl"> 
        <a href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/html.svg" alt="" />
          <p className="text-center">HTML</p>
        </a>
        <a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/css.svg" alt="" />
          <p className="text-center">CSS</p>
        </a>
        <a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/javascript.svg" alt="" />
          <p className="text-center">Javascript</p>
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg" alt="" />
          <p className="text-center">ReactJS</p>
        </a>
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/next.svg" alt="" />
          <p className="text-center">NextJS</p>
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/tailwindcss.svg" alt="" />
          <p className="text-center">TailwindCSS</p>
        </a>
        <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/firebase.svg" alt="" />
          <p className="text-center">Firebase</p>
        </a>
        <a href="https://mui.com/material-ui/getting-started/overview/" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://v4.mui.com/static/logo.png" alt="" />
          <p className="text-center">Material UI</p>
        </a>
        <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/ruby.svg" alt="" />
          <p className="text-center">Ruby</p>
        </a>
        <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://whatyoucodingboutwillis.com/images/rails-logo.svg" alt="" />
          <p className="text-center">Rails</p>
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/typescript.svg" alt="" />
          <p className="text-center">Typescript</p>
        </a>
        <a href="https://web3.foundation/" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src={Web3} alt="" />
          <p className="text-center">Web3</p>
        </a>
        <a href="https://threejs.org/" target="_blank" rel="noopener noreferrer"  className="item flex flex-col items-center justify-around group">
          <img className="w-10 h-10 transition duration-300 group-hover:scale-110" src="https://firebasestorage.googleapis.com/v0/b/portfolio-axel.appspot.com/o/favicon.ico?alt=media&token=673f5ced-2b86-49cf-8499-663629d59554" alt="" />
          <p className="text-center">ThreeJs</p>
        </a>
        <a href="https://www.sanity.io/" target="_blank" rel="noopener noreferrer"  className="item flex flex-col items-center justify-around group">
          <img className="w-10 h-10 transition duration-300 group-hover:scale-110" src="https://firebasestorage.googleapis.com/v0/b/portfolio-axel.appspot.com/o/sanity.png?alt=media&token=24870f33-5076-4498-a0e9-b024a396b4c8" alt="Sanity logo" />
          <p className="text-center">Sanity</p>
        </a>
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer"  className="item flex flex-col items-center justify-around group">
          <img className="w-10 h-10 transition duration-300 group-hover:scale-110" src="https://www.svgrepo.com/show/354513/vercel-icon.svg" alt="" />
          <p className="text-center">Vercel</p>
        </a>
      </div>
    </div>
  )
}

export default Skills