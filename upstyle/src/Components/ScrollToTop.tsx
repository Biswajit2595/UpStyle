import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState<boolean>(false);
  const up = <FontAwesomeIcon bounce size="sm" icon={faAngleDoubleUp} />

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 100 });
  };

  return (
    <div className={`scroll-to-top ${showButton ? 'show' : ''}`} onClick={scrollToTop}>
        <div className="scroll-icon">{up}</div>
      </div>
  );
};

export default ScrollToTop;
