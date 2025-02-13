export const getServerSideProps = () => {
	if (process.env.NEXT_PUBLIC_APP_STATUS === "enabled") {
		return {
			redirect: { destination: "/", permanent: false },
		}
	}

	return {
		props: {},
	}
}

export default function Unavailable() {
	return (
		<div className="flex flex-col items-center justify-center w-full h-screen bg-black">
			<h1 className="text-6xl">Unavailable</h1>
			<p className="text-lg">Sorry, this website is currently unavailable.</p>
		</div>
	)
}
