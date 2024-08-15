import { useEffect } from 'react';

const useScrollToTop = () => {
  useEffect(() => {
    document.querySelector('header')?.scrollIntoView();
  }, []);

  return null;
};

export default useScrollToTop;
