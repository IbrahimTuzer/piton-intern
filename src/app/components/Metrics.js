import React from 'react';

const MetricItem = ({ metric, description }) => {
  return (
    <div className="w-238 h-134 mx-4 my-4 bg-black text-white p-4 flex flex-col justify-between">
      <p className="text-yellow-500 text-6xl mb-4">{metric}</p>
      <p className="text-,">{description}</p>
    </div>
  );
};

const Metrics = () => {
  return (
    <div className="w-full h-248 bg-black flex justify-between p-8">
      <MetricItem metric="350 +" description="Clients Worldwide" />
      <MetricItem metric="20 +" description="Team Members" />
      <MetricItem metric="100 +" description="Projects Completed" />
      <MetricItem metric="85M +" description="Revenue Generated" />
    </div>
  );
};

export default Metrics;
