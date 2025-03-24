import React, {
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

interface UseModalProps {
  isOpen: boolean;
  onClose?: () => void;
  ANIMATION_DELAY?: number;
  lazy?: boolean;
}

export const useModal = ({
  isOpen,
  onClose,
  ANIMATION_DELAY = 300,
  lazy = false,
}: UseModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(lazy ? true : false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (!lazy) {
      if (isOpen) setIsMounted(true);

      return () => {
        setIsMounted(false);
      };
    }
  }, [isOpen]);

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const keydownHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    },
    [close],
  );

  useEffect(() => {
    if (isOpen) window.addEventListener('keydown', keydownHandler);

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', keydownHandler);
    };
  }, [isOpen, keydownHandler]);

  return { isClosing, isMounted, close };
};
