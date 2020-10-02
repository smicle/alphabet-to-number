/**
 * Convert from alphabet to number.
 * Specify the number to shift to the second argument (default is 0)
 * @param A alphabet
 * @param n shift number
 * @return converted number
 */
export const AtoN = (A: string, n: number = 0): number => A.toLowerCase().charCodeAt(0) - 96 + n

/**
 * Convert from numbers to alphabets.
 * Specify the number to shift to the second argument (default is 0)
 * @param N number
 * @param n shift number
 * @return converted alphabet (lowercase)
 */
export const NtoA = (N: string | number, n: number = 0): string => String.fromCharCode(96 + Number(N) + n)

/**
 * Shifts the alphabet by the specified amount.
 * @param A alphabet
 * @param n shift number
 * @return converted alphabet
 */
export const AtoA = (A: string, n: number): string => String.fromCharCode(A.charCodeAt(0) + n)
