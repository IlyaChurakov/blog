import { getQueryParams } from './getQueryParams';

describe('addQueryParams', () => {
  test('one param', () => {
    window.history.pushState(null, '', `?test=value`);

    const params = getQueryParams();

    expect(params).toEqual({ test: 'value' });
  });

  test('with multiple params', () => {
    window.history.pushState(null, '', `?test=value&test2=value2`);

    const params = getQueryParams();

    expect(params).toEqual({ test: 'value', test2: 'value2' });
  });

  test('with undefined', () => {
    window.history.pushState(null, '', `?test=`);

    const params = getQueryParams();

    expect(params).toEqual({ test: '' });
  });
});
