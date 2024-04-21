'use client'
import React, { useState } from 'react';
import axios from 'axios';

const Thumbnail : React.FC = () => {
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
            setFormats(response.data.details.thumbnails);
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
              placeholder="Enter Video URL"
              value={videoUrl}
              onChange={handleVideoUrlChange}
              className="flex-1 w-full border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="Download-button md:m-2 my-2 w-full md:w-auto justify-center" onClick={handleDownload}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="20"
                viewBox="0 0 640 512"
              >
                <path
                  d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                  fill="white"
                ></path>
              </svg>
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
                src={Details.embed.iframeUrl}
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200 ">
                    <th className="border border-gray-300 px-4 py-2">Height</th>
                    <th className="border border-gray-300 px-4 py-2">Width</th>
                    <th className="border border-gray-300 px-4 py-2">Download</th>
                  </tr>
                </thead>
                <tbody className='text-center'>
                  {formats.map((format, index) => (
                    <tr key={index} className="border border-gray-300">
                      <td className="border border-gray-300 px-4 py-2 items-center">{format.height}</td>
                      <td className="border border-gray-300 px-4 py-2">{format.width}</td>
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

export default Thumbnail