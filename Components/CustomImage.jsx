import React, { useState, useEffect } from 'react';
import { useMemo } from 'react'; // for optimized image source
import Image from 'next/image';

const CustomerImage = ({ register, setValue, name, value }) => {
  const [selectedImage, setSelectedImage] = useState(value);

  useEffect(() => {
    if (value) {
      setSelectedImage(value);
    }
  }, [value]);

  const handleImageChange = (event) => {
    const file = event?.target?.files[0];
    setValue(name, file); // Set the file value to the form state
    if (!file) return;
    setSelectedImage(URL?.createObjectURL(file));
  };

  const imageSource = useMemo(() => (selectedImage || '/user-logo.png'), [selectedImage]);

  return (
    <div className="w-28 h-28 rounded-full cursor-pointer flex justify-center items-center" onClick={() => document?.getElementById('input-field')?.click()}>
      <input 
        type="file" 
        accept="image/*" 
        id="input-field" 
        hidden 
        onChange={handleImageChange} 
        {...register(name)} // Register the file input with react-hook-form
      />
      <Image
        src={imageSource}
        width={120}
        height={120}
        alt="Customer Image"
        className='w-28 h-28 rounded-full'
      />
    </div>
  );
};

export default CustomerImage;
