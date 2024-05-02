'use client'
import { useState } from "react";

function Tiktok() {
    const [videoUrl, setVideoUrl] = useState('');

    const handleVideoUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVideoUrl(e.target.value);
      };


  return (
    <div className=" md:flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Enter YouTube Video URL"
            value={videoUrl}
            onChange={handleVideoUrlChange}
            className="flex-1 w-full border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="Download-button md:m-2 my-2 w-full md:w-auto justify-center">
            
            <span>Download</span>
          </button>

        </div>
  )
}

export default Tiktok