import { Icon } from "@iconify/react";
import Link from "next/link";


export default function Homepage() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen gap-4 px-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
                <Icon icon="icon-park-outline:boiler" className="text-6xl" />

                <h1 className="text-5xl text-center text-white">
                    Next.js Boilerplate
                </h1>
            </div>

            <div className="text-2xl">
                by&nbsp;
                <Link href="https://github.com/yoratoni" className="text-blue-500 hover:text-blue-400 active:text-blue-600">
                    Yoratoni
                </Link>.
            </div>
        </div>
    );
}
