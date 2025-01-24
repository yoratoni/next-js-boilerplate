import Layout from "@/components/structure/Layout"
import Link from "next/link"

export default function Homepage() {
	return (
		<Layout>
			<div className="flex flex-col items-center justify-center flex-grow">
				<h1 className="text-5xl font-thin">Next.js Boilerplate</h1>
				<h4 className="text-xl font-normal">
					by&nbsp;
					<Link
						target="_blank"
						href="https://github.com/yoratoni"
						className="!font-medium text-blue-500 hover:text-blue-400 active:text-blue-600"
					>
						Yoratoni
					</Link>
					.
				</h4>
			</div>
		</Layout>
	)
}
