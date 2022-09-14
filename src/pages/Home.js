import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import i18n from '../i18n';
import { Suspense } from 'react';
import Loading from '../components/Loading';


function Home() {
  
  return (
    <div className='dark:bg-gray-700'>
        <Suspense fallback={<Loading />}>
          <Hero />
          <Skills/>
          <Footer />
        </Suspense>
    </div>
  )
}

export default Home