import { counterActions, counterReducer } from "./CounterSlice"
import { CounterSchema } from "../types/CounterSchema"

describe('counterSlice', () => {
  test('increment', () => {
    const state: CounterSchema = {
      value: 0
    }
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 1 })
  })
  test('decrement', () => {
    const state: CounterSchema = {
      value: 0
    }
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: -1 })
  })
  test('empty state', () => {
    expect(counterReducer(undefined, counterActions.decrement())).toEqual({ value: -1 })
  })
})