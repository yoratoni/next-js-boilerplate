import type { Status } from "@/pages/api/status"
import type { RequestResult } from "@/types/requests"

const baseUrl = "/api/status"

/**
 * Get the status of the application.
 * @param markerOnly Whether to only return the marker.
 * @returns The status of the application, or the marker if `markerOnly` is true.
 */
export async function getStatus(markerOnly: boolean): Promise<RequestResult<Status | string>> {
	const response = await fetch(`${baseUrl}?markerOnly=${markerOnly}`)

	const result = await response.json()
	return result
}
