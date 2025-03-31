import { $api } from '@/shared/api/api';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EditableProfileCard } from './EditableProfileCard';
import { profileReducer } from '../../model/slice/profileSlice';

describe('editableProfileCard', () => {
  test('Кнопки Сохранить и Отменить появляются при редактировании, кнопка Редактировать возвращается при отмене редактирования', async () => {
    componentRender(<EditableProfileCard id="1" />, {
      initialState: {
        profile: {
          readonly: true,
          data: { id: '1' },
        },
        user: {
          authData: { id: '1' },
        },
      },
      asyncReducers: {
        profile: profileReducer,
      },
    });

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    );

    expect(
      screen.getByTestId('EditableProfileCardHeader.SaveButton'),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('EditableProfileCardHeader.CancelButton'),
    ).toBeInTheDocument();
  });

  test('Кнопка Редактировать возвращается при отмене редактирования', async () => {
    componentRender(<EditableProfileCard id="1" />, {
      initialState: {
        profile: {
          readonly: false,
          data: { id: '1' },
        },
        user: {
          authData: { id: '1' },
        },
      },
      asyncReducers: {
        profile: profileReducer,
      },
    });

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.CancelButton'),
    );

    expect(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    ).toBeInTheDocument();
  });

  test('Если ошибок валидации нет, то на сервер должен уйти PUT запрос', async () => {
    const mockPutReq = jest.spyOn($api, 'put');

    componentRender(<EditableProfileCard id="1" />, {
      initialState: {
        profile: {
          readonly: false,
          data: { id: '1', name: 'John', surname: 'Doe', age: 32 },
          form: { name: 'Jackson', surname: 'Smith', age: 34 },
        },
        user: {
          authData: { id: '1' },
        },
      },
      asyncReducers: {
        profile: profileReducer,
      },
    });

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton'),
    );

    expect(mockPutReq).toHaveBeenCalled();
  });

  test('Значения обнуляются при отмене редактирования', async () => {
    componentRender(<EditableProfileCard id="1" />, {
      initialState: {
        profile: {
          readonly: false,
          data: { id: '1', name: 'John' },
          form: { id: '1', name: 'Jackson' },
        },
        user: {
          authData: { id: '1' },
        },
      },
      asyncReducers: {
        profile: profileReducer,
      },
    });

    expect(screen.getByTestId('EditableProfileCard.Name')).toHaveValue(
      'Jackson',
    );

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.CancelButton'),
    );

    expect(screen.getByTestId('EditableProfileCard.Name')).toHaveValue('John');
  });

  test('Ошибка при сохранении', async () => {
    componentRender(<EditableProfileCard id="1" />, {
      initialState: {
        profile: {
          readonly: true,
          data: { id: '1', name: 'John' },
        },
        user: {
          authData: { id: '1' },
        },
      },
      asyncReducers: {
        profile: profileReducer,
      },
    });

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    );

    await userEvent.clear(screen.getByTestId('EditableProfileCard.Name'));

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton'),
    );

    expect(screen.getByTestId('EditableProfileCard.Error')).toBeInTheDocument();
  });

  test('Пользователь не может редактировать чужую новость', async () => {
    componentRender(<EditableProfileCard id="1" />, {
      initialState: {
        profile: {
          readonly: true,
          data: { id: '1' },
        },
        user: {
          authData: { id: '2' },
        },
      },
      asyncReducers: {
        profile: profileReducer,
      },
    });

    expect(
      screen.queryByTestId('EditableProfileCardHeader.EditButton'),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId('EditableProfileCardHeader.SaveButton'),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId('EditableProfileCardHeader.CancelButton'),
    ).not.toBeInTheDocument();
  });
});
