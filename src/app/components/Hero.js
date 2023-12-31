import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-yellow-300 h-screen flex flex-col justify-center items-center relative">
     
      <div className="absolute inset-0">
        <Image
          src="/Bg Shape.png"
          alt="Hero Image"
          className="object-cover w-full h-full rounded-md"
          width={400}
          height={400}
        />
      </div>
     
      <div className="text-center text-black relative z-10 w-1121 mx-auto">
      <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl">
        Let’s create something <br/> great together.
    </h1>
      </div>
    
      <div className="flex justify-center mt-8 absolute bottom-0">
        <Image
          src="/Hands.png"
          alt="hands"
          className="w-1/2 rounded-md"
          width={250} 
          height={150} 
        />
        <Image
          src="/Hands-2.png"
          alt="hands-2"
          className="w-1/2 rounded-md"
          width={250} 
          height={150} 
        />
      </div>
    </div>
  );
};

export default Hero;
