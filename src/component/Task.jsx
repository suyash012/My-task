import React from 'react';
import AssetContainer from './AssetContainer';

function Task({ task }) {
  return (
    <div className="w-3/4 pr-8 mx-52 ">
      <div className='bg-gray-300 py-2 px-4 rounded-lg'>
      <h2 className="text-2xl font-semibold mb-4 ">{task.task_title}</h2>
      <p className="mb-6 ">{task.task_description}</p>
      </div>
      <div className="grid grid-cols-2 gap-6 my-2 ">
        {task.assets.map(asset => (
          <AssetContainer key={asset.asset_id} asset={asset} />
        ))}
      </div>
    </div>
  );
}

export default Task;