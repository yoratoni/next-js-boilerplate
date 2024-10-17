import { AppErrors, formatErrorResponse } from "@/lib/utils/errors"
import type { NextApiRequest, NextApiResponse } from "next"

/**
 * The returned type of the status API `GET` request.
 */
export type Status = {
	status: "online"
	marker: string
	timestamp: string
	version: {
		raw: string
		formatted: string
	}
	message: string
}

// biome-ignore lint/suspicious/useAwait: Next.js API routes needs to be async.
async function handle(req: NextApiRequest, res: NextApiResponse) {
	// The marker is a static public key that can be used to identify the application,
	// it is a non-sensitive value that can be shared publicly, generated via:
	// openssl rand -base64 8
	const marker = "XXXXXXXXXXX="

	// If "markerOnly" query is present, only return the marker.
	if (req.query.markerOnly === "true") {
		return res.status(200).json(marker)
	}

	const status: Status = {
		status: "online",
		marker: marker,
		timestamp: new Date().toISOString(),
		version: {
			raw: process.env.VERSION || "Unknown",
			formatted: process.env.VERSION ? `v${process.env.VERSION}` : "Unknown",
		},
		message: "A website provided by Cybearl, all rights reserved.",
	}

	res.status(200).json({ success: true, data: status })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "GET":
			await handle(req, res)
			break
		default:
			res.status(405).json(formatErrorResponse(AppErrors.METHOD_NOT_ALLOWED))
	}
}
