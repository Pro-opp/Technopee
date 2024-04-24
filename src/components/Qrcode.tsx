'use client'

import { useState } from 'react';
import QRCode from 'qrcode';

const QRCodeGenerator: React.FC = () => {
    const [text, setText] = useState('');
    const [qrCodeDataUrl, setQRCodeDataUrl] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');
    const [foregroundColor, setForegroundColor] = useState('#000000');

  const generateQRCode = async () => {
    
    try {
      const dataUrl = await QRCode.toDataURL(text);
      setQRCodeDataUrl(dataUrl);
      setText('')
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  const downloadQRCode = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = qrCodeDataUrl;
    downloadLink.download = 'QRCode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex justify-center items-center w-full mb-4">
      <div className="w-full md:w-4/5 md:p-6 px-2 py-4 bg-white shadow-lg rounded-md ">
        <div className=" md:flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Enter Your Text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 w-full border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="Download-button md:m-2 my-2 w-full md:w-auto justify-center" onClick={generateQRCode}>
            
            <span>Generate</span>
          </button>
        </div>
        <div className='flex'>
        <div className="mb-4 mx-2">
            <label htmlFor="backgroundColor" className="mr-2">Background Color:</label>
            <input
              type="color"
              id="backgroundColor"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="foregroundColor" className="mr-2">Foreground Color:</label>
            <input
              type="color"
              id="foregroundColor"
              value={foregroundColor}
              onChange={(e) => setForegroundColor(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div >
        <div className="flex justify-center items-center w-full">
        {qrCodeDataUrl && qrCodeDataUrl !== '' ?(
        <div>
          <img src={qrCodeDataUrl} alt="QR Code" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
          <button
              className="Download-button md:m-2 my-2 w-full md:w-auto justify-center"
              onClick={downloadQRCode}
            >
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
      ):
      ''
      }
      </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
