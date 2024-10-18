///==============================================///
/// CGAS: Cybearl General API System: v2024.10.1 ///
/// All rights reserved.                         ///
///                                              ///
/// You can find the links of all the places     ///
/// where this file is used at:                  ///
/// https://github.com/cybearl/cloud-environment ///
///==============================================///

import type { Status } from "@/pages/api/cgas/status"
import type { RequestResult } from "@/types/requests"

const baseUrl = "/api/cgas"

/**
 * Get the status of the application.
 * @param markerOnly Whether to only return the marker (optional, defaults to false).
 * @returns The status of the application, or the marker if `markerOnly` is true.
 */
export async function getStatus(markerOnly: true): Promise<RequestResult<string>>
export async function getStatus(markerOnly?: false): Promise<RequestResult<Status>>
export async function getStatus(markerOnly = false): Promise<RequestResult<Status | string>> {
	const response = await fetch(`${baseUrl}/status?markerOnly=${markerOnly}`)

	const result = await response.json()
	return result
}
