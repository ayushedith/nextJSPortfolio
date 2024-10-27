import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoDocumentTextOutline } from 'react-icons/io5';

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="relative flex min-h-screen w-full flex-col items-center justify-center space-y-8 overflow-hidden px-4 py-8 text-[#f0f0f0] sm:space-y-12 sm:py-12 md:py-16"
    >
      <div className="flex w-full max-w-6xl flex-col space-y-4 md:flex-row md:space-x-3 md:space-y-0">
        <div className="flex w-full flex-col items-start justify-center space-y-4 rounded-xl border border-[#292929] p-4 sm:space-y-6 sm:p-6 md:space-y-8">
          <h1 className="text-3xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">FullStack Engineer</h1>
          <div className="space-y-2 text-sm text-[#8b8b8b] sm:text-base md:text-lg lg:text-xl">
            <p>
              After teaching myself to code to creating my own companies{' '}
              <span className="font-bold">from concept to profits.</span> I also went to Queen Mary University of London
              where I got low grades while building and working at companies in the US.
            </p>
            <p>
              I then earned an internship at{' '}
              <Link href={'/amex'} className="font-bold underline underline-offset-4">
                American Express
              </Link>{' '}
              while also juggling starting a new company {'->'}{' '}
              <Link href={'https://clippie.ai'} className="font-bold underline underline-offset-4">
                clippie.ai
              </Link>
            </p>
          </div>
        </div>
        <div className="aspect-video h-full w-full overflow-hidden rounded-xl border border-[#292929] md:aspect-square md:w-fit">
          <Image src="/noah.jpg" alt="Noah" width={295} height={295} className="h-full w-full object-cover" />
        </div>
      </div>
      <button className="flex items-center space-x-2 rounded-xl border border-[#292929] p-2 font-semibold text-[#f0f0f0] transition-all duration-300 hover:scale-105 sm:p-3">
        <IoDocumentTextOutline size={20} className="sm:text-2xl" />{' '}
        <span className="text-sm sm:text-base">View my resume</span>
      </button>
    </div>
  );
};

export default About;
