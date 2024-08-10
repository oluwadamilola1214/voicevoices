// src/components/SoundComponent.jsx
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const SoundComponent = ({ symbol }) => {
  const playSound = () => {
    const audio = new Audio(`/sounds/${symbol}.mp3`);
    audio.play().catch(error => {
      console.error(`Error playing sound for ${symbol}:`, error);
    });
  };

  useEffect(() => {
    playSound();
  }, [symbol]);

  return <p></p>;
};

SoundComponent.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default SoundComponent;








