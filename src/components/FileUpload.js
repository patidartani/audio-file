import React from 'react';

const FileUpload = ({ onFileChange }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileChange(file);
  };

  return (
    <div className='inpt'>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;