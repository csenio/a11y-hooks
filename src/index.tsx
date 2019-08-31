import * as React from 'react';

// useFocus
export const useFocus = (isOpen: boolean = true) => {
  const ref = React.useRef<HTMLElement>();

  React.useEffect(() => {
    if (isOpen && ref && ref.current) {
      ref.current.focus();
    }
  }, [isOpen]);

  return { ref };
};
