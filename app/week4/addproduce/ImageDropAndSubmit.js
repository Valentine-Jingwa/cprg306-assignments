import React, { useState } from 'react';

const ImageDropAndSubmit = () => {
  const [imageFile, setImageFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length === 1) {
      const file = files[0];
      setImageFile(file);
    }
  };

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // Handle successful upload. Add stuff here
    } else {
      // Handle error. Error message in response.statusText
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        style={{
            borderWidth: '0.5px',
            borderStyle: isDragging ? 'solid' : 'dotted',
            borderColor: isDragging ? 'green' : 'black',
            backgroundImage: isDragging ? 'none' : `radial-gradient(black 1px, transparent 1px), radial-gradient(black 1px, transparent 1px)`,
            backgroundSize: `16px 16px`,
            backgroundPosition: `0 0, 8px 8px`
          }}
        className='w-64 h-64 rounded-lg bg-blue-100 border-2 border-dashed flex items-center justify-center'
      >
        Drop your image here
      </div>
      {imageFile && <img src={URL.createObjectURL(imageFile)} alt="Preview" />}
      <button onClick={onSubmit} className="bg-blue-500 text-white p-2 rounded mt-4">
        Submit
        </button>
    </div>
  );
};

export default ImageDropAndSubmit;
