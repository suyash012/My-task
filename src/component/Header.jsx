import React, { useState } from 'react';
import rightArrow from '../assets/right.svg';
import JourneyBoard from './JourneyBoard';


function Header({ title }) {
  const [isexpand, setisexpand] = useState(false);

  const handleExpand = () => {
    setisexpand(!isexpand);
  };

  return (
    <header className="bg-gray-100 mx-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className={`absolute top-56 left-0 transform -translate-y-1/2 bg-white p-4 shadow-lg rounded-3xl flex flex-col items-center transition-all duration-500 ${
            isexpand ? 'w-96 h-auto' : 'w-20 h-72 overflow-hidden'
          }`}
        >
          <img src={rightArrow} alt="Right Arrow" className={`w-16 h-6 my-2  bg-black cursor-pointer transition-transform duration-500 ${isexpand ? 'rotate-180' : ''}`} onClick={handleExpand} />
          <button className="bg-blue-700 text-white p-4 rounded-full" onClick={handleExpand}>
            {isexpand ? 'Journey Board' : '1'}
          </button>
          {isexpand && (
            <div className="p-4">
              <ul className="space-y-2 list-disc">
                <li>Explore the world of management</li>
                <li>Technical Project Management</li>
                <li>ThreadBuild</li>
                <li>Structure your pointers</li>
                <li>4SA Method</li>
              </ul>
            </div>
          )}
        </div>

        <h1 className="text-2xl font-semibold text-blue-700">{title}</h1>

        <button className="bg-blue-700 text-white px-4 py-2 rounded">Submit task</button>

        <div className="absolute top-56 right-0 transform -translate-y-1/2 bg-white h-72 w-10 shadow-lg rounded-3xl flex flex-col justify-center items-center">
          <h1 className="rotate-90 text-center bg-black text-white px-2">NoticeBoard</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;