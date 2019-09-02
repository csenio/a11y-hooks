import React from 'react';

const useDetectKeyboard = (className?: string): boolean => {
  const [isTabbed, setIsTabbed] = React.useState(false);

  React.useEffect(() => {
    function handleFirstTab(e: KeyboardEvent) {
      if (e.keyCode === 9) {
        setIsTabbed(true);
        document.body.classList.add(className || 'user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
      }
    }

    window.addEventListener('keydown', handleFirstTab);
    return () => window.removeEventListener('keydown', handleFirstTab);
  }, []);

  return isTabbed;
};

export default useDetectKeyboard;
