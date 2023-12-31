import React from 'react';
import Image from 'next/image';

const Info = () => {
  return (
    <div className="mx-auto w-4/5 h-219">
      <h2 className="text-4xl font-bold mb-4">Who Are We?</h2>
      <p className="text-2xl">
        We love what we do and create partnerships with our clients to ensure their digital
        transformation is positioned for long-term success. We believe that the human dimensions
        are essential to start any successful project and that this is where splendid emotional
        relationships between the company and people are born.
      </p>
      <div className="mt-8">
        <Image
          src="/Mid Image.png"
          alt="Mid Image"
          width={1522}
          height={219}
          className="mt-32"
        />
      </div>
    </div>
  );
};

export default Info;
