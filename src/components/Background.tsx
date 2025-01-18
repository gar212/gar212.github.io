import React, { useEffect, useState, useMemo } from 'react';

const Background: React.FC = () => {

  return (
    <div className='bg-[#20201f] h-screen w-screen z-0 fixed top-0'>
      <div className='noise'></div>
    </div>
  );
};


export default Background;
