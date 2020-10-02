/**
 * Convert from alphabet to number.
 * Specify the number to shift to the second argument (default is 0)
 * @param A alphabet
 * @param n shift number
 * @return converted number
 */
export declare const AtoN: (A: string, n?: number) => number

/**
 * Convert from numbers to alphabets.
 * Specify the number to shift to the second argument (default is 0)
 * @param N number
 * @param n shift number
 * @return converted alphabet (lowercase)
 */
export declare const NtoA: (N: string | number, n?: number) => string

/**
 * Shifts the alphabet by the specified amount.
 * @param A alphabet
 * @param n shift number
 * @return converted alphabet
 */
export declare const AtoA: (A: string, n: number) => string
