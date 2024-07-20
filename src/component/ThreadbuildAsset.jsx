import React, { useState } from 'react';

function ThreadbuildAsset() {
  const [thread, setThread] = useState({ subThread1: '', subInterpretation1: '', summary: '' });

  const handleInputChange = (e) => {
    setThread({ ...thread, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4 p-4 rounded-lg shadow-lg bg-white">
      <h4 className="font-semibold border border-solid my-2 border-gray-300 bg-gray-100 px-4 py-2 rounded-t-lg">Thread A</h4>
      <div className="flex gap-3">
        <div>
        <label className="font-semibold border border-solid border-gray-300 bg-gray-100 px-4 py-2 rounded-t-lg">Sub thread 1</label>
        <input
          type="text"
          name="subThread1"
          placeholder="Enter Text here"
          value={thread.subThread1}
          onChange={handleInputChange}
          className="w-full h-20 p-2 border border-gray-300 rounded shadow-sm"
        />
        </div>
        <div>
        <label className="font-semibold border border-solid border-gray-300 bg-gray-100 px-4 py-2 rounded-t-lg">Sub Interpretation 1</label>
        <input
          type="text"
          name="subInterpretation1"
          placeholder="Enter Text here"
          value={thread.subInterpretation1}
          onChange={handleInputChange}
          className="w-full h-20 p-2 border border-gray-300 rounded shadow-sm"
        />
        </div>
      </div>
      <div className="flex space-x-2">
        <button className="bg-gray-200 px-3 py-1 rounded shadow-sm">Select Coding</button>
        <button className="bg-gray-200 px-3 py-1 rounded shadow-sm">Select Process</button>
      </div>
      <button className="bg-blue-700 text-white px-4 py-2 rounded shadow-sm">Sub Thread</button>
      <div>
      <label className="font-semibold border border-solid border-gray-300 bg-gray-100 px-4 py-2 rounded-t-lg">Summary for Thread A</label>
      <textarea
        name="summary"
        placeholder="Enter summary here"
        value={thread.summary}
        onChange={handleInputChange}
        rows={4}
        className="w-full p-2 border border-gray-300 rounded shadow-sm"
      ></textarea>
      </div>
    </div>
  );
}

export default ThreadbuildAsset;
