import {
  HTMLAttributes,
  memo,
  MutableRefObject,
  ReactNode,
  UIEvent,
  useEffect,
  useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { StateSchema } from 'app/providers/storeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle';
import styles from './Page.module.scss';
import { getScrollByPage } from '../model/selectors/scroll';
import { scrollActions } from '../model/slices/scrollSlice';

interface PageProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(
  ({ className, children, onScrollEnd, ...props }: PageProps) => {
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();
    const scroll = useSelector((state: StateSchema) =>
      getScrollByPage(state, pathname),
    );

    const wrapperRef = useRef<HTMLDivElement>(
      null,
    ) as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef<HTMLDivElement>(
      null,
    ) as MutableRefObject<HTMLDivElement>;

    useInitialEffect(() => {
      wrapperRef.current.scrollTop = scroll;
    });

    useInfiniteScroll({
      wrapperRef,
      triggerRef,
      callback: onScrollEnd,
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
      dispatch(
        scrollActions.setScroll({
          page: pathname,
          scroll: e.currentTarget.scrollTop,
        }),
      );
    }, 500);

    return (
      <section
        ref={wrapperRef}
        className={classNames(styles.Page, {}, [className])}
        {...props}
        onScroll={onScroll}
      >
        {children}
        {!!onScrollEnd && <div className={styles.trigger} ref={triggerRef} />}
      </section>
    );
  },
);
