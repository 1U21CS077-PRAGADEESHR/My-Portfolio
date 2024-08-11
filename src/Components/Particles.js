import React, { useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesComponent = (props) => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => ({
    background: {
      color: {
        value: '', // Remove background color
      },
    },
    fpsLimit: 120,
    detectRetina: true,
    duration: 0,
    fullScreen: {
      enable: true,
    },
    zIndex: 999, // Higher z-index to ensure particles appear on top
    particles: {
      number: {
        value: 100, // Number of particles to display
      },
      color: {
        value: '#ffffff', // Particle color
      },
      shape: {
        type: 'circle', // Particle shape
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: {
          min: 1,
          max: 5,
        },
        random: true,
      },
      move: {
        enable: true,
        speed: 0.5,
      },
    },
  }), []);

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
