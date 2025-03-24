import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { Star } from 'lucide-react';
import styles from './StarRating.module.scss';

interface StarRatingProps {
  className?: string;
  onSelect?: (number: number) => void;
  size?: number;
  selected?: number;
  disable?: boolean;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo(
  ({
    className,
    size = 40,
    selected = 0,
    onSelect,
    disable,
  }: StarRatingProps) => {
    const [hover, setHover] = useState(0);

    return (
      <div className={classNames(styles.StarRating, {}, [className])}>
        {stars.map((s) => (
          <Star
            key={s}
            size={size}
            onClick={!disable ? () => onSelect?.(s) : undefined}
            onMouseEnter={!disable ? () => setHover(s) : undefined}
            onMouseLeave={() => setHover(0)}
            className={classNames(styles.star, {
              [styles.active]: s <= selected || s <= hover,
              [styles.disable]: disable,
            })}
          />
        ))}
      </div>
    );
  },
);
