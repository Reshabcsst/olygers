import React, { useEffect } from 'react';
import Kinet from 'kinet';

const FloatingCircle = () => {
  useEffect(() => {
    const kinet = new Kinet({
      acceleration: 0.06,
      friction: 0.20,
      names: ['x', 'y'],
    });

    const circle = document.getElementById('circle');
    const header = document.querySelector('header'); // Adjust if your header selector is different

    kinet.on('tick', (instances) => {
      if (circle) {
        circle.style.transform = `translate3d(${instances.x.current}px, ${instances.y.current}px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${instances.y.velocity / 2}deg)`;
      }
    });

    const handleMouseMove = (event) => {
      if (circle) {
        kinet.animate('x', event.clientX - window.innerWidth / 2);
        kinet.animate('y', event.clientY - window.innerHeight / 2);
      }
    };

    // Hide the circle on header hover
    const handleHeaderMouseEnter = () => {
      if (circle) {
        circle.style.display = 'none';
      }
    };

    // Show the circle when the mouse leaves the header
    const handleHeaderMouseLeave = () => {
      if (circle) {
        circle.style.display = 'block';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    header?.addEventListener('mouseenter', handleHeaderMouseEnter);
    header?.addEventListener('mouseleave', handleHeaderMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      header?.removeEventListener('mouseenter', handleHeaderMouseEnter);
      header?.removeEventListener('mouseleave', handleHeaderMouseLeave);
      kinet.off('tick');
    };
  }, []);

  return <div id="circle" className="circle"></div>;
};

export default FloatingCircle;
