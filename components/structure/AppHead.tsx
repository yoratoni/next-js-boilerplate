import { truncateString } from "@/lib/utils/formats"
import { currentUrlOrigin } from "@/lib/utils/urls"
import Head from "next/head"
import { useRouter } from "next/router"

export type AppHeadProps = {
	customTitle?: string
	customDescription?: string
	doNotIndex?: boolean
}

export default function AppHead({ customTitle, customDescription, doNotIndex }: AppHeadProps) {
	const defaultTitle = "Next.js Boilerplate"
	const defaultDescription = "An advanced and entirely pre-configured Next.js & BiomeJS boilerplate."

	const title = customTitle ? `${customTitle} | Next.js Boilerplate` : defaultTitle
	const description = customDescription ? truncateString(customDescription, 150) : defaultDescription

	const router = useRouter()
	const url = `${currentUrlOrigin}${router.asPath}`

	return (
		<Head>
			<title>{title}</title>

			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta charSet="utf-8" />

			{/* Metadata */}
			<meta name="application-name" content={defaultTitle} />
			<meta name="description" content={description} />
			<meta name="author" content="Cybearl" />

			{/* Social Media */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:site_name" content={defaultTitle} />
			<meta property="og:locale" content="en" />

			{/* Prevent indexing on search engines */}
			{doNotIndex && <meta name="robots" content="noindex,nofollow" />}
		</Head>
	)
}
