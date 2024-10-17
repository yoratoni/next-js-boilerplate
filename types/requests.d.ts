import type { ErrorObj } from "lib/utils/errors"

/**
 * The type for a successful request, containing the data of type T.
 *
 * The reason for the duplicate `success` field is to allow for the `SuccessfulRequest` type to be used
 * directly.
 */
export type SuccessfulRequest<T> = {
	success: true
	data: T
}

/**
 * The type for a failed request, containing the error message and the error object.
 *
 * The reason for the duplicate `success` field is to allow for the `FailedRequest` type to be used
 * directly.
 */
export type FailedRequest = {
	success: false
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
