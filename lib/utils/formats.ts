/**
 * Truncate a string to a certain length.
 * @param str The string to truncate.
 * @param len The maximum length of the string.
 * @returns The truncated string.
 */
export const truncateString = (str: string, len: number) => {
	if (str.length <= len) return str
	return `${str.slice(0, len)}...`
}
