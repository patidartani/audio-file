import React, { useRef, useEffect } from 'react';

const AudioPlayer = ({ src, onEnded }) => {
  const audioRef = useRef();

  useEffect(() => {
    const currentAudioRef = audioRef.current;

    const handleEnded = () => {
      onEnded();
    };

    currentAudioRef.addEventListener('ended', handleEnded);

    return () => {
      currentAudioRef.removeEventListener('ended', handleEnded);
    };
  }, [onEnded]);

  useEffect(() => {
    const currentAudioRef = audioRef.current;

    if (src) {
      currentAudioRef.src = URL.createObjectURL(src);
      currentAudioRef.play();
    }

    return () => {
      currentAudioRef.pause(); 
    };
  }, [src]);

  return (
    <audio ref={audioRef} controls />
  );
};

export default AudioPlayer;
