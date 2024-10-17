export default function Footer() {
	return (
		<footer className="flex items-center justify-center w-full p-4 border-t border-neutral-800 bg-neutral-950">
			<div className="flex items-center justify-center w-full h-full max-w-4xl">
				<p className="text-sm font-medium text-white text-shadow-none">
					© {new Date().getFullYear()} Cybearl. All rights reserved.
				</p>
			</div>
		</footer>
	)
}
