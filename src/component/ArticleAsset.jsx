import React from 'react';

function ArticleAsset() {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-white space-y-4">
      <h4 className="font-semibold border border-solid border-gray-300 bg-gray-100 px-4 py-2 rounded-t-lg">Structure your Pointers</h4>
      <div className="px-4 space-y-2">
        <label className="block text-gray-700 font-bold">Title</label>
        <input type="text" placeholder="Title" className="w-full p-2 border border-gray-300 rounded shadow-sm" />
      </div>
      <div className="px-4 space-y-2">
        <label className="block text-gray-700 font-bold">Content</label>
        <div className="border rounded p-2 shadow-sm">
          <textarea rows={10} placeholder="Enter your content here" className="w-full p-2 border border-gray-300 rounded"></textarea>
        </div>
      </div>
    </div>
  );
}

export default ArticleAsset;
