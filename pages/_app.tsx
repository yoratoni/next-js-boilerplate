import type { AppProps } from "next/app"

import "@/styles/globals.css"
import { RobotoMono } from "@/lib/client/fonts"
import { tw } from "@/lib/client/utils/cssTools"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={tw(RobotoMono.variable, "font-roboto-mono")}>
			<Component {...pageProps} />
		</div>
	)
}
