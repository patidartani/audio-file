import React, { useState, useEffect } from 'react';
import FileUpload from './components/FileUpload';
import AudioPlayer from './components/AudioPlayer';
import Playlist from './components/Playlist';
import "./App.css"

const App = () => {
  const [files, setFiles] = useState([]);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);

  useEffect(() => {
    const storedIndex = localStorage.getItem('currentFileIndex');
    if (storedIndex) {
      setCurrentFileIndex(parseInt(storedIndex));
    }
  }, []);

  const handleFileChange = (file) => {
    setFiles([...files, file]);
  };

  const handleFileSelect = (file) => {
    const newIndex = files.indexOf(file);
    setCurrentFileIndex(newIndex);
    localStorage.setItem('currentFileIndex', newIndex);
  };

  const handleAudioEnded = () => {
    if (currentFileIndex < files.length - 1) {
      setCurrentFileIndex(currentFileIndex + 1);
      localStorage.setItem('currentFileIndex', currentFileIndex + 1);
    }
  };

  return (
    <div className='Main'>
    <h1>Audio Player App</h1>
    <FileUpload onFileChange={handleFileChange} />
    <AudioPlayer
      src={files[currentFileIndex]}
      onEnded={handleAudioEnded}
    />
    <Playlist files={files} onFileSelect={handleFileSelect} currentFileIndex={currentFileIndex} />
  </div>
  );
};

export default App;