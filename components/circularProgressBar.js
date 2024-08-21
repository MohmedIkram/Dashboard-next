import React from 'react';

const SemiCircularProgressBar = ({ percentage, color }) => {
  const radius = 20; // Radius of the circle
  const circumference = Math.PI * radius; // Half of the circumference for semi-circle
  const progress = percentage / 100 * circumference; // Progress in terms of stroke-dashoffset

  return (
    <div className="flex items-center justify-center relative">
      <svg
        className="w-32 h-16 transform"
        viewBox="0 0 50 25"
      >
        <path
          d="
            M 25, 25
            m -20, 0
            a 20,20 0 1,1 40,0
          "
          fill="transparent"
          stroke="gray"
          strokeWidth="5"
          strokeDasharray={circumference}
          className="opacity-30"
        />
        <path
          d="
            M 25, 25
            m -20, 0
            a 20,20 0 1,1 40,0
          "
          fill="transparent"
          stroke={color}
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          className="transition-all duration-300"
        />
      </svg>
      <div className="absolute top-0 left-0 right-0 text-center mt-2 text-lg font-semibold">
        {`${percentage}%`}
        <div className="text-sm font-normal">Availed</div>
      </div>
    </div>
  );
};

export default SemiCircularProgressBar;
