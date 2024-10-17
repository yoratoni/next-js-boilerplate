import type { ErrorObj } from "lib/utils/errors"

/**
 * The type for a successful request, containing a boolean `success` field and a data object of type T.
 */
export type SuccessfulRequest<T> = {
	success: boolean
	data: T
}

/**
 * The type for a failed request, containing a boolean `success` field, a message, and an error object.
 */
export type FailedRequest = {
	success: boolean
	message: string
	error: ErrorObj
}

/**
 * Returns a failed request in case the `success` field is set to `false`,
 * otherwise returns a successful request with a data object of type T.
 *
 * **Example**:
 * ```ts
 * export async function inviteUser(): Promise<RequestResult<Access>>
 * ```
 * - Will return the "Access" type if result.success is true.
 * - Otherwise, will return the "FailedRequest" type.
 */
export type RequestResult<T> = ({ success: true } & SuccessfulRequest<T>) | ({ success: false } & FailedRequest)
