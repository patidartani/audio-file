import React from 'react';

const Playlist = ({ files, onFileSelect, currentFileIndex }) => {
  return (
    <div className='Playlist'>
      <h2>Playlist</h2>
      <ul>
        {files.map((file, index) => (
          <li
            key={index}
            onClick={() => onFileSelect(file)}
            className={index === currentFileIndex ? 'playing' : ''}
            style={{ cursor: "pointer" }}
          >
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;