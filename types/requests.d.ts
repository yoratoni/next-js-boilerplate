import type { ErrorObj } from "lib/utils/errors"

export type SuccessfulRequest<T> = {
	success: boolean
	data: T
}

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
