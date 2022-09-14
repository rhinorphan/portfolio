import React from 'react';
import Footer from '../components/Footer';
import i18n from '../i18n';
import { Suspense } from 'react';
import Loading from '../components/Loading';
import { useTranslation } from "react-i18next";


function About() {

  const { t, i18n } = useTranslation();

  return (
    <div className='dark:bg-gray-700'>
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col gap-20 items-center justify-center px-10 md:px-40 py-20 md:py-32 pre text-xs md:text-lg">
          <div className="rounded-lg shadow-2xl bg-gray-800 text-white min-w-full">
            <div className=" about-me px-4 py-2">
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-400"></div>
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-500"></div>
            </div>
            <div className="px-8 py-6">
              <p>
                <em className="text-blue-400">const</em> <span className="text-green-400">aboutMe</span> <span className="text-pink-500">=</span> <em className="text-blue-400">function</em>{`() {`}</p>
                <p>&nbsp;&nbsp;<span className="text-pink-500">return</span>{`{`}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{t('about.title-1')}<span className="text-yellow-300">{t('about.name')}</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{t('about.title-2')}<span className="text-yellow-300">{t('about.position')}</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{t('about.title-3')}<span className="text-yellow-300"><a target="_blank" href="https://github.com/rhinorphan" className="text-yellow-300 hover:underline cursor-pointer">{t('about.github')}</a></span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{t('about.title-4')}<div className='pl-9 md:pl-14'><span className="text-yellow-300">{t('about.desc')}</span></div></p>
                <p>&nbsp;&nbsp;{`}`}</p>
                <p>{`}`}
              </p>
            </div>
          </div>
          <div className="rounded-lg shadow-2xl bg-gray-800 text-white min-w-full">
            <div className=" about-me px-4 py-2">
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-400"></div>
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-500"></div>
            </div>
            <div className="px-8 py-6">
              <p>
                <em className="text-blue-400">const</em> <span className="text-green-400">Skills</span> <span className="text-pink-500">=</span> <em className="text-blue-400">function</em>{`() {`}
              </p>
              <p>&nbsp;&nbsp;<span className="text-pink-500">return</span>{`{`}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{t('about.title-5')}<span>{`{`}</span></p>
              <p><span className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('about.skill-1')}</span>,</p>
              <p><span className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('about.skill-2')}</span>,</p>
              <p><span className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('about.skill-3')}</span>,</p>
              <p><span className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('about.skill-4')}</span>,</p>
              <p><span className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('about.skill-5')}</span>,</p>
              <p><span className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('about.skill-6')}</span>,</p>
              <p><span className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('about.skill-7')}</span>,</p>
              <p><span className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('about.skill-8')}</span>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{`},`}</p></p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{t('about.title-6')}<span>{`{`}</span></p>
              <p><span className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('about.skill-9')}</span>,</p>
              <p><span className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('about.skill-10')}</span>,</p>
              <p><span className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('about.skill-11')}</span><p>&nbsp;&nbsp;&nbsp;&nbsp;{`},`}</p>,</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{t('about.title-7')}<span>{`{`}</span></p>
              <p><span className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('about.skill-12')}</span>,</p>
              <p><span className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('about.skill-13')}</span><p>&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</p></p>
              <p>&nbsp;&nbsp;{`}`}</p>
              <p>{`}`}</p>
            </div>
          </div>
          <div className="rounded-lg shadow-2xl bg-gray-800 text-white min-w-full">
            <div className=" about-me px-4 py-2">
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-400"></div>
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-500"></div>
            </div>
            <div className="px-8 py-6">
              <p>
                <em className="text-blue-400">const</em> <span className="text-green-400">Hobbies</span> <span className="text-pink-500">=</span> <em className="text-blue-400">function</em>{`() {`}
              </p>
              <p>&nbsp;&nbsp;<span className="text-pink-500">return</span>{`{`}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{t('about.title-8')}<span>{`{`}</span></p>
              <p><span className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('about.interest-1')}</span>,</p>
              <p><span className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('about.interest-2')}</span>,</p>
              <p><span className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('about.interest-3')}</span>,</p>
              <p><span className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('about.interest-4')}</span></p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</p>
              <p>&nbsp;&nbsp;{`}`}</p>
              <p>{`}`}</p>
            </div>
          </div>
        </div>
      <Footer />

      </Suspense>
    </div>
  )
}

export default About