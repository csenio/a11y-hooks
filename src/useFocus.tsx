import React from 'react';

// useFocus
interface UseFocusOptions {
  shouldFocus?: boolean;
  ref?: React.RefObject<HTMLElement>;
}

const useFocus = (
  options: UseFocusOptions
): { ref: React.RefObject<HTMLElement> } | undefined => {
  const createdRef = React.useRef<HTMLElement>(null);

  const optionObject = options || {};
  const { shouldFocus = true, ref: receivedRef } = optionObject;

  const ref = receivedRef || createdRef;

  React.useEffect(() => {
    if (shouldFocus && ref && ref.current) {
      ref.current.focus();
    }
  }, [shouldFocus]);

  return receivedRef ? undefined : { ref };
};

export default useFocus;
