'use client'
import React, { useState } from 'react';
import axios from 'axios';

function Audio() {
  const [videoUrl, setVideoUrl] = useState('');
  const [formats, setFormats] = useState<any[]>([]);
  const [show , setshow] = useState(false)
  const [Details , setdetails] = useState<any>('');
  const [loading , setloading] = useState(false);

  const handleVideoUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(e.target.value);
  };

  const handleDownload = async () => {
    setshow(false);
    setloading(true)
    try {
      const response = await axios.get(`/api/youtube-data?url=${videoUrl}`);
      setFormats(response.data.audio);
      setdetails(response.data.details)
      setshow(true)
      setloading(false)
    } catch (error) {
      console.error('Error downloading video:', error);
    }
  };
  return (
    <div className="flex justify-center items-center w-full mb-4">
      <div className="w-full md:w-4/5 md:p-6 px-2 py-4 bg-white shadow-lg rounded-md ">
        <div className=" md:flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Enter YouTube Video URL"
            value={videoUrl}
            onChange={handleVideoUrlChange}
            className="flex-1 w-full border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="Download-button md:m-2 my-2 w-full md:w-auto justify-center" onClick={handleDownload}>
            
            <span>Download</span>
          </button>

        </div>
        {
          loading == true ? 
          <section className="dots-container py-10">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          </section>: <div>
          {show == true &&(
          <div>
            <h2 className="text-xl font-bold mb-4">{Details.title}</h2>
            <div className="mb-4">
              <iframe
                width="100%"
                height="400"
                src={Details.embed.iframeUrl || ''}
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200 ">
                    <th className="border border-gray-300 px-4 py-2">Quality</th>
                    <th className="border border-gray-300 px-4 py-2">Type</th>
                    <th className="border border-gray-300 px-4 py-2">Download</th>
                  </tr>
                </thead>
                <tbody className='text-center'>
                  {formats.map((format, index) => (
                    <tr key={index} className="border border-gray-300">
                      <td className="border border-gray-300 px-4 py-2 text-sm">{(format.audioQuality).slice(14,20)}</td>
                      <td className="border border-gray-300 px-4 py-2">{format.container}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <a
                          href={format.url}
                          target='_blank'
                          className="text-indigo-500 hover:text-indigo-700"
                        >
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        </div>
        
        }
        
      </div>
    </div>
  )
}

export default Audio