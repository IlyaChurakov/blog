import { createQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  test('one param', () => {
    const params = createQueryParams({ test: 'testValue' });

    expect(params).toBe('?test=testValue');
  });

  test('with multiple params', () => {
    const params = createQueryParams({ test: 'testValue', more: 'moreValue' });

    expect(params).toBe('?test=testValue&more=moreValue');
  });

  test('with undefined', () => {
    const params = createQueryParams({ more: undefined });

    expect(params).toBe('?');
  });
});
