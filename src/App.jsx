import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Header from './component/Header';
import Task from './component/Task';
import JourneyBoard from './component/JourneyBoard';


function App() {
  const ProjectData={
    title: "Technical Project Management",
    tasks: [
      {
        task_id: 18882,
        task_title: "Explore the world of management",
        task_description: "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
        assets: [
          {
            asset_id: 18883,
            asset_title: "Technical Project Management",
            asset_description: "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
            asset_content: "https://www.youtube.com/embed/TiMRwri1xJ8",
            asset_type: "display_asset",
            asset_content_type: "video"
          },
          {
            asset_id: 18884,
            asset_title: "Threadbuild",
            asset_description: "Watch the video and thread build, and jot out key threads while watching that video.",
            asset_content: " ",
            asset_type: "input_asset",
            asset_content_type: "threadbuilder"
          },
          {
            asset_id: 18885,
            asset_title: "Structure you pointers ",
            asset_description: "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
            asset_content: " ",
            asset_type: "input_asset",
            asset_content_type: "article"
          },
          {
            asset_id: 18886,
            asset_title: "4SA Method",
            asset_description: "To explore more read more",
            asset_content: "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
            asset_type: "display_asset",
            asset_content_type: "article"
          }
        ]
      }
    ]
  };
  return (
    <><div className="min-h-screen bg-gray-100">
      <Navbar/>
      <Header title={ProjectData.title} />
      <div className="container px-4 py-8 ">
        <Task task={ProjectData.tasks[0]} />
      </div>
    </div>
      
    </>
  )
}

export default App
