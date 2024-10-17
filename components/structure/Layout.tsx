import type { AppHeadProps } from "@/components/structure/AppHead"
import AppHead from "@/components/structure/AppHead"
import Footer from "@/components/structure/Footer"
import type { ReactNode } from "react"

type LayoutProps = {
	children: ReactNode
}

export default function Layout({
	customTitle,
	customDescription,
	doNotIndex,

	children,
}: AppHeadProps & LayoutProps) {
	return (
		<>
			<AppHead customTitle={customTitle} customDescription={customDescription} doNotIndex={doNotIndex} />

			<div className="flex flex-col w-full min-h-svh">
				<main className="flex flex-col items-center justify-start flex-grow w-full overflow-x-hidden">
					{children}
				</main>

				<Footer />
			</div>
		</>
	)
}
