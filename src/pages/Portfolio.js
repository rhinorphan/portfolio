import React from 'react';
import Footer from '../components/Footer';
import Mockup from '../components/Mockup';
import i18n from '../i18n';
import { Suspense } from 'react';
import Loading from '../components/Loading';

function Portfolio() {
  return (
    <div className='dark:bg-gray-700'>
      <Suspense fallback={<Loading />}>
        <Mockup/>
        <Footer />
      </Suspense>
    </div>
  )
}

export default Portfolio