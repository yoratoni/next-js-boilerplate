import Link from "next/link";


export default function Homepage() {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen">
            <h1 className="text-5xl font-bold">Next.js Boilerplate</h1>
            <h4 className="text-xl font-semibold">
                by&nbsp;
                <Link
                    target="_blank"
                    href="https://github.com/yoratoni"
                    className="font-semibold text-blue-500 hover:text-blue-400 active:text-blue-600"
                >
                    Yoratoni
                </Link>.
            </h4>
        </div>
    );
}
