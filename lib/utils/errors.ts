/**
 * The type definition for additional data that can be attached to an error object.
 */
export type ErrorObjAdditionalData = { [key: string]: unknown } | string | string[] | number | number[] | null

/**
 * The type definition for an error object.
 */
export type ErrorObj = {
	status: number
	name: string
	message: string
	data: unknown
}

/**
 * Formats an `ErrorObj` into a standard error sent back by an API endpoint.
 */
export function formatErrorResponse(error: ErrorObj, customMessage?: string, additionalData?: ErrorObjAdditionalData) {
	let err: ErrorObj
	if (additionalData) err = { ...error, data: additionalData }
	else err = error

	return {
		success: false,
		message: customMessage || error.message,
		error: err,
	}
}

/**
 * Formats an `ErrorObj` and stringifies it for it to be supported by the `Error` class.
 * @param error The `ErrorObj` object to format.
 * @param message Replaces the standard error message with a custom one (optional).
 * @param additionalData Additional data to include in the error (optional).
 * @returns The formatted error string.
 */
export function fe(error: ErrorObj, message?: string, additionalData?: ErrorObjAdditionalData): string {
	if (message) error.message = message

	let err: ErrorObj
	if (additionalData) err = { ...error, data: additionalData }
	else err = error

	// Allow special keys in the JSON stringification
	const allowSpecialKeys = (_: string, value: unknown) => {
		if (typeof value === "function") return value.toString()
		if (typeof value === "bigint") return value.toString()

		return value
	}

	return JSON.stringify(err, allowSpecialKeys, 4)
}

/**
 * Contains all the available errors for the application.
 */
export const AppErrors = {
	//=======
	//  400
	//=======
	BAD_REQUEST: {
		status: 400,
		name: "BadRequest",
		message: "Bad request.",
		data: null,
	},

	//=======
	//  401
	//=======
	UNAUTHORIZED: {
		status: 401,
		name: "Unauthorized",
		message: "Unauthorized.",
		data: null,
	},

	//=======
	//  402
	//=======
	PAYMENT_REQUIRED: {
		status: 402,
		name: "PaymentRequired",
		message: "Payment required.",
		data: null,
	},

	//=======
	//  403
	//=======
	FORBIDDEN: {
		status: 403,
		name: "Forbidden",
		message: "Forbidden.",
		data: null,
	},

	//=======
	//  404
	//=======
	NOT_FOUND: {
		status: 404,
		name: "NotFound",
		message: "Not found.",
		data: null,
	},

	//=======
	//  405
	//=======
	METHOD_NOT_ALLOWED: {
		status: 405,
		name: "MethodNotAllowed",
		message: "Method not allowed.",
		data: null,
	},

	//=======
	//  408
	//=======
	REQUEST_TIMEOUT: {
		status: 408,
		name: "RequestTimeout",
		message: "Request timed out.",
		data: null,
	},

	//=======
	//  409
	//=======
	CONFLICT: {
		status: 409,
		name: "Conflict",
		message: "Conflict.",
		data: null,
	},

	//=======
	//  500
	//=======
	INTERNAL_SERVER_ERROR: {
		status: 500,
		name: "InternalServerError",
		message: "Internal server error.",
		data: null,
	},

	//=======
	//  501
	//=======
	NOT_IMPLEMENTED: {
		status: 501,
		name: "NotImplemented",
		message: "Not implemented.",
		data: null,
	},

	//=======
	//  509
	//=======
	BANDWIDTH_LIMIT_EXCEEDED: {
		status: 509,
		name: "BandwidthLimitExceeded",
		message: "Bandwidth limit exceeded.",
		data: null,
	},
}
