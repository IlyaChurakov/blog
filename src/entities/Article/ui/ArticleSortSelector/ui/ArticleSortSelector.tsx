import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { SortOrder } from 'shared/types';
import { Select, SelectOption } from 'shared/ui/select/Select';
import styles from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '../../../model/consts/consts';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeSort: (value: ArticleSortField) => void;
  onChangeOrder: (value: SortOrder) => void;
}

export const ArticleSortSelector = memo(
  ({
    className,
    sort,
    order,
    onChangeSort,
    onChangeOrder,
  }: ArticleSortSelectorProps) => {
    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
      () => [
        {
          value: 'asc',
          content: 'По возрастанию',
        },
        {
          value: 'desc',
          content: 'По убыванию',
        },
      ],
      [],
    );

    const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(
      () => [
        {
          value: ArticleSortField.CREATED,
          content: 'Дата создания',
        },
        {
          value: ArticleSortField.TITLE,
          content: 'Название',
        },
        {
          value: ArticleSortField.VIEWS,
          content: 'Популярность',
        },
      ],
      [],
    );

    return (
      <div className={classNames(styles.ArticleSortSelector, {}, [className])}>
        <Select
          value={order}
          onChange={onChangeOrder}
          placeholder="Порядок"
          options={orderOptions}
        />
        <Select
          value={sort}
          onChange={onChangeSort}
          placeholder="Поле"
          options={sortOptions}
        />
      </div>
    );
  },
);
