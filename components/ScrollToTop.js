import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// https://dev.to/prnvbirajdar/react-hooks-component-to-smooth-scroll-to-the-top-35fd

export const ScrollToTop = (props) => {
  const { visibilityOffset } = props;
  const [ isVisible, setIsVisible ] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > visibilityOffset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [ visibilityOffset ]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '10px',
        right: '6px',
        color: '#434B95',
        fontSize: '60px',
        fontWeight: 'bold',
      }}
    >
      {isVisible && (
        <div onClick={scrollToTop} className="pointer">
          <p>&#8593;</p>
        </div>
      )}
    </div>
  );
};

ScrollToTop.defaultProps = {
  visibilityOffset: 500,
};

ScrollToTop.propTypes = {
  visibilityOffset: PropTypes.number,
};
