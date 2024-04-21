'use client'
import React, { useState } from 'react';
import axios from 'axios';

const IndexPage: React.FC = () => {
  const [url, setUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleDownload = async () => {
    try {
      const response = await axios.get(`https://api.instagram.com/oembed/?url=${url}`);
      const videoUrl = response.data.thumbnail_url.replace('s150x150', 's1080x1080');
      setVideoUrl(videoUrl);
    } catch (error) {
      console.error('Error downloading video:', error);
    }
  };

  return (
    <div>
      <h1>Instagram Video Downloader</h1>
      <input type="text" placeholder="Enter Instagram video URL" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={handleDownload}>Download</button>
      {videoUrl && <video src={videoUrl} controls />}
    </div>
  );
};

export default IndexPage;
