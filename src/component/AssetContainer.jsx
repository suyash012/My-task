import React, { useState } from 'react';
import VideoAsset from './VideoAsset';
import ThreadbuildAsset from './ThreadbuildAsset';
import ArticleAsset from './ArticleAsset';
import Method4SAAsset from './Method4SAAsset';

function AssetContainer({ asset }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => setIsExpanded(!isExpanded);

  const renderAssetContent = () => {
    switch (asset.asset_content_type) {
      case 'video':
        return <VideoAsset src={asset.asset_content} />;
      case 'threadbuilder':
        return <ThreadbuildAsset />;
      case 'article':
        if (asset.asset_title === "4SA Method") {
          return <Method4SAAsset content={asset.asset_content} />;
        }
        return <ArticleAsset />;
      default:
        return <p>Unsupported asset type</p>;
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-4">
      <div>
      <h3 className="text-xl font-semibold mb-2 text-center bg-black text-white">{asset.asset_title}</h3>
      </div>
      <button
        onClick={toggleDescription}
        className="flex items-center text-blue-700 mb-2  font-semibold border border-solid border-gray-300 bg-gray-100 px-4 py-2 rounded-t-lg"
      >
        <span className={`transform ${isExpanded ? 'rotate-90' : ''} transition-transform`}>▶</span>
        <span className="ml-1 ">Description</span>
      </button>
      {isExpanded && <p className="mb-4 text-gray-600">{asset.asset_description}</p>}
      {renderAssetContent()}
    </div>
  );
}
export default AssetContainer;