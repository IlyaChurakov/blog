import { classNames } from "shared/lib/classNames/classNames";

describe('classNames', () => {
  test('class', () => {
    expect(classNames("someClass")).toBe("someClass");
  })

  test('class + additional', () => {
    const expected = "someClass class1 class2"
    expect(classNames("someClass", {}, ['class1', 'class2'])).toBe(expected);
  })

  test('class + mods + additional', () => {
    const expected = "someClass class1 class2 test"
    expect(classNames("someClass", {test: true, fdfdf: undefined}, ['class1', 'class2'])).toBe(expected);
  })

  test('class + mods + additional, mods values can be undefined', () => {
    const expected = "someClass class1 class2 test"
    expect(classNames("someClass", {test: true, fdfdf: undefined}, ['class1', 'class2'])).toBe(expected);
  })
})