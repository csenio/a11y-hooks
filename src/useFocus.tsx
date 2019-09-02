import * as React from 'react';

// useFocus
interface UseFocusOptions {
  shouldFocus?: boolean;
  ref?: any; //@todo type this
}

const useFocus = ({
  shouldFocus = true,
  ref: receivedRef,
}: UseFocusOptions) => {
  const createdRef = React.useRef<HTMLElement>(null);

  const ref = receivedRef || createdRef;

  React.useEffect(() => {
    if (shouldFocus && ref && ref.current) {
      ref.current.focus();
    }
  }, [shouldFocus]);

  return { ref };
};

export default useFocus;
