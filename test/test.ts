import {AtoN, NtoA, AtoA} from '../src'

describe('Convert from alphabet to number.', () => {
  test('Convert a to 1.', () => {
    expect(AtoN('a')).toBe(1)
  })
  test('Convert b to 3 with one shift.', () => {
    expect(AtoN('B', 1)).toBe(3)
  })
})

describe('Convert from numbers to alphabets.', () => {
  test('Convert 1 to a.', () => {
    expect(NtoA(1)).toBe('a')
  })
  test('Convert 2 to c with one shift.', () => {
    expect(NtoA(2, 1)).toBe('c')
  })
})

describe('Shifts the alphabet by the specified amount.', () => {
  test('Convert a to b shifted by one.', () => {
    expect(AtoA('a', 1)).toBe('b')
  })
  test('Convert b to d shifted by two.', () => {
    expect(AtoA('B', 2)).toBe('D')
  })
})
