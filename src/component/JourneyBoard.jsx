import React from 'react';

function JourneyBoard({ tasks }) {
  return (
    <div className=" p-4">
      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.task_id} className="font-medium">{task.task_title}</li>
        ))}
        {tasks[0].assets.map(asset => (
          <li key={asset.asset_id} className="pl-4 text-gray-600">{asset.asset_title}</li>
        ))}
      </ul>
    </div>
  );
}

export default JourneyBoard;