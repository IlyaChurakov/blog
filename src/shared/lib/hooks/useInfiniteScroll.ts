import { MutableRefObject, useEffect } from 'react';

export const useInfiniteScroll = ({
  callback,
  triggerRef,
  wrapperRef,
}: {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}) => {
  useEffect(() => {
    let observer: IntersectionObserver;

    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      if (observer && triggerElement) observer.unobserve(triggerElement);
    };
  }, [triggerRef, wrapperRef]);
};
