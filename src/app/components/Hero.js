import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-yellow-300 h-screen flex flex-col justify-center items-center relative">
      {/* Sarı arka planlı alan */}
      <div className="absolute inset-0">
        <Image
          src="/Bg Shape.png"
          alt="Hero Image"
          className="object-cover w-full h-full rounded-md"
          layout="fill"
        />
      </div>
      {/* Orta kısımdaki metin */}
      <div className="text-center text-black relative z-10 w-1121 mx-auto">
        <h1 className="text-4xl font-bold font-mono text-3xl">
          Let’s create something <br className="md:hidden" /> great together.
        </h1>
      </div>
      {/* Alt kısımda iki resim */}
      <div className="flex justify-center mt-8 absolute bottom-0">
        <Image
          src="/Hands.png"
          alt="Resim 1"
          className="w-1/2 rounded-md"
          width={250} // Genişlik değerini ihtiyaca göre ayarlayın
          height={150} // Yükseklik değerini ihtiyaca göre ayarlayın
          objectFit="cover" // Resmi sığdırma modu
          objectPosition="bottom center" // Resmin konumu
        />
        <Image
          src="/Hands-2.png"
          alt="Resim 2"
          className="w-1/2 rounded-md"
          width={250} // Genişlik değerini ihtiyaca göre ayarlayın
          height={150} // Yükseklik değerini ihtiyaca göre ayarlayın
          objectFit="cover" // Resmi sığdırma modu
          objectPosition="bottom center" // Resmin konumu
        />
      </div>
    </div>
  );
};

export default Hero;
