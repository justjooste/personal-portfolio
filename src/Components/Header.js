import React from 'react';
import portfolioImage from '../portfolio_image.JPG'
import TypeWriterEffect from 'react-typewriter-effect';

function Header() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center min-h-screen">
        <div className="text-white lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-2xl text-xl font-medium">
            Hi, I'm
          </h1>
          <h1 className="title-font sm:text-4xl text-3xl font-semibold mx-8">
            Darren
          </h1>
          

          <p className="mx-32 mb-8 leading-relaxed">
          <TypeWriterEffect
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          '... a Student',
          '... a Visionary',
          '... your next Junior Developer',
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
          </p>
          <div className="flex justify-center">
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full opacity-20 transition-all duration-1000 hover:opacity-90 hover:transition-all hover:duration-1000"
            alt="hero"
            src={portfolioImage}
          />
        </div>
      </div>
    </section>
  
  ) 
}

export default Header;
