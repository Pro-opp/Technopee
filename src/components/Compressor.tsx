'use client'
import React, { useState } from 'react';
import Compressor from 'compressorjs'; // Import Compressor from 'compressorjs'

const ImageCompressor: React.FC = () => {
  const [originalImageUrl, setOriginalImageUrl] = useState<string | null>(null);
  const [compressedImageUrl, setCompressedImageUrl] = useState<string | null>(null);
  const [compressedImageSize, setCompressedImageSize] = useState<string | null>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const originalImageUrl = URL.createObjectURL(file);
      setOriginalImageUrl(originalImageUrl);

      try {
        new Compressor(file, {
          quality: 0.2,
          success(result) {
            const compressedImageUrl = URL.createObjectURL(result);
            setCompressedImageUrl(compressedImageUrl);

            // Calculate size of compressed image
            const fileSizeInMB = result.size / (1024 * 1024); // Convert to MB
            const formattedSize = fileSizeInMB.toFixed(2) + ' MB';
            setCompressedImageSize(formattedSize);

          },
          error(error) {
            console.error('Error compressing image:', error);
          },
        });
      } catch (error) {
        console.error('Error compressing image:', error);
      }
    }
  };

  const handleDownload = () => {
    if (compressedImageUrl) {
      const downloadLink = document.createElement('a');
      downloadLink.href = compressedImageUrl;
      downloadLink.download = 'compressed_image.jpg'; // Set the desired filename
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div className='py-5 flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
        <label className="custum-file-upload">
            <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
            </div>
            <div className="text">
            <span>Click to upload image</span>
            </div>
            <input type="file" id="file"  accept="image/*" onChange={handleFileChange}/>
        </label>
        <p className='text-center py-2 text-xl' >If Image is not Compressed Please Re-upload the Image.</p>
        </div>
        <div className='items-center justify-center'>
      {compressedImageUrl && (
        <div className='items-center justify-center flex flex-col'>
          <h2 className='text-2xl font-semibold py-3 text-center'>Compressed Image</h2>
          <img src={compressedImageUrl} alt="Compressed Image" style={{ maxWidth: '100%', maxHeight: '300px' }} />
          <p className="text-lg py-2">Size : {compressedImageSize}</p>
          <button className='Download-button my-3 items-center' onClick={handleDownload}>Download Compressed Image</button>
        </div>
      )}
      </div>
    </div>
  );
};

export default ImageCompressor;
