/**
 * Map a number to a range of numbers.
 * @param value The number to map.
 * @param inMin The minimum value of the input range.
 * @param inMax The maximum value of the input range.
 * @param outMin The minimum value of the output range.
 * @param outMax The maximum value of the output range.
 * @returns The mapped number.
 */
export function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
	return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
