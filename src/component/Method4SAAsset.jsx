import React, { useState } from 'react';

function Method4SAAsset() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h4 className="font-semibold border-b border-solid border-gray-300 pb-2 mb-4">4SA Method</h4>
      <p className="text-gray-700 mb-4">
        <strong>Description:</strong> To explore more read more
      </p>
      <div className="space-y-4">
        <div>
          <button
            onClick={() => toggleSection('introduction')}
            className="flex items-center text-blue-700 focus:outline-none font-semibold border border-solid border-gray-300 bg-gray-100 px-4 py-2 rounded-t-lg"
          >
            <span className={`transform ${expandedSection === 'introduction' ? 'rotate-90' : ''} transition-transform`}>▶</span>
            <span className="ml-1 font-semibold">Introduction</span>
          </button>
          {expandedSection === 'introduction' && (
            <p className="mt-2 text-gray-700">The 4SA Method: How to bring an idea into process?</p>
          )}
        </div>
        <div>
          <button
            onClick={() => toggleSection('threadA')}
            className="flex items-center text-blue-700 focus:outline-none font-semibold border border-solid border-gray-300 bg-gray-100 px-4 py-2 rounded-t-lg"
          >
            <span className={`transform ${expandedSection === 'threadA' ? 'rotate-90' : ''} transition-transform`}>▶</span>
            <span className="ml-1 font-semibold">Thread A</span>
          </button>
          {expandedSection === 'threadA' && (
            <p className="mt-2 text-gray-700">
              How are you going to develop your strategy? Which method are you going to use to develop a strategy? What if the project is lengthy?
            </p>
          )}
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h4 className="font-semibold">Example 1</h4>
          <p className="text-gray-700">You have a concept; how will you put it into progress?</p>
        </div>
      </div>
    </div>
  );
}

export default Method4SAAsset;
