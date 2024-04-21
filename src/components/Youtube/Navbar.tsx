'use client'
import React , {useState} from 'react'
import VideoDownloader from './Youtube-downloader'
import Thumbnail from './Thumbnail'
import Audio from './Audio'

function Navbar() {
    const [activeComponent, setActiveComponent] = useState('YoutubeVideoDwonloader');
    const renderComponent = () => {
        switch (activeComponent) {
          case 'YoutubeThumbnailDownloader':
            return <Thumbnail />;
            case 'YoutubeVideoDwonloader':
              return <VideoDownloader/>;
              case 'Audio':
                return <Audio/>
        }
      };
  return (
    <div className='w-full items-center justify-center'>
    <nav className="bg-gray-800 p-4 flex justify-between items-center text-white rounded-md">
        <div>
          <button className={`mr-4 my-1 p-2  rounded-lg ${activeComponent === 'YoutubeVideoDwonloader' ? 'bg-gray-400' : ''}`} onClick={() => setActiveComponent('YoutubeVideoDwonloader')}>
            <span className="mr-2">📹</span>
            Video Downloader
          </button>
          <button className={`mr-4 my-1 p-2  rounded-lg ${activeComponent === 'Audio' ? 'bg-gray-400 ' : ''}`} onClick={() => setActiveComponent('Audio')}>
            <span className="mr-2">📺</span>
            Audio Downloader
          </button>
          <button className={`mr-4 my-1  p-2  rounded-lg ${activeComponent === 'YoutubeThumbnailDownloader' ? 'bg-gray-400' : ''}`} onClick={() => setActiveComponent('YoutubeThumbnailDownloader')}>
            <span className="mr-2">🖼️</span>
            Thumbnail Downloader
          </button>
        </div>
      </nav>
      <div className="container mx-auto pt-10">
        {renderComponent()}
      </div>
    </div>  
  )
}

export default Navbar