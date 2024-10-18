///========================================///
/// Cybearl General API System: v2024.10.1 ///
///========================================///

import type { Status } from "@/pages/api/status"
import type { RequestResult } from "@/types/requests"

const baseUrl = "/api/status"

// This function is overloaded to allow for two different return types.
export async function getStatus(markerOnly: true): Promise<RequestResult<string>>
export async function getStatus(markerOnly?: false): Promise<RequestResult<Status>>

/**
 * Get the status of the application.
 * @param markerOnly Whether to only return the marker (optional, defaults to false).
 * @returns The status of the application, or the marker if `markerOnly` is true.
 */
export async function getStatus(markerOnly = false): Promise<RequestResult<Status | string>> {
	const response = await fetch(`${baseUrl}?markerOnly=${markerOnly}`)

	const result = await response.json()
	return result
}
