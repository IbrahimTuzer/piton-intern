import React from 'react';
import Image from 'next/image';

const TeamMember = ({ src, alt, name, role }) => {
  return (
    <div className="mb-4 relative w-433 h-560">
      <div className="rounded-lg overflow-hidden w-373 h-376 mx-auto bg-ff shadow-lg p-4">
        <Image
          src={src}
          alt={alt}
          width={365} 
          height={368}
          
        />
        <div className="bg-ff p-4">
          <p className="font-bold mt-2">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div >
      <h2 className="text-4xl font-bold mb-8 text-center">Meet the Heroes Behind the Magic</h2>
      <div className="w-4/5 mx-auto">
        <div className="flex justify-around">
          <TeamMember
            src="/founder.png"
            alt="Founder"
            name="Esther Howard"
            role="Founder"
          />
          <TeamMember
            src="/developer.png"
            alt="Developer"
            name="Jane Smith"
            role="Developer"
          />
          <TeamMember
            src="/designer.png"
            alt="Designer"
            name="Brooklyn Simmons"
            role="Designer"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
